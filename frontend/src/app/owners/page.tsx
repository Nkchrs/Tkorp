'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PeoplePage = () => {
  const router = useRouter();
  const [people, setPeople] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const res = await fetch('http://localhost:4000/owners');
        if (!res.ok) {
          throw new Error(`API returned status ${res.status}`);
        }
        const data = await res.json();
        setPeople(data);
      } catch (error) {
        console.error('Error fetching people:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige">
        <p className="text-xl font-semibold text-gray-700">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige px-6 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Liste des propriétaires</h1>
        <button
          onClick={() => router.push('/')}
          className="
            bg-blue-500 text-white 
            px-6 py-3 rounded-full 
            hover:bg-blue-600 
            transition-colors duration-300
            mb-10
          "
        >
          Retour à la page d'accueil
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((person) => (
            <Link key={person.id} href={`/owners/${person.id}`} passHref>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:translate-y-1 cursor-pointer">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{person.firstName} {person.lastName}</h2>
                <p className="text-gray-600">{person.email}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
