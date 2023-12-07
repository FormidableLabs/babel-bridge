import {useListeningQuery} from 'sanity-plugin-utils'
import {Return, SupportedLanguage} from '../types'

export const supportedLanguagesQuery = `*[_type == "supportedLanguages"]{id, title}`

export const useSupportedLanguagesQuery = (): Return<SupportedLanguage[]> => {
  return useListeningQuery<SupportedLanguage[]>(supportedLanguagesQuery, {
    initialValue: [],
  })
}
