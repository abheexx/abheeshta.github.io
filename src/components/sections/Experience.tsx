import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      title: "Graduate Research Assistant",
      company: "University of Florida",
      location: "GNV, Florida",
      period: "Dec 2024 - Present",
      description: [
        "Led the development of state-of-the-art machine learning models for predictive analytics",
        "Collaborated with cross-functional teams to define ML requirements and solutions",
        "Optimized model performance and reduced inference time by 40%",
        "Mentored junior data scientists and engineers"
      ],
      skills: ["TensorFlow", "PyTorch", "MLOps", "Leadership"]
    },
    {
      title: "Data Science Intern",
      company: "NassCom",
      location: "New Delhi, India",
      period: "Aug 2023 - Dec 2023",
      description: [
        "Analyzed large datasets to identify trends and patterns for business insights",
        "Developed predictive models to support strategic decision-making",
        "Created automated reporting systems to streamline data analysis processes",
        "Collaborated with stakeholders to translate business requirements into technical solutions"
      ],
      skills: ["Python", "Pandas", "Machine Learning", "Data Visualization"]
    },
    {
      title: "Data Science Intern",
      company: "Cognizant",
      location: "Chennai, India",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Developed data pipelines and machine learning models for customer segmentation",
        "Created interactive dashboards to visualize key business metrics",
        "Implemented A/B testing frameworks to validate hypotheses",
        "Collaborated with product teams to integrate ML features"
      ],
      skills: ["Python", "SQL", "Scikit-Learn", "Tableau"]
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
      skills: ["Deep Learning", "Research", "NLP", "Computer Vision"]
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

  return (
    <section id="experience" className="section bg-white dark:bg-dark-300">
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
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 md:mb-0 relative md:flex ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left md:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              <div className="hidden md:block w-1/2" />
              
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-8 h-8 rounded-full bg-primary-500 dark:bg-primary-400 z-10 shadow-lg border-4 border-white dark:border-dark-300" />
              
              <div className={`pl-10 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
              } md:w-1/2`}>
                <div className="card p-6 transition-all duration-300 hover:shadow-xl bg-white dark:bg-dark-200">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 mb-4">
                    {exp.period}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                  
                  <div className="flex items-center gap-1 mt-2 text-gray-600 dark:text-gray-400">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-1 text-gray-600 dark:text-gray-400">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-block w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;