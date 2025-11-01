import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NextPageButton from '../components/ui/NextPageButton';

const Skills: React.FC = () => {
  const navigate = useNavigate();

  const skillCategories = [
    {
      title: "🤖 AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Pinecone", "Vector Databases", "LLM Agents", "Deep Learning", "NLP"]
    },
    {
      title: "🌐 Web Development",
      skills: ["React", "Node.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Express.js", "REST APIs", "GraphQL"]
    },
    {
      title: "☁️ Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions", "Terraform", "Serverless", "Microservices"]
    },
    {
      title: "🗄️ Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB", "Firebase", "Data Modeling", "ETL Pipelines"]
    },
    {
      title: "📊 Data Science",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Jupyter", "Data Visualization", "Statistical Analysis", "A/B Testing", "Business Intelligence"]
    },
    {
      title: "🛠️ Tools & Platforms",
      skills: ["VS Code", "PyCharm", "Postman", "Docker Desktop", "AWS Console", "Google Cloud Console", "GitHub", "Figma"]
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
      
      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="fixed top-3 left-3 sm:top-6 sm:left-6 z-50 p-2 sm:p-3 bg-white border-2 sm:border-4 border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-base"
        style={{ boxShadow: '0 4px 0 #5D4037' }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" style={{color: '#825432'}} />
        <span className="hidden sm:inline" style={{color: '#825432'}}>Back to Home</span>
        <span className="sm:hidden" style={{color: '#825432'}}>Back</span>
      </motion.button>

      <div className="container mx-auto px-4 py-8 sm:py-16 md:py-20 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{
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
              🛠️ My Tech Arsenal
            </h1>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-4 sm:p-6 group hover:scale-105 transition-transform duration-300"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 8px 0 #5D4037"
                }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{color: '#54C754'}}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-200 border border-gray-600 text-xs font-medium"
                      style={{color: '#825432'}}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#d4d4d4'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Level */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-12">
            <div className="card p-4 sm:p-6 md:p-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6" style={{color: '#54C754'}}>
                🎯 Experience Levels
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold" style={{color: '#54C754'}}>Expert</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>Python</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-full h-full bg-green-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>React</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-full h-full bg-green-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>AWS</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-full h-full bg-green-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold" style={{color: '#54C754'}}>Advanced</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>Docker</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-full h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>Node.js</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-full h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>PostgreSQL</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-4/5 h-full bg-blue-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold" style={{color: '#54C754'}}>Learning</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>Kubernetes</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-1/2 h-full bg-yellow-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>Rust</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-1/3 h-full bg-yellow-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm sm:text-base" style={{color: '#825432'}}>Web3</span>
                      <div className="w-20 sm:w-24 h-2 sm:h-3 bg-gray-300 border border-gray-600 flex-shrink-0">
                        <div className="w-2/5 h-full bg-yellow-600"></div>
                      </div>
                    </div>
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

export default Skills; 