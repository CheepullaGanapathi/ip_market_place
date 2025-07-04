// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 p-8 flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-5xl py-20 text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl mb-6">
          🚀 Discover, License, and Own IP on the Blockchain
        </h1>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-white/90">
          Welcome to the <span className="font-bold text-yellow-100">Decentralized IP Marketplace</span> built on <span className="text-purple-200">ICP</span>. Securely buy, sell, and license <em>patents</em>, <em>copyrights</em>, and <em>trademarks</em> backed by NFTs.
        </p>
        <div className="mt-10 space-x-4">
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-400 hover:text-white transition duration-300 transform hover:scale-105"
          >
            📝 Register IP
          </button>
          <button
            onClick={() => navigate('/explore')}
            className="bg-white text-pink-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105"
          >
            🔍 Explore Marketplace
          </button>
        </div>
      </section>

      {/* Featured IP Assets */}
      <section className="w-full max-w-6xl px-4 py-10 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl mt-0 animate-slide-up-fade">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">🌟 Featured IP Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-purple-700 hover:scale-105 transform transition duration-300"
            >
              <h3 className="font-bold text-xl mb-2">IP Title #{i}</h3>
              <p className="text-sm text-purple-600 mb-4">
                This is a preview of an intellectual property asset showcasing ownership, jurisdiction, and license status.
              </p>
              <button
                onClick={() => navigate(`/asset/${i}`)}
                className="mt-2 bg-purple-700 text-white py-2 px-4 rounded-full shadow-md hover:bg-purple-800 transition"
              >
                🔍 View Asset
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
