import {useListeningQuery} from 'sanity-plugin-utils'
import {Return} from './types'

export const supportedLanguagesQuery = `*[_type == "supportedLanguages"]{id, title}`

export type SupportedLanguage = {
  id: string
  title: string
}

export const useSupportedLanguagesQuery = (): Return<SupportedLanguage[]> => {
  return useListeningQuery<SupportedLanguage[]>(supportedLanguagesQuery, {
    initialValue: [],
  })
}
