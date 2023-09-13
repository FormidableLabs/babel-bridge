import { client } from './sanityConfig';

export const getDocumentCount = async () => {
  const data = await client.fetch<number>(`count(*)`);
  return data;
};

export const getPosts = async () => {
  const data = await client.fetch(`*[_type == "post"]`);
  return data;
};

export const getPost = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
  return data;
};
