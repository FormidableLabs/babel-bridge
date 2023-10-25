/* eslint-disable no-nested-ternary */
import {defineField, type FieldDefinition } from 'sanity'
import InternationalisedArray from '../components/InternationalisedArray'
import { createFieldName } from '../utils/createFieldName'

// import {Language, LanguageCallback, Value} from '../types'

// TODO types
// type ArrayFactoryConfig = {
//   apiVersion: string
//   select?: Record<string, string>
//   languages: Language[] | LanguageCallback
//   defaultLanguages?: string[]
//   type: string | FieldDefinition
// }

// FieldDefinition<'array'>

export default (config: any): any => {
  const { type } = config
  const typeName = typeof type === `string` ? type : type.name

  const arrayName = createFieldName(typeName)
  const objectName = createFieldName(typeName, true)

  return defineField({
    name: arrayName,
    title: 'Internationalised array',
    type: 'array',
    components: {
      input: InternationalisedArray,
    },
    of: [
      defineField({
        ...(typeof type === 'string' ? {} : type),
        name: objectName,
        type: objectName,
      }),
    ],
  })
}