import {defineType} from 'sanity'
import {LocaleField} from '../components/LocaleField'
import {ALL_LANGUAGES} from '../constants'

export const baseLanguage = ALL_LANGUAGES.find((l) => l.isDefault)

export default defineType({
  title: 'Localized block content',
  name: 'localeBlockContent',
  type: 'object',
  components: {
    input: LocaleField,
  },
  fields: ALL_LANGUAGES.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [{title: 'content', type: 'block'}],
  })),
})
