import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import fetch from 'node-fetch';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({
    logger: true,
  });

function build() {
  server.get('/api/ping', () => {
    return 'pong\n';
  });

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
        const { dataset, projectId } = request.query;
        const { type } = request.params;
        if (!type) {
          reply.code(400).send({
            statusCode: 400,
            error: 'Bad Request',
            message: "'type' is required but missing in the request.",
          });
          return done(
            new Error("'type' is required but missing in the request.")
          );
        }
        if (!dataset) {
          reply.code(400).send({
            statusCode: 400,
            error: 'Bad Request',
            message: "'dataset' is required but missing in the request.",
          });
          return done(
            new Error("'dataset' is required but missing in the request.")
          );
        }
        if (!projectId) {
          reply.code(400).send({
            statusCode: 400,
            error: 'Bad Request',
            message: "'projectId' is required but missing in the request.",
          });
          return done(
            new Error("'projectId' is required but missing in the request.")
          );
        }
        done();
      },
    },
    async (request, reply) => {
      try {
        const { dataset, projectId, query } = request.query;
        const { type } = request.params;

        // Construct the Sanity URL
        const effectiveQuery = query ? query : `*[_type == "${type}"]`;
        const encodedQuery = encodeURIComponent(effectiveQuery);
        const sanityUrl = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${encodedQuery}`;

        const res = await fetch(sanityUrl).then((res) =>
          res.json().then((data) => data.result)
        );

        reply.code(200).send(res);
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
