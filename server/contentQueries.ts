import { client } from './sanityConfig';

const excludeDrafts = '!(_id in path("drafts.**"))';

export const getDocumentCount = async () => {
  const total = await client.fetch<number>(`count(*[_type == "post"])`);
  const published = await client.fetch<number>(
    `count(*[_type == "post" && ${excludeDrafts}])`
  );

  if (!total) throw new Error('No documents found');

  return { published, drafts: total - published };
};

export const getPosts = async () => {
  const data = await client.fetch(`*[_type == "post" && ${excludeDrafts}]`);

  if (!data?.length) throw new Error('No posts found');

  return data;
};

export const getPost = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug && ${excludeDrafts}][0]{
      ...,
      "author": author -> name
    }`,
    { slug }
  );

  if (!data) throw new Error(`Post not found for slug: ${slug}`);

  return data;
};

export const getPostTranslationMetadata = async (postId: string) => {
  const data = await client.fetch(
    `*[_type == "translation.metadata" && references($postId)][0] {
      ...,
    }`,
    {
      postId,
    }
  );

  return data;
};

export const getLocalePost = async (slug: string, locale: string) => {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug && language == $locale && ${excludeDrafts}][0]{
      ...,
      "author": author -> name
    }`,
    { slug, locale }
  );

  return data;
};

export const getLanguage = async (language: string) => {
  const data = await client.fetch(
    `*[_type == "supportedLanguages" && id == $language][0] {
      ...,
    }`,
    {
      language,
    }
  );

  return data;
};
