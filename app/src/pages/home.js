import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import IconButton from '../components/IconButton.js'
import Footer from '../components/Footer.js'
import { FaGithub, FaPaperPlane, FaBoxOpen } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <Header page="Home" />
      <div className="p-40 h-screen font-mono dark:text-white fade-in-down">
        <Hero title="NanguRepo" subtitle="Web developer, React.js learner and API maintainer." />
        <div className="mt-10" />
        <div className="lg:columns-3">
          <div><IconButton href='/#/projects' text="My projects" icon={<FaBoxOpen size="100" />} className="text-4xl h-full w-full font-sans" /></div>
          <div><IconButton href='/#/contact' text="Contact me" icon={<FaPaperPlane size="100" />} className="text-4xl h-full w-full font-sans" /></div>
          <div><IconButton href='https://github.com/nangurepo' newTab={true} text="Visit my GitHub" icon={<FaGithub size="100" />} className="text-4xl h-full w-full font-sans" /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}