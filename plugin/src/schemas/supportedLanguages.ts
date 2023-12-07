import {defineField, defineType} from 'sanity'
import {TranslateIcon} from '@sanity/icons'

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
  ],
  preview: {
    select: {
      title: 'id',
      description: 'title',
    },
  },
})
