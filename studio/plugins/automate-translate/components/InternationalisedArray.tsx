import { Stack } from '@sanity/ui'
import { useInternationalisedArrayContext } from './InternationalisedArrayContext'

// TODO types
// export type InternationalisedArrayProps = ArrayOfObjectsInputProps<
//   Value,
//   ArraySchemaType
// >

export default function InternationalisedArray(
  props: any
) {
  const {members, value, schemaType, onChange} = props

  console.log('IN INTER COMP', props);

  const {
    languages,
    defaultLanguages,
  } = useInternationalisedArrayContext();

  return (
    <Stack space={2}>
      <p>HELLOOOOOOOO</p>
    </Stack>
  )
}