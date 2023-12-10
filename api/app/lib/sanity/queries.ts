import { getClientFromPool } from '../../util';

type GetLanguageOpts = {
  sanityConfig: {
    projectId: string;
    dataset: string;
  };
  payload: {
    locale: string;
  };
};

export type Language = {
  id: string;
  title: string;
};

export const getLanguage = async (
  opts: GetLanguageOpts
): Promise<Language | null> => {
  const { payload, sanityConfig } = opts;

  const sanityClient = getClientFromPool({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
  });

  try {
    const query = `*[_type == "supportedLanguages" && id == $language][0]{...}`;
    const response = await sanityClient.fetch(query, {
      language: payload.locale,
    });
    return response;
  } catch (error) {
    console.error('Error fetching languages:', error);
    return null;
  }
};
