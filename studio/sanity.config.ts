import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './structure'
import {sanityPluginTranslation} from 'babel-bridge'

const baseConfig = {
  projectId: 'hakfgcdn',
  schema: {
    types: schemaTypes,
  },
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
