import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Product } from '@/types';

export default function BotsScriptsPage() {
  const [filter, setFilter] = useState<'all' | 'bot' | 'script'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    {
      id: '1',
      name: '𝚸𝚪𝚰𝚳𝚵𝚵𝚵𝚵 𝗫𝚳𝗗',
      description: 'Whatsapp Bot open source 100% No-Enc',
      price: 49.99,
      category: 'bot',
      features: ['100+ Commands', 'Cpanel', 'Bugmenu', 'Base de données incluse'],
      inStock: true
    },
    {
      id: '2',
      name: 'Lɪʟɪᴛʜ Xᴅ Bot WhatsApp Script No-Enc',
      description: 'Script open source',
      price: 79.99,
      category: 'script',
      features: ['130 Plugins', 'Multi-Session', 'API REST', 'Webhook'],
      inStock: true
    },
    {
      id: '3',
      name: '𝐍𝚯𝐗 Xᴅ Bot Telegram',
      description: 'Bot Telegram Script 100% No-enc',
      price: 39.99,
      category: 'bot',
      features: ['Envoi automatique', 'Gestion de groupes', 'Import/Export contacts', 'Planification'],
      inStock: true
    },
    {
      id: '4',
      name: 'Script No-Enc NodeJS',
      description: 'Script NodeJS optimisé sans chiffrement',
      price: 29.99,
      category: 'script',
      features: ['Code source complet', 'Documentation', 'Support 30 jours', 'Personnalisable'],
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    if (filter !== 'all' && product.category !== filter) return false;
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <Head>
        <title>Bots & Scripts - DEV PRIMEEE HOUSE</title>
      </Head>

      <div className="min-h-screen bg-gray-900">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Bots & Scripts
          </h1>
          <p className="text-xl text-gray-400 text-center mb-8">
            Découvrez notre collection de bots et scripts encodés et non-encodés
          </p>

          {/* Filtres et recherche */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Tous
              </button>
              <button
                onClick={() => setFilter('bot')}
                className={`px-4 py-2 rounded-lg ${filter === 'bot' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Bots
              </button>
              <button
                onClick={() => setFilter('script')}
                className={`px-4 py-2 rounded-lg ${filter === 'script' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                Scripts
              </button>
            </div>
            
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Grille des produits */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-400 text-xl py-12">
              Aucun produit trouvé
            </p>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${product.category === 'bot' ? 'bg-purple-600' : 'bg-blue-600'}`}>
            {product.category === 'bot' ? 'Bot' : 'Script'}
          </span>
        </div>
        
        <p className="text-gray-400 mb-4">{product.description}</p>
        
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-500">{product.price}€</span>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
                }
