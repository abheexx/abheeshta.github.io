import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import TypingEffect from '../ui/TypingEffect';
import Terminal from '../ui/Terminal';
import { useState } from 'react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [showTerminal, setShowTerminal] = useState(false);
  const [showChristmasTree, setShowChristmasTree] = useState(false);

  // Trigger Christmas tree animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChristmasTree(true);
    }, 1000); // Start animation after 1 second

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      {/* Animated Christmas Tree */}
      <motion.div
        initial={{ y: '100vh', opacity: 0 }}
        animate={showChristmasTree ? { y: '40vh', opacity: 1 } : { y: '100vh', opacity: 0 }}
        transition={{ 
          duration: 2, 
          ease: "easeOut",
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-30"
      >
        <motion.img
          src="/abhee.png"
          alt="Christmas Tree"
          className="max-w-[60vw] sm:max-w-md"
          initial={{ scale: 0.8 }}
          animate={showChristmasTree ? { scale: 1 } : { scale: 0.8 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.5,
            ease: "easeOut"
          }}
          onError={(e) => {
            console.error('❌ abhee.png failed to load');
            // Fallback to a working image
            e.currentTarget.src = '/pic.jpg';
          }}
          onLoad={() => {
            console.log('✅ abhee.png loaded successfully');
          }}
        />
      </motion.div>

      <section 
        id="home" 
        className="h-full flex items-center relative overflow-hidden"
      >
        <div className="container mx-auto relative z-20 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center text-center min-h-screen py-8 sm:py-12 md:py-16">
            <motion.div 
              className="w-full max-w-2xl px-3 sm:px-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              ref={ref}
            >
              {/* Greeting Speech Bubble */}
              <motion.div variants={itemVariants} className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-white border-2 border-gray-800 shadow-lg">
                <span className="text-sm sm:text-base font-bold" style={{color: '#825432'}}>
                  ⛏️ Hi there! I'm 
                </span>
              </motion.div>
              
              {/* Name */}
              <motion.h1 
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-center"
                style={{
                  color: '#54C754',
                  marginLeft: '0',
                  textShadow: `
                    -2px -2px 0 #825432,
                    2px -2px 0 #825432,
                    -2px 2px 0 #825432,
                    2px 2px 0 #825432
                  `
                }}
              >
                Abheeshta Vemuri
              </motion.h1>
              
              {/* Tagline with Typing Effect */}
              <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                <TypingEffect 
                  text="Turning ideas into smart, usable tech...!"
                  className="text-sm sm:text-base font-bold overflow-hidden px-2"
                  speed={50}
                  style={{color: '#825432'}}
                />
              </motion.div>
              
              {/* Navigation Buttons - Top Row */}
              <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center items-center">
                  <Link to="/about" className="btn btn-primary text-center text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                    <span>About Me</span>
                  </Link>
                  <Link to="/experience" className="btn btn-primary text-center text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                    <span>Experience</span>
                  </Link>
                  <Link to="/projects" className="btn btn-primary text-center text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                    <span>Projects</span>
                  </Link>
                  <Link to="/skills" className="btn btn-primary text-center text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                    <span>My Skills</span>
                  </Link>
                </div>
              </motion.div>
              
              {/* Navigation Button - Bottom Row Centered */}
              <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                <div className="flex justify-center">
                  <Link to="/achievements" className="btn btn-primary text-center text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                    <span>Achievements</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Terminal isOpen={showTerminal} onClose={() => setShowTerminal(false)} />
    </>
  );
};

export default Hero;
