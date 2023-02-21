import {defineArrayMember, defineField, defineType} from 'sanity'
import {targetKeyphrase} from '../objects/targetKeyphrase'

export default defineType({
  title: 'Article',
  name: 'article',
  type: 'document',

  groups: [
    {title: 'SEO', name: 'seo'},
    {title: 'Content', name: 'content', default: true},
    {title: 'Metadata', name: 'metadata'},
    {title: 'Translations', name: 'translations'},
  ],

  preview: {
    select: {
      media: 'image',
      title: 'title',
    },
  },

  fields: [
    /* ***************************************** *\
			SEO
		\* ***************************************** */

    defineField({
      title: 'Target keyphrases',
      name: 'targetKeyphrases',
      group: 'seo',
      type: 'array',
      of: [defineArrayMember(targetKeyphrase)],
    }),

    /* ***************************************** *\
			Content
		\* ***************************************** */

    defineField({
      title: 'Title',
      name: 'title',
      description: "The page's main (h1) title.",
      group: 'content',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      group: 'content',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: 'Image',
      name: 'image',
      group: 'content',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: 'Body',
      name: 'body',
      group: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),

    /* ***************************************** *\
			Metadata
		\* ***************************************** */

    defineField({
      title: 'Meta description',
      name: 'metaDescription',
      group: 'metadata',
      type: 'text',
      rows: 3,
    }),

    defineField({
      title: 'Listing description',
      name: 'listingDescription',
      group: 'metadata',
      type: 'text',
      rows: 3,
    }),

    defineField({
      title: 'Created at',
      name: 'createdAt',
      group: 'metadata',
      type: 'datetime',
    }),

    defineField({
      title: 'Updated at',
      name: 'updatedAt',
      group: 'metadata',
      type: 'datetime',
    }),
  ],
})
