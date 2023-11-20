import {Tool} from 'sanity'

export type PluginConfig = {
  apiKey: string
}

export type TranslationServiceToolOptions = {
  apiKey: string
}

export type TranslationServiceToolConfig = Tool<TranslationServiceToolOptions>

export type PluginConfigContext = Required<PluginConfig> & {
  apiKey: string
}
