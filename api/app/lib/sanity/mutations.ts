import { constructSanityMutationUrl, sanityFetch } from './utils';

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
  const mutationUrl = constructSanityMutationUrl(
    sanityConfig.projectId,
    sanityConfig.dataset
  );
  await sanityFetch(mutationUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sanityConfig.token}`,
    },
    body: JSON.stringify({
      mutations: [
        {
          create: {
            _type: 'supportedLanguages',
            title: payload.locale,
            id: payload.locale,
          },
        },
      ],
    }),
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
  const mutationUrl = constructSanityMutationUrl(
    sanityConfig.projectId,
    sanityConfig.dataset
  );
  await sanityFetch(mutationUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sanityConfig.token}`,
    },
    body: JSON.stringify({
      mutations: payload.keys.map((key) => ({
        patch: {
          id: payload.document._id,
          set: {
            [key]: {
              ...payload.document[key],
              [payload.locale]: payload.document[key][payload.locale],
            },
          },
        },
      })),
    }),
  });
}
