import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/Header';

export default function AdminPanel() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implémentez votre logique d'authentification ici
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Identifiants incorrects');
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Login - DEV PRIMEEE HOUSE</title>
        </Head>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-xl w-96">
            <h1 className="text-2xl font-bold text-white text-center mb-6">
              Panel Administrateur
            </h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Nom d'utilisateur</label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Mot de passe</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Panel - DEV PRIMEEE HOUSE</title>
      </Head>

      <div className="min-h-screen bg-gray-900">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-white mb-8">
            Tableau de bord administrateur
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Utilisateurs" value="156" icon="👥" />
            <StatCard title="Ventes du mois" value="€3,245" icon="💰" />
            <StatCard title="Produits" value="24" icon="📦" />
            <StatCard title="VPS actifs" value="42" icon="🖥️" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <AdminSection title="Gestion des produits">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mb-2">Ajouter un produit</button>
              <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg mb-2">Modifier les prix</button>
              <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg">Gérer les stocks</button>
            </AdminSection>

            <AdminSection title="Gestion VPS">
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg mb-2">Configurer les plans</button>
              <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg mb-2">Voir les commandes</button>
              <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg">Gérer les resellers</button>
            </AdminSection>

            <AdminSection title="Blog">
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg mb-2">Nouvel article</button>
              <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg mb-2">Modérer commentaires</button>
              <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg">Gérer catégories</button>
            </AdminSection>

            <AdminSection title="Utilisateurs">
              <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg mb-2">Liste utilisateurs</button>
              <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg mb-2">Permissions</button>
              <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg">Messages support</button>
            </AdminSection>
          </div>
        </main>
      </div>
    </>
  );
}

function StatCard({ title, value, icon }: any) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-gray-400 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function AdminSection({ title, children }: any) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
