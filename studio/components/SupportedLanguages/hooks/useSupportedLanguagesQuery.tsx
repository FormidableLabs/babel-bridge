import {SanityDocument} from 'sanity'
import {useListeningQuery} from 'sanity-plugin-utils'

export const supportedLanguagesQuery = `*[_type == "supportedLanguages"]{id, title}`

export type SupportedLanguage = {
  id: string
  title: string
}

export const useSupportedLanguagesQuery = () => {
  return useListeningQuery<SupportedLanguage[]>(supportedLanguagesQuery, {
    initialValue: [],
  })
}
