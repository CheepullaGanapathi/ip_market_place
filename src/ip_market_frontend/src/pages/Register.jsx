// src/pages/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    title: '',
    ipType: '',
    jurisdiction: '',
    licenseType: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file upload to IPFS or ICP Canister here
    // Trigger smart contract minting here
    console.log(formData);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 flex items-center justify-center">
      <div className="w-full max-w-xl p-6 bg-pink rounded-3xl shadow-1xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl text-purple-800 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4">Register New IP Asset</h1>

        <input
          type="text"
          name="title"
          placeholder="IP Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <select
          name="ipType"
          value={formData.ipType}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Select IP Type</option>
          <option value="patent">Patent</option>
          <option value="copyright">Copyright</option>
          <option value="trademark">Trademark</option>
        </select>

        <input
          type="text"
          name="jurisdiction"
          placeholder="Jurisdiction (e.g. India, US)"
          value={formData.jurisdiction}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <select
          name="licenseType"
          value={formData.licenseType}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Select License Type</option>
          <option value="exclusive">Exclusive</option>
          <option value="non-exclusive">Non-Exclusive</option>
        </select>

        <textarea
          name="description"
          placeholder="Description of the IP asset..."
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="4"
          required
        />

        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="w-full"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl shadow-md hover:scale-105 transform transition-all duration-300"
        >
          🚀 Submit for Registration
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
