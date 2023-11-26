import {definePlugin} from 'sanity'
import {PluginConfig} from './types'
import {DEFAULT_CONFIG} from './constants'
import {TranslationServiceProvider} from './components'
import {TranslationServiceAction} from './actions'
import {SanityDocumentInputComponent} from './components/SanityDocumentInputComponent'
import {schemaTypes} from './schemas'

export const translationService = definePlugin<PluginConfig>((config) => {
  const pluginConfig = {...DEFAULT_CONFIG, ...config}
  return {
    name: 'translationService',
    studio: {
      components: {
        layout: (props) => TranslationServiceProvider({...props, pluginConfig}),
      },
    },
    document: {
      actions: (prev, context) => {
        return context.schemaType === 'post' ? [...prev, TranslationServiceAction] : prev
      },
    },
    schema: {
      types: schemaTypes,
    },
    form: {
      components: {
        input: SanityDocumentInputComponent,
      },
    },
  }
})
