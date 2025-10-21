// --- TESTIMONIALS SECTION ---
import React, { useState, useEffect } from 'react'

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      location: 'Cambridge',
      dogName: 'Luna (Husky)',
      dogImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop&crop=face',
      text: 'Andrew is absolutely fantastic! My husky Luna has been walking with him for over a year now, and she absolutely adores him. He\'s incredibly reliable, always on time, and genuinely cares about each dog\'s individual needs. The photo updates he sends during their walks always brighten my day!',
      rating: '⭐⭐⭐⭐⭐',
      date: '2 months ago',
      verified: true
    },
    {
      id: 2,
      name: 'Mike T.',
      location: 'Somerville',
      dogName: 'Max (Golden Retriever)',
      dogImage: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=300&fit=crop&crop=face',
      text: 'Best dog walker in Boston! Our golden retriever Max gets so excited when he sees Andrew at the door. The pack walks have been amazing for Max\'s socialization, and Andrew\'s knowledge of dog behavior really shows. We\'ve tried other walkers, but Andrew is in a league of his own.',
      rating: '⭐⭐⭐⭐⭐',
      date: '1 month ago',
      verified: true
    },
    {
      id: 3,
      name: 'Emily R.',
      location: 'Back Bay',
      dogName: 'Bella (Lab Mix)',
      dogImage: 'https://images.unsplash.com/photo-1547407139-3c921a71905c?w=300&h=300&fit=crop&crop=face',
      text: 'I can\'t recommend Husky Trails enough! Andrew is professional, trustworthy, and genuinely loves what he does. Our rescue dog Bella was initially shy, but Andrew\'s patient approach helped her come out of her shell. The detailed reports after each walk show how much attention he pays to each dog.',
      rating: '⭐⭐⭐⭐⭐',
      date: '3 weeks ago',
      verified: true
    },
    {
      id: 4,
      name: 'David K.',
      location: 'Fremont',
      dogName: 'Charlie (Beagle)',
      dogImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=face',
      text: 'Andrew has been walking Charlie for 6 months now, and I couldn\'t be happier. He\'s flexible with scheduling, handles Charlie\'s high energy perfectly, and always keeps me updated. The fact that he\'s insured and certified gives me complete peace of mind.',
      rating: '⭐⭐⭐⭐⭐',
      date: '1 week ago',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa P.',
      location: 'Green Lake',
      dogName: 'Rocky (German Shepherd)',
      dogImage: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300&h=300&fit=crop&crop=face',
      text: 'As a first-time dog owner, I was nervous about leaving Rocky with someone else. Andrew made the whole process so easy with his meet & greet session. Rocky loves his walks, and I love the detailed updates and photos. Andrew truly treats every dog like his own!',
      rating: '⭐⭐⭐⭐⭐',
      date: '2 weeks ago',
      verified: true
    },
    {
      id: 6,
      name: 'Jennifer L.',
      location: 'Wallingford',
      dogName: 'Milo (French Bulldog)',
      dogImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop&crop=face',
      text: 'Andrew is amazing with my French Bulldog Milo! He understands that Milo needs shorter, gentler walks due to his breed, and always adjusts accordingly. The personalized care and attention to detail is exactly what every pet parent wants. Highly recommend!',
      rating: '⭐⭐⭐⭐⭐',
      date: '4 days ago',
      verified: true
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">Happy Tails</h2>
        <p className="section-subtitle">
          What our Boston area pet parents are saying
        </p>
        
        <div className="testimonials-stats">
          <div className="testimonial-stat">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Google Rating</div>
          </div>
          <div className="testimonial-stat">
            <div className="stat-number">200+</div>
            <div className="stat-label">Reviews</div>
          </div>
          <div className="testimonial-stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfied Clients</div>
          </div>
        </div>
        
        <div className="testimonials-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="testimonial-dog-image">
                        <img 
                          src={testimonial.dogImage}
                          alt={`${testimonial.dogName} - happy dog`}
                          className="testimonial-dog-img"
                        />
                      </div>
                      <div className="testimonial-info">
                        <div className="testimonial-name">{testimonial.name}</div>
                        <div className="testimonial-location">{testimonial.location}</div>
                        <div className="testimonial-dog">{testimonial.dogName}</div>
                        <div className="testimonial-rating">{testimonial.rating}</div>
                      </div>
                      <div className="testimonial-verified">
                        {testimonial.verified && <span className="verified-badge">✓ Verified</span>}
                      </div>
                    </div>
                    
                    <div className="testimonial-content">
                      <p className="testimonial-text">"{testimonial.text}"</p>
                    </div>
                    
                    <div className="testimonial-footer">
                      <div className="testimonial-date">{testimonial.date}</div>
                      <div className="testimonial-source">Google Review</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button 
              className="carousel-btn carousel-btn-prev"
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              ‹
            </button>
            <button 
              className="carousel-btn carousel-btn-next"
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              ›
            </button>
          </div>
          
          {/* Carousel Dots */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>
        
        <div className="testimonials-cta">
          <p>Ready to join our happy pack?</p>
          <a href="#contact" className="btn btn-primary">Book Your Free Meet & Greet</a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
