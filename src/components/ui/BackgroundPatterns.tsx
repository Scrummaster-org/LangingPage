"use client";

import { motion } from "framer-motion";

const BackgroundPatterns = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary-green" />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border border-primary-green/20 rotate-45"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 90, 45],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-r from-primary-green/10 to-brand-green-400/10 rounded-full"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-12 h-12 border-2 border-primary-green/30 rounded-full"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hexagon Pattern */}
      <motion.div
        className="absolute top-1/3 left-1/6"
        animate={{
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <polygon 
            points="20,5 32,12 32,28 20,35 8,28 8,12" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            className="text-primary-green"
          />
        </svg>
      </motion.div>

      {/* Animated Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-green/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary-green/10 via-primary-green/5 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundPatterns;