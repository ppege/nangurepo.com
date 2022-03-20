import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import MainContent from '../components/Projects.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <>
      <Header page="My Projects" />
      <MainContent />
      <Footer />
    </>
  );
}