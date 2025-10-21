// --- HERO SECTION ---
import React from 'react'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-emoji">🐕</div>
        <h2 className="hero-headline">
          Your pup's adventure awaits!
        </h2>
        <p className="hero-subheadline">
          Professional dog walking and pet care services with a personal touch. 
          Let's make every walk an exciting trail!
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Book a Walk</a>
          <a href="#services" className="btn btn-secondary">Learn More</a>
        </div>
        <div className="hero-icons">
          <span className="hero-icon">🐾</span>
          <span className="hero-icon">🦴</span>
          <span className="hero-icon">❤️</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
