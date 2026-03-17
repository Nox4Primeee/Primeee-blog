'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ShopPage() {
  const t = useTranslations('Shop');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    { id: '1gb', name: '1GB', price: '1$/500fcfa', features: ['1GB RAM', '1gb Stockage', 'basique'] },
    { id: '5gb', name: '5GB', price: '5$/1000fcfa', features: ['5GB RAM', '5GB Stockage', 'Starter plus'] },
    { id: 'unlimited', name: 'Illimité', price: '8$/1.500fcfa', features: ['RAM illimitée', 'Stockage illimité', 'Support 24/7'] },
    { id: 'reseller', name: 'Reseller', price: '10$/2000fcfa', features: ['Panel admin', 'Création de serveurs', 'Revente possible'] },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Ptec Serveurs Privés</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}<span className="text-sm text-gray-500">/mois</span></p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300">✓ {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Sélectionner
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-8 p-6 border border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
          <h3 className="text-xl font-bold mb-2">Simulation de commande</h3>
          <p>Vous avez sélectionné le plan {selectedPlan}. (Système de démo - pas de vrai paiement)</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
            Confirmer (démo)
          </button>
        </div>
      )}
    </div>
  );
}
