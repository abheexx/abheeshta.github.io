import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Award, Lightbulb } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section relative">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="I'm passionate about leveraging AI and data science to create intelligent systems that make a positive impact on people's lives."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="order-1 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Minecraft Block Frame */}
              <div className="absolute inset-0 bg-white border-4 border-gray-800 shadow-2xl card">
                <div className="absolute inset-2 bg-gray-200 border-2 border-gray-600"></div>
              </div>
              
              <img
                src="/christmas-tree.jpg"
                alt="Abheeshta Vemuri"
                className="relative z-10 w-full max-w-xs object-cover object-center border-4 border-gray-800 shadow-lg"
                style={{ 
                  aspectRatio: '4/5', 
                  objectPosition: 'center 20%',
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                }}
              />
              
              {/* Minecraft Block Details */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
              
              {/* Floating Particles */}
              <motion.div
                className="absolute -top-4 -right-4 w-3 h-3 bg-red-400 border border-red-600"
                animate={{ 
                  y: [-10, -20, -10],
                  rotate: [0, 180, 360],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-2 h-2 bg-blue-400 border border-blue-600"
                animate={{ 
                  y: [10, 20, 10],
                  rotate: [360, 180, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </div>
          
          {/* Text content on the right */}
          <div className="order-2 lg:order-2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg" style={{color: '#825432'}}>
              Hello! I'm Abheeshta Vemuri, a Computer Science graduate student at the University of Florida, passionate about building real-world AI systems that think, learn, and scale.

              I specialize in engineering full-stack applications powered by machine learning and MLOps, whether it's optimizing warehouse robots, predicting patient triage, or automating cloud workflows.


              </p>
              
              <p style={{color: '#825432'}}>
              With hands-on experience in tools like Kubernetes, Docker, GPT-4, and YOLOv8, I love creating AI solutions that are not only intelligent, but deployable and production-ready.

              Currently, I'm working on large-scale AI pipelines at UF's HiPerGator supercomputing cluster and building voice+vision agents in my free time.

              Let's build the future,one smart system at a time.
                </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="btn btn-primary">
                  <Award className="w-5 h-5 mr-2" />
                  View Projects
                </a>
                <a
                  href="/Resume.pdf"
                  download
                  className="btn btn-secondary"
                >
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;