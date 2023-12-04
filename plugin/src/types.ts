export type TranslationPluginConfig = {
  apiKey: string
  sanityToken: string
  schemaTypes: string[]
  sanityApiVersion?: string
  defaultLanguage?: string
}
export type Locale = {
  name: string
  native: string
  default?: boolean
}
export type Value = any
export interface Return<V = Value> {
  loading: boolean
  error: boolean | unknown | ProgressEvent
  data: null | V
  initialValue?: Value
}
export type SupportedLanguage = {
  id: string
  title: string
}
export type Maybe<T> = T | null
export type PluginConfigContext = Required<TranslationPluginConfig> & {
  supportedLanguages: Maybe<SupportedLanguage[]>
}
