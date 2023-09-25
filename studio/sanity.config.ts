import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas'

const baseConfig = {
  projectId: 'hakfgcdn',
  plugins: [deskTool(), visionTool()],
  schema: {types: schemaTypes},
}

export default defineConfig([
  {
    ...baseConfig,
    name: 'development',
    dataset: 'development',
    basePath: '/dev',
  },
])
