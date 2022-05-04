import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import ImageButton from '../components/ImageButton.js'
import Footer from '../components/Footer.js'
import ViggoscrapeLogo from '../viggoscrape.ico'
import ViggoViewerLogo from '../viggoscrape.ico'
import ApiLogo from '../api.png'

export default function Projects() {
    return (
      <div className="dark:bg-gray-800">
        <Header page="My Projects" />
        <div className="hero-container">
          <Hero title="My Projects" subtitle="These are the projects I've created." />
          <div className="lg:columns-3 mt-10">
            <ImageButton href='https://viggoscrape.nangurepo.com' text="Viggoscrape" image={<img src={ViggoscrapeLogo} className="app-icon" alt="Viggoscrape logo" />} />
            <ImageButton href='https://viewer.nangurepo.com' text="Viggo Viewer" image={<img src={ViggoViewerLogo} className="app-icon" alt="Viggo Viewer logo" />} />
            <ImageButton href='https://api.nangurepo.com' text="NanguRepo API" image={<img src={ApiLogo} className="app-icon" alt="API logo" />} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }