import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { sanityDocumentRoutes, translateRoutes } from './routes';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({
    logger: true,
  });

function build() {
  translateRoutes(server);
  sanityDocumentRoutes(server);

  return server;
}

export default build;
