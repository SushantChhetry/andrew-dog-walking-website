// --- TRUST BADGES COMPONENT ---
import React from 'react'

function TrustBadges() {
  const badges = [
    {
      id: 1,
      icon: '🛡️',
      text: 'Fully Insured',
      description: 'Comprehensive liability coverage'
    },
    {
      id: 2,
      icon: '📜',
      text: 'Certified',
      description: 'Professional dog care training'
    },
    {
      id: 3,
      icon: '⭐',
      text: '5-Star Rated',
      description: 'Loved by local pet parents'
    },
    {
      id: 4,
      icon: '🏠',
      text: 'Local Expert',
      description: 'Serving the community for 3+ years'
    }
  ]

  return (
    <div className="trust-badges">
      <div className="trust-badges-container">
        {badges.map(badge => (
          <div key={badge.id} className="trust-badge">
            <div className="trust-badge-icon">{badge.icon}</div>
            <div className="trust-badge-content">
              <div className="trust-badge-text">{badge.text}</div>
              <div className="trust-badge-description">{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBadges

