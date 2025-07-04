// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";        
import Home from "./pages/Home";         
import Register from "./pages/Register"; 
import Explore from "./pages/Explore"; 
import AssetDetails from "./pages/AssetDetails";
import Profile from "./pages/Profile";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/asset/:id" element={<AssetDetails />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
  )
}

export default App;
