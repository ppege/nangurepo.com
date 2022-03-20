import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <>
      <Header page="Contact" />
      <Hero title="Contact me" subtitle="These are my social media profiles, where you can contact me." />
      <Footer />
    </>
  );
}