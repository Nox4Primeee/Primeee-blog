import { getPayload } from 'payload'
import config from '@/payload.config'
import { getDictionary } from '@/lib/dictionaries'
import HeroBlock from '@/blocks/HeroBlock'
import ProductGrid from '@/components/ProductGrid'
import BlogPreview from '@/components/BlogPreview'

export default async function HomePage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  const payload = await getPayload({ config })

  // Récupérer les produits en vedette
  const products = await payload.find({
    collection: 'products',
    where: {
      available: { equals: true },
      lang: { equals: params.lang }
    },
    limit: 4,
  })

  // Récupérer les derniers articles du blog
  const posts = await payload.find({
    collection: 'posts',
    where: {
      status: { equals: 'published' },
      lang: { equals: params.lang }
    },
    limit: 3,
    sort: '-publishedDate',
  })

  return (
    <div>
      <HeroBlock lang={params.lang} dict={dict} />
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            {dict.home.features.title}
          </h2>
          <ProductGrid products={products.docs} lang={params.lang} />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            {dict.blog.title}
          </h2>
          <BlogPreview posts={posts.docs} lang={params.lang} />
        </div>
      </section>
    </div>
  )
}
