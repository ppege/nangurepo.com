import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js'

export default function Projects() {
    return (
      <div className="dark:bg-gray-800 h-screen">
        <Header page="My Projects" />
        <div class="p-40 h-screen font-mono dark:text-white fade-in">
          <Hero title="My Projects" subtitle="These are the projects I've created." />
        </div>
        <Footer />
      </div>
    );
  }