import { definePlugin, isObjectInputProps } from 'sanity'
import Preload from './components/Preload';
import { SANITY_API_VERSION } from '../../../config';
import { flattenSchemaType } from './utils/flattenSchemaType';
import { InternationalisedArrayProvider } from './components/InternationalisedArrayContext';
import array from './schema/array';
import object from './schema/object';

export const AutomateTranslate = definePlugin(() => {

  const languages = `*[_type == "supportedLanguages"]{id, title}`;
  const fieldTypes = ['localeString', 'localeBlockContent'];

  return {
    name: 'AutomateTranslate',
    studio: Array.isArray(languages)
      ? undefined
      : {
        components: {
          layout: (props) => (
            <>
              <Preload apiVersion={SANITY_API_VERSION} languages={languages} />
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
            name.startsWith('internationalisedArray')
          )

          if (!hasInternationalisedArray) {
            return props.renderDefault(props)
          }

          return InternationalisedArrayProvider({
            ...props,
            internationalisedArray: { languages }, //TODO move to pluginconfig?
          })
        },
      },
    },
    schema: {
      types: [
        ...fieldTypes.map((type: string) =>
          array({ type })
        ),
        ...fieldTypes.map((type: string) => object({type})),
      ],
    },
  }
});
