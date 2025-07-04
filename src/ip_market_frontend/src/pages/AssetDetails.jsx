// src/pages/AssetDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AssetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const asset = {
    id,
    title: `IP Title #${id}`,
    owner: '0x123...abc',
    jurisdiction: 'India',
    licenseType: 'Exclusive',
    description:
      'This is a detailed description of the intellectual property asset. It includes all the information necessary for licensing and ownership verification.',
    nftImage: 'https://via.placeholder.com/300x200.png?text=IP+NFT',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 text-white p-8 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl max-w-4xl w-full p-10 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-white drop-shadow-xl">
            🔍 {asset.title}
          </h1>
          <button
            onClick={() => navigate('/explore')}
            className="text-sm bg-white text-purple-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-purple-200 transition"
          >
            ← Back to Explore
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={asset.nftImage}
            alt="IP NFT Preview"
            className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
          />

          <div className="flex-1 space-y-4">
            <p>
              <span className="font-bold text-yellow-200">Owner:</span> {asset.owner}
            </p>
            <p>
              <span className="font-bold text-yellow-200">Jurisdiction:</span> {asset.jurisdiction}
            </p>
            <p>
              <span className="font-bold text-yellow-200">License Type:</span> {asset.licenseType}
            </p>
            <p className="text-white/90">{asset.description}</p>

            <div className="pt-6">
              <button className="bg-green-400 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-green-500 transition">
                💼 License This IP
              </button>
              <button className="ml-4 bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition">
                🛒 Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;
