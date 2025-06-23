import React, { useEffect } from "react";
import "./styles.css";
import Layout from "./Animations/Layout";

const Oneshow = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const leftImage = document.querySelector(".side-image.left");
      const rightImage = document.querySelector(".side-image.right");
      if (leftImage) leftImage.style.transform = `translateY(${scrollTop * 0.2}px)`;
      if (rightImage) rightImage.style.transform = `translateY(${scrollTop * 0.2}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
        <Layout>
    <div >
      {/* Side Images */}
      <div className="side-images">
        <img src="gallery1.jpg" alt="Left Visual" className="side-image left" />
        <img src="gallery1.jpg" alt="Right Visual" className="side-image right" />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <p>AN ARTIST LAUNCHPAD</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfupbs5PK-pm7peJRzxmEBVlUkRKy0yJEZHe2zbn6mFHmJi7Q/viewform?usp=header"
          className="bn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about"
        style={{
          padding: '40px 20px',
          maxWidth: '900px',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6',
          color: '#333',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '32px',
            marginBottom: '20px',
            color: '#222',
          }}
        >
          About the Show
        </h2>

        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          Welcome to <strong>The One11 Show</strong>, an artist launch platform brought to you by <strong>The Chordifiers Studio</strong>.
        </p>

        <p style={{ fontSize: '18px' }}>
          <strong>Competitions Designed for Every Artist:</strong><br />
          Whether you're a powerhouse band, a lyrical singer-songwriter, a beat-dropping DJ, a masterful instrumentalist, or a captivating rapper,
          <strong> The One11 Show</strong> has a competition tailored for you. Dive into exhilarating challenges like:
        </p>

        <ul style={{ fontSize: '18px', paddingLeft: '20px', marginTop: '20px' }}>
          <li><strong>Battle of Bands:</strong> Prove your prowess against other incredible groups.</li>
          <li><strong>Singer Songwriters:</strong> Share your original compositions and heartfelt lyrics.</li>
          <li><strong>DJs:</strong> Electrify the crowd with your mixes and beats.</li>
          <li><strong>Musicians:</strong> Showcase your instrumental virtuosity across genres.</li>
          <li><strong>Rappers:</strong> Deliver your flow and storytelling on the mic.</li>
        </ul>
      </section>
    </div>
        </Layout>
  );
};

export default Oneshow;
