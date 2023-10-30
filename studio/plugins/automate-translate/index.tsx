import { defineField, definePlugin, isObjectInputProps } from 'sanity'
import Preload from './components/Preload';
import { SANITY_API_VERSION } from '../../../config';
import { flattenSchemaType } from './utils/flattenSchemaType';
import { InternationalisedArrayProvider } from './components/InternationalisedArrayContext';
import array from './schema/array';
import object from './schema/object';
import InternationalisedArray from './components/InternationalisedArray';

export const AutomateTranslate = definePlugin(() => {

  const languageQuery = `*[_type == "supportedLanguages"]{id, title}`;
  const contextKey = 'internationalised__'
  const fieldTypes = [{ type: 'string', name: 'localeString' }, { type: 'blockContent', name: 'localeBlockContent' }];

  return {
    name: 'AutomateTranslate',
    studio: {
      components: {
        layout: (props) => (
          <>
            <Preload apiVersion={SANITY_API_VERSION} />
            {props.renderDefault(props)}
          </>
        ),
      },
    },
    form: {
      components: {
        input: (props) => {

          const isRootInput = props.id === 'root' && isObjectInputProps(props)

          if (!isRootInput) {
            return props.renderDefault(props)
          }

          const flatFieldTypeNames = flattenSchemaType(props.schemaType).map(
            (field) => field.type.name
          )

          const hasInternationalisedArray = flatFieldTypeNames.some((name) =>
            name.startsWith(contextKey)
          )

          if (!hasInternationalisedArray) {
            return props.renderDefault(props)
          }

          return InternationalisedArrayProvider({
            ...props,
            internationalisedArray: { languageQuery }
          })
        },
      },
    },
    schema: {
      types: [
        ...fieldTypes.map((field) => {
          return defineField({
            title: field.name,
            type: 'object',
            name: `${contextKey}${field.name}`,
            components: {
              input: InternationalisedArray,
            },
            fields: [
              defineField({
                name: `${field.name}Item`,
                type: field.type
              })
            ]
          })
        })
      ]
    }
  }
});
