import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { documentInternationalization } from '@sanity/document-internationalization'
import { supportedLanguages } from './structure/langauages'
import { structure } from './structure'

const baseConfig = {
  projectId: 'hakfgcdn',
  dataset: 'development',
  plugins: [
    deskTool({
      structure
    }),
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
