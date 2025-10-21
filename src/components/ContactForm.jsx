// --- CONTACT FORM SECTION ---
import React, { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submit - just log to console
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        dogName: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Ready to schedule a walk? Let's chat!
        </p>
        
        {submitted ? (
          <div className="success-message">
            <span className="success-icon">🎉</span>
            <h3>Thank you for reaching out!</h3>
            <p>We'll get back to you soon to schedule your pup's adventure.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="form-group">
                <label htmlFor="dogName">Dog's Name *</label>
                <input
                  type="text"
                  id="dogName"
                  name="dogName"
                  value={formData.dogName}
                  onChange={handleChange}
                  required
                  placeholder="Buddy"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your dog and what services you're interested in..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-submit">
              Send Message 🐾
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactForm
