// --- CONTACT FORM SECTION ---
import React, { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    dogBreed: '',
    dogAge: '',
    dogSize: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    frequency: '',
    specialNeeds: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'individual-walk', label: 'Individual Dog Walking ($25/30min)' },
    { value: 'pack-walk', label: 'Pack Walks ($20/45min)' },
    { value: 'pet-sitting', label: 'Pet Sitting ($35/60min)' },
    { value: 'extended-walk', label: 'Extended Walks ($40/60min)' },
    { value: 'puppy-care', label: 'Puppy Care ($30/30min)' },
    { value: 'senior-care', label: 'Senior Dog Care ($25/30min)' },
    { value: 'starter-package', label: 'Starter Package ($100)' },
    { value: 'weekly-package', label: 'Weekly Package ($180)' },
    { value: 'monthly-package', label: 'Monthly Package ($650)' },
    { value: 'consultation', label: 'Free Consultation' }
  ]

  const dogSizeOptions = [
    { value: '', label: 'Select size...' },
    { value: 'small', label: 'Small (under 25 lbs)' },
    { value: 'medium', label: 'Medium (25-60 lbs)' },
    { value: 'large', label: 'Large (60-100 lbs)' },
    { value: 'extra-large', label: 'Extra Large (over 100 lbs)' }
  ]

  const frequencyOptions = [
    { value: '', label: 'Select frequency...' },
    { value: 'one-time', label: 'One-time service' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Bi-weekly' },
    { value: 'daily', label: 'Daily' },
    { value: 'custom', label: 'Custom schedule' }
  ]

  const timeSlots = [
    { value: '', label: 'Select preferred time...' },
    { value: 'morning', label: 'Morning (7:00 AM - 10:00 AM)' },
    { value: 'midday', label: 'Midday (10:00 AM - 2:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (2:00 PM - 5:00 PM)' },
    { value: 'evening', label: 'Evening (5:00 PM - 8:00 PM)' },
    { value: 'flexible', label: 'Flexible - any time works' }
  ]

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
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        dogName: '',
        dogBreed: '',
        dogAge: '',
        dogSize: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        frequency: '',
        specialNeeds: '',
        message: ''
      })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Book Your Service</h2>
        <p className="section-subtitle">
          Ready to give your pup the adventure they deserve? Let's get started!
        </p>
        
        {submitted ? (
          <div className="success-message">
            <span className="success-icon">🎉</span>
            <h3>Thank you for your booking request!</h3>
            <p>We'll contact you within 2 hours to confirm your service and schedule your free meet & greet.</p>
            <div className="success-details">
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>We'll call you to confirm details</li>
                <li>Schedule your free meet & greet</li>
                <li>Meet Andrew and your pup</li>
                <li>Start your dog's adventure!</li>
              </ul>
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3 className="form-section-title">Your Information</h3>
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
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceType">Service Type *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Your Dog's Information</h3>
              <div className="form-row">
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
                <div className="form-group">
                  <label htmlFor="dogBreed">Breed</label>
                  <input
                    type="text"
                    id="dogBreed"
                    name="dogBreed"
                    value={formData.dogBreed}
                    onChange={handleChange}
                    placeholder="Golden Retriever"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dogAge">Age</label>
                  <input
                    type="text"
                    id="dogAge"
                    name="dogAge"
                    value={formData.dogAge}
                    onChange={handleChange}
                    placeholder="3 years old"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dogSize">Size</label>
                  <select
                    id="dogSize"
                    name="dogSize"
                    value={formData.dogSize}
                    onChange={handleChange}
                  >
                    {dogSizeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Service Preferences</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Start Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preferredTime">Preferred Time</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    {timeSlots.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="frequency">Service Frequency</label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                  >
                    {frequencyOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="specialNeeds">Special Needs/Notes</label>
                  <input
                    type="text"
                    id="specialNeeds"
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleChange}
                    placeholder="Medication, behavior notes, etc."
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Additional Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us anything else about your dog, your needs, or questions you have..."
              ></textarea>
            </div>
            
            <div className="form-disclaimer">
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>We'll contact you within 2 hours</li>
                <li>Schedule your free meet & greet</li>
                <li>Meet Andrew and discuss your dog's needs</li>
                <li>Start your dog's adventure!</li>
              </ul>
            </div>
            
            <button type="submit" className="btn btn-primary btn-submit">
              Book My Service 🐾
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactForm
