import {defineField, FieldDefinition} from 'sanity'
import {createFieldName} from '../utils/createFieldName'
import InternationalisedInput from '../components/InternationalisedInput'
import InternationalisedField from '../components/InternationalisedField'

type ObjectFactoryConfig = {
  type: string | FieldDefinition
}

export default (config: ObjectFactoryConfig): FieldDefinition<'object'> => {
  const {type} = config
  const typeName = typeof type === `string` ? type : type.name
  const objectName = createFieldName(typeName, true);

  return defineField({
    name: objectName,
    title: `Internationalized array ${type}`,
    type: 'object',
    components: {
      item: InternationalisedInput,
    },
    // TODO: Address this typing issue with the inner object
    // @ts-expect-error
    fields: [
      defineField({
        name: 'value',
        type: objectName,
        components: {
          field: InternationalisedField,
        },
      }),
    ],
    preview: {
      select: {
        title: 'value',
        subtitle: '_key',
      },
    },
  })
}
