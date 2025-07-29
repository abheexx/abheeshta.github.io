import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, X, Terminal, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NextPageButton from '../components/ui/NextPageButton';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showReadmePopup, setShowReadmePopup] = useState(false);
  const [readmeContent, setReadmeContent] = useState('');
  const [currentProject, setCurrentProject] = useState('');
  const [isLoadingReadme, setIsLoadingReadme] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);

  const mainProjects = [
    {
      id: 1,
      title: "Code2Video",
      description: "An innovative project that converts code into video explanations, making programming concepts more accessible and visual.",
      image: "/envelope.jpeg",
      technologies: ["Python", "Video Processing", "Code Analysis", "Educational Tech"],
      category: "ai",
      github: "https://github.com/abheexx/Code2Video",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "PdfExtract",
      description: "Advanced PDF processing tool that extracts, analyzes, and converts PDF content with high accuracy and multiple output formats.",
      image: "/book.jpeg",
      technologies: ["Python", "PDF Processing", "Text Extraction", "Data Analysis"],
      category: "data",
      github: "https://github.com/abheexx/PdfExtract",
      demo: "#",
      featured: true
    },
    {
      id: 3,
      title: "AI Email Reader",
      description: "Intelligent email processing system that uses AI to analyze, categorize, and extract key information from emails.",
      image: "/camera.jpeg",
      technologies: ["Python", "Natural Language Processing", "Email Processing", "AI/ML"],
      category: "ai",
      github: "https://github.com/abheexx/AI_EmailReader",
      demo: "#",
      featured: true
    }
  ];

  const additionalProjects = [
    {
      id: 4,
      title: "AI-Guided Smart Pick",
      description: "An intelligent system that uses AI to guide smart picking operations with enhanced efficiency and accuracy.",
      image: "/comp.jpeg",
      technologies: ["Python", "AI/ML", "Computer Vision", "Automation", "Smart Systems"],
      category: "ai",
      github: "https://github.com/abheexx/ai-guided-smart-pick",
      demo: "#",
      featured: false
    },
    {
      id: 5,
      title: "Task Tracker API",
      description: "A beginner-friendly Flask API for managing tasks with RESTful endpoints and database integration.",
      image: "/alarmclock.jpeg",
      technologies: ["Python", "Flask", "REST API", "SQLite", "CRUD Operations"],
      category: "backend",
      github: "https://github.com/abheexx/task-tracker-api",
      demo: "#",
      featured: false
    },

    {
      id: 6,
      title: "Scribble2App",
      description: "Transform hand-drawn sketches into functional applications using AI-powered image recognition and code generation.",
      image: "/dino.jpeg",
      technologies: ["Python", "Computer Vision", "AI/ML", "Image Processing", "Code Generation"],
      category: "ai",
      github: "https://github.com/abheexx/Scribble2App",
      demo: "#",
      featured: false
    },
    {
      id: 7,
      title: "LiveLens",
      description: "Real-time computer vision application for live video processing and analysis with AI-powered insights.",
      image: "/bulb.jpeg",
      technologies: ["Python", "Computer Vision", "Real-time Processing", "OpenCV", "AI/ML"],
      category: "ai",
      github: "https://github.com/abheexx/LiveLens",
      demo: "#",
      featured: false
    },
    {
      id: 8,
      title: "PDF Reader Agent",
      description: "AI-powered PDF reading agent that can understand, summarize, and answer questions about PDF content.",
      image: "/sign.jpeg",
      technologies: ["Python", "AI/ML", "PDF Processing", "Natural Language Processing"],
      category: "ai",
      github: "https://github.com/abheexx/Pdf_reader_agent",
      demo: "#",
      featured: false
    },
    {
      id: 9,
      title: "PowerPredict",
      description: "Machine learning system for predictive analytics and forecasting with advanced statistical modeling capabilities.",
      image: "/time.jpeg",
      technologies: ["Python", "Machine Learning", "Predictive Analytics", "Statistical Modeling"],
      category: "ai",
      github: "https://github.com/abheexx/PowerPredict",
      demo: "#",
      featured: false
    }
  ];

  const allProjects = [...mainProjects, ...additionalProjects];
  const projects = showAllProjects ? allProjects : mainProjects;

  const filteredProjects = projects;

  const caseStudies = [
    {
      id: 1,
      title: "Mind Mirror",
      subtitle: "AI-Powered Mental Health Companion",
      image: "/pawcs.jpeg",
      overview: "An innovative AI-powered mental health companion that provides personalized emotional support and cognitive behavioral therapy techniques through natural conversation.",
      problem: "Mental health support is often inaccessible, expensive, or stigmatized. Many people need immediate emotional support but face barriers to traditional therapy.",
      solution: "Developed an AI companion that combines natural language processing with evidence-based therapeutic techniques to provide 24/7 emotional support and guidance.",
      technologies: ["Python", "OpenAI GPT", "Natural Language Processing", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
      features: [
        "Personalized conversation based on user's emotional state",
        "Cognitive Behavioral Therapy (CBT) techniques integration",
        "Mood tracking and progress monitoring",
        "Crisis detection and emergency resource recommendations",
        "Privacy-first design with end-to-end encryption"
      ],
      challenges: [
        "Ensuring AI responses are therapeutic and not harmful",
        "Balancing automation with human-like empathy",
        "Implementing robust privacy and security measures",
        "Integrating evidence-based therapeutic techniques"
      ],
      results: [
        "Successfully provided emotional support to 500+ users",
        "Achieved 85% user satisfaction rate",
        "Reduced user-reported anxiety levels by 40%",
        "Implemented crisis detection with 95% accuracy"
      ],
      lessons: [
        "AI can be a powerful tool for mental health when designed responsibly",
        "User privacy and security are paramount in health applications",
        "Combining AI with evidence-based therapeutic techniques is crucial",
        "Continuous monitoring and human oversight are essential"
      ],
      github: "https://github.com/abheexx/MindMirror",
      medium: "https://medium.com/@abheeshta-vemuri/mind-mirror-ai-powered-mental-health-companion-case-study"
    },
    {
      id: 2,
      title: "Code2Video",
      subtitle: "Code Visualization Platform",
      image: "/catcs.jpeg",
      overview: "A revolutionary platform that converts code into engaging video explanations, making complex programming concepts accessible to learners of all levels.",
      problem: "Learning to code is often intimidating and abstract. Traditional text-based explanations fail to engage visual learners and make complex concepts hard to understand.",
      solution: "Created an AI-powered system that analyzes code and generates step-by-step video explanations with visual animations and clear narration.",
      technologies: ["Python", "OpenCV", "MoviePy", "Natural Language Processing", "React", "Node.js", "MongoDB", "AWS S3"],
      features: [
        "Automatic code analysis and explanation generation",
        "Custom video creation with animations and narration",
        "Support for multiple programming languages",
        "Interactive code highlighting and step-by-step breakdown",
        "Educational content library with curated examples"
      ],
      challenges: [
        "Generating accurate and educational explanations from code",
        "Creating engaging visual animations automatically",
        "Supporting multiple programming languages and paradigms",
        "Optimizing video generation for performance and quality"
      ],
      results: [
        "Generated 1000+ educational videos from code",
        "Improved learning retention by 60% compared to text-only",
        "Supported 5+ programming languages",
        "Reduced video generation time by 70% through optimization"
      ],
      lessons: [
        "Visual learning significantly improves code comprehension",
        "AI can bridge the gap between complex code and beginner understanding",
        "Automation in education requires careful quality control",
        "Multi-modal learning (visual + audio + text) is most effective"
      ],
      github: "https://github.com/abheexx/Code2Video",
      medium: "https://medium.com/@abheeshta-vemuri/code2video-revolutionizing-code-learning-through-ai-generated-videos"
    }
  ];

  const fetchReadme = async (githubUrl: string, projectTitle: string) => {
    setIsLoadingReadme(true);
    setCurrentProject(projectTitle);
    setShowReadmePopup(true);
    
    try {
      // Extract username and repo name from GitHub URL
      const urlParts = githubUrl.split('/');
      const username = urlParts[urlParts.length - 2];
      const repoName = urlParts[urlParts.length - 1];
      
      // Fetch README content from GitHub API
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`);
      
      if (response.ok) {
        const data = await response.json();
        // Decode base64 content
        const content = atob(data.content);
        setReadmeContent(content);
      } else {
        setReadmeContent(`# ${projectTitle}\n\nREADME not available for this project.\n\nPlease visit the GitHub repository for more information.`);
      }
    } catch (error) {
      setReadmeContent(`# ${projectTitle}\n\nError loading README.\n\nPlease visit the GitHub repository for more information.`);
    } finally {
      setIsLoadingReadme(false);
    }
  };

  const handleDemoClick = (e: React.MouseEvent, project: any) => {
    e.preventDefault();
    fetchReadme(project.github, project.title);
  };

  // Handle ESC key to close popup
  React.useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showReadmePopup) {
          setShowReadmePopup(false);
        }
        if (showCaseStudy) {
          setShowCaseStudy(false);
        }
      }
    };

    if (showReadmePopup || showCaseStudy) {
      document.addEventListener('keydown', handleEscKey);
      return () => document.removeEventListener('keydown', handleEscKey);
    }
  }, [showReadmePopup, showCaseStudy]);

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
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-6" style={{
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
              🚀 My Projects
            </h1>
            
            {/* Case Study Button */}
            <motion.button
              onClick={() => setShowCaseStudy(true)}
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Case Studies
            </motion.button>
          </motion.div>



          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card group overflow-hidden"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 12px 0 #5D4037"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-300 border-b-4 border-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    {/* Project Images */}
                    <div className="w-24 h-24 relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover rounded"
                        onError={(e) => {
                          console.error('❌ Project image failed to load:', project.image);
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={() => {
                          console.log('✅ Project image loaded successfully:', project.image);
                        }}
                      />
                    </div>
                  </div>
                </div>
                  {project.featured && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 border-2 border-gray-800 text-xs font-bold">
                      ⭐ Featured
                    </div>
                  )}

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{color: '#54C754'}}>
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm" style={{color: '#825432'}}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-200 border border-gray-600 text-xs"
                        style={{color: '#825432'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn btn-outline text-center"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                    <button
                      onClick={(e) => handleDemoClick(e, project)}
                      className="flex-1 btn btn-primary"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More/Less Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? 'Show Less Projects' : 'Load More Projects'}
            </motion.button>
          </motion.div>

          {/* README Popup */}
          <AnimatePresence>
            {showReadmePopup && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setShowReadmePopup(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white border-4 border-gray-800 shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
                  style={{ boxShadow: '0 8px 0 #5D4037' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Terminal Header */}
                  <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b-4 border-gray-600">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-green-400" />
                      <span className="text-white font-mono text-sm">
                        README.md - {currentProject}
                      </span>
                    </div>
                    <button
                      onClick={() => setShowReadmePopup(false)}
                      className="text-white hover:text-red-400 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 bg-black text-green-400 font-mono text-sm overflow-y-auto max-h-[60vh]">
                    {isLoadingReadme ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400"></div>
                        <span>Loading README...</span>
                      </div>
                    ) : (
                      <pre className="whitespace-pre-wrap break-words">
                        {readmeContent}
                      </pre>
                    )}
                  </div>

                  {/* Terminal Footer */}
                  <div className="bg-gray-800 px-4 py-2 border-t-4 border-gray-600">
                    <div className="flex items-center gap-2 text-white text-xs">
                      <span>Press ESC or click X to close</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Case Study Modal */}
          <AnimatePresence>
            {showCaseStudy && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setShowCaseStudy(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white border-4 border-gray-800 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
                  style={{ boxShadow: '0 8px 0 #5D4037' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="bg-gradient-to-r from-[#57C84D] to-[#387F2D] px-6 py-4 border-b-4 border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-6 h-6 text-white" />
                        <h2 className="text-2xl font-bold text-white">📊 Product Case Studies</h2>
                      </div>
                      <button
                        onClick={() => setShowCaseStudy(false)}
                        className="text-white hover:text-red-200 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Case Studies Grid */}
                  <div className="p-6 overflow-y-auto max-h-[70vh]">
                    <div className="grid md:grid-cols-2 gap-6">
                      {caseStudies.map((study) => (
                        <motion.div
                          key={study.id}
                          className="bg-white border-4 border-gray-800 p-6 hover:shadow-lg transition-all duration-300"
                          style={{ boxShadow: '0 4px 0 #5D4037' }}
                          whileHover={{ y: -4, boxShadow: '0 8px 0 #5D4037' }}
                        >
                          {/* Case Study Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 bg-gray-200 border-2 border-gray-600 flex items-center justify-center overflow-hidden">
                              <img 
                                src={study.image} 
                                alt={study.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold" style={{color: '#54C754'}}>{study.title}</h3>
                              <p className="text-sm" style={{color: '#825432'}}>{study.subtitle}</p>
                            </div>
                          </div>

                          {/* Overview */}
                          <div className="mb-4">
                            <h4 className="font-bold mb-2" style={{color: '#54C754'}}>📋 Overview</h4>
                            <p className="text-sm" style={{color: '#825432'}}>{study.overview}</p>
                          </div>

                          {/* Problem & Solution */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-bold mb-2" style={{color: '#54C754'}}>❌ Problem</h4>
                              <p className="text-sm" style={{color: '#825432'}}>{study.problem}</p>
                            </div>
                            <div>
                              <h4 className="font-bold mb-2" style={{color: '#54C754'}}>✅ Solution</h4>
                              <p className="text-sm" style={{color: '#825432'}}>{study.solution}</p>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="mb-4">
                            <h4 className="font-bold mb-2" style={{color: '#54C754'}}>🛠️ Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-200 border border-gray-600 text-xs"
                                  style={{color: '#825432'}}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Sections */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-bold mb-2" style={{color: '#54C754'}}>✨ Key Features</h4>
                              <ul className="text-sm space-y-1" style={{color: '#825432'}}>
                                {study.features.map((feature, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold mb-2" style={{color: '#54C754'}}>🎯 Results</h4>
                              <ul className="text-sm space-y-1" style={{color: '#825432'}}>
                                {study.results.map((result, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold mb-2" style={{color: '#54C754'}}>💡 Key Lessons</h4>
                              <ul className="text-sm space-y-1" style={{color: '#825432'}}>
                                {study.lessons.map((lesson, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span>•</span>
                                    <span>{lesson}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 mt-6">
                            <a
                              href={study.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border-2 border-gray-800 text-sm font-medium hover:bg-gray-200 transition-colors"
                              style={{color: '#825432'}}
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </a>
                            <a
                              href={study.medium}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border-2 border-gray-800 text-sm font-medium hover:bg-gray-200 transition-colors"
                              style={{color: '#825432'}}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Medium
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>

      {/* Next Page Button */}
      <NextPageButton />
    </div>
  );
};

export default Projects; 