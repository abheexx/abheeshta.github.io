import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
          <rect x="4" y="4" width="24" height="24" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="8" y="8" width="4" height="4" fill="#F59E0B"/>
          <rect x="14" y="8" width="4" height="4" fill="#10B981"/>
          <rect x="20" y="8" width="4" height="4" fill="#EF4444"/>
          <rect x="8" y="14" width="4" height="4" fill="#3B82F6"/>
          <rect x="14" y="14" width="4" height="4" fill="#8B5CF6"/>
          <rect x="20" y="14" width="4" height="4" fill="#06B6D4"/>
          <rect x="8" y="20" width="4" height="4" fill="#F59E0B"/>
          <rect x="14" y="20" width="4" height="4" fill="#10B981"/>
          <rect x="20" y="20" width="4" height="4" fill="#EF4444"/>
        </svg>
      ),
      description: "Core programming languages for software development and AI",
      skills: ["Python", "Java, JavaScript, TypeScript", "C++", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
          <rect x="8" y="6" width="16" height="20" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="10" y="8" width="4" height="4" fill="#F59E0B"/>
          <rect x="18" y="8" width="4" height="4" fill="#10B981"/>
          <rect x="10" y="14" width="4" height="4" fill="#EF4444"/>
          <rect x="18" y="14" width="4" height="4" fill="#3B82F6"/>
          <rect x="10" y="20" width="4" height="4" fill="#06B6D4"/>
          <rect x="18" y="20" width="4" height="4" fill="#8B5CF6"/>
          <rect x="14" y="26" width="4" height="2" fill="#6D28D9"/>
        </svg>
      ),
      description: "Frameworks and libraries for AI/ML development",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "Hugging Face"]
    },
    {
      title: "Web Development",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
          <rect x="4" y="8" width="24" height="16" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="6" y="10" width="20" height="2" fill="#F59E0B"/>
          <rect x="6" y="14" width="6" height="8" fill="#10B981"/>
          <rect x="14" y="14" width="6" height="8" fill="#EF4444"/>
          <rect x="22" y="14" width="6" height="8" fill="#3B82F6"/>
          <rect x="8" y="24" width="2" height="2" fill="#6D28D9"/>
          <rect x="16" y="24" width="2" height="2" fill="#6D28D9"/>
          <rect x="24" y="24" width="2" height="2" fill="#6D28D9"/>
        </svg>
      ),
      description: "Full-stack web development technologies",
      skills: ["React", "Node.js", "FastAPI", "Flask", "Django", "Express.js"]
    },
    {
      title: "Data & Databases",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
          <rect x="8" y="4" width="16" height="24" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="10" y="6" width="12" height="2" fill="#F59E0B"/>
          <rect x="10" y="10" width="12" height="2" fill="#10B981"/>
          <rect x="10" y="14" width="12" height="2" fill="#EF4444"/>
          <rect x="10" y="18" width="12" height="2" fill="#3B82F6"/>
          <rect x="10" y="22" width="12" height="2" fill="#06B6D4"/>
          <rect x="12" y="26" width="8" height="2" fill="#6D28D9"/>
        </svg>
      ),
      description: "Data processing and database technologies",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Pandas", "NumPy", "Apache Spark"]
    },
    {
      title: "DevOps & Cloud",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
          <rect x="6" y="8" width="20" height="16" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="8" y="10" width="4" height="4" fill="#F59E0B"/>
          <rect x="14" y="10" width="4" height="4" fill="#10B981"/>
          <rect x="20" y="10" width="4" height="4" fill="#EF4444"/>
          <rect x="8" y="16" width="4" height="4" fill="#3B82F6"/>
          <rect x="14" y="16" width="4" height="4" fill="#06B6D4"/>
          <rect x="20" y="16" width="4" height="4" fill="#8B5CF6"/>
          <rect x="10" y="22" width="12" height="2" fill="#6D28D9"/>
        </svg>
      ),
      description: "DevOps practices and cloud platforms",
      skills: ["Git", "Docker, Kubernetes, AWS", "GCP", "CI/CD"]
    },
    {
      title: "Computer Vision",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
          <rect x="6" y="6" width="20" height="20" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="8" y="8" width="6" height="6" fill="#F59E0B"/>
          <rect x="18" y="8" width="6" height="6" fill="#10B981"/>
          <rect x="8" y="16" width="6" height="6" fill="#EF4444"/>
          <rect x="18" y="16" width="6" height="6" fill="#3B82F6"/>
          <rect x="12" y="24" width="8" height="2" fill="#6D28D9"/>
        </svg>
      ),
      description: "Computer vision and image processing",
      skills: ["OpenCV", "YOLO", "CNN", "Image Processing", "Object Detection", "Video Analysis"]
    },
    {
      title: "Natural Language Processing",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
          <rect x="8" y="8" width="16" height="16" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="10" y="10" width="4" height="4" fill="#F59E0B"/>
          <rect x="18" y="10" width="4" height="4" fill="#10B981"/>
          <rect x="10" y="16" width="4" height="4" fill="#EF4444"/>
          <rect x="18" y="16" width="4" height="4" fill="#3B82F6"/>
          <rect x="14" y="12" width="4" height="8" fill="#06B6D4"/>
          <rect x="12" y="22" width="8" height="2" fill="#6D28D9"/>
        </svg>
      ),
      description: "NLP and text processing technologies",
      skills: ["BERT", "GPT", "Transformers", "SpaCy", "NLTK", "Text Mining"]
    },
    {
      title: "System Design",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" className="pixel-icon">
          <rect x="4" y="4" width="8" height="8" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="20" y="4" width="8" height="8" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="4" y="20" width="8" height="8" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="20" y="20" width="8" height="8" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1"/>
          <rect x="12" y="12" width="8" height="8" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
          <rect x="6" y="6" width="2" height="2" fill="#10B981"/>
          <rect x="22" y="6" width="2" height="2" fill="#EF4444"/>
          <rect x="6" y="22" width="2" height="2" fill="#3B82F6"/>
          <rect x="22" y="22" width="2" height="2" fill="#06B6D4"/>
          <rect x="14" y="14" width="4" height="4" fill="#6D28D9"/>
        </svg>
      ),
      description: "System architecture and design patterns",
      skills: ["Microservices", "REST APIs", "GraphQL, Message Queues", "Caching, Load Balancing"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Core competencies in software development, AI engineering, and system design."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white dark:bg-dark-100 p-6 shadow-lg transition-all duration-300 group card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y:-5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-200 border-2 border-gray-600 mr-3 group-hover:bg-gray-300 transition-colors duration-300 inventory-slot">
                  <div className="group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-all duration-300">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold" style={{color: '#54C754'}}>
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-200 border border-gray-600 text-xs font-medium"
                    style={{color: '#825432'}}
                    initial={{ opacity:0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;