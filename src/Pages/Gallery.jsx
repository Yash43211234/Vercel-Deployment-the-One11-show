"use client";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform, // We'll primarily use useTransform for parallax
} from "framer-motion";

function Gallery() {
  const navigate = useNavigate();
  const location = useLocation();

  // No internal scrollRef needed, we'll use the document scroll
  const { scrollYProgress } = useScroll(); // Tracks scroll progress of the entire document

  // Define parallax transformations for different items
  // These will map the document's scroll progress (0-1) to pixel movements
  const yParallax1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]); // Moves slightly up/down
  const yParallax2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);   // Moves slightly down/up
  const xParallax1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);   // Moves slightly left/right
  const xParallax2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);   // Moves slightly right/left

  useEffect(() => {
    // Keep this for navigation with hash, though parallax is global
    if (location.hash === "#scroll") {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  }, [location]);

  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  const handleImageClick = () => {
    navigate("/"); // Navigate to home on image click
  };

  // The new inline CSS for the component
  const galleryStyles = `
/* CSS Variables for easy customization */
:root {
    --gallery-bg-light: #f5f5f5;
    --gallery-bg-dark: #1a1a1a;
    --accent-red: #e74c3c;
    --accent-blue: #3498db;
    --text-color-dark: #333;
    --text-color-light: #e0e0e0;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --transition-speed: 0.4s;
}

body {
    /* Ensure no conflicting body styles if not already done globally */
    margin: 0;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

.gallery-container-new {
    background: linear-gradient(145deg, var(--gallery-bg-light), #ffffff);
    padding: 6rem 2rem; /* More generous padding */
    text-align: center;
    min-height: 100vh;
    overflow: hidden; /* Crucial to prevent parallax overflow creating scrollbars */
    position: relative; /* For relative positioning of child elements if needed */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.gallery-title-new {
    font-size: clamp(3rem, 6vw, 5rem); /* Very large, responsive title */
    color: var(--accent-red);
    margin-bottom: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
}

.gallery-subtitle-new {
    font-size: clamp(1.4rem, 2.8vw, 2.2rem);
    color: var(--text-color-dark);
    margin-bottom: 5rem; /* Generous space before the grid */
    max-width: 800px;
    line-height: 1.5;
}

.dynamic-gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Flexible columns */
    grid-auto-rows: minmax(280px, auto); /* Min height for rows, auto for content */
    gap: 30px; /* Space between grid items */
    width: 100%;
    max-width: 1200px; /* Max width for the grid */
    padding: 0 1rem; /* Padding for responsiveness */
    position: relative; /* For overlapping effects */
    margin-bottom: 5rem; /* Space below the grid */
}

.gallery-item-new {
    position: relative; /* Allows z-index and subtle transforms */
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 15px 40px var(--shadow-color), 0 0 20px rgba(231, 76, 60, 0.2); /* Enhanced shadow with glow */
    cursor: pointer;
    transition: transform var(--transition-speed) ease-out, box-shadow var(--transition-speed) ease-out, z-index 0.1s linear; /* Fast z-index for hover */
    will-change: transform; /* Hint for browser optimization */
}

/* Specific grid-area for each item for varied layout and overlapping */
.gallery-item-new:nth-child(1) {
    grid-column: span 2; /* Spans 2 columns */
    grid-row: span 2; /* Spans 2 rows */
    z-index: 5;
    transform: rotate(-3deg); /* Initial rotation */
}
.gallery-item-new:nth-child(2) {
    z-index: 4;
    transform: rotate(2deg);
}
.gallery-item-new:nth-child(3) {
    grid-column: span 1;
    grid-row: span 2;
    z-index: 3;
    transform: rotate(-1deg);
}
.gallery-item-new:nth-child(4) {
    z-index: 6; /* Higher z-index for this item */
    transform: rotate(4deg);
}
.gallery-item-new:nth-child(5) {
    grid-column: span 2; /* Spans 2 columns */
    z-index: 2;
    transform: rotate(-5deg);
}
/* Add more :nth-child rules if you have more images for unique layouts */


.gallery-item-new:hover {
    transform: scale(1.07) rotate(0deg) translateZ(10px); /* Enlarged, straightened, and lifted */
    box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 30px var(--accent-red); /* More intense shadow and glow */
    z-index: 10; /* Bring to front on hover */
}

.gallery-image-new {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px; /* Match parent */
    filter: brightness(0.95) contrast(1.05); /* Subtle visual pop */
    transition: transform var(--transition-speed) ease-out;
}

.gallery-item-new:hover .gallery-image-new {
    transform: scale(1.02); /* Slight scale on image inside item */
}

/* Dark theme option if you want to switch */
.gallery-container-dark {
    background: linear-gradient(145deg, #1a1a1a, #000000);
    .gallery-title-new, .gallery-subtitle-new {
        color: var(--text-color-light);
    }
}


/* Media Queries for smaller screens */
@media (max-width: 992px) {
    .gallery-container-new {
        padding: 4rem 1rem;
    }
    .gallery-title-new {
        font-size: clamp(2.5rem, 5vw, 4rem);
    }
    .gallery-subtitle-new {
        font-size: clamp(1.2rem, 2.5vw, 1.8rem);
        margin-bottom: 3rem;
    }
    .dynamic-gallery-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 0 0.5rem;
    }
    .gallery-item-new:nth-child(1),
    .gallery-item-new:nth-child(3),
    .gallery-item-new:nth-child(5) {
        grid-column: span 1; /* Reduce spans on smaller screens for better stacking */
        grid-row: auto;
        transform: none; /* Remove initial rotation for mobile for cleaner look */
    }
    .gallery-item-new:nth-child(2),
    .gallery-item-new:nth-child(4) {
        transform: none; /* Remove initial rotation */
    }
    .gallery-item-new:hover {
        transform: scale(1.05) translateZ(0px); /* Less dramatic pop on mobile */
    }
}

@media (max-width: 600px) {
    .gallery-container-new {
        padding: 3rem 0.5rem;
    }
    .gallery-title-new {
        font-size: clamp(2rem, 4.5vw, 3.5rem);
    }
    .gallery-subtitle-new {
        font-size: clamp(1rem, 2vw, 1.5rem);
        margin-bottom: 2rem;
    }
    .dynamic-gallery-grid {
        grid-template-columns: 1fr; /* Single column on very small screens */
        gap: 15px;
    }
    .gallery-item-new {
        min-height: 200px;
    }
}
`;

  return (
    <div className="gallery-container-new">
      <h1 className="gallery-title-new">Captured Moments</h1>
      <p className="gallery-subtitle-new">
        Step into our visual journey and relive the vibrant energy of The One11
        Show.
      </p>

      <div className="dynamic-gallery-grid">
        {images.map((src, index) => {
          // Assign different parallax motions to items based on index
          let motionProps = {};
          if (index % 4 === 0) {
            motionProps.style = { y: yParallax1 };
          } else if (index % 4 === 1) {
            motionProps.style = { y: yParallax2 };
          } else if (index % 4 === 2) {
            motionProps.style = { x: xParallax1 };
          } else {
            motionProps.style = { x: xParallax2 };
          }

          return (
            <motion.div
              key={index}
              className={`gallery-item-new`} // Removed specific item-${index} class
              onClick={handleImageClick}
              initial={{ opacity: 0, scale: 0.8, rotate: (index % 2 === 0 ? -5 : 5) }} // Initial slight rotation/scale
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }} // Animate into view, straighten
              viewport={{ once: true, amount: 0.3 }} // Animate only once when 30% visible
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.08 }} // Staggered delay
              {...motionProps} // Apply parallax styles
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="gallery-image-new"
              />
            </motion.div>
          );
        })}
      </div>

      <style>{galleryStyles}</style>
    </div>
  );
}

export default Gallery;