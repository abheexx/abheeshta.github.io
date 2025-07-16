import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-dark-300 flex items-center justify-center z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-24 h-24 mb-8 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute inset-0 border-4 border-t-primary-500 border-r-primary-400 border-b-primary-600 border-l-accent-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-4 border-4 border-t-secondary-500 border-r-secondary-400 border-b-secondary-600 border-l-primary-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Portfolio<span className="text-accent-600 dark:text-accent-400">.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Loading amazing content...</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;