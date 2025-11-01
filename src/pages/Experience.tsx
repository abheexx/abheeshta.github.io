import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NextPageButton from '../components/ui/NextPageButton';

const Experience: React.FC = () => {
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const experiences = [
    {
      id: 1,
      title: "Graduate Research Assistant",
      company: "University of Florida",
      location: "Gainesville, FL",
      period: "Dec 2024 - Present",
      description: "",
      technologies: ["PyTorch", "Docker", "Kubernetes", "GitLab", "Prometheus", "Grafana", "AWS S3"],
      achievements: [
        "Implemented ML pipeline processing 15M+ publisher records, reducing processing time by 40%",
        "Developed containerized microservices with Python for massive dataset processing",
        "Built CI/CD pipeline with automated testing using GitLab"
      ]
    },
    {
      id: 2,
      title: "AI Engineer Intern",
      company: "Incepta Partners, Inc.",
      location: "Remote / United States",
      period: "July 2025 - August 2025",
      description: "",
      technologies: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI", "Vercel", "Git", "TypeScript"],
      achievements: [
        "Engineered FastAPI services handling 1000+ concurrent requests",
        "Implemented vector database integration with Pinecone, optimizing performance by 60%",
        "Developed real-time WebSocket APIs with sub-200ms response times"
      ]
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Nasscom",
      location: "New Delhi, India",
      period: "Aug 2023 - Dec 2023",
      description: "",
      technologies: ["Java", "Spring Boot", "Kafka", "Docker", "GCP", "Kubernetes", "Flask"],
      achievements: [
        "Developed REST APIs using Spring Boot, serving 50,000+ daily users",
        "Implemented event-driven architecture with Apache Kafka, processing 1M+ messages per day",
        "Built CI/CD pipelines with Docker and Kubernetes, reducing deployment time by 87%"
      ]
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      period: "Jul 2023 - Aug 2023",
      description: "",
      technologies: ["Python", "Django", "MySQL", "Spark", "Jenkins", "Vault", "Consul"],
      achievements: [
        "Developed Django REST APIs with JWT authentication for healthcare data",
        "Engineered Apache Spark pipelines processing 100GB+ daily records",
        "Implemented CI/CD workflows with Jenkins and secure deployment practices"
      ]
    },
    {
      id: 5,
      title: "Python Instructor (Junior)",
      company: "Bennett University",
      location: "Uttar Pradesh, India",
      period: "Aug 2022 - May 2023",
      description: "",
      technologies: ["Python", "Jupyter Notebook", "Git", "VS Code"],
      achievements: [
        "Taught core Python concepts including OOP and data structures",
        "Mentored 50+ students, improving course engagement"
      ]
    },
    {
      id: 6,
      title: "Technical Writer",
      company: "Andhra Pradesh Legislature",
      location: "Amaravati, India",
      period: "May 2021 - Aug 2021",
      description: "",
      technologies: ["MS Word", "Excel", "Git", "Markdown", "Document Management Systems"],
      achievements: [
        "Created user manuals and workflow documentation for internal software tools",
        "Organized legislative data for digitization and archiving"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 p-3 bg-white border-4 border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        style={{ boxShadow: '0 4px 0 #5D4037' }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-5 h-5" style={{color: '#825432'}} />
        <span style={{color: '#825432'}}>Back to Home</span>
      </motion.button>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl font-bold" style={{
              color: '#54C754',
              textShadow: `
                -2px -2px 0 #825432,
                2px -2px 0 #825432,
                -2px 2px 0 #825432,
                2px 2px 0 #825432,
                -1px -1px 0 #825432,
                1px -1px 0 #825432,
                -1px 1px 0 #825432,
                1px 1px 0 #825432
              `
            }}>
              💼 Work Experience
            </h1>
          </motion.div>

          {/* Timeline with Zigzag Boxes */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform -translate-x-1/2"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex justify-center"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-gray-600 border-2 border-gray-800 rounded-full transform -translate-x-1/2 mt-2"></div>
                  
                  {/* Dynamic Content Card */}
                  <div className={`card p-4 w-80 flex flex-col relative z-10 transition-all duration-300 overflow-hidden ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} ${expandedItems.includes(exp.id) ? 'h-auto min-h-80' : 'h-48'}`}>
                    <div className="flex flex-col h-full">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold mb-1" style={{color: '#54C754'}}>
                          {exp.title}
                        </h3>
                        <p className="text-sm font-semibold mb-1" style={{color: '#825432'}}>
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-xs" style={{color: '#825432'}}>
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                      </div>
                      
                      {expandedItems.includes(exp.id) && (
                        <div className="flex-1 overflow-hidden space-y-3">
                          <div className="flex items-center gap-2 text-xs" style={{color: '#825432'}}>
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                          
                          <p className="text-xs" style={{color: '#825432'}}>
                            {exp.description}
                          </p>
                          
                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-xs mb-1" style={{color: '#54C754'}}>Technologies:</h4>
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-gray-200 border border-gray-600 text-xs font-medium"
                                  style={{color: '#825432'}}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-xs mb-1" style={{color: '#54C754'}}>Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-1">
                                  <span className="text-green-600 mt-0.5 text-xs">•</span>
                                  <span className="text-xs" style={{color: '#825432'}}>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Read More Button */}
                    <div className="flex justify-center mt-1">
                      <button
                        onClick={() => toggleExpanded(exp.id)}
                        className="px-3 py-1 bg-white border-2 border-gray-800 text-xs font-semibold transition-all duration-200 hover:shadow-lg"
                        style={{
                          color: '#825432',
                          boxShadow: '0 2px 0 #5D4037'
                        }}
                      >
                        {expandedItems.includes(exp.id) ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-4" style={{color: '#54C754'}}>
                🚀 Ready for the next adventure?
              </h2>
              <p className="mb-6" style={{color: '#825432'}}>
                I'm always looking for new challenges and opportunities to grow. 
                Let's create something amazing together!
              </p>
              <div className="relative group">
                <a 
                  href="https://www.linkedin.com/in/abheeshta-vemuri/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Next Page Button */}
      <NextPageButton />
    </div>
  );
};

export default Experience; 
