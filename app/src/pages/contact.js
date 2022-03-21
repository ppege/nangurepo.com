import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <Header page="Contact" />
      <div class="p-40 h-screen font-mono dark:text-white fade-in">
        <Hero title="Contact me" subtitle="These are my social media profiles, where you can contact me." />
      </div>
      <Footer />
    </div>
  );
}