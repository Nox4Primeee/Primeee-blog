import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <Image
          src="https://i.postimg.cc/Y0xyZPg5/file-00000000b3ec71fd9a935f45a998514a.png"
          alt="DEV PRIMEEE HOUSE"
          width={150}
          height={150}
          className="mx-auto rounded-full mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t('subtitle')}
        </p>
        <p className="text-lg max-w-2xl mx-auto">
          {t('description')}
        </p>
        <div className="mt-10 space-x-4">
          <Link 
            href="/shop" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Voir nos serveurs
          </Link>
          <Link 
            href="/blog" 
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Communauté
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Serveurs Privés</h3>
          <p className="text-gray-600 dark:text-gray-300">De 1GB à illimité avec panels admin et reseller</p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Bots WhatsApp/Telegram</h3>
          <p className="text-gray-600 dark:text-gray-300">Scripts encodés et non encodés</p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Formations</h3>
          <p className="text-gray-600 dark:text-gray-300">Création de bots personnalisés à la demande</p>
        </div>
      </section>
    </div>
  );
}
