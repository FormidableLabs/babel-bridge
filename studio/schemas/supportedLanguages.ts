import {defineField, defineType} from 'sanity'
import { DefaultLanguage } from '../components/DefaultLanguage'

export default defineType({
  name: 'supportedLanguages',
  title: 'Languages',
  type: 'document',
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
      description: 'title'
    },
  },
})
