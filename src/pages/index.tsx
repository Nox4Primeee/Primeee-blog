import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>DEV PRIMEEE HOUSE - Solutions Digitales Premium</title>
        <meta name="description" content="Vente de scripts, bots, VPS et solutions digitales" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DEV PRIMEEE HOUSE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Solutions digitales premium pour développeurs et entrepreneurs
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Voir nos produits
              </Link>
              <Link href="/vps" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
                Nos VPS
              </Link>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </section>

          {/* Categories */}
          <section className="grid md:grid-cols-3 gap-8">
            <CategoryCard
              title="Scripts & Bots"
              description="Scripts enc/dec et bots automatisés"
              link="/bots-scripts"
              color="blue"
            />
            <CategoryCard
              title="Serveurs VPS"
              description="De 1GB à illimité avec panel admin"
              link="/vps"
              color="green"
            />
            <CategoryCard
              title="Blog & Tutoriels"
              description="Articles techniques et guides"
              link="/blog"
              color="purple"
            />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

const features = [
  {
    title: "Scripts Enc/No Enc",
    description: "Scripts optimisés et sécurisés pour tous vos besoins"
  },
  {
    title: "Bots Automatisés",
    description: "Bots personnalisables pour automatiser vos tâches"
  },
  {
    title: "VPS Haute Performance",
    description: "De 1GB RAM à illimité avec panel d'administration"
  },
  {
    title: "Support Premium",
    description: "Assistance technique 24/7 et mises à jour régulières"
  }
];

function CategoryCard({ title, description, link, color }: any) {
  const colors = {
    blue: "from-blue-600 to-blue-800",
    green: "from-green-600 to-green-800",
    purple: "from-purple-600 to-purple-800"
  };

  return (
    <Link href={link}>
      <div className={`bg-gradient-to-br ${colors[color]} p-8 rounded-xl cursor-pointer transform hover:scale-105 transition`}>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/90 mb-6">{description}</p>
        <span className="inline-block bg-white/20 px-4 py-2 rounded-lg text-white">
          Découvrir →
        </span>
      </div>
    </Link>
  );
}
