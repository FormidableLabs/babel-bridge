/* eslint-disable no-nested-ternary */
import {defineField, type FieldDefinition, type Rule} from 'sanity'
import InternationalisedArray from '../components/InternationalisedArray'
import { createFieldName } from '../utils/createFieldName'

// import {createFieldName} from '../components/createFieldName'
// import {getSelectedValue} from '../components/getSelectedValue'
// import InternationalisedArray from '../components/InternationalisedArray'
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
  const {apiVersion, select, languages, type} = config
  const typeName = typeof type === `string` ? type : type.name

  console.log('array type', typeName);

  const arrayName = createFieldName(typeName)
  const objectName = createFieldName(typeName, true)

  console.log('array', arrayName, objectName);

  return defineField({
    name: arrayName,
    title: 'Internationalised array',
    type: 'array',
    components: {
      input: InternationalisedArray,
    },
    // These options are required for validation rules – not the custom input component
    // options: {apiVersion, select, languages},
    of: [
      defineField({
        ...(typeof type === 'string' ? {} : type),
        name: objectName,
        type: objectName,
      }),
    ],
  })
}