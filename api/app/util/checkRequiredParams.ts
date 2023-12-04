import { FastifyRequest, FastifyReply } from 'fastify';

type RequestPart = 'query' | 'params' | 'headers' | 'body';

interface ParamCheck<T extends RequestPart> {
  container: T;
  name: string;
}

export function checkRequiredParams<T extends FastifyRequest>(
  request: T,
  reply: FastifyReply,
  params: ParamCheck<RequestPart>[]
): void {
  for (const param of params) {
    const requestPart = request[param.container];
    if (
      typeof requestPart === 'object' &&
      requestPart !== null &&
      !(param.name in requestPart)
    ) {
      const message = `'${param.name}' is required but missing in the request.`;
      reply.code(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message,
      });
      throw new Error(message);
    }
  }
}
