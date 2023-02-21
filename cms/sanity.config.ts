import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import article from './schemas/documents/article'

export default defineConfig({
  name: 'default',
  title: 'CMS',

  projectId: 'jpcyu08k',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [
      // documents:
      article,
    ],
  },
})
