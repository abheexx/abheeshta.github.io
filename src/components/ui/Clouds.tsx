import React from 'react';
import { motion } from 'framer-motion';

const Clouds: React.FC = () => {
  const clouds = [
    {
      id: 1,
      position: { x: '10%', y: '20%' },
      size: 'large',
      delay: 0
    },
    {
      id: 2,
      position: { x: '60%', y: '15%' },
      size: 'medium',
      delay: 30
    },
    {
      id: 3,
      position: { x: '80%', y: '25%' },
      size: 'small',
      delay: 60
    },
    {
      id: 4,
      position: { x: '20%', y: '50%' },
      size: 'medium',
      delay: 90
    },
    {
      id: 5,
      position: { x: '70%', y: '60%' },
      size: 'large',
      delay: 120
    },
    {
      id: 6,
      position: { x: '40%', y: '75%' },
      size: 'small',
      delay: 150
    }
  ];

  const getCloudSize = (size: string) => {
    switch (size) {
      case 'large':
        return 'w-64 h-32';
      case 'medium':
        return 'w-56 h-28';
      case 'small':
        return 'w-48 h-24';
      default:
        return 'w-56 h-28';
    }
  };

  const CloudSVG = ({ size }: { size: string }) => {
    const scale = size === 'large' ? 1.2 : size === 'medium' ? 1 : 0.8;
    
    return (
      <svg 
        viewBox="0 0 100 50" 
        className="w-full h-full"
        style={{ transform: `scale(${scale})` }}
      >
        <path
          d="M10 25 Q15 15 25 20 Q35 10 45 20 Q55 15 65 20 Q75 10 85 20 Q90 25 85 30 Q75 40 65 35 Q55 40 45 35 Q35 40 25 35 Q15 40 10 30 Q5 25 10 25 Z"
          fill="white"
          opacity="0.95"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
        />
        {/* Additional flowing details */}
        <path
          d="M20 22 Q25 18 30 22 Q35 20 40 22"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <path
          d="M50 22 Q55 18 60 22 Q65 20 70 22"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <path
          d="M30 28 Q35 32 40 28 Q45 30 50 28"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
          opacity="0.9"
        />
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className={`absolute ${getCloudSize(cloud.size)}`}
          style={{
            left: cloud.position.x,
            top: cloud.position.y,
          }}
          initial={{ x: '-100vw' }}
          animate={{ x: '100vw' }}
          transition={{
            duration: 60,
            delay: cloud.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <CloudSVG size={cloud.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default Clouds; 