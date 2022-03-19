import './App.css';
import React from 'react'
import Navbar from './components/Navbar.js'
import MainContent from './components/Homepage.js'

export default function App() {
  return (
    <>
      <Navbar />
      <MainContent />
    </>
  );
}