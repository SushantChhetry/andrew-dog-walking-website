// --- SERVICE AREA SECTION ---
import React from 'react'

function ServiceArea() {

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


        <div className="service-area-map">
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <h3>Service Coverage Map</h3>
            <p>We cover 15+ neighborhoods across the Boston area</p>
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
