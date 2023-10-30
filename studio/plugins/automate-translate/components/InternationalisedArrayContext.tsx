import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ObjectInputProps, useClient } from 'sanity'

import { SANITY_API_VERSION } from '../../../../config'

// TODO types
// type InternationalisedArrayContextProps = Required<PluginConfig> & {
//   languages: Language[]
//   filteredLanguages: Language[]
// }

export const InternationalisedArrayContext =
  createContext<any>({
    // ...CONFIG_DEFAULT,
    languages: [],
    filteredLanguages: [],
  })

export function useInternationalisedArrayContext() {
  return useContext(InternationalisedArrayContext)
}

type InternationalisedArrayProviderProps = ObjectInputProps & {
  internationalisedArray: Required<any>
}

export function InternationalisedArrayProvider(
  props: InternationalisedArrayProviderProps
) {
  const { internationalisedArray } = props
  const client = useClient({apiVersion: SANITY_API_VERSION});
  const [supportedLanguages, setSupportedLanguages] = useState([]);

  useEffect(() => {
    const getSupportedLanguages = async () => {
      const data = await client.fetch(internationalisedArray.languageQuery);
      if(!data.length) {
        console.log('error getting supported languages');
      }
      return setSupportedLanguages(data);
    }

    if(!supportedLanguages.length) {
      getSupportedLanguages();
    }
  }, [])

  return (
    <InternationalisedArrayContext.Provider
      value={{
        ...internationalisedArray,
        supportedLanguages,
      }}
    >
      {props.renderDefault(props)}
    </InternationalisedArrayContext.Provider>
  )
}
