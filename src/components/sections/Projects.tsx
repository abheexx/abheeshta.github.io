import React, { useState, useEffect } from 'react';
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
  const projectCategories = ['AI/ML', 'Computer Vision', 'NLP', 'Web Development', 'Data Processing'];
  const [activeFilter, setActiveFilter] = useState(projectCategories[0]);
  const [visibleCount, setVisibleCount] = useState(3);

  const projects: Project[] = [
    {
      id: 1,
      title: "PDF Extract & Reader Agent",
      description: "An intelligent PDF processing system that extracts and analyzes text content using advanced AI techniques for document understanding and information retrieval.",
      image: "/projects/pdf.png", // PDF/Document
      category: ["AI/ML", "NLP", "Data Processing"],
      technologies: ["Python", "AI/ML", "PDF Processing", "Text Analysis"],
      links: {
        github: "https://github.com/abheexx/PdfExtract"
      }
    },
    {
      id: 2,
      title: "AI Email Reader",
      description: "An intelligent email processing system that uses AI to read, categorize, and extract key information from emails for automated email management.",
      image: "/projects/email.png", // Email/AI
      category: ["AI/ML", "NLP"],
      technologies: ["Python", "Email Processing", "NLP"],
      links: {
        github: "https://github.com/abheexx/AI_EmailReader"
      }
    },
    {
      id: 3,
      title: "LiveLens - Real-time Vision",
      description: "A real-time computer vision application that processes live video streams for object detection, recognition, and analysis using advanced AI models.",
      image: "/projects/camera.png", // Computer Vision/Camera
      category: ["AI/ML", "Computer Vision"],
      technologies: ["Python", "Computer Vision", "Real-time Processing", "/ML"],
      links: {
        github: "https://github.com/abheexx/LiveLens"
      }
    },
    {
      id: 4,
      title: "PDF Reader Agent",
      description: "An AI-powered PDF reading agent that can understand, summarize, and extract insights from complex documents using natural language processing.",
      image: "/projects/pdf.png", // PDF/Document
      category: ["AI/ML", "NLP", "Data Processing"],
      technologies: ["Python", "NLP", "PDF Processing", "AI Agents"],
      links: {
        github: "https://github.com/abheexx/Pdf_reader_agent"
      }
    },
    {
      id: 5,
      title: "PowerPredict - Energy Forecasting",
      description: "A machine learning system for predicting power consumption and energy demand using historical data and advanced forecasting algorithms.",
      image: "/projects/energy.png", // Energy/Data
      category: ["AI/ML", "Data Processing"],
      technologies: ["Python", "Machine Learning", "Time Series", "Data Analysis"],
      links: {
        github: "https://github.com/abheexx/PowerPredict"
      }
    },
    {
      id: 6,
      title: "SmartRoute - Navigation System",
      description: "An intelligent routing system that optimizes navigation paths using AI algorithms for efficient route planning and traffic prediction.",
      image: "/projects/navigation.png", // Navigation/Map
      category: ["AI/ML", "Web Development"],
      technologies: ["Java", "I/ML", "Navigation", "Optimization"],
      links: {
        github: "https://github.com/abheexx/SmartRoute"
      }
    },
    {
      id: 7,
      title: "AI Triage System",
      description: "An intelligent medical triage system that uses AI to prioritize patient cases based on symptoms and medical data for healthcare optimization.",
      image: "/projects/healthcare.png", // Healthcare/AI
      category: ["AI/ML", "NLP"],
      technologies: ["Python", "AI/ML", "Healthcare", "NLP"],
      links: {
        github: "https://github.com/abheexx/ai-triage-system"
      }
    },
    {
      id: 8,
      title: "Sign Language Recognition",
      description: "A computer vision system that recognizes and translates sign language gestures in real-time using deep learning and image processing.",
      image: "/projects/sign-language.png", // Sign Language/Hands
      category: ["AI/ML", "Computer Vision"],
      technologies: ["Python", "Computer Vision", "Deep Learning", "Real-time"],
      links: {
        github: "https://github.com/abheexx/SignLanguage"
      }
    },
    {
      id: 9,
      title: "AI-Guided Smart Pick",
      description: "An intelligent picking system that uses AI to optimize warehouse operations and automate item selection for logistics efficiency.",
      image: "/projects/warehouse.png", // Warehouse/Logistics
      category: ["AI/ML", "Data Processing"],
      technologies: ["Python", "AI/ML", "Logistics", "automation"],
      links: {
        github: "https://github.com/abheexx/ai-guided-smart-pick"
      }
    },
    {
      id: 10,
      title: "Task Tracker API",
      description: "A RESTful API for task management built with Flask, providing comprehensive task tracking and project management capabilities.",
      image: "/projects/api.png", // API/Tasks
      category: ["Web Development"],
      technologies: ["Python", "Flask", "REST API", "Database"],
      links: {
        github: "https://github.com/abheexx/task-tracker-api"
      }
    },
  ];
  
  const filteredProjects = projects.filter(project => project.category.includes(activeFilter));
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // Reset visibleCount when filter changes
  useEffect(() => {
    setVisibleCount(3);
  }, [activeFilter]);
  
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading 
          title="My Projects" 
          subtitle="A showcase of my work in AI and data science, demonstrating my technical skills and problem-solving abilities."
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {projectCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`btn ${
                activeFilter === category
                  ? 'btn-primary'
                  : 'btn-outline'
              }`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  {/* Minecraft Block Frame */}
                  <div className="absolute inset-0 bg-white border-4 border-gray-800 shadow-lg">
                    <div className="absolute inset-2 bg-gray-200 border-2 border-gray-600"></div>
                  </div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="relative z-10 w-full h-full object-cover border-4 border-gray-800"
                    style={{ 
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                    }}
                  />
                  
                  {/* Minecraft Block Details */}
                  <div className="absolute top-2 left-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-600 border border-gray-800"></div>
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/90 hover:bg-white text-gray-800 dark:text-gray-200 border-2 border-gray-800 transition-colors"
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
                          className="bg-white/90 hover:bg-white text-gray-800 dark:text-gray-200 border-2 border-gray-800 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" style={{color: '#54C754'}}>
                    {project.title}
                  </h3>
                  <p className="mb-4 leading-relaxed" style={{color: '#825432'}}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-200 border border-gray-600 text-xs font-medium"
                        style={{color: '#825432'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* GitHub Link and Category badges */}
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium transition-colors group/link"
                      style={{color: '#54C754'}}
                    >
                      <Github size={16} className="mr-1" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount(c => c + 3)}
              className="btn btn-primary"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;