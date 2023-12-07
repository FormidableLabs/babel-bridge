import {useContext, createContext} from 'react'
import {LayoutProps} from 'sanity'

import {SupportedLanguagesContextProvider, supportedLanguagesQuery} from '../hooks'
import {DEFAULT_CONFIG} from '../const'
import {PluginConfigContext, SupportedLanguage, TranslationPluginConfig} from '../types'
import {useListeningQuery} from 'sanity-plugin-utils'

const TranslationServiceContext = createContext<PluginConfigContext>(DEFAULT_CONFIG)

export function useTranslationServiceContext() {
  return useContext(TranslationServiceContext)
}

type TranslationServiceProviderProps = LayoutProps & {
  pluginConfig: Required<TranslationPluginConfig>
}

export function TranslationServiceProvider(props: TranslationServiceProviderProps) {
  const {pluginConfig} = props
  const {data} = useListeningQuery<SupportedLanguage[]>(supportedLanguagesQuery, {
    initialValue: [],
  })
  return (
    <TranslationServiceContext.Provider value={{...pluginConfig, supportedLanguages: data}}>
      <SupportedLanguagesContextProvider defaultLocale={pluginConfig.defaultLanguage}>
        {props.renderDefault(props)}
      </SupportedLanguagesContextProvider>
    </TranslationServiceContext.Provider>
  )
}
