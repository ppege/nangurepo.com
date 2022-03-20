import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js'

export default function Projects() {
    return (
      <>
        <Header page="My Projects" />
        <Hero title="My Projects" subtitle="These are the projects I've created." />
        <Footer />
      </>
    );
  }