import { getClientFromPool } from '../../util';

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

export const createLanguage = async (opts: CreateLanguageOpts) => {
  const { sanityConfig, payload } = opts;
  const sanityClient = getClientFromPool({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
  });
  return sanityClient
    .create({
      _type: 'supportedLanguages',
      title: payload.locale,
      id: payload.locale,
    })
    .then((res) => {
      console.log(`Language ${payload.locale} created`);
      return res;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
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
  });
  const trx = sanityClient.transaction();
  payload.keys.forEach((key) => {
    trx.patch(payload.document._id, (patch) =>
      patch.set({
        [key]: {
          ...payload.document[key],
          // [payload.locale]: payload.document[key][payload.locale],
        },
      })
    );
  });
  await trx.commit();
}
