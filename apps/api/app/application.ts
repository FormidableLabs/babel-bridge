import fastify, { FastifyInstance } from 'fastify';
import rateLimit from '@fastify/rate-limit';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { sanityDocumentRoutes, translateRoutes } from './routes';
import { parseBooleanEnvVar } from './util/parseBooleanEnvVar';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: parseBooleanEnvVar(process.env.FASTIFY_LOGGER ?? '') || false,
});

function build() {
  translateRoutes(server);
  sanityDocumentRoutes(server);

  server.register(rateLimit, {
    max: 100, // 100 requests per hour
    timeWindow: '1 hour',
  });

  return server;
}

export default build;
