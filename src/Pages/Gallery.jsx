import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Gallery.css'; // Import custom CSS

function Gallery() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll down a bit if URL has #scroll
  useEffect(() => {
    if (location.hash === '#scroll') {
      window.scrollTo({ top: 200, behavior: 'smooth' }); // Adjust scroll position as needed
    }
  }, [location]);

  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
    // Add more image paths as needed
  ];

  const handleImageClick = () => {
    navigate('/');  // Navigate to the homepage
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-subtitle">Moments from The One11 Show</p>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index} onClick={handleImageClick}>
            <img src={src} alt={`Gallery ${index}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
