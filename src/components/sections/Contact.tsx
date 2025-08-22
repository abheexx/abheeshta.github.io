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
            color: 'from-indigo-600 to-purple-700'
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
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education" />
        <div className="relative max-w-2xl mx-auto mt-8">
          <div className="space-y-12 relative z-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                className="relative flex items-stretch gap-4"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                {/* Timeline dot, perfectly aligned */}
                <div className="flex flex-col items-center min-w-[2rem]">
                  <span className="w-5 h-5 bg-gray-600 border-2 border-gray-800 shadow-md" />
                  {/* No vertical line between dots */}
                </div>
                {/* Card, visually connected to the line */}
                <div className="flex-1 card p-8 relative ml-0 flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold" style={{color: '#54C754'}}>
                        {edu.institution}
                      </h3>
                    </div>
                    <div className="text-lg font-bold mb-1" style={{color: '#54C754'}}>{edu.degree}</div>
                    <div className="text-sm mb-2 font-medium" style={{color: '#825432'}}>{edu.period} &bull; {edu.location}</div>
                    <div className="text-sm font-normal" style={{color: '#825432'}}>{edu.details}</div>
                  </div>
                  {/* Florida Gators logo for the first education box only */}
                  {i === 0 && (
                    <div className="relative">
                      {/* Minecraft Block Frame for logo */}
                      <div className="absolute inset-0 bg-white border-2 border-gray-800 shadow-lg">
                        <div className="absolute inset-1 bg-gray-200 border border-gray-600"></div>
                      </div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png"
                        alt="Florida Gators Logo"
                        className="relative z-10 w-12 h-12 object-contain ml-4 block border-2 border-gray-800"
                        style={{ 
                          clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                        }}
                      />
                    </div>
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