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
    }
  ]

  return (
    <div className="trust-badges">
      <div className="trust-badges-container">
        {badges.map(badge => (
          <div key={badge.id} className="trust-badge-pill">
            <div className="trust-badge-icon">{badge.icon}</div>
            <div className="trust-badge-text">{badge.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBadges

