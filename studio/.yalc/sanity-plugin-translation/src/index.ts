import {definePlugin} from 'sanity'
import {DEFAULT_CONFIG} from './const'
import {SanityDocumentInputComponent, TranslationServiceProvider} from './components'
import {TranslationServiceAction} from './actions'
import {schemaTypes} from './schemas'

export type TranslationPluginConfig = {
  apiKey: string
  apiVersion?: string
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-translation'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */
export const sanityPluginTranslation = definePlugin<TranslationPluginConfig | void>(
  (
    config = {
      apiKey: '',
      apiVersion: new Date().toISOString().split('T')[0],
    },
  ) => {
    const pluginConfig = {...DEFAULT_CONFIG, ...config}
    return {
      name: 'sanity-plugin-translation',
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
  },
)
