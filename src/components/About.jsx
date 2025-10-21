// --- ABOUT SECTION ---
import React from 'react'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Husky Trails</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
              alt="Andrew with his dog Luna" 
              className="about-photo"
            />
          </div>
          <div className="about-text">
            <h3>Meet Andrew - Your Local Dog Walking Expert</h3>
            <p>
              Hi! I'm Andrew, the founder of Husky Trails and your dedicated dog walking 
              professional. My journey with dogs began with my own Siberian Husky, Luna, 
              who taught me that every walk is an adventure waiting to happen. With over 
              3 years of professional experience and a genuine passion for our four-legged 
              friends, I created Husky Trails to provide the kind of personalized, 
              attentive care that every dog deserves.
            </p>
            <p>
              I'm certified in Pet First Aid & CPR, fully insured, and have completed 
              professional dog behavior training. I believe that dogs thrive on routine, 
              exercise, and most importantly, love. Whether it's a neighborhood stroll 
              or an exciting pack adventure, I treat every dog like they're my own. 
              Your pet's happiness and safety are my top priorities.
            </p>
            <p>
              <strong>Fun Fact:</strong> I've walked over 200 different dogs in the Boston 
              area and have never met a pup I didn't love! From energetic puppies to 
              senior dogs who prefer gentle strolls, I adapt my approach to each dog's 
              unique personality and needs.
            </p>
            <p className="about-cta-text">
              Let's give your pup the tail-wagging experience they deserve! 🐾
            </p>
          </div>
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
    </section>
  )
}

export default About
