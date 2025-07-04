// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";        
import Home from "./pages/Home";         
import Register from "./pages/Register"; 
import Explore from "./pages/Explore"; 
import AssetDetails from "./pages/AssetDetails";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/asset/:id" element={<AssetDetails />} />

      </Routes>
  )
}

export default App;
