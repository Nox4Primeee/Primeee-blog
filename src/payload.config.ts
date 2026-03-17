import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Posts } from './collections/Posts'
import { Products } from './collections/Products'
import { Resources } from './collections/Resources'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Interface admin
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- DEV PRIMEEE HOUSE',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },

  // Collections (types de contenu)
  collections: [Users, Posts, Products, Resources],

  // Éditeur de texte riche
  editor: lexicalEditor(),

  // Base de données PostgreSQL (Vercel Postgres)
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
  }),

  // Plugins
  plugins: [
    // Stockage d'images sur Vercel Blob
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],

  // Types générés automatiquement
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // GraphQL (optionnel)
  graphQL: {
    disable: true,
  },
})
