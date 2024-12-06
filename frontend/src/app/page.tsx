import React from "react";
import Link from 'next/link';
import './globals.css';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/chat.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        textShadow: '2px 2px 5px black',
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: '40px', textAlign: 'center', color: 'brown' }}>
        Trouve le propriétaire !
      </h1>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link href="/animals">
          <button
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              borderRadius: '8px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            className="hover:scale-105 hover:shadow-lg"
          >
            Voir les animaux
          </button>
        </Link>
        <Link href="/owners">
          <button
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              borderRadius: '8px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            className="hover:scale-105 hover:shadow-lg"
          >
            Voir les propriétaires
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
