import {Plugin as Plugin_2} from 'sanity'

export declare const ALL_LANGUAGES: {
  id: string
  title: string
  isDefault: boolean
}[]

export declare const baseLanguage:
  | {
      id: string
      title: string
      isDefault: boolean
    }
  | undefined

declare type Locale = {
  name: string
  native: string
  default?: boolean
}

export declare const LOCALES: Record<string, Locale>

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
export declare const sanityPluginTranslation: Plugin_2<void | TranslationPluginConfig>

export declare type TranslationPluginConfig = {
  apiKey: string
  apiVersion?: string
}

export {}
