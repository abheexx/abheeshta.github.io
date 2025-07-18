import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const education = [
  {
    institution: 'University of Florida',
    degree: 'Master of Science in Computer Science',
    period: '2023 – Present',
    location: 'Gainesville, Florida',
    details: 'Currently pursuing graduate studies in Computer Science.',
    color: 'from-blue-500 to-purple-500'
  },
  {
    institution: 'University of Florida',
    degree: 'CISE Senior Certification',
    period: 'Jan 2024 – May 2024',
    location: 'Gainesville, Florida',
    details: 'Completed CISE Senior Certification as part of advanced undergraduate coursework at UF.',
    color: 'from-cyan-500 to-blue-400'
  },
  {
    institution: 'Bennett University',
    degree: 'Bachelor of Technology in Computer Science (Data Science Specialization)',
    period: '2019 – 2023',
    location: 'Greater Noida, India',
    details: "Completed major coursework and specialization in Data Science. Merit transfer to University of Florida in 4th year, last semester.",
    color: 'from-pink-500 to-yellow-500'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: 'spring' }
  })
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-dark-200">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education" />
        <div className="relative max-w-2xl mx-auto mt-8">
          <div className="space-y-8 md:space-y-12 relative z-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                className="relative flex items-center md:items-stretch gap-2 md:gap-4"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                {/* Timeline dot, perfectly aligned */}
                <div className="flex flex-col items-center min-w-[2rem]">
                  <span className="w-5 h-5 rounded-full border-4 border-primary-500 dark:border-primary-400 bg-white dark:bg-dark-200 shadow-md" />
                  {/* No vertical line between dots */}
                </div>
                {/* Card, visually connected to the line */}
                <div className="flex-1 bg-white/80 dark:bg-dark-100/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-dark-300 p-8 relative ml-0 md:ml-0 flex items-center justify-between"
                  style={{ boxShadow: '0 8px 32px 0 rgba(80, 112, 255, 0.08), 0 1.5px 6px 0 rgba(80, 112, 255, 0.10)' }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                    </div>
                    <div className={`text-lg font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${edu.color}`}>{edu.degree}</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2 font-medium">{edu.period} &bull; {edu.location}</div>
                    <div className="text-neutral-700 dark:text-neutral-300 text-sm font-normal">{edu.details}</div>
                  </div>
                  {/* Florida Gators logo for the first education box only */}
                  {i === 0 && (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png"
                      alt="Florida Gators Logo"
                      className="w-12 h-12 object-contain ml-4 hidden md:block"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;