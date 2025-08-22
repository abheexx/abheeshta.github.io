import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  color: string;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "Graduate Research Assistant",
      company: "University of Florida",
      location: "Gainesville, FL",
      period: "Dec 2024 - Present",
      description: [
        "Building AI pipelines to extract and classify publisher metadata using PyTorch and supercomputing resources",
        "Fine-tuned PubDetectNet, improving metadata extraction accuracy by 20%",
        "Built and containerized a CI/CD pipeline, deployed via Kubernetes",
        "Engineered auto-scaling service for HiperGator HPC cluster, boosting MLOps efficiency by 15%"
      ],
      skills: ["PyTorch", "Docker", "Kubernetes", "GitLab", "Prometheus", "Grafana", "AWS S3"],
      color: "#8B5CF6"
    },
    {
      title: "Software Engineer Intern",
      company: "Nasscom",
      location: "New Delhi, India",
      period: "Aug 2023 - Dec 2023",
      description: [
        "Developed real-time, scalable APIs and cloud-native automation tools for government skilling systems",
        "Built Kafka-based API with file handling for skilling platforms",
        "Deployed containerized services on GCP with CI/CD integration",
        "Created intelligent automation tools in Flask, reducing deployment time by 40%"
      ],
      skills: ["Java", "Spring Boot", "Kafka", "Docker", "GCP", "Kubernetes", "Flask"],
      color: "#06B6D4"
    },
    {
      title: "Software Engineer Intern",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      period: "May 2023 - Aug 2023",
      description: [
        "Worked on backend healthcare data systems and CI/CD pipelines for secure and scalable deployments",
        "Developed RESTful APIs for real-time healthcare data access",
        "Built Spark pipelines integrated with Jenkins CI",
        "Secured deployments using HashiCorp Vault and Consul"
      ],
      skills: ["Python", "Django", "MySQL", "Spark", "Jenkins", "Vault", "Consul"],
      color: "#10B981"
    },
    {
      title: "Machine Learning Researcher",
      company: "Research Institution",
      location: "Location",
      period: "2018 - 2020",
      description: [
        "Conducted research on novel deep learning architectures",
        "Published papers in top-tier conferences and journals",
        "Developed and validated experimental protocols",
        "Collaborated with international research teams"
      ],
      skills: ["Deep Learning", "Research", "NLP", "Computer Vision"],
      color: "#F59E0B"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.4 }
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey in the field of AI and data science, showcasing my career growth and achievements."
        />
        
        <motion.div
          className="mt-12 relative"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-0 transform top-0 h-full w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 relative flex ${
                index % 2 === 0 ? 'text-right' : 'text-left flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              <div className="hidden block w-1/2" />
              

              
              <div className={`pl-10 ${
                index % 2 === 0 ? 'pr-16' : 'pl-16'
              } w-1/2`}>
                <motion.div
                  className="card p-6 transition-all duration-300 bg-white dark:bg-dark-200"
                  style={{ borderLeftColor: exp.color }}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* Period Badge */}
                  <div className="mb-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: exp.color }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  
                  {/* Title and Company */}
                  <h3 className="text-xl font-bold mb-2" style={{color: '#54C754'}}>
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-1" style={{color: '#825432'}}>
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4" style={{color: '#825432'}}>
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill, i) => (
                                          <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-200 border border-gray-600 text-xs font-medium"
                      style={{color: '#825432'}}
                    >
                      {skill}
                    </span>
                    ))}
                  </div>

                  {/* Expandable Description */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: selectedExp === index ? 'auto' : 0,
                      opacity: selectedExp === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 text-sm" style={{color: '#825432'}}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span 
                            className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: exp.color }}
                          />
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Read More Button */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExp(selectedExp === index ? null : index);
                      }}
                      className="text-sm font-medium underline hover:no-underline transition-all duration-200"
                      style={{ color: exp.color }}
                    >
                      {selectedExp === index ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;