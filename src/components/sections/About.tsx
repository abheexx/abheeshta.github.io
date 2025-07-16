import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Award, Lightbulb, Code, Database, Brain, Ship as Chip } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ThreeDModel from '../canvas/ThreeDModel';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const items = [
    { 
      icon: <Brain className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
      title: 'AI Research',
      description: 'Exploring cutting-edge AI techniques to solve complex problems and advance the field.'
    },
    { 
      icon: <Database className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
      title: 'Data Science',
      description: 'Transforming raw data into actionable insights through analysis and visualization.'
    },
    { 
      icon: <Code className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
      title: 'ML Engineering',
      description: 'Building and deploying scalable machine learning systems that deliver value.'
    },
    { 
      icon: <Chip className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
      title: 'Deep Learning',
      description: 'Implementing neural networks for computer vision, NLP, and time series analysis.'
    },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-200 relative">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="I'm passionate about leveraging AI and data science to create intelligent systems that make a positive impact on people's lives."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-gray-600 dark:text-gray-300"
            >
              <p className="text-lg">
                Hello! I'm Abheeshta Vemuri, an AI Engineer and Data Scientist with a passion for solving complex problems using cutting-edge technologies. My journey in the world of AI began with a fascination for how algorithms can learn from data and make intelligent decisions.
              </p>
              
              <p>
                With expertise in machine learning, deep learning, and statistical analysis, I develop solutions that transform data into actionable insights and create intelligent systems that drive business value.
              </p>
              

            
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="btn btn-primary">
                  <Award className="w-5 h-5 mr-2" />
                  View Projects
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <ThreeDModel className="w-full max-w-md" />
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="card p-6 hover:border-primary-500 dark:hover:border-primary-400 border-2 border-transparent transition-colors"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;