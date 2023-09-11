import { client } from './sanityConfig';

export const getDocumentCount = async () => {
  const data = await client.fetch<number>(`count(*)`);
  return data;
};

console.log(`Number of documents: ${await getDocumentCount()}`);
