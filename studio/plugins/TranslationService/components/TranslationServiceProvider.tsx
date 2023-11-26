import {useContext} from 'react'
import {createContext} from 'react'
import {LayoutProps} from 'sanity'

import {DEFAULT_CONFIG} from '../constants'
import {PluginConfig, PluginConfigContext} from '../types'
import {SupportedLanguagesContextProvider} from './SupportedLanguages/hooks/useSupportedLanguages'

const TranslationServiceContext = createContext<PluginConfigContext>(DEFAULT_CONFIG)

export function useTranslationServiceContext() {
  return useContext(TranslationServiceContext)
}

type TranslationServiceProviderProps = LayoutProps & {
  pluginConfig: Required<PluginConfig>
}

export function TranslationServiceProvider(props: TranslationServiceProviderProps) {
  const {pluginConfig} = props
  return (
    <TranslationServiceContext.Provider value={{...pluginConfig}}>
      <SupportedLanguagesContextProvider>
        {props.renderDefault(props)}
      </SupportedLanguagesContextProvider>
    </TranslationServiceContext.Provider>
  )
}
