import { defineConfig, defineField, SchemaPluginOptions } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { documentInternationalization } from '@sanity/document-internationalization'
import { structure } from './structure'
import { defaultTemplates } from './schemas/config/defaultTemplates'

import { AutomateTranslate } from './plugins/automate-translate'

const schema: SchemaPluginOptions = {
  types: schemaTypes,
  templates: prev => [...defaultTemplates, ...prev],
};

const baseConfig = {
  projectId: 'hakfgcdn',
  plugins: [
    deskTool({
      structure
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: (client) => client.fetch(`*[_type == "supportedLanguages"]{id, title}`),
      schemaTypes: ['post'],
      languageField: 'language',
      weakReferences: true,
    }),
    AutomateTranslate({
      languages: `*[_type == "supportedLanguages"]{id, title}`,
      schemaTypes: ['post'],
      fieldTypes: ['localeTitle', 'localeBody']
    })
  ],
  schema,
}

export default defineConfig([
  {
    ...baseConfig,
    name: 'development',
    dataset: 'development',
    basePath: '/dev',
  },
  {
    ...baseConfig,
    name: 'staging',
    dataset: 'staging',
    basePath: '/staging',
  },
])
