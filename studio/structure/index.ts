import { StructureResolver } from 'sanity/desk'

// TODO: can this be dynamic?
const defaultLanguage = {
  id: 'en-US', title: 'English (US)', default: true
};

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentList()
          .id(defaultLanguage.id)
          .title(`${defaultLanguage?.title} Posts`)
          .schemaType('post')
          .filter('_type == "post" && language == $language')
          .params({language: defaultLanguage?.id})
          .initialValueTemplates([
            S.initialValueTemplateItem('post-by-language', {language: defaultLanguage?.id})
          ])
        ),
        S.listItem()
        .title('Authors')
        .schemaType('author')
        .child(
          S.documentList()
            .id('all-authors')
            .title('All Authors')
            .schemaType('author')
            .filter('_type == "author"')
        ),
        S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(
          S.documentList()
            .id('all-categories')
            .title('All Categories')
            .schemaType('category')
            .filter('_type == "category"')
        ),
        S.listItem()
        .title('Languages')
        .schemaType('supportedLanguages')
        .child(
          S.documentList()
            .id('all-languages')
            .title('All Languages')
            .schemaType('supportedLanguages')
            .filter('_type == "supportedLanguages"')
        ),
    ]);
