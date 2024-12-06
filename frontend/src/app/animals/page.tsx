'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AnimalList = () => {
  const router = useRouter();
  const [animals, setAnimals] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/animals')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur lors de la récupération des données');
        return res.json();
      })
      .then((data) => setAnimals(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige">
        <p className="text-xl font-semibold text-gray-700">Chargement...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 bg-red-100 p-4 rounded-lg">Erreur : {error}</p>;
  }

  return (
    <div className="min-h-screen bg-beige px-6 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Liste des Animaux</h1>

        <button
          onClick={() => router.push('/')}
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 mb-10"
        >
          Retour à la page d'accueil
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <Link key={animal.id} href={`/animals/${animal.id}`} passHref>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:translate-y-1 cursor-pointer hover:bg-blue-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{animal.name}</h2>
                <p className="text-gray-600">{animal.species}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalList;
