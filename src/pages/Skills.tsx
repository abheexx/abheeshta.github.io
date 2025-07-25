import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
              🛠️ My Tech Arsenal
            </h1>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 group hover:scale-105 transition-transform duration-300"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 8px 0 #5D4037"
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{color: '#54C754'}}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-200 border border-gray-600 text-xs font-medium"
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
          <motion.div variants={itemVariants} className="mt-12">
            <div className="card p-8 text-center">
              <h2 className="text-3xl font-bold mb-6" style={{color: '#54C754'}}>
                🎯 Experience Levels
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold" style={{color: '#54C754'}}>Expert</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>Python</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-full h-full bg-green-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>React</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-full h-full bg-green-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>AWS</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-20 h-full bg-green-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold" style={{color: '#54C754'}}>Advanced</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>Docker</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-20 h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>Node.js</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-20 h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>PostgreSQL</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-16 h-full bg-blue-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold" style={{color: '#54C754'}}>Learning</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>Kubernetes</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-12 h-full bg-yellow-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>Rust</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-8 h-full bg-yellow-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{color: '#825432'}}>Web3</span>
                      <div className="w-24 h-3 bg-gray-300 border border-gray-600">
                        <div className="w-10 h-full bg-yellow-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 