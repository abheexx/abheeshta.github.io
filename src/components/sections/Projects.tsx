import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projectCategories = ['All', 'Machine Learning', 'Computer Vision', 'NLP', 'Data Analysis', 'Reinforcement Learning'];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Predictive Analytics Dashboard",
      description: "A comprehensive dashboard for real-time predictive analytics using machine learning algorithms to forecast business metrics.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["Machine Learning", "Data Analysis"],
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Neural Image Caption Generator",
      description: "An advanced image captioning system leveraging convolutional and recurrent neural networks to generate descriptive captions for images.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["Computer Vision", "NLP"],
      technologies: ["PyTorch", "LSTM", "Flask", "React"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Sentiment Analysis API",
      description: "A robust API for real-time sentiment analysis of text data, supporting multiple languages and providing detailed emotion classification.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["NLP", "Machine Learning"],
      technologies: ["BERT", "Hugging Face", "FastAPI", "Docker"],
      links: {
        github: "#"
      }
    },
    {
      id: 4,
      title: "Reinforcement Learning for Game AI",
      description: "Implementation of deep reinforcement learning algorithms to train agents for playing complex games with superhuman performance.",
      image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["Reinforcement Learning"],
      technologies: ["PyTorch", "OpenAI Gym", "TensorBoard", "Python"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Data Exploration Platform",
      description: "An interactive platform for automated data exploration and visualization, helping users gain insights from complex datasets quickly.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["Data Analysis"],
      technologies: ["Pandas", "Plotly", "Streamlit", "scikit-learn"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Object Detection System",
      description: "A real-time object detection system using state-of-the-art computer vision algorithms for identifying and tracking objects in videos.",
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: ["Computer Vision"],
      technologies: ["YOLO", "OpenCV", "TensorFlow", "Flask"],
      links: {
        github: "#"
      }
    },
  ];
  
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));
  
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-dark-200">
      <div className="container">
        <SectionHeading 
          title="My Projects" 
          subtitle="A showcase of my work in AI and data science, demonstrating my technical skills and problem-solving abilities."
        />
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary-600 dark:bg-primary-500 text-white font-medium shadow-md'
                  : 'bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
              }`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="card overflow-hidden group h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex space-x-3">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white bg-gray-800/80 hover:bg-primary-600 p-2 rounded-full transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white bg-gray-800/80 hover:bg-primary-600 p-2 rounded-full transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;