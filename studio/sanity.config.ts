import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { documentInternationalization } from '@sanity/document-internationalization'
import { structure } from './structure'

const baseConfig = {
  projectId: 'hakfgcdn',
  plugins: [
    deskTool({
      structure
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: (client) => client.fetch(`*[_type == "supportedLanguages"]{id, title}`),
      schemaTypes: ['post'],
      languageField: 'language',
      weakReferences: true,
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
