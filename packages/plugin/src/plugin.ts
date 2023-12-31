import {definePlugin} from 'sanity'
import {DEFAULT_CONFIG} from './const'
import {DocumentFormWithLocaleSelector, TranslationServiceProvider} from './components'
import {CreateTranslationAction} from './actions'
import {schemaTypes} from './schemas'
import {TranslationPluginConfig} from './types'

export const sanityPluginTranslation = definePlugin<TranslationPluginConfig | void>(
  (
    config = {
      apiKey: '',
      sanityToken: '',
      sanityApiVersion: new Date().toISOString().split('T')[0],
      schemaTypes: [],
      defaultLanguage: '',
    },
  ) => {
    const pluginConfig = {...DEFAULT_CONFIG, ...config}

    if (!pluginConfig.apiKey) {
      throw new Error(
        'You must specify an OpenAI API key. Update the `apiKey` option in the sanityPluginTranslation() configuration.',
      )
    }

    if (!pluginConfig.sanityToken) {
      throw new Error(
        'You must specify a Sanity API token. Update the `sanityToken` option in the sanityPluginTranslation() configuration.',
      )
    }

    if (pluginConfig.schemaTypes.length === 0) {
      throw new Error(
        'You must specify at least one schema type on which to enable translations. Update the `schemaTypes` option in the sanityPluginTranslation() configuration.',
      )
    }

    return {
      name: 'babel-bridge',
      studio: {
        components: {
          layout: (props) => TranslationServiceProvider({...props, pluginConfig}),
        },
      },
      document: {
        actions: (prev, context) => {
          // @ts-ignore
          if (pluginConfig.schemaTypes.includes(context.schemaType)) {
            return [...prev, CreateTranslationAction]
          }
          return prev
        },
      },
      schema: {
        types: schemaTypes,
      },
      form: {
        components: {
          input: DocumentFormWithLocaleSelector,
        },
      },
    }
  },
)
