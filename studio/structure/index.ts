import {StructureResolver} from 'sanity/desk'
import {supportedLanguages} from './languages'

const defaultLanguage = supportedLanguages.find((l) => l.default === true);

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentList()
          .id(defaultLanguage ? defaultLanguage.id : 'all-posts')
          .title(`${defaultLanguage?.title} Posts`)
          .schemaType('post')
          .filter('_type == "post" && language == $language')
          .params({language: defaultLanguage?.id})
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
    ])