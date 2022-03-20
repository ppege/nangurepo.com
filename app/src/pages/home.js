import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js'
import logo from '../logo.png'

export default function Home() {
  return (
    <>
      <Header page="Home" />
      <Hero title="NanguRepo" subtitle="Web developer, React.js learner and API maintainer." img={logo} />
      <Footer />
    </>
  );
}