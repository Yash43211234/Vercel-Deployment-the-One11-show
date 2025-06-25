import React from 'react';

const DevelopmentNotice = () => {
  return (
    <div className="crazy-fantastic-notice-container">
      {/* Background Visual Noise & Layers */}
      <div className="noise-overlay"></div>
      <div className="scanlines-overlay"></div>
      <div className="color-split-filter"></div> {/* For chromatic aberration */}

      <div className="crazy-fantastic-content-wrapper">
        {/* Dynamic Static & Glitch Title */}
        <div className="system-status-display">
          <span className="status-prefix"> SYSTEM_STATE: </span>
          <span className="status-main-glitch">CRITICAL_DEV_PHASE</span>
          <span className="status-suffix">_INITIATED [//]</span>
        </div>

        {/* The Main Scrolling, Hyper-Glitching Marquee */}
        <div className="marquee-glitch-wrapper">
          <div className="marquee-glitch-text">
            <span className="msg-segment s1">Initializing new design protocols. Expect interface fluctuations.</span>
            <span className="msg-segment s2">Data stream optimization in progress. Visual artifacts possible.</span>
            <span className="msg-segment s3">Core functionality under continuous reconstruction. Patience advised.</span>
            <span className="msg-segment s4">Accessibility enhancements at 83%. Minor rendering errors detected.</span>
            <span className="msg-segment s5">Thank you for your cooperation during this critical update cycle.</span>
            <span className="msg-segment s6">Emergency broadcast override: This platform is evolving.</span>
            <span className="msg-segment s7">Further transmissions will occur. Stay tuned.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* --- Crazy Fantastic Development Notice Styles --- */

        :root {
          --dystopian-dark: #0a0110; /* Almost black, hint of deep purple */
          --cyber-red: #ff3366;     /* Vibrant, almost fuchsia red */
          --cyber-blue: #00e5ff;    /* Bright, electric blue */
          --cyber-green: #39ff14;   /* Classic neon green */
          --text-font: 'Press Start 2P', monospace; /* Pixelated retro font */
          --display-font: 'Orbitron', sans-serif;   /* Futuristic digital font */
          --glitch-speed: 0.05s;
        }

        /* --- Global Reset/Base (ensure these are applied where needed, e.g., in _app.js or global.css) --- */
        body { margin: 0; padding: 0; font-family: sans-serif; overflow-x: hidden; }
        /* Import fonts if you haven't globally: */
        /* @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Press+Start+2P&display=swap'); */

        .crazy-fantastic-notice-container {
          background-color: var(--dystopian-dark);
          position: relative;
          overflow: hidden; /* Crucial to contain all effects */
          width: 100%;
          min-height: 80px; /* More substantial height */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-bottom: 5px solid var(--cyber-red); /* Stronger border */
          box-shadow: 0 0 30px rgba(255, 51, 102, 0.4); /* Intense glow */
          perspective: 1000px; /* For potential 3D transforms */
        }

        /* Background Effects */
        .noise-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAAD9M+WkAAAABlBMVEUAAADu7u7lB8lKAAAAHElEQVR42tXBIQEAAAgDQf1/n+E9lY29qJ05o2UAAAAASUVORK5CYII=') repeat; /* Subtle static */
          opacity: 0.1;
          animation: noise-flicker 0.2s infinite alternate;
          z-index: 1;
        }

        .scanlines-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0px,
            rgba(0, 0, 0, 0.2) 2px,
            transparent 2px,
            transparent 4px
          );
          animation: scanlines-shift 1s infinite linear, scanlines-flicker 0.5s infinite alternate;
          z-index: 2;
        }

        .color-split-filter {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          mix-blend-mode: screen; /* Blends colors nicely */
          filter: brightness(1.2);
          pointer-events: none;
          z-index: 3;
        }
        .color-split-filter::before, .color-split-filter::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.2;
          animation: color-split 0.2s infinite alternate;
        }
        .color-split-filter::before {
          background-color: var(--cyber-red);
          transform: translate(-1px, -1px);
        }
        .color-split-filter::after {
          background-color: var(--cyber-blue);
          transform: translate(1px, 1px);
        }


        .crazy-fantastic-content-wrapper {
          position: relative;
          z-index: 10; /* Ensure text is on top */
          width: 100%;
          padding: 0 15px; /* Internal padding */
        }

        /* System Status Display (Main Title) */
        .system-status-display {
          font-family: var(--display-font); /* Futuristic font */
          font-size: clamp(16px, 3vw, 24px);
          color: var(--cyber-red);
          margin-bottom: 10px;
          text-align: center;
          text-shadow: 0 0 10px var(--cyber-red), 0 0 20px rgba(255, 51, 102, 0.5);
          white-space: nowrap;
          overflow: hidden; /* Contain inner glitches */
          transform: skewX(-5deg); /* Aggressive skew for a digital feel */
        }

        .status-prefix, .status-suffix {
          color: var(--cyber-blue);
          text-shadow: 0 0 8px var(--cyber-blue);
        }

        .status-main-glitch {
          color: var(--cyber-green);
          text-shadow: 0 0 10px var(--cyber-green), 0 0 20px rgba(57, 255, 20, 0.5);
          animation: critical-glitch 1s infinite linear alternate;
          display: inline-block;
        }

        /* Marquee Glitch Text */
        .marquee-glitch-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          height: clamp(20px, 3vw, 30px); /* Responsive height for marquee */
          display: flex;
          align-items: center;
          border-top: 1px dashed rgba(255,255,255,0.2);
          border-bottom: 1px dashed rgba(255,255,255,0.2);
          padding: 5px 0;
          box-sizing: border-box;
        }

        .marquee-glitch-text {
          display: inline-block;
          white-space: nowrap;
          padding-left: 100%; /* Start off-screen */
          animation: aggressive-marquee 30s linear infinite; /* Faster, more aggressive */
          font-family: var(--text-font); /* Pixelated font */
          font-size: clamp(12px, 2vw, 16px);
          color: var(--cyber-blue);
          text-shadow: 0 0 5px var(--cyber-blue);
        }

        .msg-segment {
          margin-right: 150px; /* Large gaps between messages */
          display: inline-block;
          position: relative;
          opacity: 0.9;
          filter: brightness(1);
          animation: msg-glitch 6s infinite ease-in-out; /* Main message glitch */
        }

        /* Individual message segment animation delays/variations for chaos */
        .msg-segment:nth-child(even) { animation-delay: 0.3s; }
        .msg-segment:nth-child(3n+1) { animation-delay: 0.6s; }
        .msg-segment:nth-child(4n) { animation-delay: 0.9s; }


        /* === Keyframe Animations === */

        /* Background Noise Flicker */
        @keyframes noise-flicker {
          0%, 100% { opacity: 0.1; }
          20% { opacity: 0.15; }
          40% { opacity: 0.08; }
          60% { opacity: 0.12; }
          80% { opacity: 0.09; }
        }

        /* Scanlines Movement & Flicker */
        @keyframes scanlines-shift {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; } /* Moves vertically */
        }
        @keyframes scanlines-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; } /* Subtle flicker */
        }

        /* Chromatic Abberation / Color Split */
        @keyframes color-split {
          0% { transform: translate(-1px, -1px); }
          25% { transform: translate(1px, 1px); }
          50% { transform: translate(-2px, 0px); }
          75% { transform: translate(0px, -2px); }
          100% { transform: translate(-1px, -1px); }
        }

        /* Main Critical Glitch */
        @keyframes critical-glitch {
            0%, 100% {
                text-shadow: 0 0 10px var(--cyber-green), 0 0 20px rgba(57, 255, 20, 0.5);
                transform: translateX(0) translateY(0) skewX(0deg);
                filter: brightness(1) contrast(1);
            }
            10% {
                text-shadow: 0 0 15px var(--cyber-red), 0 0 25px rgba(255, 51, 102, 0.7);
                transform: translateX(-2px) translateY(1px) skewX(10deg);
                filter: brightness(1.5) contrast(1.2);
            }
            20% {
                text-shadow: 0 0 10px var(--cyber-blue), 0 0 20px rgba(0, 229, 255, 0.5);
                transform: translateX(2px) translateY(-1px) skewX(-10deg);
                filter: brightness(0.8) contrast(0.8);
            }
            30% {
                transform: translateX(-1px) translateY(0px) skewX(5deg);
                filter: brightness(1.1);
            }
            40% {
                transform: translateX(1px) translateY(0px) skewX(-5deg);
                filter: brightness(0.9);
            }
            50% { opacity: 0.7; filter: blur(1px); }
            51% { opacity: 1; filter: blur(0px); }
            60% { transform: translateX(-0.5px); }
            70% { transform: translateX(0.5px); }
            80% { transform: translateY(-0.5px); }
            90% { transform: translateY(0.5px); }
        }

        /* Aggressive Marquee */
        @keyframes aggressive-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        /* Individual Message Glitch */
        @keyframes msg-glitch {
            0%, 100% {
                opacity: 0.9;
                transform: translate(0, 0) skew(0deg);
                filter: brightness(1);
                color: var(--cyber-blue);
            }
            5% {
                opacity: 0.7;
                transform: translate(1px, -1px) skew(2deg);
                filter: brightness(1.5) blur(0.5px);
                color: var(--cyber-green);
            }
            10% {
                opacity: 0.8;
                transform: translate(-1px, 1px) skew(-2deg);
                filter: brightness(0.8) blur(0.3px);
                color: var(--cyber-red);
            }
            15% {
                opacity: 0.95;
                transform: translate(0.5px, 0.5px) skew(1deg);
                filter: brightness(1.2);
                color: var(--cyber-blue);
            }
            20% {
                opacity: 0.8;
                transform: translate(-0.5px, -0.5px) skew(-1deg);
                filter: brightness(0.9) blur(0.2px);
                color: var(--cyber-green);
            }
            /* Random short bursts of intense glitch */
            30%, 32% { filter: invert(1) brightness(2); transform: scaleX(0.98); opacity: 0.5; }
            31% { filter: invert(0) brightness(1); transform: scaleX(1); opacity: 1; }
            50%, 52% { transform: translateY(2px); opacity: 0.6; }
            51% { transform: translateY(0); opacity: 1; }
            70%, 72% { transform: translateX(-2px); opacity: 0.5; }
            71% { transform: translateX(0); opacity: 1; }
        }


        /* --- Media Queries for smaller screens --- */
        @media (max-width: 768px) {
          .crazy-fantastic-notice-container {
            min-height: 60px;
            border-bottom-width: 3px;
          }
          .system-status-display {
            font-size: clamp(14px, 4vw, 20px);
            margin-bottom: 5px;
            transform: skewX(-3deg); /* Slightly less aggressive */
          }
          .marquee-glitch-wrapper {
            height: clamp(18px, 3.5vw, 24px);
            padding: 3px 0;
          }
          .marquee-glitch-text {
            font-size: clamp(10px, 2.5vw, 14px);
            animation-duration: 40s; /* Slower scroll for less overwhelming feel */
          }
          .msg-segment {
            margin-right: 80px; /* Reduce gaps */
          }
        }

        @media (max-width: 480px) {
          .crazy-fantastic-notice-container {
            min-height: 50px;
            padding: 0 5px;
          }
          .system-status-display {
            font-size: clamp(12px, 3.5vw, 16px);
            transform: none; /* No skew on tiny screens */
          }
          .status-prefix, .status-suffix {
            display: none; /* Hide static text to prioritize main message */
          }
          .marquee-glitch-wrapper {
            height: clamp(16px, 4vw, 20px);
          }
          .marquee-glitch-text {
            font-size: clamp(8px, 2vw, 12px);
            animation-duration: 50s; /* Even slower scroll */
          }
          .msg-segment {
            margin-right: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default DevelopmentNotice;