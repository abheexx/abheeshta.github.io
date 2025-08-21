import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Award, Star, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NextPageButton from '../components/ui/NextPageButton';

const Achievements: React.FC = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      id: 1,
      title: "Winner – AI Showcase 2024",
      description: "Ranked <span style='font-weight: bold; color: #FF6B35;'>1st</span> among <span style='font-weight: bold; color: #FF6B35;'>50+ teams</span> for the '<span style='font-weight: bold; color: #FF6B35;'>Sign Language Recognition</span>' project using <span style='font-weight: bold; color: #FF6B35;'>CNN-LSTM</span>. Received prize money and special mention from the university's <span style='font-weight: bold; color: #FF6B35;'>AI lab panel</span>.",
      icon: "🏆",
      category: "competition",
      date: "April 2024",
      featured: true
    },
    {
      id: 2,
      title: "Campus Ambassador – Career Services",
      description: "Served as student representative for industry mentorship, resume reviews, and placement prep. Organized workshops and mock interview sessions for <span style='font-weight: bold; color: #FF6B35;'>200+ students</span>.",
      icon: "👥",
      category: "leadership",
      date: "2023",
      featured: true
    },
    {
      id: 3,
      title: "Speaker – AI & Innovation Panel",
      description: "Invited to share insights on AI-powered automation during internship at <span style='font-weight: bold; color: #FF6B35;'>Nasscom</span>. Discussed use of <span style='font-weight: bold; color: #FF6B35;'>Flask</span>, <span style='font-weight: bold; color: #FF6B35;'>CI/CD</span>, and <span style='font-weight: bold; color: #FF6B35;'>Kafka</span> in production deployments.",
      icon: "🎤",
      category: "speaking",
      date: "Dec 2023",
      featured: true
    },
    {
      id: 4,
      title: "Member – Rewriting the Code (RTC)",
      description: "Actively involved in the women-in-tech network focused on career growth, mentorship, and tech opportunities. Participated in workshops, scholarship programs, and virtual career fairs.",
      icon: "💻",
      category: "community",
      date: "2025",
      featured: false
    },
    {
      id: 5,
      title: "Hackathon Finalist – Pantry Management System",
      description: "Built a smart inventory + recipe management app using <span style='font-weight: bold; color: #FF6B35;'>Python</span> and <span style='font-weight: bold; color: #FF6B35;'>Firebase</span>. Reached finals among <span style='font-weight: bold; color: #FF6B35;'>200+ participants</span>, presented to industry mentors.",
      icon: "🚀",
      category: "competition",
      date: "2023",
      featured: false
    },
    {
      id: 6,
      title: "Diploma in Classical Music",
      description: "Trained in Indian classical music (vocal/instrumental) with a focus on performance and theory. Performed at university-level cultural events and local competitions.",
      icon: "🎵",
      category: "education",
      date: "2016-2021",
      featured: false
    },
    {
      id: 7,
      title: "Gold Medal – Best Artist",
      description: "<span style='font-weight: bold; color: #FF6B35;'>Axis Bank Annual Youth Talent Contest</span> – 2020. Received the <span style='font-weight: bold; color: #FF6B35;'>Gold Medal</span> for outstanding performance in visual arts. Selected as the top artist among <span style='font-weight: bold; color: #FF6B35;'>300+ participants</span> from across the country. Recognized for creativity, technique, and originality by a <span style='font-weight: bold; color: #FF6B35;'>national jury panel</span>.",
      icon: "🥇",
      category: "arts",
      date: "2020",
      featured: true
    }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
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
              🏆 Achievements & Awards
            </h1>
          </motion.div>





          {/* All Achievements Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  className="card p-6 group"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 8px 0 #5D4037"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{color: '#54C754'}}>
                        {achievement.title}
                      </h3>
                      <p className="mb-3 text-sm" style={{color: '#825432'}} dangerouslySetInnerHTML={{ __html: achievement.description }}>
                      </p>
                      <div className="flex items-center justify-start">
                        <span className="text-xs font-medium px-2 py-1 bg-gray-200 border border-gray-600" style={{color: '#825432'}}>
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#54C754'}}>
                📊 Achievement Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#54C754'}}>
                    {achievements.length}
                  </div>
                  <div style={{color: '#825432'}}>Total Achievements</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#54C754'}}>
                    {achievements.filter(a => a.featured).length}
                  </div>
                  <div style={{color: '#825432'}}>Featured</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#54C754'}}>
                    {new Set(achievements.map(a => a.category)).size}
                  </div>
                  <div style={{color: '#825432'}}>Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#54C754'}}>
                    3+
                  </div>
                  <div style={{color: '#825432'}}>Years Active</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Website Performance Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#54C754'}}>
                🌐 Portfolio Website Impact
              </h2>
              <p className="text-center mb-8" style={{color: '#825432'}}>
                Demonstrating strong professional visibility and global reach through my online portfolio
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#8B5CF6'}}>
                    10K+
                  </div>
                  <div style={{color: '#825432'}}>Total Impressions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#06B6D4'}}>
                    2.5K+
                  </div>
                  <div style={{color: '#825432'}}>Link Clicks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#10B981'}}>
                    5K+
                  </div>
                  <div style={{color: '#825432'}}>Unique Visitors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#F59E0B'}}>
                    500+
                  </div>
                  <div style={{color: '#825432'}}>Social Shares</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#EF4444'}}>
                    25+
                  </div>
                  <div style={{color: '#825432'}}>Countries Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#8B5CF6'}}>
                    150%
                  </div>
                  <div style={{color: '#825432'}}>Monthly Growth</div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-block bg-white border-4 border-gray-800 p-6" style={{ boxShadow: '0 4px 0 #5D4037' }}>
                  <h3 className="text-xl font-bold mb-3" style={{color: '#54C754'}}>
                    🚀 Professional Impact
                  </h3>
                  <p className="mb-4" style={{color: '#825432'}}>
                    My portfolio has achieved significant reach and engagement, demonstrating strong professional visibility 
                    and the ability to connect with the tech community globally.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="px-3 py-1 bg-gray-200 border border-gray-600" style={{color: '#825432'}}>
                      📈 High Engagement Rate
                    </span>
                    <span className="px-3 py-1 bg-gray-200 border border-gray-600" style={{color: '#825432'}}>
                      🌍 Global Reach
                    </span>
                    <span className="px-3 py-1 bg-gray-200 border border-gray-600" style={{color: '#825432'}}>
                      💼 Professional Networking
                    </span>
                  </div>
                </div>
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

export default Achievements; 