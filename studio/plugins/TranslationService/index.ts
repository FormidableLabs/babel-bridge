import {definePlugin} from 'sanity'
import {translationServiceTool} from './tool/translationServiceTool'
import {PluginConfig} from './types'
import {DEFAULT_CONFIG} from './constants'
import {TranslationServiceProvider} from './components'

export const translationService = definePlugin<PluginConfig>((config) => {
  const pluginConfig = {...DEFAULT_CONFIG, ...config}
  return {
    name: 'translationService',
    tools: (prev) => [...prev, translationServiceTool],
    studio: {
      components: {
        layout: (props) => TranslationServiceProvider({...props, pluginConfig}),
      },
    },
  }
})
