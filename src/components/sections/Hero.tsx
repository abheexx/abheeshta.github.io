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
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            className="w-full max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-2 bg-white border-2 border-gray-800 shadow-lg">
              <span className="font-medium" style={{color: '#825432'}}>⛏️ Hi there! I'm</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center -ml-12"
            >
              <span 
                style={{
                  color: '#54C754',
                  whiteSpace: 'nowrap',
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
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base mb-8 max-w-4xl whitespace-nowrap -ml-8 font-bold"
              style={{color: '#825432'}}
            >
              <TypingEffect 
                text="Building AI products that solve real-world problems, fast and impactfully."
                speed={50}
              />
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/about" 
                className="btn btn-primary"
              >
                About Me
              </Link>
              <Link 
                to="/experience" 
                className="btn btn-primary"
              >
                Experience
              </Link>
              <Link 
                to="/projects" 
                className="btn btn-primary"
              >
                Projects
              </Link>
              <Link 
                to="/skills" 
                className="btn btn-primary"
              >
                My Skills
              </Link>
              <Link 
                to="/achievements" 
                className="btn btn-primary"
              >
                Achievements
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