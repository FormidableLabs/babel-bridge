import { createClient, type ClientConfig } from '@sanity/client';

export const SANITY_API_VERSION = '2023-10-09';

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_SECRET_TOKEN,
  useCdn: false,
  apiVersion: SANITY_API_VERSION,
};

export const client = createClient(config);
