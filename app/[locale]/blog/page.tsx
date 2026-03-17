import { getPosts } from '@/lib/posts';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Blog');
  const posts = await getPosts(locale);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/${locale}/blog/${post.slug}`}
            className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
