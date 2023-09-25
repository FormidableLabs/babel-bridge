import { client } from './sanityConfig';

export const getDocumentCount = async () => {
  const data = await client.fetch<number>(`count(*)`);

  if (!data) throw new Error('No documents found');

  return data;
};

export const getPosts = async () => {
  const data = await client.fetch(`*[_type == "post"]`);

  if (!data) throw new Error('No posts found');

  return data;
};

export const getPost = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug },
  );

  if (!data) throw new Error(`Post not found for slug: ${slug}`);

  return data;
};
