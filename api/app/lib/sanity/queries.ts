import { constructSanityQueryUrl, sanityFetch } from './utils';

type GetLanguageOpts = {
  projectId: string;
  dataset: string;
};

export const getLanguage = async (opts: GetLanguageOpts) => {
  const { projectId, dataset } = opts;
  const query = `*[_type == "supportedLanguages" && id == $language][0]`;
  const url = constructSanityQueryUrl(projectId, dataset, query);
  return sanityFetch(url, {}).then((data) => data.result);
};
