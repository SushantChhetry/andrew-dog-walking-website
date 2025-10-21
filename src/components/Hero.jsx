// --- HERO SECTION ---
import React from 'react'
import TrustBadges from './TrustBadges'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1571453992444-e541f5c00467?w=500&h=500&fit=crop&crop=face" 
            alt="Happy husky dog" 
            className="hero-dog-image"
          />
        </div>
        <h2 className="hero-headline">
          Your pup's adventure awaits in Boston!
        </h2>
        <p className="hero-subheadline">
          Professional dog walking and pet care services with a personal touch. 
          Trusted by 200+ local pet parents. Let's make every walk an exciting trail!
        </p>
        
        <TrustBadges />
        
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Book Your Free Meet & Greet</a>
          <a href="#services" className="btn btn-secondary">View Services & Pricing</a>
        </div>
        
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">200+</div>
            <div className="hero-stat-label">Happy Dogs</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">3+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">5.0</div>
            <div className="hero-stat-label">Google Rating</div>
          </div>
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
