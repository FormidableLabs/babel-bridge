import {defineType} from 'sanity'
import {LocaleField} from '../components/LocaleField'
import {ALL_LANGUAGES} from '../const'

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
