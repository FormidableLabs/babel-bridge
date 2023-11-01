
import {defineType, defineField} from 'sanity'
import { LOCALES } from '../data/config'
import { LocaleField } from '../components/LocaleField';

const AllLanguages = Object.keys(LOCALES).map((locale) => {
  return {
    id: locale.replace(/-/g, '_'),
    title: LOCALES[locale].name,
    isDefault: !!LOCALES[locale].default
  }
});

export const baseLanguage = AllLanguages.find(l => l.isDefault)

export default defineType({
  title: 'Localized block content',
  name: 'localeBlockContent',
  type: 'object',
  components: {
    input: LocaleField
  },
  fields: AllLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    // type: 'blockContent'
    type: 'array',
    of: [{ title: 'content', type: 'block' }]
  }))
})