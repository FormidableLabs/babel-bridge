import { createLanguage } from './mutations';
import { getLanguage } from './queries';

type CheckLanguageSupportOpts = {
  sanityConfig: {
    projectId: string;
    dataset: string;
    token: string;
  };
  payload: {
    locale: string;
  };
};

export async function checkLanguageSupport(opts: CheckLanguageSupportOpts) {
  const { sanityConfig, payload } = opts;
  try {
    const language = await getLanguage({
      sanityConfig: {
        dataset: sanityConfig.dataset,
        projectId: sanityConfig.projectId,
      },
      payload: {
        locale: payload.locale,
      },
    });
    if (!language) {
      await createLanguage({
        payload: {
          locale: payload.locale,
        },
        sanityConfig: {
          projectId: sanityConfig.projectId,
          dataset: sanityConfig.dataset,
          token: sanityConfig.token,
        },
      });
    }
  } catch (error) {
    console.error('Error checking language support:', error);
  }
}
