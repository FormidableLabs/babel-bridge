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

const baseConfig = {
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
  schema: {types: schemaTypes},
}

export default defineConfig([
  {
    ...baseConfig,
    name: 'development',
    dataset: 'development',
    basePath: '/dev',
  },
  {
    ...baseConfig,
    name: 'staging',
    dataset: 'staging',
    basePath: '/staging',
  },
])
