import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import fetch from 'node-fetch';
import { checkRequiredParams, findLocaleObjects, getLocale } from './util';
import { getTranslation } from './lib/ai';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({
    logger: true,
  });

function build() {
  server.get<{
    Querystring: {
      projectId: string;
      dataset: string;
      query?: string;
    };
    Params: {
      type: string;
    };
    Reply: {
      200: any;
      400: {
        statusCode: number;
        error: string;
        message: string;
      };
      500: {
        statusCode: number;
        error: string;
        message: string;
      };
    };
  }>(
    '/api/documents/:type',
    {
      preValidation: (request, reply, done) => {
        try {
          checkRequiredParams(request, reply, [
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
          ? `${query} | order(_createdAt desc)[0]`
          : `*[_type == "${type}"] | order(_createdAt desc)[0]`;
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
          return reply.code(200).send(sanityDocument);
        }

        const contentToTranslate = localeObjects.reduce((acc, localeObject) => {
          acc[localeObject.key] = {
            [locale]: localeObject.data['en_US'],
          };
          return acc;
        }, {});

        const translatedContent = await getTranslation(
          contentToTranslate,
          locale
        );

        const translatedDocument = {
          ...sanityDocument,
        };

        Object.keys(translatedContent).forEach((key) => {
          if (translatedDocument.hasOwnProperty(key)) {
            translatedDocument[key][locale] = translatedContent[key][locale];
          }
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

  return server;
}

export default build;
