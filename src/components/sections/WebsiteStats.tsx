import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { TrendingUp, Users, MousePointer, Eye, Share2, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  color: string;
}

const WebsiteStats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats: StatItem[] = [
    {
      icon: <Eye className="w-8 h-8" />,
      label: "Total Impressions",
      value: "10K+", // You can update this with actual numbers
      description: "Portfolio views and impressions",
      color: "#8B5CF6"
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      label: "Link Clicks",
      value: "2.5K+", // You can update this with actual numbers
      description: "Engagement and interactions",
      color: "#06B6D4"
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Unique Visitors",
      value: "5K+", // You can update this with actual numbers
      description: "Distinct user visits",
      color: "#10B981"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      label: "Social Shares",
      value: "500+", // You can update this with actual numbers
      description: "Portfolio shared across platforms",
      color: "#F59E0B"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      label: "Countries Reached",
      value: "25+", // You can update this with actual numbers
      description: "Global professional reach",
      color: "#EF4444"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Growth Rate",
      value: "150%", // You can update this with actual numbers
      description: "Monthly traffic increase",
      color: "#8B5CF6"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="website-stats" className="section relative">
      <div className="container">
        <SectionHeading 
          title="Portfolio Impact & Reach" 
          subtitle="Demonstrating the professional visibility and engagement achieved through my online portfolio"
        />
        
        <motion.div
          ref={ref}
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card group text-center p-6 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: stat.color }}
                >
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className="mb-2">
                  <span 
                    className="text-3xl font-bold block"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-semibold mb-2" style={{color: '#54C754'}}>
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm" style={{color: '#825432'}}>
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="bg-white border-4 border-gray-800 p-6 inline-block" style={{ boxShadow: '0 4px 0 #5D4037' }}>
              <h3 className="text-xl font-bold mb-3" style={{color: '#54C754'}}>
                🚀 Professional Impact
              </h3>
              <p className="mb-4" style={{color: '#825432'}}>
                My portfolio has achieved significant reach and engagement, demonstrating strong professional visibility 
                and the ability to connect with the tech community globally.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-gray-200 border border-gray-600" style={{color: '#825432'}}>
                  📈 High Engagement Rate
                </span>
                <span className="px-3 py-1 bg-gray-200 border border-gray-600" style={{color: '#825432'}}>
                  🌍 Global Reach
                </span>
                <span className="px-3 py-1 bg-gray-200 border border-gray-600" style={{color: '#825432'}}>
                  💼 Professional Networking
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteStats;
