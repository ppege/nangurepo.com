import '../App.css';
import React from 'react'
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import IconButton from '../components/IconButton.js'
import { FaDiscord, FaEnvelope, FaTwitter, FaReddit } from 'react-icons/fa'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div className="dark:bg-gray-800">
      <Header page="Contact" />
      <div className="hero-container">
        <Hero title="Contact me" subtitle="These are my social media profiles, where you can contact me." />
        <div className="mt-10" />
        <div className="lg:columns-4">
          <IconButton text="Discord" icon={<FaDiscord size="100" />} href="https://discord.gg/xJK9VtVguF" newTab={true} />
          <IconButton text="Twitter" icon={<FaTwitter size="100" />} href="https://twitter.com/ytnangu" newTab={true} />
          <IconButton text="Reddit" icon={<FaReddit size="100" />} href="https://reddit.com/u/nangu_" newTab={true} />
          <IconButton text="E-mail" icon={<FaEnvelope size="100" />} href="https://mail.google.com/mail/u/0/?fs=1&to=nanguthenangu@gmail.com&tf=cm" newTab={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}