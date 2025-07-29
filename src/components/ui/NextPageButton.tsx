import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface NextPageButtonProps {
  className?: string;
}

const NextPageButton: React.FC<NextPageButtonProps> = ({ className = "" }) => {
  const location = useLocation();
  
  // Define the page sequence
  const pageSequence = [
    { path: '/', name: 'Home', nextPath: '/about', nextName: 'About Me' },
    { path: '/about', name: 'About Me', nextPath: '/experience', nextName: 'Experience' },
    { path: '/experience', name: 'Experience', nextPath: '/projects', nextName: 'Projects' },
    { path: '/projects', name: 'Projects', nextPath: '/skills', nextName: 'My Skills' },
    { path: '/skills', name: 'My Skills', nextPath: '/achievements', nextName: 'Achievements' },
    { path: '/achievements', name: 'Achievements', nextPath: '/', nextName: 'Home' }
  ];

  // Find current page and next page
  const currentPage = pageSequence.find(page => page.path === location.pathname);
  const nextPage = currentPage ? pageSequence.find(page => page.path === currentPage.nextPath) : null;

  // Don't show on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <motion.div
      className={`fixed bottom-8 right-8 z-40 ${className}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
    >
      <Link
        to={currentPage?.nextPath || '/'}
        className="group flex items-center gap-3 px-6 py-3 bg-white border-4 border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        style={{ 
          boxShadow: '0 4px 0 #5D4037',
          color: '#825432'
        }}
      >
        <div className="text-right">
          <div className="text-xs font-medium opacity-75">Next Page</div>
          <div className="text-sm font-bold">{currentPage?.nextName}</div>
        </div>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default NextPageButton; 