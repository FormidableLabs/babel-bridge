import {defineType} from 'sanity'
import {LocaleField} from '../components/LocaleField'
import {ALL_LANGUAGES} from '../constants'

export const baseLanguage = ALL_LANGUAGES.find((l) => l.isDefault)

export default defineType({
  title: 'Localized string',
  name: 'localeTitle',
  type: 'object',
  components: {
    input: LocaleField,
  },
  fields: ALL_LANGUAGES.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
  })),
})
