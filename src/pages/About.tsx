import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NextPageButton from '../components/ui/NextPageButton';

const About: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="fixed top-3 left-3 sm:top-6 sm:left-6 z-50 p-2 sm:p-3 bg-white border-2 sm:border-4 border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-base"
        style={{ boxShadow: '0 4px 0 #5D4037' }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" style={{color: '#825432'}} />
        <span className="hidden sm:inline" style={{color: '#825432'}}>Back to Home</span>
        <span className="sm:hidden" style={{color: '#825432'}}>Back</span>
      </motion.button>

      <div className="container mx-auto px-4 py-4 sm:py-8 relative z-20 min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{
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
            }}>
              ⛏️ About Abheeshta
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            {/* Image Section */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                {/* Minecraft Block Frame */}
                <div className="absolute inset-0 bg-white border-8 border-gray-800 shadow-2xl transform rotate-3"></div>
                <div className="absolute inset-2 bg-gray-200 border-4 border-gray-600 transform -rotate-1"></div>
                
                {/* Profile image */}
                <motion.img
                  src="/pic.jpg"
                  alt="Abheeshta Vemuri - AI Engineer"
                  className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover border-4 sm:border-6 border-gray-800 shadow-lg"
                  style={{ 
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Minecraft Block Details */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <div className="card p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{color: '#54C754'}}>
                  🧠 MS Student at University of Florida!
                </h2>
                <p className="mb-2 sm:mb-3 text-xs sm:text-sm" style={{color: '#825432'}}>
                I'm passionate about solving complex, real-world problems through intelligent,
                human-centered technology. With hands-on experience across software engineering, 
                AI/ML, and product thinking, I thrive at the intersection of code, creativity, and impact.
                </p>
                <p className="mb-2 sm:mb-3 text-xs sm:text-sm" style={{color: '#825432'}}>
                I've built scalable AI products that not only function well, 
                but are thoughtfully designed to address real user needs.
                </p>
                <p className="text-xs sm:text-sm" style={{color: '#825432'}}>
                Whether I'm writing production-grade code, shaping product strategy, 
                or optimizing model performance - I'm driven by one goal: to build systems that matter.
                Outside of work, you'll find me exploring emerging technologies, contributing to open-source projects, 
                or sharing ideas with the tech community.


                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="card p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-1" style={{color: '#54C754'}}>3+</div>
                  <div className="text-xs" style={{color: '#825432'}}>Years Experience</div>
                </div>
                <div className="card p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-1" style={{color: '#54C754'}}>10+</div>
                  <div className="text-xs" style={{color: '#825432'}}>Projects Completed</div>
                </div>
                <div className="card p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-1" style={{color: '#54C754'}}>5+</div>
                  <div className="text-xs" style={{color: '#825432'}}>Technologies Mastered</div>
                </div>
                <div className="card p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-1" style={{color: '#54C754'}}>∞</div>
                  <div className="text-xs" style={{color: '#825432'}}>Learning Mindset</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Next Page Button */}
      <NextPageButton />
    </div>
  );
};

export default About; 