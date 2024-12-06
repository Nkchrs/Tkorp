'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const OwnerDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [owner, setOwner] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/owners/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error('Erreur lors de la récupération des données');
          return res.json();
        })
        .then((data) => setOwner(data))
        .catch((err) => setError(err.message));
    }
  }, [id]);

  if (!owner && !error) {
    return <p className="text-center text-gray-600 text-xl p-8">Chargement...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 bg-red-100 p-4 rounded-lg">Erreur : {error}</p>;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-8"
      style={{
        backgroundImage: "url('/proprio.jpg')",
      }}
    >
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 pb-4 border-b-2 border-gray-300 mb-4">
          {owner.firstName} {owner.lastName}
        </h1>

        <div className="space-y-2 mb-6 text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Email :</span> {owner.email}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Téléphone :</span> {owner.phoneNumber}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 pb-2 border-b border-gray-200 mb-4">
            Animaux :
          </h2>

          {owner.animal && owner.animal.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {owner.animal.map((animal: any) => (
                <li key={animal.id} className="py-3 flex justify-between items-center">
                  <span className="font-medium text-gray-800">{animal.name}</span>
                  <span className="text-gray-500 text-sm">({animal.species})</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Pas d'animal</p>
          )}
        </div>
      </div>

      <button
        onClick={() => router.push('/owners')}
        className="
          mt-6 bg-blue-500 text-white px-6 py-3 rounded-full
          hover:bg-blue-600 transition-colors duration-300
          shadow-lg hover:shadow-xl
        "
      >
        Retour à la liste
      </button>
    </div>
  );
};

export default OwnerDetails;
