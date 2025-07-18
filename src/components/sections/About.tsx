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
    <section id="about" className="section bg-gray-50 dark:bg-dark-200 relative">
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
              <img
                src="/christmas-tree.jpg"
                alt="Abheeshta Vemuri"
                className="w-full max-w-xs rounded-2xl shadow-2xl object-cover object-center"
                style={{ aspectRatio: '4/5', objectPosition: 'center 20%' }}
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
              className="space-y-6 text-gray-600 dark:text-gray-300"
            >
              <p className="text-lg">
              Hello! I'm Abheeshta Vemuri, a Computer Science graduate student at the University of Florida, passionate about building real-world AI systems that think, learn, and scale.

              I specialize in engineering full-stack applications powered by machine learning and MLOps, whether it’s optimizing warehouse robots, predicting patient triage, or automating cloud workflows.


              </p>
              
              <p>
              With hands-on experience in tools like Kubernetes, Docker, GPT-4, and YOLOv8, I love creating AI solutions that are not only intelligent, but deployable and production-ready.

              Currently, I’m working on large-scale AI pipelines at UF’s HiPerGator supercomputing cluster and building voice+vision agents in my free time.

              Let’s build the future,one smart system at a time.
                </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="btn btn-primary">
                  <Award className="w-5 h-5 mr-2" />
                  View Projects
                </a>
                <a
                  href="/Resume.pdf"
                  download
                  className="inline-flex items-center px-5 py-2 border border-primary-500 dark:border-primary-400 rounded-lg text-primary-700 dark:text-primary-300 bg-white dark:bg-dark-200 font-semibold shadow-sm hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-900 transition-colors duration-200"
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