// components/Layout.js
"use client";
import { motion, useScroll } from "framer-motion";
import React from "react";

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#ffc1e3",
          zIndex: 999,
        }}
      />
      {children}
    </>
  );
}
