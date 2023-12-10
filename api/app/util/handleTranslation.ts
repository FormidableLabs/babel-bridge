import { getTranslation } from '../lib/ai';
import { findLocaleObjects } from './findLocaleObjects';
import { translateDocument } from './translateDocument';

type HandleTranslationOpts = {
  document: Record<string, any>;
  locale: string;
  aiConfig: {
    apiKey: string;
  };
};

export async function handleTranslation(opts: HandleTranslationOpts) {
  const { document, locale, aiConfig } = opts;
  const localeObjects = findLocaleObjects(document);

  const hasTranslationForLocale = localeObjects.every((localeObject) =>
    Object.keys(localeObject.data).includes(locale)
  );

  if (locale.startsWith('en') || hasTranslationForLocale) {
    return document;
  }

  const contentToTranslate = localeObjects.reduce((acc, localeObject) => {
    acc[localeObject.key] = { [locale]: localeObject.data['en_US'] };
    return acc;
  }, {});

  const translatedContent = await getTranslation({
    payload: { data: contentToTranslate, locale },
    aiConfig,
  });

  return translateDocument({
    document,
    translatedContent,
    locale,
  });
}
