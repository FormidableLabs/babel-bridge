import {
  afterHandle,
  checkRequiredParams,
  findLocaleObjects,
  formatDocumentByLocale,
  getClientFromPool,
  getLocale,
  handleTranslation,
} from '../util';
import { FastifyInstance } from 'fastify';
import { RouteReply, RouteHeaders, RouteQueryString } from './types';

type Querystring = RouteQueryString & {
  matcher?: string;
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
        const { matcher } = request.query;
        const { type } = request.params;
        const sanityClient = getClientFromPool({
          token: request.headers['sanity-access-token'],
          dataset: request.query.dataset,
          projectId: request.query.projectId,
        });
        const [field, value] = matcher?.split('=') ?? [];
        const sanityDocument = await sanityClient.fetch(
          matcher ? `*[_type == "${type}" && ${field} == "${value}"] [0]` : `*[_type == "${type}"] [0]`,
        );
        const locale = getLocale(request.headers['accept-language']);
        const localeObjects = findLocaleObjects(sanityDocument);
        const hasTranslationForLocale = localeObjects.every(localeObject =>
          Object.keys(localeObject.data).includes(locale),
        );

        if (locale.startsWith('en') || hasTranslationForLocale) {
          return reply.code(200).send(
            formatDocumentByLocale({
              document: {
                ...sanityDocument,
              },
              locale: locale.startsWith('en') ? 'en_US' : locale,
            }),
          );
        }

        const translatedDocument = await handleTranslation({
          document: sanityDocument,
          locale,
          aiConfig: { apiKey: request.headers['open-ai-api-key'] },
        });

        afterHandle({
          sanityToken: request.headers['sanity-access-token'],
          query: request.query,
          payload: {
            document: translatedDocument,
            locale,
          },
        });

        reply.code(200).send(
          formatDocumentByLocale({
            document: {
              ...translatedDocument,
            },
            locale,
          }),
        );
      } catch (error) {
        request.log.error(error);
        reply.code(500).send({
          statusCode: 500,
          error: 'Internal Server Error',
          message: 'An unexpected error occurred.',
        });
      }
    },
  );
}
