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

export const getLanguage = async (opts: GetLanguageOpts) => {
  const { payload, sanityConfig } = opts;
  const sanityClient = getClientFromPool({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
  });
  const query = `*[_type == "supportedLanguages" && id == $language][0]{...}`;
  const data = await sanityClient.fetch(query, {
    language: payload.locale,
  });
  if (!data) {
    return null;
  }
  return data;
};
