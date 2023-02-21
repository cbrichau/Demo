import {defineField, defineType} from 'sanity'

export const targetKeyphrase = defineType({
  title: 'Target keyphrase',
  name: 'targetKeyphrase',
  type: 'object',

  preview: {
    select: {
      keyphrase: 'keyphrase',
      localVolume: 'localVolume',
      globalVolume: 'globalVolume',
    },
    prepare({keyphrase, localVolume, globalVolume}) {
      return {
        title: keyphrase,
        subtitle: 'volume: ' + localVolume + ' (' + globalVolume + ')',
      }
    },
  },

  fields: [
    defineField({
      title: 'Keyphrase',
      name: 'keyphrase',
      type: 'string',
    }),

    defineField({
      title: 'Local volume',
      name: 'localVolume',
      type: 'number',
    }),

    defineField({
      title: 'Global volume',
      name: 'globalVolume',
      type: 'number',
    }),
  ],
})
