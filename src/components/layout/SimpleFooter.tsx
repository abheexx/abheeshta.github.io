import React from 'react';
import { motion } from 'framer-motion';

const SimpleFooter: React.FC = () => {
  return (
    <motion.footer 
      className="bg-white border-t-2 sm:border-t-4 border-gray-800 py-3 sm:py-4 px-3 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center gap-2 sm:gap-4 mb-0">
          <span className="text-xs sm:text-sm text-center sm:text-left" style={{color: '#825432'}}>
            © 2025 Abheeshta Vemuri. Built with ⛏️ and ❤️
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a 
            href="https://www.linkedin.com/in/abheeshta-vemuri/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold hover:underline cursor-pointer transition-all duration-200"
            style={{color: '#825432'}}
          >
            <span className="hidden sm:inline">Let's Connect? ~</span>
            <span className="sm:hidden">Connect</span>
          </a>
          <div className="relative group">
            <a 
              href="https://www.linkedin.com/in/abheeshta-vemuri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 bg-white border-2 border-gray-800 hover:bg-gray-200 transition-colors"
              style={{color: '#825432'}}
            >
              <span className="text-base sm:text-lg">💼</span>
            </a>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white border-2 border-gray-800 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap" style={{color: '#825432', boxShadow: '0 2px 0 #5D4037'}}>
              LinkedIn
            </div>
          </div>
          <div className="relative group">
            <a 
              href="https://github.com/abheexx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 bg-white border-2 border-gray-800 hover:bg-gray-200 transition-colors"
              style={{color: '#825432'}}
            >
              <span className="text-base sm:text-lg">🐙</span>
            </a>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white border-2 border-gray-800 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap" style={{color: '#825432', boxShadow: '0 2px 0 #5D4037'}}>
              GitHub
            </div>
          </div>
          <div className="relative group">
            <a 
              href="/AbheeshtaResume_.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 bg-white border-2 border-gray-800 hover:bg-gray-200 transition-colors"
              style={{color: '#825432'}}
            >
              <span className="text-base sm:text-lg">📄</span>
            </a>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white border-2 border-gray-800 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap" style={{color: '#825432', boxShadow: '0 2px 0 #5D4037'}}>
              Resume Download
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default SimpleFooter; 