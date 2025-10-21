// --- SERVICE AREA SECTION ---
import React from 'react'

function ServiceArea() {
  const serviceAreas = [
    {
      id: 1,
      name: 'Cambridge',
      status: 'Primary Service Area',
      description: 'Full service coverage including all neighborhoods',
      features: ['Same-day booking available', 'Extended hours', 'Priority support'],
      icon: '🎓'
    },
    {
      id: 2,
      name: 'Somerville',
      status: 'Primary Service Area',
      description: 'Full service coverage including all neighborhoods',
      features: ['Same-day booking available', 'Extended hours', 'Priority support'],
      icon: '🏘️'
    },
    {
      id: 3,
      name: 'Back Bay',
      status: 'Primary Service Area',
      description: 'Full service coverage including all neighborhoods',
      features: ['Same-day booking available', 'Extended hours', 'Priority support'],
      icon: '🏛️'
    },
    {
      id: 4,
      name: 'Beacon Hill',
      status: 'Primary Service Area',
      description: 'Full service coverage including all neighborhoods',
      features: ['Same-day booking available', 'Extended hours', 'Priority support'],
      icon: '🏔️'
    },
    {
      id: 5,
      name: 'South End',
      status: 'Primary Service Area',
      description: 'Full service coverage including all neighborhoods',
      features: ['Same-day booking available', 'Extended hours', 'Priority support'],
      icon: '🌳'
    },
    {
      id: 6,
      name: 'North End',
      status: 'Primary Service Area',
      description: 'Full service coverage including all neighborhoods',
      features: ['Same-day booking available', 'Extended hours', 'Priority support'],
      icon: '🍝'
    },
    {
      id: 7,
      name: 'Charlestown',
      status: 'Extended Service Area',
      description: 'Limited service coverage with advance booking',
      features: ['24-hour advance booking', 'Standard hours', 'Regular support'],
      icon: '⚓'
    },
    {
      id: 8,
      name: 'Allston',
      status: 'Extended Service Area',
      description: 'Limited service coverage with advance booking',
      features: ['24-hour advance booking', 'Standard hours', 'Regular support'],
      icon: '🎨'
    },
    {
      id: 9,
      name: 'Brighton',
      status: 'Extended Service Area',
      description: 'Limited service coverage with advance booking',
      features: ['24-hour advance booking', 'Standard hours', 'Regular support'],
      icon: '🌅'
    }
  ]

  const coverageStats = [
    {
      number: '15+',
      label: 'Neighborhoods Served',
      description: 'Comprehensive coverage across Boston area'
    },
    {
      number: '30min',
      label: 'Average Response Time',
      description: 'Quick service availability'
    },
    {
      number: '7am-8pm',
      label: 'Service Hours',
      description: 'Extended hours for your convenience'
    },
    {
      number: '24hr',
      label: 'Advance Booking',
      description: 'Plan ahead for extended areas'
    }
  ]

  return (
    <section className="service-area" id="service-area">
      <div className="container">
        <h2 className="section-title">Service Areas</h2>
        <p className="section-subtitle">
          Proudly serving Boston area neighborhoods with reliable dog walking services
        </p>
        
        <div className="coverage-stats">
          {coverageStats.map((stat, index) => (
            <div key={index} className="coverage-stat">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="service-areas-grid">
          {serviceAreas.map(area => (
            <div key={area.id} className={`service-area-card ${area.status.toLowerCase().replace(' ', '-')}`}>
              <div className="area-header">
                <div className="area-icon">{area.icon}</div>
                <div className="area-info">
                  <h3 className="area-name">{area.name}</h3>
                  <span className="area-status">{area.status}</span>
                </div>
              </div>
              <p className="area-description">{area.description}</p>
              <ul className="area-features">
                {area.features.map((feature, index) => (
                  <li key={index} className="area-feature">
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="service-area-map">
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <h3>Interactive Service Area Map</h3>
            <p>Click on your neighborhood to see detailed coverage information</p>
            <div className="map-legend">
              <div className="legend-item">
                <div className="legend-color primary"></div>
                <span>Primary Service Area</span>
              </div>
              <div className="legend-item">
                <div className="legend-color extended"></div>
                <span>Extended Service Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="service-area-cta">
          <h3>Don't see your neighborhood?</h3>
          <p>We're always expanding our service areas! Contact us to see if we can serve your location.</p>
          <a href="#contact" className="btn btn-primary">Check My Area</a>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
