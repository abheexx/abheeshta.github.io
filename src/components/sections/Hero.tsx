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
          className="max-w-xs md:max-w-sm lg:max-w-md"
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
      
      <div className="container mx-auto relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center min-h-screen py-8 sm:py-12 lg:py-16">
          <motion.div 
            className="w-full max-w-2xl px-4 sm:px-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-3 py-2 sm:px-4 sm:py-2 bg-white border-2 border-gray-800 shadow-lg">
              <span className="text-xs sm:text-sm font-bold" style={{color: '#54C754'}}>
                🚀 AI Engineer & Data Scientist
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                color: '#54C754',
                textShadow: `
                  -2px -2px 0 #825432,
                  2px -2px 0 #825432,
                  -2px 2px 0 #825432,
                  2px 2px 0 #825432,
                  -1px -1px 0 #825432,
                  1px -1px 0 #825432,
                  -1px 1px 0 #825432,
                  1px 1px 0 #825432
                `
              }}
            >
              Abheeshta Vemuri
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed px-2 sm:px-4"
              style={{color: '#825432'}}
            >
              Building intelligent systems that think, learn, and scale
            </motion.p>
            
            <motion.div variants={itemVariants} className="mb-8">
              <TypingEffect 
                text="Passionate about AI, Machine Learning, and creating solutions that make a difference."
                className="text-base sm:text-lg md:text-xl"
                speed={50}
                style={{color: '#825432'}}
              />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/projects" className="btn btn-primary w-full sm:w-auto text-center">
                <span className="text-sm sm:text-base">View Projects</span>
              </Link>
              <Link to="/experience" className="btn btn-secondary w-full sm:w-auto text-center">
                <span className="text-sm sm:text-base">My Experience</span>
              </Link>
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
