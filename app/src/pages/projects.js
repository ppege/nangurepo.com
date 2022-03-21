import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import ImageButton from '../components/ImageButton.js'
import Footer from '../components/Footer.js'
import ViggoscrapeLogo from '../viggoscrape.ico'
import AssassinSearcherLogo from '../assassinsearcher.ico'
import ApiLogo from '../api.png'

export default function Projects() {
    return (
      <div className="dark:bg-gray-800 h-screen">
        <Header page="My Projects" />
        <div className="p-40 h-screen font-mono dark:text-white fade-in-down">
          <Hero title="My Projects" subtitle="These are the projects I've created." />
          <div className="lg:columns-3 mb-20 mt-10">
            <ImageButton href='https://viggoscrape.nangurepo.com' text="Viggoscrape" image={<img src={ViggoscrapeLogo} className="app-icon" />} newTab={true} />
            <ImageButton href='https://assassin.nangurepo.com' text="Assassin Searcher" image={<img src={AssassinSearcherLogo} className="app-icon" />} newTab={true} />
            <ImageButton href='https://api.nangurepo.com' text="NanguRepo API" image={<img src={ApiLogo} className="app-icon" />} newTab={true} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }