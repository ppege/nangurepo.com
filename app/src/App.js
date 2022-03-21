import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/home.js'
import Projects from './pages/projects.js'
import Contact from './pages/contact.js'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/github" element={() => {window.location.href = "https://github.com/nangurepo"}} />
    </Routes>
  );
}