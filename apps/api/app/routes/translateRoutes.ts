import { afterHandle, checkRequiredParams, handleTranslation } from '../util';
import { FastifyInstance } from 'fastify';
import { RouteHeaders, RouteReply } from './types';

type Querystring = {
  projectId: string;
  dataset: string;
};

type Body = {
  document: any;
  locale: string;
};

export function translateRoutes(server: FastifyInstance) {
  server.post<{
    Headers: RouteHeaders;
    Querystring: Querystring;
    Body: Body;
    Reply: RouteReply;
  }>(
    '/api/translate',
    {
      preValidation: (request, reply, done) => {
        try {
          checkRequiredParams(request, reply, [
            { container: 'headers', name: 'sanity-access-token' },
            { container: 'headers', name: 'open-ai-api-key' },
            { container: 'body', name: 'document' },
            { container: 'body', name: 'locale' },
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
        const { document, locale } = request.body;
        const translatedDocument = await handleTranslation({
          document,
          locale,
          aiConfig: { apiKey: request.headers['open-ai-api-key'] },
        });
        await afterHandle({
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
