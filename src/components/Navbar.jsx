import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Corrected import
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate(); 

  const handleShowUpdates = () => {
    navigate('/updates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="button-bar">
        <div className="logo">
          <Link to="/" className="bn">
            <img src="/one_11_black.png" alt="Logo" />
          </Link>
        </div>

        <div className="nav-heading">
          <h1>Welcome to The One11 Show</h1>

          <div className="buttton-link">
            <Link to="/#team" className="bn">Home</Link>
            <Link to="/gallery#scroll" className="bn">Gallery</Link>
            <Link 
              to="https://docs.google.com/forms/d/e/1FAIpQLSfupbs5PK-pm7peJRzxmEBVlUkRKy0yJEZHe2zbn6mFHmJi7Q/viewform?usp=header" 
              target="_blank" 
              className="bn"
            >
              Register
            </Link>
            <Link to="/about#team" className="bn">About</Link>
            <Link to="/updates" className="bn">Updates</Link>
          </div>

          <h2 
            onClick={handleShowUpdates} 
            style={{
              textAlign: 'center',
              marginTop: '10px',
              color: '#222',
              fontSize: '18px',
              border: '1px solid white',
              background: 'white',
              borderRadius: '4px',
              padding: '3px',
              cursor: 'pointer' // ✅ Better UX
            }}
          >
            Click Here for the List of Selected Candidates
          </h2>
        </div>

        <div className="right-space"></div>
      </div>
    </>
  );
}

export default Navbar;
