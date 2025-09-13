"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

const TypingAnimation = ({ 
  text, 
  className = "", 
  speed = 100, 
  startDelay = 0 
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (startDelay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
      }, startDelay);
      return () => clearTimeout(delayTimer);
    }
  }, [startDelay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, isComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          className="inline-block bg-primary-green"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          style={{ width: '3px', height: '1em', marginLeft: '2px' }}
        />
      )}
    </span>
  );
};

export default TypingAnimation;