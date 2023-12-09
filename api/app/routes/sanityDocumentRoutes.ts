import {
  afterHandle,
  checkRequiredParams,
  findLocaleObjects,
  getLocale,
} from '../util';
import { getTranslation } from '../lib/ai';
import { FastifyInstance } from 'fastify';
import { RouteReply, RouteHeaders } from './types';

type Querystring = {
  projectId: string;
  dataset: string;
  query?: string;
};

type Params = {
  type: string;
};

export function sanityDocumentRoutes(server: FastifyInstance) {
  server.get<{
    Headers: RouteHeaders;
    Querystring: Querystring;
    Params: Params;
    Reply: RouteReply;
  }>(
    '/api/document/:type',
    {
      preValidation: (request, reply, done) => {
        try {
          checkRequiredParams(request, reply, [
            { container: 'headers', name: 'sanity-access-token' },
            { container: 'headers', name: 'open-ai-api-key' },
            { container: 'params', name: 'type' },
            { container: 'query', name: 'dataset' },
            { container: 'query', name: 'projectId' },
          ]);
          done();
        } catch (error) {
          if (error instanceof Error) done(error);
          done(new Error('An unexpected error occurred.'));
        }
      },
    },
    async (request, reply) => {
      try {
        const { dataset, projectId, query } = request.query;
        const { type } = request.params;

        const effectiveQuery = query
          ? `${query} [0]`
          : `*[_type == "${type}"] [0]`;
        const encodedQuery = encodeURIComponent(effectiveQuery);
        const sanityUrl = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${encodedQuery}`;

        const sanityDocument = await fetch(sanityUrl).then((res) =>
          res.json().then((data) => data.result)
        );

        const locale = getLocale(request.headers['accept-language']);
        const localeObjects = findLocaleObjects(sanityDocument);
        const hasTranslationForLocale = localeObjects.every((localeObject) =>
          Object.keys(localeObject.data).includes(locale)
        );

        if (locale.startsWith('en') || hasTranslationForLocale) {
          return reply.code(200).send(localeObjects);
        }

        const contentToTranslate = localeObjects.reduce((acc, localeObject) => {
          acc[localeObject.key] = {
            [locale]: localeObject.data['en_US'],
          };
          return acc;
        }, {});

        const translatedContent = await getTranslation({
          payload: {
            data: contentToTranslate,
            locale,
          },
          aiConfig: {
            apiKey: request.headers['open-ai-api-key'],
          },
        });

        const translatedDocument = {
          ...sanityDocument,
        };

        Object.keys(translatedContent).forEach((key) => {
          if (translatedDocument.hasOwnProperty(key)) {
            translatedDocument[key][locale] = translatedContent[key][locale];
          }
        });

        afterHandle({
          sanityToken: request.headers['sanity-access-token'],
          query: request.query,
          payload: {
            document: translatedDocument,
            locale,
          },
        });
        reply.code(200).send(translatedDocument);
      } catch (error) {
        request.log.error(error);
        reply.code(500).send({
          statusCode: 500,
          error: 'Internal Server Error',
          message: 'An unexpected error occurred.',
        });
      }
    }
  );
}
