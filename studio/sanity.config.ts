import {defineConfig, SchemaPluginOptions} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './structure'
import {defaultTemplates} from './schemas/config/defaultTemplates'
import {sanityPluginTranslation} from 'sanity-plugin-translation'

const schema: SchemaPluginOptions = {
  types: schemaTypes,
  templates: (prev) => [...defaultTemplates, ...prev],
}

const baseConfig = {
  projectId: 'hakfgcdn',
  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
    sanityPluginTranslation({
      // Required Configuration
      apiKey: 'OPENAI_API_KEY',
      sanityToken: 'SANITY_STUDIO_TOKEN',
      schemaTypes: ['post'],
      // Optional Configuration
      // sanityApiVersion: '',
      defaultLanguage: 'en_US',
    }),
  ],
  schema,
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
