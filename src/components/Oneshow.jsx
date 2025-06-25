import React, { useEffect } from "react";
import Layout from "./Animations/Layout"; // Assuming Layout handles global structure/animations
// import "./styles.css"; // We'll manage styles directly in this component for "crazy fantastic" effects

const Oneshow = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const leftImage = document.querySelector(".side-image.left");
      const rightImage = document.querySelector(".side-image.right");
      if (leftImage) leftImage.style.transform = `translateY(${scrollTop * 0.25}px) scale(1.02)`; // More subtle parallax
      if (rightImage) rightImage.style.transform = `translateY(${scrollTop * 0.25}px) scale(1.02)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="oneshow-crazy-fantastic-container"> {/* New main wrapper class */}
        {/* Side Images - Now with more visual intensity */}
        <div className="side-images-container">
          <img src="gallery1.jpg" alt="Left Visual" className="side-image left" />
          <img src="gallery1.jpg" alt="Right Visual" className="side-image right" />
        </div>

        {/* Hero Section - A grand, glowing entrance */}
        <section className="hero-section-crazy">
          <p className="hero-tagline">
            <span>&lt;</span>AN ARTIST LAUNCHPAD<span>/&gt;</span>
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfupbs5PK-pm7peJRzxmEBVlUkRKy0yJEZHe2zbn6mFHmJi7Q/viewform?usp=header"
            className="register-bn-crazy"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER NOW
            <span className="button-glitch-overlay"></span>
          </a>
        </section>

        {/* About Section - Data stream aesthetic */}
        <section id="about" className="about-section-matrix">
          <h2 className="about-heading-matrix">
            <span className="heading-prefix">[DATA_STREAM_INITIATED]</span> ABOUT THE ONE11 SHOW <span className="heading-suffix">[VERSION_2.0.25]</span>
          </h2>

          <p className="about-paragraph">
            Welcome to <strong className="highlight-text">The One11 Show</strong>, an artist launch platform powered by <strong className="highlight-text">The Chordifiers Studio</strong>.
          </p>

          <p className="about-paragraph">
            <strong className="sub-heading-matrix">Competitions Designed for Every Artist:</strong><br />
            Whether you're a powerhouse band, a lyrical singer-songwriter, a beat-dropping DJ, a masterful instrumentalist, or a captivating rapper,
            <strong className="highlight-text"> The One11 Show</strong> has a competition tailored for your unique artistic frequency. Dive into exhilarating challenges like:
          </p>

          <ul className="about-list-matrix">
            <li><strong className="list-item-title">Battle of Bands:</strong> Prove your prowess against other incredible groups within the sonic arena.</li>
            <li><strong className="list-item-title">Singer Songwriters:</strong> Transmit your original compositions and heartfelt lyrical data.</li>
            <li><strong className="list-item-title">DJs:</strong> Electrify the crowd with your modulated mixes and pulsating data-beats.</li>
            <li><strong className="list-item-title">Musicians:</strong> Showcase your instrumental virtuosity across all known digital genres.</li>
            <li><strong className="list-item-title">Rappers:</strong> Deliver your flow and encoded storytelling direct to the neural interface.</li>
          </ul>
        </section>
      </div>

      {/* Inline styles for this component */}
      <style jsx>{`
        /* --- Crazy Fantastic Global Variables --- */
        :root {
          --primary-red: #ff3366; /* Vibrant Red */
          --primary-pink: #cc0033; /* Deeper Red for background */
          --accent-purple: #8a2be2; /* Blue Violet */
          --accent-black: #050010; /* Near Black */
          --accent-gray: #1a1a2e; /* Darker Gray for subtle contrast */
          --font-primary: 'Orbitron', sans-serif; /* Futuristic geometric */
          --font-secondary: 'Anton', sans-serif; /* Bold, impactful */
          --font-tertiary: 'Bebas Neue', sans-serif; /* Clean, condensed */
          --text-light: #e0e0e0;
          --text-dimmed: #aaaaaa;
          --glow-blue: #00e5ff;
          --glow-green: #39ff14;
          --glow-red: #ff3366;
          --panel-border-color: rgba(0, 229, 255, 0.4);
          --panel-bg-color: rgba(10, 0, 20, 0.8); /* Dark, slightly transparent */
        }

        /* --- Global Reset/Base (ensure these are loaded globally in your app) --- */
        body {
          font-family: var(--font-primary);
          background-color: var(--accent-black); /* Dark background for intensity */
          color: var(--text-light);
          margin: 0;
          padding: 0;
          overflow-x: hidden; /* Prevent horizontal scroll from effects */
        }

        /* Font Imports (add these to your public/index.html <head> or global CSS) */
        /*
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Anton&family=Bebas+Neue&display=swap');
        */

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-secondary); /* Bold, impactful headings */
          color: var(--glow-blue); /* Default heading color */
          text-shadow: 0 0 5px rgba(0, 229, 255, 0.4);
        }

        p, ul, li {
          font-family: var(--font-primary); /* Consistent text font */
          color: var(--text-dimmed);
        }

        .oneshow-crazy-fantastic-container {
            position: relative;
            background-color: var(--accent-black); /* Main container BG */
            z-index: 1; /* Ensure content is above side images */
            overflow-x: hidden; /* Prevent scroll from glithces */
        }

        /* --- Side Images - Enhanced Parallax & Visuals --- */
        .side-images-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          pointer-events: none;
          z-index: 0; /* Behind content */
        }

        .side-image {
          position: absolute; /* Changed to absolute to use left/right for positioning */
          top: 0;
          width: 150px; /* Slightly wider */
          height: 100vh;
          object-fit: cover;
          opacity: 0.2; /* More subtle, like background data */
          filter: grayscale(100%) brightness(0.5) contrast(2) sepia(0.8) hue-rotate(180deg) blur(1px); /* Dystopian blueish filter */
          transition: transform 0.1s linear, opacity 0.5s; /* Faster transform for immediate feel */
          will-change: transform;
          animation: side-image-flicker 5s infinite alternate; /* Subtle flicker */
        }

        .side-image.left {
          left: 0;
        }

        .side-image.right {
          right: 0;
        }

        .side-image:hover {
          opacity: 0.3; /* Slight increase on hover */
          filter: grayscale(80%) brightness(0.7) contrast(2) sepia(0.5) hue-rotate(200deg) blur(0.5px); /* More distinct on hover */
        }

        @keyframes side-image-flicker {
            0%, 100% { opacity: 0.2; }
            10%, 30%, 70% { opacity: 0.25; }
            20%, 50%, 80% { opacity: 0.18; }
        }


        /* --- Hero Section - Grand Entrance --- */
        .hero-section-crazy {
          background: linear-gradient(145deg, var(--primary-pink) 0%, var(--accent-purple) 100%);
          color: var(--text-light);
          text-align: center;
          padding: 8rem 2rem; /* More vertical space */
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(255, 51, 102, 0.6); /* Intense glow */
          border-bottom: 5px solid var(--glow-red);
        }

        .hero-section-crazy::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, rgba(0, 229, 255, 0.15) 0%, transparent 60%);
            animation: hero-pulse 4s infinite ease-in-out alternate;
            pointer-events: none;
            z-index: 1;
        }

        .hero-tagline {
          font-family: var(--font-tertiary); /* Bebas Neue or similar */
          font-size: clamp(2.5rem, 6vw, 4.5rem); /* Very large, responsive */
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 5px; /* Spaced out text */
          margin-bottom: 3rem; /* More space */
          text-shadow: 0 0 15px var(--glow-blue), 0 0 30px rgba(0, 229, 255, 0.7); /* Double glow */
          animation: tagline-flicker 0.8s infinite alternate;
          position: relative; /* For glitch effect */
          z-index: 2; /* Above pseudo-elements */
        }

        .hero-tagline span {
            color: var(--glow-green); /* Bracket color */
            text-shadow: 0 0 10px var(--glow-green);
        }

        @keyframes tagline-flicker {
            0%, 100% { opacity: 1; transform: translateX(0); }
            5% { opacity: 0.9; transform: translateX(2px); }
            10% { opacity: 1; transform: translateX(-2px); }
            15% { opacity: 0.95; transform: translateX(1px); }
            20% { opacity: 1; transform: translateX(0); }
            80% { opacity: 1; }
            81% { opacity: 0.5; filter: blur(2px); }
            82% { opacity: 1; filter: blur(0px); }
        }

        @keyframes hero-pulse {
            0% { transform: scale(1); opacity: 0.15; }
            50% { transform: scale(1.05); opacity: 0.25; }
            100% { transform: scale(1); opacity: 0.15; }
        }


        /* Register Button - Hyper-stylized */
        .register-bn-crazy {
          background-color: var(--primary-red);
          color: var(--text-light);
          padding: 1.2rem 2.8rem; /* Larger button */
          border: 3px solid var(--glow-red);
          border-radius: 50px; /* Pill shape */
          cursor: pointer;
          font-weight: bold;
          font-size: 1.5rem; /* Larger font */
          text-transform: uppercase;
          letter-spacing: 2px;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease-out;
          box-shadow: 0 0 20px rgba(255, 51, 102, 0.7); /* Strong initial glow */
          z-index: 2; /* Above hero section effects */
        }

        .register-bn-crazy::before {
            content: '';
            position: absolute;
            top: -50%; left: -50%;
            width: 200%; height: 200%;
            background: radial-gradient(circle, var(--glow-green) 0%, transparent 60%);
            transform: scale(0);
            opacity: 0;
            transition: transform 0.5s ease-out, opacity 0.5s ease-out;
            z-index: -1;
        }

        .register-bn-crazy:hover {
          background-color: var(--glow-green); /* Color change on hover */
          color: var(--accent-black);
          box-shadow: 0 0 30px var(--glow-green), 0 0 60px rgba(57, 255, 20, 0.8); /* Intense green glow */
          transform: translateY(-5px) scale(1.02);
          border-color: var(--glow-green);
        }

        .register-bn-crazy:hover::before {
            transform: scale(1);
            opacity: 0.3;
        }

        /* Subtle glitch overlay for button */
        .button-glitch-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(255, 255, 255, 0.1);
            mix-blend-mode: overlay;
            animation: button-flicker 0.1s infinite alternate;
            opacity: 0; /* Hidden by default */
            transition: opacity 0.3s;
        }
        .register-bn-crazy:hover .button-glitch-overlay {
            opacity: 1;
        }
        @keyframes button-flicker {
            0%, 100% { transform: translateX(0); opacity: 0.1; }
            25% { transform: translateX(1px); opacity: 0.15; }
            50% { transform: translateX(-1px); opacity: 0.08; }
            75% { transform: translateX(0.5px); opacity: 0.12; }
        }


        /* --- About Section - Matrix Data Display --- */
        .about-section-matrix {
          background: linear-gradient(180deg, var(--accent-black) 0%, var(--accent-gray) 100%); /* Dark gradient */
          padding: 6rem 2rem;
          max-width: 1000px; /* Wider content area */
          margin: 0 auto;
          line-height: 1.8; /* Increased line height for readability */
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          border-top: 1px dashed rgba(255,255,255,0.1);
        }

        .about-section-matrix::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(0deg, transparent 98%, rgba(0,255,255,0.1) 99%, rgba(0,255,255,0.1) 100%);
            background-size: 100% 50px; /* Scanline effect */
            animation: scanline-animate 15s linear infinite;
            pointer-events: none;
            z-index: 0;
        }


        .about-heading-matrix {
          text-align: center;
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          margin-bottom: 3rem;
          color: var(--glow-red); /* Dominant red for heading */
          text-shadow: 0 0 10px var(--glow-red), 0 0 20px rgba(255, 51, 102, 0.6);
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          animation: heading-glitch 5s infinite alternate;
        }

        .heading-prefix, .heading-suffix {
            font-family: var(--font-primary); /* Use primary font for brackets */
            font-size: 0.5em; /* Smaller */
            vertical-align: middle;
            color: var(--glow-blue);
            text-shadow: 0 0 5px var(--glow-blue);
        }

        @keyframes heading-glitch {
            0%, 100% { transform: translateX(0) skewX(0); }
            10% { transform: translateX(-2px) skewX(5deg); }
            20% { transform: translateX(2px) skewX(-5deg); }
            30% { transform: translateX(-1px) skewX(2deg); }
            40% { transform: translateX(1px) skewX(-2deg); }
            50% { opacity: 0.8; filter: blur(0.5px); }
            51% { opacity: 1; filter: blur(0px); }
            60% { transform: translateX(0.5px); }
            70% { transform: translateX(-0.5px); }
            80% { transform: translateY(0.5px); }
            90% { transform: translateY(-0.5px); }
        }

        @keyframes scanline-animate {
            0% { background-position: 0% 0%; }
            100% { background-position: 0% 100%; } /* Move downwards */
        }


        .about-paragraph {
          font-size: clamp(1rem, 2vw, 1.15rem); /* Responsive font size */
          margin-bottom: 1.5rem;
          color: var(--text-dimmed);
          position: relative;
          padding-left: 20px;
          border-left: 2px solid rgba(255,255,255,0.1);
          animation: paragraph-fade-in 1s ease-out forwards; /* Fade in effect */
          opacity: 0;
        }
        .about-paragraph:nth-child(2) { animation-delay: 0.2s; }
        .about-paragraph:nth-child(3) { animation-delay: 0.4s; }


        .highlight-text {
          color: var(--glow-green);
          text-shadow: 0 0 5px var(--glow-green);
          font-weight: bold;
        }

        .sub-heading-matrix {
          display: block;
          font-family: var(--font-secondary);
          color: var(--glow-blue);
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 0 8px var(--glow-blue);
        }

        .about-list-matrix {
          list-style: none; /* Remove default bullets */
          padding-left: 0;
          margin-top: 2rem;
          display: grid; /* Grid layout for list items */
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .about-list-matrix li {
          background: var(--panel-bg-color); /* Darker background for list items */
          border: 1px solid var(--panel-border-color);
          border-radius: 8px;
          padding: 1.5rem;
          transition: all 0.3s ease-out;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .about-list-matrix li::before {
            content: '>>'; /* Custom bullet */
            color: var(--glow-red);
            font-family: var(--font-tertiary);
            font-size: 1.2rem;
            position: absolute;
            left: 15px;
            top: 1.5rem;
            text-shadow: 0 0 5px var(--glow-red);
            animation: bullet-flicker 2s infinite alternate;
        }
        .about-list-matrix li:nth-child(even)::before {
             animation-delay: 0.5s; /* Stagger flicker */
        }
        .about-list-matrix li:nth-child(3n)::before {
             animation-delay: 1s;
        }

        .about-list-matrix li:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 0 20px var(--glow-blue), 0 0 40px rgba(0, 229, 255, 0.6);
          border-color: var(--glow-blue);
          background-color: rgba(10, 0, 20, 0.95); /* Darker on hover */
        }
        .about-list-matrix li:hover .list-item-title {
            color: var(--glow-green); /* Title glows green */
        }


        .list-item-title {
          display: block;
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          color: var(--glow-blue);
          margin-bottom: 0.5rem;
          padding-left: 30px; /* Space for custom bullet */
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .about-list-matrix li p { /* Styles for the description if you add it later */
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--text-dimmed);
            padding-left: 30px;
        }

        @keyframes paragraph-fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes bullet-flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
        }


        /* --- Responsive Adjustments --- */

        /* General padding and side image exclusion */
        @media (min-width: 769px) {
          .hero-section-crazy,
          .about-section-matrix {
            padding-left: 170px; /* Slightly more than side-image width */
            padding-right: 170px;
          }
        }

        @media (max-width: 768px) {
          .side-images-container {
            display: none; /* Hide side images on smaller screens */
          }
          .hero-section-crazy {
            padding: 6rem 1rem;
          }
          .hero-tagline {
            font-size: clamp(2rem, 8vw, 3.5rem);
            letter-spacing: 2px;
          }
          .register-bn-crazy {
            padding: 1rem 2rem;
            font-size: 1.2rem;
          }
          .about-section-matrix {
            padding: 4rem 1rem;
          }
          .about-heading-matrix {
            font-size: clamp(1.6rem, 6vw, 2.5rem);
          }
          .about-paragraph {
            font-size: clamp(0.9rem, 2.5vw, 1rem);
          }
          .about-list-matrix {
            grid-template-columns: 1fr; /* Single column on small screens */
            gap: 1rem;
          }
          .about-list-matrix li {
            padding: 1rem;
          }
          .list-item-title {
            font-size: clamp(1rem, 3vw, 1.2rem);
            padding-left: 25px;
          }
          .about-list-matrix li::before {
              left: 10px;
              top: 1rem;
              font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
            .hero-section-crazy {
                padding: 4rem 0.8rem;
            }
            .hero-tagline {
                letter-spacing: 1px;
            }
            .register-bn-crazy {
                padding: 0.8rem 1.5rem;
                font-size: 1rem;
            }
            .about-section-matrix {
                padding: 3rem 0.8rem;
            }
            .about-heading-matrix {
                font-size: clamp(1.4rem, 7vw, 2rem);
                margin-bottom: 2rem;
            }
            .heading-prefix, .heading-suffix {
                font-size: 0.4em;
            }
        }
      `}</style>
    </Layout>
  );
};

export default Oneshow;