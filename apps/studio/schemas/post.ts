import {ConditionalPropertyCallbackContext, defineField, defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'
import {uniqueSlugByLanguage} from '../utils/uniqueSlugByLanguage'

// Inject this into localeTitle and localeBody via plugin
const isReadOnly = ({parent}: ConditionalPropertyCallbackContext) => {
  const {translationProcessing} = parent || {}
  return translationProcessing
}

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: ComposeIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    defineField({
      name: 'localeTitle',
      title: 'Locale Title',
      type: 'localeTitle',
      group: 'content',
      readOnly: isReadOnly,
    }),
    defineField({
      name: 'localeBody',
      title: 'Locale Body',
      type: 'localeBlockContent',
      group: 'content',
      readOnly: isReadOnly,
    }),
    defineField({
      name: 'localeTest',
      title: 'Locale Test',
      type: 'localeTitle',
      group: 'content',
      readOnly: isReadOnly,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: uniqueSlugByLanguage,
      },
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    // Inject this field into the schema via plugin
    defineField({
      name: 'translationProcessing',
      title: 'Translation Processing',
      type: 'boolean',
      group: 'meta',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'content',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      group: 'meta',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'meta',
    }),
    defineField({
      name: 'language',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: true,
      group: 'meta',
    }),
  ],

  preview: {
    select: {
      title: `localeTitle.en_US`,
      subtitle: 'slug.current',
    },
  },
})
