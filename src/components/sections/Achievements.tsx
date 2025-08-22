import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import './Achievements.css'; // We'll add custom CSS for the flip effect

const achievements = [
  {
    title: 'Portfolio Website Impact – High Engagement & Reach',
    description: 'Achieved significant website performance with high impressions and link clicks, demonstrating strong online presence and professional visibility in the tech community.'
  },
  {
    title: 'Member – Rewriting the Code (RTC), 2025',
    description: 'Chosen to be part of a global tech community of women in computing, focused on leadership, mentorship, and career advancement in software engineering.'
  },
  {
    title: 'Top Performer – 48-Hour AI Hackathon, Bennett University',
    description: 'Built a real-time Pantry Management System using object detection and inventory tracking during a 48-hour national hackathon hosted at Bennett University.'
  },
  {
    title: 'Campus Ambassador – Bennett University, Career Services',
    description: 'Led student outreach and mentoring initiatives, helping peers access internships, resume workshops, and career guidance platforms.'
  },
  {
    title: 'AI Intern – NASSCOM FutureSkills, 2023',
    description: 'Selected among top applicants to build AI-powered backend services and APIs, contributing to national digital skilling efforts and AI adoption programs.'
  },
  {
    title: 'ACM Research Symposium – Sign Language Recognition',
    description: 'Presented research on a CNN-LSTM-powered Sign Language Translator at the ACM Symposium on Assistive Technologies during undergraduate studies.'
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 pb-48">
      <div className="container mx-auto px-4">
        <SectionHeading title="Achievements" />
        <div className="grid grid-cols-4 gap-8 justify-items-center">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="flip-card w-full max-w-xs h-48 cursor-pointer"
              tabIndex={0}
            >
              <div className="flip-card-inner card h-full">
                {/* Front */}
                <div className="flip-card-front flex items-center justify-center h-full">
                  <h3 className="text-lg font-semibold text-center px-4" style={{color: '#54C754'}}>
                    {ach.title}
                  </h3>
                </div>
                {/* Back */}
                <div className="flip-card-back flex items-center justify-center h-full">
                  <p className="text-sm px-4 text-center" style={{color: '#825432'}}>
                    {ach.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 