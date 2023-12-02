import {ReactNode, createContext, useCallback, useContext, useState} from 'react'
import {useSupportedLanguagesQuery} from './useSupportedLanguagesQuery'
import {SupportedLanguage} from '../types'

export type UseSupportedLanguages = {
  error: boolean
  loading: boolean
  supportedLanguages: SupportedLanguage[]
  selectedLocale: string
  handleLocaleChange: (locale: string) => void
  handleLocaleReset: () => void
}

const SupportedLanguagesContext = createContext<UseSupportedLanguages | null>(null)

export const useSupportedLanguages = (): UseSupportedLanguages => {
  const {data, error, loading} = useSupportedLanguagesQuery()
  const [selectedLocale, setSelectedLocale] = useState('')

  const onLocaleChange = useCallback((locale: string) => {
    setSelectedLocale(locale)
  }, [])

  const onLocaleReset = useCallback(() => {
    setSelectedLocale('')
  }, [])

  return {
    error: error as unknown as boolean,
    loading,
    selectedLocale,
    supportedLanguages: data || [],
    handleLocaleChange: onLocaleChange,
    handleLocaleReset: onLocaleReset,
  }
}

type SupportedLanguagesContextProviderProps = {
  children: ReactNode
}

export const SupportedLanguagesContextProvider = (
  props: SupportedLanguagesContextProviderProps,
) => {
  const {children} = props
  const value = useSupportedLanguages()

  return (
    <SupportedLanguagesContext.Provider value={value}>
      {children}
    </SupportedLanguagesContext.Provider>
  )
}

export const useSupportedLanguagesContext = (): UseSupportedLanguages => {
  const context = useContext(SupportedLanguagesContext)
  if (context === null) {
    throw new Error(
      'useSupportedLanguagesContext must be used within a SupportedLanguagesContextProvider',
    )
  }
  return context
}
