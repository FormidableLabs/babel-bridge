import { getClientFromPool } from '../../util';
import { Language } from './queries';

type CreateLanguageOpts = {
  payload: {
    locale: string;
  };
  sanityConfig: {
    projectId: string;
    dataset: string;
    token: string;
  };
};

export const createLanguage = async (
  opts: CreateLanguageOpts
): Promise<Language | null> => {
  const { sanityConfig, payload } = opts;
  const sanityClient = getClientFromPool({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
  }).withConfig({ token: sanityConfig.token });

  try {
    return sanityClient.create({
      _type: 'supportedLanguages',
      title: payload.locale,
      id: payload.locale,
    });
  } catch (error) {
    console.error('Error creating language:', error);
    return null;
  }
};

type PatchLocaleFieldsOpts = {
  payload: {
    document: any;
    locale: string;
    keys: string[];
  };
  sanityConfig: {
    projectId: string;
    dataset: string;
    token: string;
  };
};

export async function patchLocaleFields(opts: PatchLocaleFieldsOpts) {
  const { sanityConfig, payload } = opts;
  const sanityClient = getClientFromPool({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    token: sanityConfig.token,
  }).withConfig({ token: sanityConfig.token });

  try {
    const patch = {};
    payload.keys.forEach((key) => {
      patch[key] = {
        ...payload.document[key],
        [payload.locale]: payload.document[key][payload.locale],
      };
    });
    const documentId = payload.document._id.replace('drafts.', '');
    return sanityClient.patch(documentId).set(patch).commit();
  } catch (error) {
    console.error('Error patching locale fields:', error);
    return null;
  }
}
