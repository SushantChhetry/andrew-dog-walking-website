import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import About from './components/About'
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
        <ContactForm />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Husky Trails. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
