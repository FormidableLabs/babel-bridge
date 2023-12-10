type TranslateDocumentOpts = {
  document: Record<string, any>;
  translatedContent: Record<string, Record<string, string>>;
  locale: string;
};

export function translateDocument(opts: TranslateDocumentOpts) {
  const { document, translatedContent, locale } = opts;
  const localeFields = {};
  Object.keys(translatedContent).forEach((key) => {
    if (document[key]) {
      localeFields[key] = {
        ...document[key],
        [locale]: translatedContent[key][locale],
      };
    }
  });
  return {
    ...document,
    ...localeFields,
  };
}
