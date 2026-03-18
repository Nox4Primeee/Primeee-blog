'use client';

import { useState } from 'react';

export default function TrainingPage() {
  const [selectedTraining, setSelectedTraining] = useState<string | null>(null);

  const trainings = [
    {
      id: 'beginner',
      title: 'Débutant',
      description: 'Apprenez les bases de la création de bots',
      price: 'Gratuit',
      duration: '2 heures',
      modules: ['Introduction aux APIs', 'Premier bot WhatsApp', 'Commandes simples']
    },
    {
      id: 'intermediate',
      title: 'Intermédiaire',
      description: 'Créez des bots avancés avec base de données',
      price: '100€',
      duration: '5 heures',
      modules: ['Base de données', 'Gestion des utilisateurs', 'Déploiement']
    },
    {
      id: 'advanced',
      title: 'Avancé',
      description: 'Maîtrisez la création de bots professionnels',
      price: '250€',
      duration: '10 heures',
      modules: ['Anti-bannissement', 'Multi-comptes', 'API personnalisées', 'Monétisation']
    },
    {
      id: 'custom',
      title: 'Personnalisé',
      description: 'Formation adaptée à vos besoins spécifiques',
      price: 'Sur devis',
      duration: 'Variable',
      modules: ['Contenu personnalisé', 'Support direct', 'Code sur mesure']
    }
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Formations en création de bots</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Apprenez à créer vos propres bots WhatsApp et Telegram, de zéro à expert
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {trainings.map((training) => (
          <div 
            key={training.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-2">{training.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{training.description}</p>
            <p className="text-3xl font-bold text-blue-600 mb-2">{training.price}</p>
            <p className="text-sm text-gray-500 mb-4">Durée: {training.duration}</p>
            
            <h3 className="font-bold mb-2">Modules inclus:</h3>
            <ul className="space-y-2 mb-6">
              {training.modules.map((module, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300">✓ {module}</li>
              ))}
            </ul>

            <button 
              onClick={() => setSelectedTraining(training.id)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              S'inscrire
            </button>
          </div>
        ))}
      </div>

      {selectedTraining && (
        <div className="mt-8 p-6 border border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20">
          <h3 className="text-xl font-bold mb-2">Inscription à la formation</h3>
          <p>Vous avez sélectionné la formation. (Démo - contactez-nous pour plus d'infos)</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
            Envoyer la demande
          </button>
        </div>
      )}
    </div>
  );
        }
