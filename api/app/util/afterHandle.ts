import { checkLanguageSupport, patchLocaleFields } from '../lib/sanity';
import { findLocaleObjects } from './findLocaleObjects';

type AfterHandleOpts = {
  sanityToken: string;
  query: {
    projectId: string;
    dataset: string;
    query?: string;
  };
  payload: any;
};

export async function afterHandle(opts: AfterHandleOpts) {
  const { query, payload, sanityToken } = opts;
  const { dataset, projectId } = query;
  const { document, locale } = payload;

  await checkLanguageSupport({
    sanityConfig: {
      projectId,
      dataset,
      token: sanityToken,
    },
    payload: {
      locale,
    },
  });

  const localeFieldKeys = findLocaleObjects(document).map((obj) => obj.key);

  await patchLocaleFields({
    payload: {
      document,
      locale,
      keys: localeFieldKeys,
    },
    sanityConfig: {
      projectId,
      dataset,
      token: sanityToken,
    },
  });
}
