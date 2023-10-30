import { Stack, TextInput, TextArea, Label } from '@sanity/ui'
import { useInternationalisedArrayContext } from './InternationalisedArrayContext'
import { useMemo, useState } from 'react';
import { useClient, useFormValue } from 'sanity';
import { SANITY_API_VERSION } from '../../../../config';

type PatchArgs = {
  field: string;
  fieldId: string; 
  value: string;
}

export default function InternationalisedArray(
  props: any
) {

  const { schemaType } = props;
  const client = useClient({ apiVersion: SANITY_API_VERSION });
  const docId = useFormValue(['_id']);
  const docLocaleTitle = useFormValue(['localeTitle']);
  const docLocaleBody = useFormValue(['localeBody']);
  const [localeTitleValue, setLocaleTitleValue] = useState<any>({});
  const [localeBodyValue, setLocaleBodyValue] = useState<any>({});

  const {
    supportedLanguages
  } = useInternationalisedArrayContext();

  const languagesAreValid = useMemo(
    () =>
      !supportedLanguages?.length ||
      (supportedLanguages?.length && supportedLanguages.every((item: any) => item.id && item.title)),
    [supportedLanguages]
  )

  const patchLocaleTitle = ({ field, fieldId, value }: PatchArgs) => {
    setLocaleTitleValue({ ...localeTitleValue, [fieldId]: value })
    try {
      //@ts-expect-error
      client.patch(docId as string).set({ [field]: { ...docLocaleTitle, ...localeTitleValue } }).commit().then((doc) => console.log('title updated'))
    } catch (error) {
      console.log('error updating locale title')
    }
  }

  const patchLocaleBlockContent = ({ field, fieldId, value }: PatchArgs) => {
    setLocaleBodyValue({ ...localeBodyValue, [fieldId]: value })
    try {
      //@ts-expect-error
      client.patch(docId as string).set({ [field]: { ...docLocaleBody, ...localeBodyValue } }).commit().then((doc) => console.log('body updated'))
    } catch (error) {
      console.log('error updating locale block')
    }
  }

  return (
    <Stack space={2}>
      {languagesAreValid && supportedLanguages.map((language: any) => {
        if (schemaType.name.includes('localeString')) {
          //@ts-expect-error
          const fieldValue = docLocaleTitle?.[language.id];
          return (
            <Stack key={`localeString_${language.id}`} space={2}>
              <Label htmlFor={language.id}>{language.title}</Label>
              <TextInput id={language.id} name={language.id} onChange={(ev) => patchLocaleTitle({ field: 'localeTitle', fieldId: language.id, value: ev.target.value })} value={localeTitleValue[language.id] || fieldValue || ''}/>
            </Stack>
          )
        }

        if (schemaType.name.includes('localeBlockContent')) {
          //@ts-expect-error
          const fieldValue = docLocaleBody?.[language.id];
          return (
            <Stack key={`localeBlockContent_${language.id}`} space={2}>
              <Label htmlFor={language.id}>{language.title}</Label>
              {/* TODO Ideally we need the proper editor */}
              <TextArea name={language.id} onChange={(ev) => patchLocaleBlockContent({ field: 'localeBody', fieldId: language.id, value: ev.target.value })} value={localeBodyValue[language.id] || fieldValue || ''} />
            </Stack>
          )
        }
      })}
    </Stack>
  )
}
