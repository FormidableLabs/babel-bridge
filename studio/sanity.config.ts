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
      apiKey: process.env.SANITY_STUDIO_OPENAI_API_KEY as string,
      schemaTypes: ['post'],
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
