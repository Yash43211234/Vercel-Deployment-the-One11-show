"use client";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";

// Mask gradient changes based on scrollX
function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 20%, #000 100%, #000)`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 20%, #000 80%, #0000)`
      );
    }
  });

  return maskImage;
}

function Gallery() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#scroll") {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  }, [location]);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  const handleImageClick = () => {
    navigate("/");
  };

  const galleryStyles = `
.gallery-container {
  padding: 3rem 2rem;
  background: #f9f9f9;
  text-align: center;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.gallery-title {
  font-size: 2.5rem;
  color: #c2185b;
  margin-bottom: 0.5rem;
}

.gallery-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.horizontal-gallery {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 0;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.horizontal-gallery::-webkit-scrollbar {
  height: 5px;
}
.horizontal-gallery::-webkit-scrollbar-thumb {
  background: #c2185b;
  border-radius: 2rem;
}

.gallery-item {
  flex: 0 0 420px;
  height: 340px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  scroll-snap-align: start;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px;
}

/* Progress Circle */
#progress {
  position: absolute;
  top: 10px;
  left: 20px;
  transform: rotate(-90deg);
}

.bg {
  stroke: #ccc;
  fill: none;
  stroke-width: 10;
}

.indicator {
  stroke: #c2185b;
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
}

/* Mobile View: Vertical Layout */
@media (max-width: 600px) {
  .horizontal-gallery {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    height: 80vh;
  }

  .horizontal-gallery::-webkit-scrollbar {
    width: 5px;
    height: 0;
  }

  .horizontal-gallery::-webkit-scrollbar-thumb {
    background: #c2185b;
    border-radius: 2rem;
  }

  .gallery-item {
    width: 100%;
    max-height: 250px;
    height: auto;
    flex: 0 0 auto;
  }

  .gallery-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
`;

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-subtitle">Moments from The One11 Show</p>

      {/* Scroll Progress Circle */}
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      {/* Gallery Scrollable Container */}
      <motion.ul
        ref={scrollRef}
        style={{ maskImage }}
        className="horizontal-gallery"
      >
        {images.map((src, index) => (
          <li key={index} className="gallery-item" onClick={handleImageClick}>
            <img src={src} alt={`Gallery ${index}`} className="gallery-image" />
          </li>
        ))}
      </motion.ul>

      <style>{galleryStyles}</style>
    </div>
  );
}

export default Gallery;
