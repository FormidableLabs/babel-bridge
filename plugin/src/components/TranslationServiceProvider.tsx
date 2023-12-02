import {useContext} from 'react'
import {createContext} from 'react'
import {LayoutProps} from 'sanity'

import {SupportedLanguagesContextProvider} from '../hooks'
import {DEFAULT_CONFIG} from '../const'
import {PluginConfigContext, TranslationPluginConfig} from '../types'

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
