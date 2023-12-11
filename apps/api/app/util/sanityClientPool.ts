import { FastifyRequest } from 'fastify';
import { createClient, SanityClient } from '@sanity/client';
import { RouteHeaders, RouteQueryString } from '../routes/types';

type ClientPool = { [key: string]: SanityClient };

const clientPool: ClientPool = {};

type GetClientFromPoolOpts = {
  projectId: string;
  dataset: string;
  token?: string;
};

export function getClientFromPool(opts: GetClientFromPoolOpts): SanityClient {
  const { projectId, dataset, token } = opts;
  const poolKey: string = `${projectId}_${dataset}`;

  if (!clientPool[poolKey]) {
    clientPool[poolKey] = createClient({
      projectId,
      dataset,
      useCdn: false,
      apiVersion: new Date().toISOString().split('T')[0],
      token: token,
    });
  }

  return clientPool[poolKey];
}
