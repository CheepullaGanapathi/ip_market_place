// src/pages/LoginPage.jsx
import React, { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [authClient, setAuthClient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  AuthClient.create().then((client) => {
    setAuthClient(client);
  });
}, []);


  const handleLogin = async () => {
    if (authClient) {
      await authClient.login({
        identityProvider: 'https://identity.ic0.app/#authorize',
        onSuccess: () => navigate('/home'),
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 overflow-hidden">
      <div className="absolute w-full h-full bg-white/5 backdrop-blur-sm z-0">
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-white/5 to-transparent animate-spin-slow rounded-full"></div>
      </div>
      <div className="z-10 p-8 max-w-3xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-2xl border border-white/40 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-yellow-400 animate-fade-in mb-4">
          Decentralized Intellectual Property Marketplace
        </h1>
        <p className="text-gray-800 text-lg font-medium mb-6">
          A marketplace on ICP for <span className="font-semibold text-green-700">buying</span>, <span className="font-semibold text-red-600">selling</span>, and <span className="font-semibold text-blue-500">licensing</span> intellectual property, including <span className="italic">patents</span>, <span className="italic">copyrights</span>, and <span className="italic">trademarks</span>, with transparent, secure transactions.
        </p>
        <ul className="text-left text-gray-700 mb-6 space-y-2">
          <li>✅ Secure Identity Login</li>
          <li>✅ NFT-backed Ownership</li>
          <li>✅ Royalty Licensing Automation</li>
          <li>✅ ICP Payments with Plug Wallet</li>
        </ul>
        <button
          onClick={handleLogin}
          className="bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-white font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 transform transition-all duration-300 animate-bounce"
        >
          🚀 Login with Internet Identity
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
