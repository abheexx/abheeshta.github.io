import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  speed = 50, 
  className = '',
  style = {},
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className} style={style}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-5 bg-primary-500 dark:bg-primary-400 ml-1"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0 }}
      />
    </span>
  );
};

export default TypingEffect;