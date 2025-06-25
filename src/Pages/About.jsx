import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css'; // Ensure this CSS file is created and linked

function About() {
  const location = useLocation();
  const scrollTargetRef = useRef(null); // Ref for the #team section

  // Function to scroll with an offset, useful for fixed headers
  const scrollWithOffset = () => {
    const element = scrollTargetRef.current;
    if (element) {
      const offset = 100; // Adjust this value if your fixed header height changes
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Scrolls to the #team section if the hash matches
    if (location.hash === '#team') {
      scrollWithOffset();
    }
    // Also consider scrolling to top on initial load of the About page
    // if not coming from a hash link
    else if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]); // Depend on location to re-run when hash changes

  return (
    <div className="about-page-wrapper">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="hero-content">
          <h1>Igniting Creativity. Amplifying Voices.</h1>
          <p>
            Welcome to The One11 Show, where raw talent meets global opportunity.
            We are more than a platform; we are a launchpad for the next generation of creators.
          </p>
          <a href="#our-story" className="btn-discover">Discover Our Journey</a>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To propel talented artists and creators from diverse niches onto the global stage.
            We are dedicated to building sustainable careers, fostering a vibrant community where creativity thrives,
            and authentic voices find their resonance.
          </p>
        </div>
        <div className="vision-card">
          <h2>Our Vision</h2>
          <p>
            To be the premier artist development and launch platform, renowned for discovering and nurturing
            extraordinary talent, setting new benchmarks in creative expression, and inspiring a worldwide audience.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="our-story-section">
        <div className="story-header">
          <h2>Our Journey</h2>
          <p>A path paved with passion, dedication, and artistic breakthroughs.</p>
        </div>
        <div className="story-timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>[Year 1]: The Spark</h3>
              <p>The One11 Show concept was born within The Chordifiers Studio – a vision to bridge the gap between aspiring artists and a global audience.</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>[Year 2]: First Steps</h3>
              <p>Our inaugural showcase, a humble beginning that confirmed the immense talent waiting to be discovered, and the hunger for unique artistic expressions.</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>[Year 3]: Digital Expansion</h3>
              <p>Launched our comprehensive online platform, expanding our reach and introducing tailored development programs for diverse creative fields.</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>[Current Year]: Global Resonance</h3>
              <p>Today, we celebrate numerous success stories, with our artists making significant impacts worldwide, proving that authentic talent knows no bounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <h2>What Sets Us Apart</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-placeholder">🌟</div>
            <h3>Talent Incubation</h3>
            <p>Comprehensive development programs, mentorship, and personalized coaching tailored to each artist's unique needs and aspirations.</p>
          </div>
          <div className="service-card">
            <div className="icon-placeholder">🌍</div>
            <h3>Global Exposure</h3>
            <p>Strategic partnerships, cutting-edge digital platforms, and innovative marketing to ensure your art reaches audiences worldwide.</p>
          </div>
          <div className="service-card">
            <div className="icon-placeholder">🎬</div>
            <h3>Content Production</h3>
            <p>State-of-the-art audio-visual production facilities to create stunning, high-quality content that truly represents your artistry.</p>
          </div>
          <div className="service-card">
            <div className="icon-placeholder">🤝</div>
            <h3>Community & Networking</h3>
            <p>Join a supportive ecosystem of fellow creators, industry experts, and potential collaborators to foster growth and lasting connections.</p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Authenticity</h3>
            <p>We celebrate genuine expression and encourage artists to embrace their unique voice.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>Constantly seeking new methods and technologies to propel artistic careers forward.</p>
          </div>
          <div className="value-item">
            <h3>Empowerment</h3>
            <p>Providing the tools, knowledge, and confidence for artists to thrive independently.</p>
          </div>
          <div className="value-item">
            <h3>Collaboration</h3>
            <p>Fostering a supportive environment where artists can connect, learn, and grow together.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="team-section" ref={scrollTargetRef}>
        <h2>Meet Our Visionaries</h2>
        <div className="team-grid">
          {/* Example Team Member Card 1 */}
          <div className="team-member-card">
            <div className="member-photo-circle">
              {/* Replace with actual image */}
              <img src="https://via.placeholder.com/150/FF6347/FFFFFF?text=Jane" alt="Jane Doe" />
            </div>
            <h3>Jane Doe</h3>
            <p className="member-role">Founder & CEO</p>
            <p className="member-bio">A visionary leader with a deep passion for the arts and a proven track record in talent development.</p>
          </div>

          {/* Example Team Member Card 2 */}
          <div className="team-member-card">
            <div className="member-photo-circle">
              {/* Replace with actual image */}
              <img src="https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Alex" alt="Alex Smith" />
            </div>
            <h3>Alex Smith</h3>
            <p className="member-role">Head of A&R</p>
            <p className="member-bio">An industry veteran with an unparalleled ear for raw talent and a knack for nurturing creative potential.</p>
          </div>

          {/* Example Team Member Card 3 */}
          <div className="team-member-card">
            <div className="member-photo-circle">
              {/* Replace with actual image */}
              <img src="https://via.placeholder.com/150/3CB371/FFFFFF?text=Sarah" alt="Sarah Lee" />
            </div>
            <h3>Sarah Lee</h3>
            <p className="member-role">Creative Director</p>
            <p className="member-bio">Drives the visual and conceptual identity of our artists, ensuring captivating and memorable presentations.</p>
          </div>

          {/* Example Team Member Card 4 */}
          <div className="team-member-card">
            <div className="member-photo-circle">
              {/* Replace with actual image */}
              <img src="https://via.placeholder.com/150/FFD700/000000?text=Chris" alt="Chris Green" />
            </div>
            <h3>Chris Green</h3>
            <p className="member-role">Community Manager</p>
            <p className="member-bio">Dedicated to fostering a vibrant and supportive community where artists connect, collaborate, and grow.</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
}

export default About;