// --- ABOUT SECTION ---
import React from 'react'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Husky Trails</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Meet Andrew</h3>
            <p>
              Hi! I'm Andrew, the founder of Husky Trails. My love for dogs started 
              with my own husky, Luna, who taught me that every walk is an adventure 
              waiting to happen. With years of experience in animal care and a genuine 
              passion for our four-legged friends, I created Husky Trails to provide 
              the kind of personalized, attentive care that every dog deserves.
            </p>
            <p>
              I believe that dogs thrive on routine, exercise, and most importantly, 
              love. Whether it's a neighborhood stroll or an exciting pack adventure, 
              I treat every dog like they're my own. Your pet's happiness and safety 
              are my top priorities.
            </p>
            <p className="about-cta-text">
              Let's give your pup the tail-wagging experience they deserve! 🐾
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-icon">✅</span>
              <span className="highlight-text">Certified & Insured</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">📸</span>
              <span className="highlight-text">Photo Updates</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🏃</span>
              <span className="highlight-text">Active & Energetic</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">💚</span>
              <span className="highlight-text">Dog Lover at Heart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
