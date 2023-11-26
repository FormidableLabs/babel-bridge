import { client } from './sanity';

const excludeDrafts = '!(_id in path("drafts.**"))';

export const getDocumentCount = async () => {
  const total = await client.fetch<number>(`count(*[_type == "post"])`);
  const published = await client.fetch<number>(
    `count(*[_type == "post" && ${excludeDrafts}])`
  );

  if (!total) throw new Error('No documents found');

  return { published, drafts: total - published };
};

type GetPostsArgs = {
  locale: string;
};

export const getPosts = async (opts: GetPostsArgs) => {
  const { locale = 'en_US' } = opts;
  const data = await client.fetch(
    `*[_type == "post" && ${excludeDrafts}]{
    ...,
    "title": coalesce(localeTitle[$locale], localeTitle['en_US']),
    "body": coalesce(localeBody[$locale], localeBody['en_US'])
  }`,
    {
      locale,
    }
  );

  if (!data?.length) {
    console.warn('No Posts found');
    return [];
  }

  return data;
};

type GetPostArgs = {
  slug: string;
  locale: string;
};

export const getPost = async (opts: GetPostArgs) => {
  const { slug, locale = 'en-US' } = opts;
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug && ${excludeDrafts}][0]{
      ...,
      "author": author -> name,
      "title": coalesce(localeTitle[$locale], localeTitle['en_US']),
      "body": coalesce(localeBody[$locale], localeBody['en_US'])
    }`,
    { slug, locale }
  );

  if (!data) {
    console.warn('No Post found');
    return null;
  }

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

  if (!data) {
    return null;
  }

  return data;
};
