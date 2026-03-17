'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function AdminPage() {
  const t = useTranslations('Admin');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // SIMPLE AUTH - À REMPLACER PAR VOTRE SYSTÈME
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'DEVPRIMEEE2024') {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Connexion
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Panneau Admin</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Section Utilisateurs */}
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Utilisateurs</h2>
          <p className="text-gray-600 dark:text-gray-300">Gestion des utilisateurs</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Ajouter un admin
          </button>
        </div>

        {/* Section Serveurs */}
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Serveurs Privés</h2>
          <p className="text-gray-600 dark:text-gray-300">Gestion des ressources serveur</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Ajouter un serveur
          </button>
        </div>

        {/* Section Bots */}
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Bots WhatsApp/Telegram</h2>
          <p className="text-gray-600 dark:text-gray-300">Scripts encodés et non encodés</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Ajouter un script
          </button>
        </div>

        {/* Section Formations */}
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Formations</h2>
          <p className="text-gray-600 dark:text-gray-300">Gestion des formations</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Ajouter une formation
          </button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Statistiques</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600">150+</p>
            <p className="text-gray-600 dark:text-gray-300">Membres</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">25</p>
            <p className="text-gray-600 dark:text-gray-300">Serveurs actifs</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">50+</p>
            <p className="text-gray-600 dark:text-gray-300">Bots déployés</p>
          </div>
        </div>
      </div>
    </div>
  );
              }
