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
      <div className="dark:bg-gray-800">
        <Header page="My Projects" />
        <div className="hero-container">
          <Hero title="My Projects" subtitle="These are the projects I've created." />
          <div className="lg:columns-3 mt-10">
            <ImageButton href='https://viggoscrape.nangurepo.com' text="Viggoscrape" image={<img src={ViggoscrapeLogo} className="app-icon" />} />
            <ImageButton href='https://assassin.nangurepo.com' text="Assassin Searcher" image={<img src={AssassinSearcherLogo} className="app-icon" />} />
            <ImageButton href='https://api.nangurepo.com' text="NanguRepo API" image={<img src={ApiLogo} className="app-icon" />} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }