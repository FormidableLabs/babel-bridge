import {StructureResolver} from 'sanity/desk'

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
            .filter('_type == "post"'),
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
    ])
