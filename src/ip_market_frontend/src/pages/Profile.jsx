// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { principal } = useParams();
  const navigate = useNavigate();

  // 🔁 Placeholder: Replace this with real API call to fetch user-owned assets
  const [ownedAssets, setOwnedAssets] = useState([
    {
      id: 1,
      title: 'Smart Contract Patent',
      type: 'Patent',
      jurisdiction: 'USA',
      licensed: true,
    },
    {
      id: 2,
      title: 'AI Music Copyright',
      type: 'Copyright',
      jurisdiction: 'India',
      licensed: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-6 text-white overflow-hidden">
      <h1 className="text-4xl font-extrabold mb-6 text-center animate-fade-in">
        👤 Profile: <span className="text-yellow-200">{principal}</span>
      </h1>

      <div className="text-center mb-8 space-x-4">
        <button
          onClick={() => navigate('/home')}
          className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-purple-600 hover:text-white transition duration-300"
        >
          ⬅️ Back to Home
        </button>
        <button
          onClick={() => navigate(`/profile/${principal}`)}
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-blue-500 hover:text-white transition duration-300"
        >
          🔄 Refresh Profile
        </button>
      </div>

      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-5xl mx-auto animate-slide-up-fade">
        <h2 className="text-2xl font-semibold mb-4">🎓 Owned & Licensed IP Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ownedAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white/80 text-purple-800 p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{asset.title}</h3>
              <p className="text-sm">Type: {asset.type}</p>
              <p className="text-sm">Jurisdiction: {asset.jurisdiction}</p>
              <p className="text-sm font-semibold">
                License Status:{' '}
                <span className={asset.licensed ? 'text-green-600' : 'text-red-500'}>
                  {asset.licensed ? 'Licensed' : 'Not Licensed'}
                </span>
              </p>
              <button
                onClick={() => navigate(`/asset/${asset.id}`)}
                className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800 transition"
              >
                🔍 View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
