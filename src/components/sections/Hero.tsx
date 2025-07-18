import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal as TerminalIcon } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import ParticleField from '../canvas/ParticleField';
import { useInView } from 'react-intersection-observer';
import { useSound } from '../../hooks/useSound';
import TypingEffect from '../ui/TypingEffect';
import Terminal from '../ui/Terminal';
import { useState } from 'react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { playSpaceHum } = useSound();
  const [showTerminal, setShowTerminal] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      playSpaceHum();
    }, 10000);

    return () => clearInterval(interval);
  }, [playSpaceHum]);

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

  const techStack = [
    { name: 'OpenAI', icon: '🧠' },
    { name: 'LangChain', icon: '🔍' },
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '⚙️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GCP / AWS', icon: '☁️' }
  ];

  return (
    <>
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-50/20 dark:bg-primary-900/20 backdrop-blur-sm border border-primary-100 dark:border-primary-800">
              <span className="text-primary-600 dark:text-primary-400 font-medium">Hi there! I'm</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400"> Abheeshta Vemuri</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
            >
              <TypingEffect 
                text="Building agents that think, APIs that scale, and systems that don't crash."
                speed={50}
                onComplete={() => setShowTechStack(true)}
              />
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={() => playSpaceHum()}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
                onClick={() => playSpaceHum()}
              >
                Get In Touch
              </a>
              <button 
                onClick={() => setShowTerminal(true)}
                className="btn btn-outline flex items-center gap-2"
              >
                <TerminalIcon size={18} />
                Run Command
              </button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex items-center gap-6"
            >
              {showTechStack && (
                <motion.div 
                  className="flex flex-wrap gap-3 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <span>{tech.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 animate-pulse" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-secondary-500/20 to-primary-500/20 animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Profile image */}
                <motion.img
                  src="/pic.jpg"
                  alt="Abheeshta Vemuri - AI Engineer"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-200 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
                
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-xl animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
    
    <Terminal isOpen={showTerminal} onClose={() => setShowTerminal(false)} />
    </>
  );
};

export default Hero;