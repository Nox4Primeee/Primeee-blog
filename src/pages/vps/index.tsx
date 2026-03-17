import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { VPSPlan } from '@/types';

export default function VPSPage() {
  const [plans] = useState<VPSPlan[]>([
    {
      id: '1',
      name: 'Starter',
      ram: 1,
      cpu: 1,
      storage: 25,
      bandwidth: '1 TB',
      price: 9.99,
      panel: true,
      reseller: false
    },
    {
      id: '2',
      name: 'Professional',
      ram: 4,
      cpu: 2,
      storage: 80,
      bandwidth: '4 TB',
      price: 24.99,
      panel: true,
      reseller: true
    },
    {
      id: '3',
      name: 'Enterprise',
      ram: 16,
      cpu: 4,
      storage: 320,
      bandwidth: 'Unlimited',
      price: 49.99,
      panel: true,
      reseller: true
    },
    {
      id: '4',
      name: 'Ultimate',
      ram: 64,
      cpu: 8,
      storage: 1000,
      bandwidth: 'Unlimited',
      price: 99.99,
      panel: true,
      reseller: true
    }
  ]);

  return (
    <>
      <Head>
        <title>Serveurs VPS - DEV PRIMEEE HOUSE</title>
      </Head>

      <div className="min-h-screen bg-gray-900">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Nos Serveurs VPS
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12">
            De 1GB à illimité avec panel d'administration et options reseller
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <VPSPlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-16 bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Personnalisez votre offre
            </h2>
            <p className="text-gray-300 mb-6">
              Vous avez des besoins spécifiques ? Contactez-nous pour une offre sur mesure.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Demander un devis
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

function VPSPlanCard({ plan }: { plan: VPSPlan }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="text-3xl font-bold text-blue-500 mb-4">
          {plan.price}€<span className="text-sm text-gray-400">/mois</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          <li className="flex justify-between text-gray-300">
            <span>RAM:</span>
            <span className="font-semibold">{plan.ram} GB</span>
          </li>
          <li className="flex justify-between text-gray-300">
            <span>CPU:</span>
            <span className="font-semibold">{plan.cpu} vCore</span>
          </li>
          <li className="flex justify-between text-gray-300">
            <span>Stockage:</span>
            <span className="font-semibold">{plan.storage} GB SSD</span>
          </li>
          <li className="flex justify-between text-gray-300">
            <span>Bande passante:</span>
            <span className="font-semibold">{plan.bandwidth}</span>
          </li>
          <li className="flex justify-between text-gray-300">
            <span>Panel admin:</span>
            <span className={`font-semibold ${plan.panel ? 'text-green-500' : 'text-red-500'}`}>
              {plan.panel ? '✓' : '✗'}
            </span>
          </li>
          <li className="flex justify-between text-gray-300">
            <span>Reseller:</span>
            <span className={`font-semibold ${plan.reseller ? 'text-green-500' : 'text-red-500'}`}>
              {plan.reseller ? '✓' : '✗'}
            </span>
          </li>
        </ul>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Commander
        </button>
      </div>
    </div>
  );
}
