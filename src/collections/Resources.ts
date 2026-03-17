import type { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'createdAt'],
    group: 'Admin',
  },
  access: {
    read: ({ req: { user } }) => !!user, // Connectés uniquement
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Documentation', value: 'doc' },
        { label: 'Script', value: 'script' },
        { label: 'Code Source', value: 'code' },
        { label: 'Formation', value: 'training' },
        { label: 'Outil', value: 'tool' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Fichier ressource',
    },
    {
      name: 'tags',
      type: 'text',
      hasMany: true,
    },
  ],
}
