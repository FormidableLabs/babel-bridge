import {useContext} from 'react'
import {createContext} from 'react'
import {LayoutProps} from 'sanity'

import {SupportedLanguagesContextProvider} from './SupportedLanguages/hooks/useSupportedLanguages'
import {DEFAULT_CONFIG} from '../const'
import {TranslationPluginConfig} from '../index'

type PluginConfigContext = Required<TranslationPluginConfig>

const TranslationServiceContext = createContext<PluginConfigContext>(DEFAULT_CONFIG)

export function useTranslationServiceContext() {
  return useContext(TranslationServiceContext)
}

type TranslationServiceProviderProps = LayoutProps & {
  pluginConfig: Required<TranslationPluginConfig>
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
