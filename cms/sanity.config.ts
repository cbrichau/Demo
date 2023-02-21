import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {defaultDocumentNode} from './src/config/deskTool/defaultDocumentNode'
import {visionTool} from '@sanity/vision'
import article from './schemas/documents/article'
import comment from './schemas/documents/comment'

export default defineConfig({
  name: 'default',
  title: 'CMS',

  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool({defaultDocumentNode}), visionTool()],

  schema: {
    types: [
      // documents:
      article,
      comment,
    ],
  },
})
