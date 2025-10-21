// --- SERVICES SECTION ---
import React from 'react'

function Services() {
  const services = [
    {
      id: 1,
      icon: '🚶',
      title: 'Dog Walking',
      description: 'Daily walks tailored to your dog\'s energy level and needs. From leisurely strolls to energetic adventures.'
    },
    {
      id: 2,
      icon: '🐕‍🦺',
      title: 'Pack Walks',
      description: 'Socialization sessions with other friendly dogs. Safe, supervised group adventures in the great outdoors.'
    },
    {
      id: 3,
      icon: '🏠',
      title: 'Pet Sitting',
      description: 'Reliable in-home care while you\'re away. Feeding, playtime, and lots of love for your furry friend.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive care for your beloved companions
        </p>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
