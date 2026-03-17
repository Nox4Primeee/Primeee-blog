'use client';

import { useState } from 'react';

export default function BotsPage() {
  const [category, setCategory] = useState<'whatsapp' | 'telegram'>('whatsapp');
  
  const bots = {
    whatsapp: [
      { name: 'Bot WhatsApp Basique', type: 'Non encodé', price: 'Gratuit', features: ['Auto-reply', 'Commandes simples'] },
      { name: 'Bot WhatsApp Premium', type: 'Encodé', price: '50€', features: ['Anti-bannissement', 'Multi-comptes', 'API personnalisée'] },
      { name: 'Bot WhatsApp Ultimate', type: 'Encodé', price: '150€', features: ['Panel admin', 'Base de données', 'Webhook intégré'] },
    ],
    telegram: [
      { name: 'Bot Telegram Simple', type: 'Non encodé', price: 'Gratuit', features: ['Commandes de base', 'Groupes'] },
      { name: 'Bot Telegram Avancé', type: 'Encodé', price: '40€', features: ['Paiements', 'Modération', 'Analytics'] },
      { name: 'Bot Telegram Pro', type: 'Encodé', price: '120€', features: ['Multi-bots', 'API externe', 'Dashboard'] },
    ]
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Bots WhatsApp & Telegram</h1>
      
      {/* Category Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setCategory('whatsapp')}
          className={`px-6 py-2 rounded-lg ${category === 'whatsapp' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          WhatsApp
        </button>
        <button
          onClick={() => setCategory('telegram')}
          className={`px-6 py-2 rounded-lg ${category === 'telegram' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
        >
          Telegram
        </button>
      </div>

      {/* Bots Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {bots[category].map((bot, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{bot.name}</h2>
            <p className="text-sm text-gray-500 mb-2">Type: {bot.type}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">{bot.price}</p>
            <ul className="space-y-2 mb-6">
              {bot.features.map((feature, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300">✓ {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Télécharger
            </button>
          </div>
        ))}
      </div>

      {/* Script Download Section */}
      <div className="mt-12 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Scripts disponibles</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">script-wa-basic.js</p>
              <p className="text-sm text-gray-500">Bot WhatsApp basique non encodé</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Télécharger
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">script-wa-premium.enc</p>
              <p className="text-sm text-gray-500">Bot WhatsApp premium encodé (payant)</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
