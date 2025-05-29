// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="button-bar">
      <div className="logo">
        <img src="/one_11_black.png" alt="Logo" />
      </div>

        <section className="heroo">
        <h1>Welcome to The One 11 Show</h1>
        <p>AN ARTIST LAUNCHPAD</p>
        <a href="#register" className="btn">Register Now</a>
      </section>

      <div className="right-space"></div>
    </div>
  );
}

export default Navbar;
