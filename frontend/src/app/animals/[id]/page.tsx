'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AnimalDetails = () => {
  const { id } = useParams(); 
  const router = useRouter();
  const [animal, setAnimal] =  useState<any | null>(null);
  const [error, setError] =  useState<any | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/animals/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error('Erreur lors de la récupération des données');
          return res.json();
        })
        .then((data) => setAnimal(data))
        .catch((err) => setError(err.message));
    }
  }, [id]);

  if (!animal && !error) {
    return <p className="text-center">Chargement...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Erreur : {error}</p>;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/animaux.jpg')",
        textShadow: '1px 1px 5px black',
      }}
    >
      <div className="p-8 rounded-lg text-center space-y-4 w-full max-w-lg">
        <h1 className="text-4xl font-bold">Nom: {animal.name}</h1>
        <p className="text-2xl">Espèce : {animal.species}</p>
        <p className="text-2xl">Race : {animal.breed}</p>
        <p className="text-2xl">Couleur : {animal.color || 'Non spécifié'}</p>
        <p className="text-2xl">Poids : {animal.weight ? `${animal.weight} kg` : 'Non spécifié'}</p>
        <p className="text-2xl">Date de naissance : {new Date(animal.dateOfBirth).toLocaleDateString()}</p>
        {animal.person && (
          <div className="space-y-2">
            <h2 className="text-3xl font-bold mt-4">Propriétaire :</h2>
            <p className="text-xl">{animal.person.firstName} {animal.person.lastName}</p>
            <p className="text-xl mb-6">Email : {animal.person.email}</p>
          </div>
        )}
        <button
          onClick={() => router.push('/animals')} 
          className="
            bg-green-700 px-4 py-2 rounded-full 
            hover:bg-white hover:text-green-700 
            transition-colors duration-300 text-lg
          "
        >
          Retour à la liste des animaux
        </button>
      </div>
    </div>
  );
};

export default AnimalDetails;
