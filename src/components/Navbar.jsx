import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Make sure this CSS file is correctly linked

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleShowUpdates = () => {
    navigate('/updates');
    // Small delay to allow navigation to complete before attempting to scroll
    setTimeout(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 100);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Effect to manage body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset'; // Re-enable scrolling
    }
    // Cleanup function to ensure overflow is reset when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="navbar-container"> {/* Main container for increased specificity */}
      <div className={`button-bar ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="logo">
          <Link to="/" className="bn">
            <img src="/one_11_black.png" alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Content - this div will be hidden/shown and styled via CSS */}
        <div className={`nav-content ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="nav-heading">
            <h1>Welcome to The One11 Show</h1>

            <div className="buttton-link">
              <Link to="/" className="bn" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/gallery" className="bn" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSfupbs5PK-pm7peJRzxmEBVlUkRKy0yJEZHe2zbn6mFHmJi7Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bn"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
              <Link to="/about" className="bn" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/updates" onClick={handleShowUpdates} className="bn">Updates</Link>
            </div>

            <h2
              onClick={handleShowUpdates}
              className="selected-candidates-button"
            >
              Click Here for the List of Selected Candidates
            </h2>
          </div>
        </div>

        {/* This div might be removed if not needed for desktop layout balancing */}
        <div className="right-space"></div>
      </div>
    </div>
  );
}

export default Navbar;