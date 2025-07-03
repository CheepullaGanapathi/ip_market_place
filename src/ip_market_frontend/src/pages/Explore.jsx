// src/pages/Explore.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dummyAssets = [
  {
    id: 1,
    title: 'AI-Based Traffic Optimization',
    type: 'Patent',
    owner: 'abc-principal-id',
    description: 'An algorithm to optimize urban traffic using machine learning.',
  },
  {
    id: 2,
    title: 'Fantasy Logo Art',
    type: 'Copyright',
    owner: 'def-principal-id',
    description: 'A copyrighted logo for fantasy-themed brands.',
  },
  {
    id: 3,
    title: 'SmartHome™ Trademark',
    type: 'Trademark',
    owner: 'ghi-principal-id',
    description: 'Trademarked name for smart appliances.',
  },
];

const Explore = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredAssets = dummyAssets.filter((asset) => {
    const matchesSearch = asset.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || asset.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 animate-fade-in">
          🔍 Explore Intellectual Property Assets
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 animate-fade-in-delay">
          <input
            type="text"
            placeholder="Search by title..."
            className="flex-1 px-4 py-2 rounded-md text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-md text-black"
          >
            <option value="All">All Types</option>
            <option value="Patent">Patent</option>
            <option value="Copyright">Copyright</option>
            <option value="Trademark">Trademark</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in-up">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white/90 text-purple-800 rounded-xl shadow-xl p-6 hover:scale-105 transform transition duration-300 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold mb-2">{asset.title}</h3>
              <p className="text-sm italic text-gray-700 mb-2">Type: {asset.type}</p>
              <p className="text-sm mb-4">{asset.description}</p>
              <button
                className="text-sm text-pink-600 font-semibold hover:underline"
                onClick={() => navigate(`/asset/${asset.id}`)}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
