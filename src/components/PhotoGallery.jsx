// --- PHOTO GALLERY SECTION ---
import React, { useState } from 'react'

function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'walks', label: 'Adventure Walks', icon: '🚶' },
    { id: 'pack', label: 'Pack Walks', icon: '🐕‍🦺' },
    { id: 'puppies', label: 'Puppy Care', icon: '👶' },
    { id: 'seniors', label: 'Senior Dogs', icon: '🏥' }
  ]

  const photos = [
    {
      id: 1,
      category: 'walks',
      title: 'Luna exploring Discovery Park',
      description: 'Beautiful morning walk with Luna through the trails',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      category: 'pack',
      title: 'Happy pack at Green Lake',
      description: 'Group socialization walk with 4 friendly dogs',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 3,
      category: 'puppies',
      title: 'Bella learning to walk on leash',
      description: 'First successful leash training session',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 4,
      category: 'walks',
      title: 'Max enjoying the waterfront',
      description: 'Golden Retriever loving the Seattle waterfront',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 5,
      category: 'seniors',
      title: 'Charlie\'s gentle stroll',
      description: 'Senior dog enjoying a peaceful neighborhood walk',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 6,
      category: 'pack',
      title: 'Socialization success',
      description: 'New friends meeting during pack walk',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 7,
      category: 'walks',
      title: 'Adventure in the rain',
      description: 'Seattle weather doesn\'t stop our adventures',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 8,
      category: 'puppies',
      title: 'Puppy playtime',
      description: 'Young pup learning social skills',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 9,
      category: 'seniors',
      title: 'Comfortable pace',
      description: 'Senior dog enjoying a slow, comfortable walk',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop',
      featured: false
    }
  ]

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  const featuredPhotos = photos.filter(photo => photo.featured)

  return (
    <section className="photo-gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Adventure Gallery</h2>
        <p className="section-subtitle">
          See the joy and adventure in every walk
        </p>

        <div className="featured-photos">
          <h3>Featured Moments</h3>
          <div className="featured-grid">
            {featuredPhotos.map(photo => (
              <div key={photo.id} className="featured-photo-card">
                <div className="photo-container">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="featured-photo-img"
                  />
                </div>
                <div className="photo-info">
                  <h4>{photo.title}</h4>
                  <p>{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-filters">
          <h3>Browse by Category</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="gallery-photo-card">
              <div className="gallery-photo-container">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="gallery-photo-img"
                />
                <div className="photo-overlay">
                  <span className="overlay-icon">👁️</span>
                </div>
              </div>
              <div className="photo-caption">
                <h4>{photo.title}</h4>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <h3>Want to see your dog featured here?</h3>
          <p>Book a service and we'll capture amazing moments of your pup's adventures!</p>
          <a href="#contact" className="btn btn-primary">Book Your Adventure</a>
        </div>
      </div>
    </section>
  )
}

export default PhotoGallery
