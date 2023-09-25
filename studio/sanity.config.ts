import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { documentInternationalization } from '@sanity/document-internationalization'

// NOTE: these need to be defined 🤔
const supportedLanguages = [
  {id: 'en_US', title: 'English (US)'},
  {id: 'mi_NZ', title: 'Māori'}
]

export default defineConfig({
  name: 'default',
  title: 'translations-experiment',

  projectId: 'hakfgcdn',
  dataset: 'development',

  plugins: [
    deskTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages,
      schemaTypes: ['post'],
      languageField: 'language',
      weakReferences: true
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
