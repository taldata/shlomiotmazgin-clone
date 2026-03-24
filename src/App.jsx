import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
