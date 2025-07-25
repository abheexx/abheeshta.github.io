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
    <footer className="relative py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#54C754'}}>
              Portfolio<span style={{color: '#825432'}}>.</span>
            </h3>
            <p className="mb-6 max-w-md" style={{color: '#825432'}}>
              AI Engineer & Data Scientist passionate about creating intelligent solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-800 bg-white hover:bg-gray-200 transition-colors p-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  aria-label={link.name}
                  style={{color: '#825432'}}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{color: '#54C754'}}>Contact</h4>
            <p style={{color: '#825432'}}>a.vemuri@ufl.edu</p>
            <p className="mt-2" style={{color: '#825432'}}>Gainesville, Florida</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-4 border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm" style={{color: '#825432'}}>
            © {new Date().getFullYear()} Abheeshta Vemuri. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 border-2 border-gray-800 bg-white hover:bg-gray-200 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
            style={{color: '#825432'}}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;