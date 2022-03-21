import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import Button from '../components/Button.js'
import Footer from '../components/Footer.js'
import { FaGithub, FaDiscord, FaBoxOpen } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <Header page="Home" />
      <div className="p-40 h-screen font-mono dark:text-white fade-in">
        <Hero title="NanguRepo" subtitle="Web developer, React.js learner and API maintainer." />
        <div className="mt-10" />
        <div className="columns-3">
          <div><Button href='/#/projects' text="My projects" icon={<FaBoxOpen size="100" />} className="text-4xl font-sans h-full w-full" /></div>
          <div><Button href='/#/contact' text="Contact me" icon={<FaDiscord size="100" />} className="text-4xl font-sans h-full w-full" /></div>
          <div><Button href='/#/github' text="Visit my GitHub" icon={<FaGithub size="100" />} className="text-4xl font-sans h-full w-full" /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}