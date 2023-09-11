import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_SECRET_TOKEN,
  useCdn: false,
  apiVersion: new Date().toISOString().slice(0, 10),
};

export const client = createClient(config);
