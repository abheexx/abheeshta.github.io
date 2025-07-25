import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      {/* Floating Clouds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-white opacity-60"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-4xl">☁️</span>
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-white opacity-40"
          animate={{ x: [0, -80, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-3xl">☁️</span>
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-white opacity-50"
          animate={{ x: [0, 60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-2xl">☁️</span>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Minecraft Block Loading Animation */}
        <motion.div 
          className="mb-8 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((block, index) => (
              <motion.div
                key={block}
                className="w-12 h-12 bg-white border-4 border-gray-800 shadow-lg"
                style={{ boxShadow: '0 4px 0 #5D4037' }}
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [0, 180, 360],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-600"></div>
              </motion.div>
            ))}
          </div>
                </motion.div>
        
                        {/* Progress Bar */}
                <motion.div className="mt-8 w-64 h-4 bg-gray-300 border-2 border-gray-800" style={{boxShadow: '0 2px 0 #5D4037'}}>
                  <motion.div 
                    className="h-full bg-green-600" 
                    style={{boxShadow: '0 2px 0 #2E7D32'}}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Loading Tips */}
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.p
                    className="text-sm"
                    style={{color: '#825432'}}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💡 Tip: Press SPACE to mine faster!
                  </motion.p>
                </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;