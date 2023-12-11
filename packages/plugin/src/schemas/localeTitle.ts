import {defineType} from 'sanity'
import {LocaleField} from '../components/LocaleField'
import {ALL_LANGUAGES} from '../const'

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
