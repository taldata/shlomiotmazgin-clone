import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import DevelopmentPage from './pages/DevelopmentPage'
import './index.css'

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/development" element={<DevelopmentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
