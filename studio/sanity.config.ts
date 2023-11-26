import {defineConfig, SchemaPluginOptions} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './structure'
import {defaultTemplates} from './schemas/config/defaultTemplates'
import {translationService} from './plugins/TranslationService'

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
    translationService({
      apiKey: process.env.SANITY_STUDIO_OPENAI_API_KEY as string,
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
