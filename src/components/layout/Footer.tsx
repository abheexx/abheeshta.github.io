import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:a.vemuri@ufl.edu' }
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-dark-200 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              Portfolio<span className="text-accent-600 dark:text-accent-400">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              AI Engineer & Data Scientist passionate about creating intelligent solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  whileHover={{ y: -2, color: '#6366F1' }}
                  whileTap={{ y: 0 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <p className="text-gray-600 dark:text-gray-400">a.vemuri@ufl.edu</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Gainesville, Florida</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Abheeshta Vemuri. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full bg-gray-200 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-300 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;