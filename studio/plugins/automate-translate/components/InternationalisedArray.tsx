import { Stack } from '@sanity/ui'
import { useInternationalisedArrayContext } from './InternationalisedArrayContext'
import { useMemo } from 'react';

// TODO types
// export type InternationalisedArrayProps = ArrayOfObjectsInputProps<
//   Value,
//   ArraySchemaType
// >

export default function InternationalisedArray(
  props: any
) {

  console.log(props.members)

  const {
    supportedLanguages
  } = useInternationalisedArrayContext();

  const languagesAreValid = useMemo(
    () =>
      !supportedLanguages?.length ||
      (supportedLanguages?.length && supportedLanguages.every((item) => item.id && item.title)),
    [supportedLanguages]
  )

  return (
    <Stack space={2}>
      {props.renderDefault(props)}
    </Stack>
  )
}