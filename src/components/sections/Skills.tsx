import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Code, Brain, Database, GitBranch, Globe, Bot, Cpu, Zap } from 'lucide-react';

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
      icon: <Code className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      description: "Core programming languages for software development and AI",
      skills: ["Python", "Java, JavaScript, TypeScript", "C++", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      description: "Frameworks and libraries for AI/ML development",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "Hugging Face"]
    },
    {
      title: "Web Development,",
      icon: <Globe className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      description: "Full-stack web development technologies",
      skills: ["React", "Node.js", "FastAPI", "Flask", "Django", "Express.js"]
    },
    {
      title: "Data & Databases",
      icon: <Database className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      description: "Data processing and database technologies",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Pandas", "NumPy", "Apache Spark"]
    },
    {
      title: "DevOps & Cloud",
      icon: <GitBranch className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      description: "DevOps practices and cloud platforms",
      skills: ["Git", "Docker, Kubernetes, AWS", "GCP", "CI/CD"]
    },
    {
      title: "Computer Vision",
      icon: <Cpu className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      description: "Computer vision and image processing",
      skills: ["OpenCV", "YOLO", "CNN", "Image Processing", "Object Detection", "Video Analysis"]
    },
    {
      title: "Natural Language Processing",
      icon: <Bot className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      description: "NLP and text processing technologies",
      skills: ["BERT", "GPT", "Transformers", "SpaCy", "NLTK", "Text Mining"]
    },
    {
      title: "System Design",
      icon: <Zap className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      description: "System architecture and design patterns",
      skills: ["Microservices", "REST APIs", "GraphQL, Message Queues", "Caching, Load Balancing"]
    }
  ];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-200">
      <div className="container">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Core competencies in software development, AI engineering, and system design."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white dark:bg-dark-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y:-5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
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