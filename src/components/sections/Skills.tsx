import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Brain, Database, LineChart, GitBranch, Globe, Bot } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; proficiency: number }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Machine Learning",
      icon: <Brain className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      skills: [
        { name: "Scikit-Learn", proficiency: 95 },
        { name: "TensorFlow", proficiency: 90 },
        { name: "PyTorch", proficiency: 85 },
        { name: "XGBoost", proficiency: 90 },
        { name: "LightGBM", proficiency: 85 },
      ]
    },
    {
      title: "Data Science",
      icon: <Database className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      skills: [
        { name: "NumPy", proficiency: 95 },
        { name: "Pandas", proficiency: 95 },
        { name: "SQL", proficiency: 90 },
        { name: "Spark", proficiency: 80 },
        { name: "Tableau", proficiency: 85 },
      ]
    },
    {
      title: "Deep Learning",
      icon: <Bot className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      skills: [
        { name: "Neural Networks", proficiency: 90 },
        { name: "CNNs", proficiency: 85 },
        { name: "RNNs/LSTMs", proficiency: 85 },
        { name: "Transformers", proficiency: 80 },
        { name: "GANs", proficiency: 75 },
      ]
    },
    {
      title: "Data Visualization",
      icon: <LineChart className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      skills: [
        { name: "Matplotlib", proficiency: 90 },
        { name: "Seaborn", proficiency: 90 },
        { name: "Plotly", proficiency: 85 },
        { name: "D3.js", proficiency: 75 },
        { name: "Streamlit", proficiency: 85 },
      ]
    },
    {
      title: "DevOps & MLOps",
      icon: <GitBranch className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      skills: [
        { name: "Git", proficiency: 90 },
        { name: "Docker", proficiency: 85 },
        { name: "MLflow", proficiency: 80 },
        { name: "Kubernetes", proficiency: 75 },
        { name: "AWS/GCP", proficiency: 80 },
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6 text-primary-500 dark:text-primary-400" />,
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "FastAPI", proficiency: 85 },
        { name: "Flask", proficiency: 90 },
      ]
    },
  ];

  return (
    <section id="skills" className="section bg-white dark:bg-dark-300">
      <div className="container">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical capabilities and areas of expertise in AI and data science."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedCard 
              key={categoryIndex}
              className="card p-6 h-full"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-500 dark:to-accent-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;