import {Plugin as Plugin_2} from 'sanity'

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
