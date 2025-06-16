import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

function About() {
  const location = useLocation();
  const scrollTargetRef = useRef(null);

  const scrollWithOffset = () => {
    const element = scrollTargetRef.current;
    if (element) {
      const offset = 200; // Offset for any fixed header or just to not scroll too far
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash === '#team') {
      scrollWithOffset();
    }
  }, [location]);

  return (
    <section className="about-container">
      <div className="about-content">
        <h2 className="about-title">About the Show</h2>
        <p ref={scrollTargetRef} className="about-description">
          Welcome to <strong>The One11 Show</strong>, an artist launch platform brought to you by <strong>The
          Chordifiers Studio.</strong> <br /><br />
          Our mission is to propel talented artists and creators from diverse niches
          onto the global stage. We are dedicated to building creators and providing a
          robust platform for their introduction to the world.
        </p>
      </div>
    </section>
  );
}

export default About;
