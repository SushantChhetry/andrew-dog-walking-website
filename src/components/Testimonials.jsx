// --- TESTIMONIALS SECTION ---
import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      text: 'Andrew is fantastic! My husky Luna absolutely loves her walks with him. He\'s reliable, caring, and always sends me adorable photos during their adventures.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      id: 2,
      name: 'Mike T.',
      text: 'Best dog walker in town! Our golden retriever Max gets so excited when he sees Andrew. The pack walks are perfect for socialization.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      id: 3,
      name: 'Emily R.',
      text: 'I can\'t recommend Husky Trails enough. Professional, trustworthy, and genuinely loves what he does. Our pup is in great hands!',
      rating: '⭐⭐⭐⭐⭐'
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">Happy Tails</h2>
        <p className="section-subtitle">
          What our clients are saying
        </p>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
