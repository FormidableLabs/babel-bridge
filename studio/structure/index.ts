import {StructureResolver} from 'sanity/desk'

const defaultLanguage = {
  id: 'en-US',
  title: 'English (US)',
  default: true,
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentList()
            .apiVersion('v2023-08-01')
            .title('All Posts')
            .schemaType('post')
            .filter('_type == "post"')
            .initialValueTemplates([
              S.initialValueTemplateItem('post-by-language', {
                language: defaultLanguage?.id,
                localeTitle: {},
                localeBody: {},
              }),
            ]),
        ),
      S.listItem()
        .title('Authors')
        .schemaType('author')
        .child(
          S.documentList()
            .apiVersion('v2023-08-01')
            .id('all-authors')
            .title('All Authors')
            .schemaType('author')
            .filter('_type == "author"'),
        ),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(
          S.documentList()
            .apiVersion('v2023-08-01')
            .id('all-categories')
            .title('All Categories')
            .schemaType('category')
            .filter('_type == "category"'),
        ),
      // S.listItem()
      //   .title('Languages')
      //   .schemaType('supportedLanguages')
      //   .child(
      //     S.documentList()
      //       .apiVersion('v2023-08-01')
      //       .id('all-languages')
      //       .title('All Languages')
      //       .schemaType('supportedLanguages')
      //       .filter('_type == "supportedLanguages"'),
      //   ),
      // S.listItem()
      //   .title('Translation Plugin')
      //   .id('trnslation-plugin')
      //   .child(S.document().schemaType('translationPlugin').documentId('translationPlugin'))
      //   .icon(RocketIcon),
    ])
