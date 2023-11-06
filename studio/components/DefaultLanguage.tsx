import {FieldProps, useClient, useFormValue} from 'sanity'
import {Stack, Card, Text} from '@sanity/ui'
import {useEffect, useState} from 'react'
import {SANITY_API_VERSION} from '../../config'

export const DefaultLanguage = (props: FieldProps) => {
  const client = useClient({apiVersion: SANITY_API_VERSION})
  const docId = useFormValue(['_id']) as string
  const isDefaultLanguage = useFormValue(['default']) as boolean
  const [doc, setDoc] = useState<any>()

  useEffect(() => {
    let isMounted = true

    const fetchDocument = async () => {
      const id = docId.replace(/^drafts\./, '')
      const params = {
        type: 'supportedLanguages',
        draft: `drafts.${id}`,
        default: true,
      }

      const query = `*[!(_id in [$draft]) && _type == $type && default == $default][0]`
      return client.fetch(query, params)
    }

    fetchDocument()
      .then((document) => isMounted && setDoc(document))
      .catch((error) => console.error('Error fetching document:', error))

    return () => {
      isMounted = false
    }
  }, [client, docId])

  return (
    <Stack space={2}>
      <div>{props.renderDefault(props)}</div>
      <Card tone="caution" padding={2} radius={2}>
        <Text size={1} muted>
          {isDefaultLanguage
            ? 'This is the default language'
            : `The default language is set as ${doc?.id}`}
        </Text>
      </Card>
    </Stack>
  )
}
