import { findLocaleObjects } from './findLocaleObjects';

type FormatDocumentByLocaleOpts = {
  document: Record<string, any>;
  locale: string;
};

export const formatDocumentByLocale = (ops: FormatDocumentByLocaleOpts) => {
  const { document, locale } = ops;
  const localeKeys = findLocaleObjects(document).map(locale => locale.key);

  localeKeys.forEach(key => {
    if (document[key]) {
      document[key] = document[key][locale];
    }
  });

  return document;
};
