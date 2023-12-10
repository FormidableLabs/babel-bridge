import { getClientFromPool } from '../../util';
import { createLanguage } from './mutations';
import { getLanguage } from './queries';

export const constructSanityUrlBase = (projectId: string) =>
  `https://${projectId}.api.sanity.io/v2021-10-21/data`;

export const constructSanityMutationUrl = (
  projectId: string,
  dataset: string
) => `${constructSanityUrlBase(projectId)}/mutate/${dataset}`;

export const constructSanityQueryUrl = (
  projectId: string,
  dataset: string,
  query: string
) =>
  `${constructSanityUrlBase(
    projectId
  )}/query/${dataset}?query=${encodeURIComponent(query)}`;

export async function sanityFetch(
  url: string,
  options: RequestInit | undefined
) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) throw error;
    throw new Error(
      'An unexpected error occurred while fetching data from Sanity.'
    );
  }
}

export async function checkLanguageSupport({
  projectId,
  dataset,
  locale,
  sanityToken,
}) {
  const language = await getLanguage({
    sanityConfig: {
      dataset,
      projectId,
    },
    payload: {
      locale,
    },
  });
  if (!language) {
    await createLanguage({
      payload: {
        locale,
      },
      sanityConfig: {
        projectId,
        dataset,
        token: sanityToken,
      },
    });
  }
}
