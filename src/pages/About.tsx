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
        className="fixed top-6 left-6 z-50 p-3 bg-white border-4 border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        style={{ boxShadow: '0 4px 0 #5D4037' }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-5 h-5" style={{color: '#825432'}} />
        <span style={{color: '#825432'}}>Back to Home</span>
      </motion.button>

      <div className="container mx-auto px-4 py-8 relative z-20 h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h1 className="text-4xl font-bold" style={{
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
          <div className="grid grid-cols-2 gap-8 items-center">
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
                  className="relative z-10 w-64 h-64 object-cover border-6 border-gray-800 shadow-lg"
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
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="card p-6">
                <h2 className="text-xl font-bold mb-3" style={{color: '#54C754'}}>
                  🧠 MS Student at University of Florida!
                </h2>
                <p className="mb-3 text-sm" style={{color: '#825432'}}>
                I'm passionate about solving complex, real-world problems through intelligent,
                human-centered technology. With hands-on experience across software engineering, 
                AI/ML, and product thinking, I thrive at the intersection of code, creativity, and impact.
                </p>
                <p className="mb-3 text-sm" style={{color: '#825432'}}>
                I specialize in machine learning, deep learning, and data-driven systems. 
                I've built scalable AI products and backend systems that not only function well, 
                but are thoughtfully designed to address real user needs.
                </p>
                <p className="text-sm" style={{color: '#825432'}}>
                Whether I'm writing production-grade code, shaping product strategy, 
                or optimizing model performance - I'm driven by one goal: to build systems that matter.
                Outside of work, you'll find me exploring emerging technologies, contributing to open-source projects, 
                or sharing ideas with the tech community.


                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="card p-3 text-center">
                  <div className="text-2xl font-bold mb-1" style={{color: '#54C754'}}>3+</div>
                  <div className="text-xs" style={{color: '#825432'}}>Years Experience</div>
                </div>
                <div className="card p-3 text-center">
                  <div className="text-2xl font-bold mb-1" style={{color: '#54C754'}}>10+</div>
                  <div className="text-xs" style={{color: '#825432'}}>Projects Completed</div>
                </div>
                <div className="card p-3 text-center">
                  <div className="text-2xl font-bold mb-1" style={{color: '#54C754'}}>5+</div>
                  <div className="text-xs" style={{color: '#825432'}}>Technologies Mastered</div>
                </div>
                <div className="card p-3 text-center">
                  <div className="text-2xl font-bold mb-1" style={{color: '#54C754'}}>∞</div>
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