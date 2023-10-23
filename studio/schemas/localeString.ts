import { defineType, defineField } from 'sanity';
import { LocaleField } from '../components/LocaleField';

const supportedLanguages = [
  {
    id:'us',
    title:'USEnglish',
    default:true,
  },
  {
    id:'da',
    title:'da',
    default:false
  },
  {
    id:'bn',
    title:'bn',
    default:false
  },
  {
    id:'ar',
    title:'ar',
    default:false
  },
  {
    id:'ms',
    title:'ms',
    default:false
  },
  {
    id:'es',
    title:'es',
    default:false
  }
]

export default defineType({
  title: 'Locale String',
  name: 'localeString',
  type: 'object',
  components: {
    input: LocaleField,
  },
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.title,
      type: 'string',
      // hidden: !!lang.default
    })
  ),
});
