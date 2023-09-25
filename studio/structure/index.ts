import {StructureResolver} from 'sanity/desk'
import {supportedLanguages} from './langauages'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .child(
          S.list()
            .title('Posts')
            .items([
              ...supportedLanguages.map((language) =>
                S.listItem()
                  .title(`Posts (${language.id.toLocaleUpperCase()})`)
                  .schemaType('post')
                  .child(
                    S.documentList()
                      .id(language.id)
                      .title(`${language.title} Posts`)
                      .schemaType('post')
                      .filter('_type == "post" && language == $language')
                      .params({language: language.id})
                      .initialValueTemplates([
                        S.initialValueTemplateItem('post-language', {
                          id: 'post-language',
                          language: language.id,
                        }),
                      ])
                      .canHandleIntent((intentName, params) => {
                        if (intentName === 'edit') {
                          // return params?.language === language.id
                          return false
                        }

                        // Not an initial value template
                        if (!params.template) {
                          return true
                        }

                        // Template name structure example: "lesson-en"
                        const languageValue = params?.template?.split(`-`).pop()

                        return languageValue === language.id
                      })
                  )
              ),
              S.divider(),
              S.listItem()
                .title(`All Posts`)
                .schemaType('post')
                .child(
                  S.documentList()
                    .id(`all-posts`)
                    .title(`All Posts`)
                    .schemaType('post')
                    .filter('_type == "post"')
                    // Load this pane for existing `post` documents
                    // or new documents that aren't using an initial value template
                    .canHandleIntent(
                      (intentName, params) => intentName === 'edit' || params.template === `lesson`
                    )
                ),
            ])
        ),
        S.listItem()
        .title(`Authors`)
        .schemaType('author')
        .child(
          S.documentList()
            .id(`all-authors`)
            .title(`All Authors`)
            .schemaType('author')
            .filter('_type == "author"')
        ),
        S.listItem()
        .title(`Categories`)
        .schemaType('category')
        .child(
          S.documentList()
            .id(`all-categories`)
            .title(`All Categories`)
            .schemaType('category')
            .filter('_type == "category"')
        ),
    ])