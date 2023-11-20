import {defineConfig, SchemaPluginOptions, StudioComponentsPluginOptions} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './structure'
import {defaultTemplates} from './schemas/config/defaultTemplates'
import {ManualTranslateAction} from './actions'
import {StudioLayout} from './components/StudioLayout'
import {translationService} from './plugins/TranslationService'

const schema: SchemaPluginOptions = {
  types: schemaTypes,
  templates: (prev) => [...defaultTemplates, ...prev],
}

const studioComponents: StudioComponentsPluginOptions = {
  layout: StudioLayout,
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
  document: {
    actions: (prev, context) => {
      return context.schemaType === 'post' ? [...prev, ManualTranslateAction] : prev
    },
  },
  studio: {
    components: studioComponents,
  },
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
