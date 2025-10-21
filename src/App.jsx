import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import About from './components/About'
import ServiceArea from './components/ServiceArea'
import PhotoGallery from './components/PhotoGallery'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <img src="/logo.png" alt="Husky Trails Logo" className="header-logo" />
          <h1 className="brand-name">Husky Trails</h1>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <ServiceArea />
        <PhotoGallery />
        <FAQ />
        <ContactForm />
      </main>

      {/* Mobile Sticky Contact Button */}
      <div className="mobile-sticky-contact">
        <a href="#contact" className="sticky-contact-btn">
          <span className="sticky-icon">📞</span>
          <span className="sticky-text">Book Now</span>
        </a>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Husky Trails. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
