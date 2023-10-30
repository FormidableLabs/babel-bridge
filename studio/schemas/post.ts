import {defineField, defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'
import { uniqueSlugByLanguage } from '../utils/uniqueSlugByLanguage'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: ComposeIcon,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "meta",
      title: "Meta",
    },
  ],
  fields: [
    defineField({
      name: 'localeTitle',
      title: 'Locale Title',
      type: 'internationalised__localeString',
      group: 'content',
    }),
    defineField({
      name: 'localeBody',
      title: 'Locale Body',
      type: 'internationalised__localeBlockContent',
      group: 'content',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      hidden: true,
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
      validation: Rule => Rule.required(),
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'content',
      hidden: true,
    }),
    defineField({
      name: 'language',
      type: 'string',
      validation: Rule => Rule.required(),
      readOnly: true,
      group: 'meta',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
