import {defineArrayMember, defineField, defineType} from 'sanity'
import {targetKeyphrase} from '../objects/targetKeyphrase'

export default defineType({
  title: 'Comment',
  name: 'comment',
  type: 'document',

  groups: [
    {title: 'Content', name: 'content', default: true},
    {title: 'Metadata', name: 'metadata'},
  ],

  initialValue: {
    isApproved: false,
  },

  fields: [
    /* ***************************************** *\
			Content
		\* ***************************************** */

    defineField({
      title: 'Body',
      name: 'body',
      group: 'content',
      type: 'text',
    }),

    defineField({
      title: 'Author',
      name: 'author',
      group: 'content',
      type: 'object',
      fields: [
        defineField({
          title: 'Name',
          name: 'name',
          type: 'string',
        }),

        defineField({
          title: 'Email',
          name: 'email',
          type: 'string',
        }),
      ],
    }),

    /* ***************************************** *\
			Metadata
		\* ***************************************** */

    defineField({
      title: 'Comment to',
      name: 'commentTo',
      group: 'metadata',
      type: 'reference',
      to: [{type: 'article'}],
    }),

    defineField({
      title: 'Answer to',
      name: 'answerTo',
      group: 'metadata',
      type: 'reference',
      to: [{type: 'comment'}],
    }),

    defineField({
      title: 'Is approved',
      name: 'isApproved',
      group: 'metadata',
      type: 'boolean',
    }),

    defineField({
      title: 'Created at',
      name: 'createdAt',
      group: 'metadata',
      type: 'datetime',
    }),
  ],
})
