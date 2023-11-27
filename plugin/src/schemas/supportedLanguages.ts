import {defineField, defineType} from 'sanity'
import {TranslateIcon} from '@sanity/icons'
import {DefaultLanguage} from '../components'

export default defineType({
  name: 'supportedLanguages',
  title: 'Languages',
  type: 'document',
  icon: TranslateIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'Id',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'default',
      title: 'Default',
      type: 'boolean',
      readOnly: true,
      components: {
        field: DefaultLanguage,
      },
    }),
  ],
  preview: {
    select: {
      title: 'id',
      description: 'title',
    },
  },
})
