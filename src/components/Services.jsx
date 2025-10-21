// --- SERVICES SECTION ---
import React from 'react'

function Services() {
  const services = [
    {
      id: 1,
      icon: '🚶',
      title: 'Individual Dog Walking',
      price: '$25',
      duration: '30 minutes',
      description: 'Personalized one-on-one walks tailored to your dog\'s energy level, age, and specific needs. Perfect for dogs who prefer individual attention or have special requirements.',
      features: [
        'Personalized route planning',
        'Photo updates during walk',
        'Detailed walk report',
        'Flexible scheduling',
        'Special needs accommodation'
      ],
      popular: false
    },
    {
      id: 2,
      icon: '🐕‍🦺',
      title: 'Pack Walks',
      price: '$20',
      duration: '45 minutes',
      description: 'Socialization sessions with other friendly dogs in carefully matched groups. Great for building confidence and social skills while getting exercise.',
      features: [
        'Carefully matched dog groups',
        'Socialization benefits',
        'Extended 45-minute duration',
        'Group photo updates',
        'Behavior monitoring'
      ],
      popular: true
    },
    {
      id: 3,
      icon: '🏠',
      title: 'Pet Sitting',
      price: '$35',
      duration: '60 minutes',
      description: 'Comprehensive in-home care while you\'re away. Includes feeding, playtime, medication administration, and lots of love for your furry friend.',
      features: [
        'In-home care',
        'Feeding & medication',
        'Playtime & exercise',
        'House sitting included',
        'Daily check-ins'
      ],
      popular: false
    },
    {
      id: 4,
      icon: '🌅',
      title: 'Extended Walks',
      price: '$40',
      duration: '60 minutes',
      description: 'Extended adventure walks for high-energy dogs or those who need extra exercise. Perfect for working breeds and active pups.',
      features: [
        'Extended 60-minute duration',
        'Adventure route planning',
        'High-energy dog focus',
        'Extra exercise time',
        'Detailed activity report'
      ],
      popular: false
    },
    {
      id: 5,
      icon: '👶',
      title: 'Puppy Care',
      price: '$30',
      duration: '30 minutes',
      description: 'Specialized care for puppies including potty training reinforcement, basic command practice, and gentle socialization.',
      features: [
        'Puppy-specific care',
        'Potty training support',
        'Basic command practice',
        'Gentle socialization',
        'Puppy development tracking'
      ],
      popular: false
    },
    {
      id: 6,
      icon: '🏥',
      title: 'Senior Dog Care',
      price: '$25',
      duration: '30 minutes',
      description: 'Gentle, specialized care for senior dogs including shorter walks, medication administration, and comfort-focused attention.',
      features: [
        'Gentle, slow-paced walks',
        'Medication administration',
        'Comfort-focused care',
        'Health monitoring',
        'Flexible duration'
      ],
      popular: false
    }
  ]

  const packages = [
    {
      id: 1,
      name: 'Starter Package',
      price: '$100',
      originalPrice: '$125',
      description: 'Perfect for trying out our services',
      services: ['3 Individual Walks', '1 Pack Walk', 'Free Meet & Greet'],
      popular: false
    },
    {
      id: 2,
      name: 'Weekly Package',
      price: '$180',
      originalPrice: '$225',
      description: 'Great for regular weekly care',
      services: ['5 Individual Walks', '2 Pack Walks', 'Photo Updates', 'Priority Booking'],
      popular: true
    },
    {
      id: 3,
      name: 'Monthly Package',
      price: '$650',
      originalPrice: '$800',
      description: 'Best value for committed clients',
      services: ['20 Individual Walks', '8 Pack Walks', 'Free Pet Sitting', 'Priority Support'],
      popular: false
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Professional dog care services tailored to your pet's needs
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className={`service-card ${service.popular ? 'popular' : ''}`}>
              {service.popular && <div className="popular-badge">Most Popular</div>}
              <div className="service-image">
                <img 
                  src={`https://images.unsplash.com/photo-${service.id === 1 ? '1552053831-71594a27632d' : service.id === 2 ? '1583337130417-3346a1be7dee' : service.id === 3 ? '1601758228041-f3b2795255f1' : service.id === 4 ? '1548199973-03cce0bbc87b' : service.id === 5 ? '1587300003388-59208cc962cb' : '1601758228041-f3b2795255f1'}?w=300&h=200&fit=crop`}
                  alt={service.title}
                  className="service-img"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-pricing">
                <span className="service-price">{service.price}</span>
                <span className="service-duration">per {service.duration}</span>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary service-btn">Book This Service</a>
            </div>
          ))}
        </div>
        
        <div className="packages-section">
          <h3 className="packages-title">Service Packages</h3>
          <p className="packages-subtitle">Save more with our bundled packages</p>
          
          <div className="packages-grid">
            {packages.map(package => (
              <div key={package.id} className={`package-card ${package.popular ? 'popular' : ''}`}>
                {package.popular && <div className="popular-badge">Best Value</div>}
                <h4 className="package-name">{package.name}</h4>
                <div className="package-pricing">
                  <span className="package-price">{package.price}</span>
                  <span className="package-original-price">{package.originalPrice}</span>
                </div>
                <p className="package-description">{package.description}</p>
                <ul className="package-services">
                  {package.services.map((service, index) => (
                    <li key={index} className="package-service">
                      <span className="service-icon">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary package-btn">Choose Package</a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="services-cta">
          <h3>Not sure which service is right for your dog?</h3>
          <p>Book a free meet & greet and we'll help you choose the perfect service!</p>
          <a href="#contact" className="btn btn-secondary">Schedule Free Consultation</a>
        </div>
      </div>
    </section>
  )
}

export default Services
