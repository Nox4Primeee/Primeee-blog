import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'price', 'available'],
    group: 'Boutique',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Nom du produit',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Serveur Privé', value: 'server' },
        { label: 'Panneau Admin', value: 'panel' },
        { label: 'Reseller', value: 'reseller' },
        { label: 'Bot WhatsApp', value: 'whatsapp' },
        { label: 'Bot Telegram', value: 'telegram' },
        { label: 'Script', value: 'script' },
        { label: 'Formation', value: 'formation' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      label: 'Prix (€)',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Caractéristiques',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'specifications',
      type: 'group',
      label: 'Spécifications techniques',
      fields: [
        {
          name: 'ram',
          type: 'text',
          label: 'RAM',
          admin: {
            condition: (data) => data.type === 'server',
          },
        },
        {
          name: 'storage',
          type: 'text',
          label: 'Stockage',
          admin: {
            condition: (data) => data.type === 'server',
          },
        },
        {
          name: 'bandwidth',
          type: 'text',
          label: 'Bande passante',
          admin: {
            condition: (data) => data.type === 'server',
          },
        },
      ],
    },
    {
      name: 'available',
      type: 'checkbox',
      label: 'Disponible à la vente',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'lang',
      type: 'select',
      options: [
        { label: 'Français', value: 'fr' },
        { label: 'English', value: 'en' },
      ],
      required: true,
      defaultValue: 'fr',
    },
  ],
              }
