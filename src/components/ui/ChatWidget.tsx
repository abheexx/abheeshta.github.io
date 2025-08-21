import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const initialMessage: Message = {
    id: '1',
    text: "Greetings, traveler! I'm Abheeshta's AI Assistant! How can I help you explore her world today? 🗺️",
    sender: 'bot',
    timestamp: new Date()
  };
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const knowledgeBase = {
    about: "Abheeshta Vemuri is a Computer Science graduate student at the University of Florida, passionate about building real-world AI systems that think, learn, and scale. She specializes in engineering full-stack applications powered by machine learning and MLOps.",
    education: "Abheeshta is currently pursuing her Master's in Computer Science at the University of Florida (2024-Present). She completed her Bachelor's in Computer Science with Data Science specialization at Bennett University (2020-2024).",
    experience: "She has worked as an AI Engineer Intern at Incepta (July 2025 - August 2025), Graduate Research Assistant at the University of Florida (Dec 2024 - Present), Software Engineer Intern at Nasscom (Aug 2023 - Dec 2023), Software Engineer Intern at Cognizant Technology Solutions (May 2023 - Aug 2023), and has research experience in machine learning and deep learning.",
    skills: "Her technical skills include Python, Java, JavaScript, TypeScript, C++, SQL, TensorFlow, PyTorch, Scikit-learn, OpenCV, NLTK, Hugging Face, React, Node.js, FastAPI, Flask, Django, Express.js, PostgreSQL, MongoDB, Redis, Pandas, NumPy, Apache Spark, Git, Docker, Kubernetes, AWS, GCP, CI/CD, and more.",
    projects: "She has worked on various projects including Code2Video (code visualization platform), PDF Extract & Reader Agent, AI Email Reader, LiveLens Real-time Vision, PowerPredict Energy Forecasting, SmartRoute Navigation System, AI Triage System, Sign Language Recognition, AI-Guided Smart Pick, and Task Tracker API.",
    location: "She's currently based in Gainesville, Florida for her studies at the University of Florida.",
    interests: "She's passionate about AI, machine learning, data science, and creating intelligent systems that make a positive impact.",
    contact: "You can reach out to Abheeshta through her portfolio or professional networks for collaboration opportunities.",
    joke: "Why did the AI engineer go broke? Because she used up all her cache! 😄 But seriously, Abheeshta loves a good tech pun and believes humor is essential in problem-solving.",
    superpower: "Abheeshta's superpower is turning complex data into actionable insights! She can spot patterns in chaos and build systems that think. Her secret weapon? Combining creativity with analytical thinking.",
    talent: "Abheeshta's secret talent is explaining complex AI concepts in simple terms. She can make machine learning feel like magic while keeping it grounded in reality. Plus, she's a master at debugging code at 3 AM!",
    spirit: "Abheeshta's spirit animal is definitely an owl! Wise, analytical, and great at seeing patterns in the dark (data). Plus, she's always learning and adapting to new technologies.",
    coffee: "Abheeshta runs on coffee and curiosity! Her ideal day involves solving complex problems, learning new technologies, and building things that make a difference. No coffee, no code! ☕",
    future: "Abheeshta envisions a future where AI enhances human capabilities rather than replacing them. She's passionate about building responsible AI systems that solve real-world problems and make life better for everyone."
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('who') && message.includes('you')) {
      return "I'm Abheeshta's AI assistant! I can help you learn about her background, skills, experience, education, and projects. What would you like to know?";
    }
    
    if (message.includes('🗺️') || message.includes('explore') || message.includes('site')) {
      return "🗺️ Welcome to my portfolio! Here's your adventure map:\n\n🎯 Projects - Check out my latest creations like Code2Video (code visualization), PDF Extract & Reader Agent, AI Email Reader, LiveLens Real-time Vision, PowerPredict Energy Forecasting, and SmartRoute Navigation System\n⚡ Skills - See my tech arsenal (Python, Java, AI/ML, Cloud, etc.)\n💼 Experience - My journey from internships to Graduate Research Assistant at UF\n🏆 Achievements - Awards, certifications, and milestones\n\nWhich area would you like to explore first? I can guide you through any section!";
    }
    
    if (message.includes('🧠') || message.includes('stand out') || message.includes('brag')) {
      return "🧠 In my own voice - Here's what makes me stand out:\n\n🚀 I build systems that think - From AI agents to scalable APIs, I create intelligent solutions that actually work\n💡 Problem-solver extraordinaire - Give me a complex challenge and I'll break it down into elegant, efficient solutions\n🎯 Results-driven - Currently working as an AI Engineer Intern at Incepta, building AI pipelines at UF's HiPerGator supercomputing cluster, and improving metadata extraction by 20%\n🧪 Research meets production - I bridge the gap between cutting-edge AI research and real-world applications\n🌟 Always learning - Currently pursuing my Master's while working as an AI Engineer Intern and Graduate Research Assistant, because why sleep when you can code?\n\nPlus, I explain complex AI concepts like I'm talking to a friend over coffee! ☕";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('university') || message.includes('degree')) {
      return knowledgeBase.education;
    }
    
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career')) {
      return knowledgeBase.experience;
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('programming')) {
      return knowledgeBase.skills;
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('build')) {
      return knowledgeBase.projects;
    }
    
    if (message.includes('about') || message.includes('background') || message.includes('who')) {
      return knowledgeBase.about;
    }
    
    if (message.includes('location') || message.includes('where') || message.includes('live')) {
      return knowledgeBase.location;
    }
    
    if (message.includes('interest') || message.includes('passion') || message.includes('like')) {
      return knowledgeBase.interests;
    }
    
    if (message.includes('achievement') || message.includes('award') || message.includes('impact') || message.includes('success')) {
      return "🏆 Abheeshta has achieved significant milestones both academically and professionally:\n\n🎯 **Competitions & Recognition:**\n• Winner of AI Showcase 2024 (1st among 50+ teams)\n• Gold Medal in Axis Bank Annual Youth Talent Contest\n• Top Performer in 48-Hour AI Hackathon\n\n🌐 **Portfolio Website Impact:**\n• 10K+ total impressions\n• 2.5K+ link clicks\n• 5K+ unique visitors\n• 500+ social shares\n• Reached 25+ countries\n• 150% monthly growth rate\n\n💼 **Professional Recognition:**\n• Member of Rewriting the Code (RTC) global community\n• Campus Ambassador for Career Services\n• Speaker at AI & Innovation Panel\n• Selected for NASSCOM FutureSkills AI Internship\n\nHer portfolio demonstrates strong professional visibility and global reach in the tech community!";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return knowledgeBase.contact;
    }
    
    return "I'm not sure about that specific question, but I can tell you about Abheeshta's education, experience, skills, projects, or background. What would you like to know?";
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(textToSend),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (action: string) => {
    let message = '';
    switch (action) {
      case 'explore':
        message = "🗺️ Help me explore the site!";
        break;
      case 'standout':
        message = "🧠 What makes her stand out?";
        break;
      case 'achievements':
        message = "🏆 Show me achievements";
        break;
    }
    handleSendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => {
          setMessages([initialMessage]);
          setIsOpen(true);
        }}
        className="fixed bottom-4 right-4 sm:bottom-20 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-white border-4 border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
        style={{ boxShadow: '0 4px 0 #5D4037' }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <img 
          src="/robo.jpeg" 
          alt="AI Assistant" 
          className="w-full h-full object-cover object-center"
          style={{ transform: 'scale(1.2)' }}
        />
      </motion.button>
      
      {/* Label on top with squared box */}
      <div className="fixed bottom-20 right-4 sm:bottom-36 sm:right-6 z-50 flex flex-col items-center select-none pointer-events-none">
        <div className="px-2 py-1 sm:px-3 sm:py-1 bg-white border-2 border-gray-800 text-xs font-semibold shadow-md animate-pulse pointer-events-auto" style={{color: '#825432', boxShadow: '0 2px 0 #5D4037'}}>
          <span className="hidden sm:inline">🤖 Chat with my AI!</span>
          <span className="sm:hidden">🤖 AI Chat</span>
        </div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-16 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-8rem)] sm:h-[32rem] bg-white border-4 border-gray-800 shadow-2xl overflow-hidden flex flex-col"
            style={{ boxShadow: '0 8px 0 #5D4037' }}
          >
            {/* Chat Header */}
            <div className="bg-white border-b-4 border-gray-800 p-3 sm:p-4" style={{color: '#54C754'}}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 border-2 border-gray-600 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/robo.jpeg" 
                      alt="AI Assistant" 
                      className="w-full h-full object-cover object-center"
                      style={{ transform: 'scale(1.3)' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold" style={{color: '#54C754'}}>AI Assistant</h3>
                    <p className="text-xs" style={{color: '#825432'}}>Ask me anything about Abheeshta's world!</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setMessages([initialMessage]);
                  }}
                  className="p-1.5 sm:p-2 border-2 border-gray-800 bg-white hover:bg-gray-200 transition-colors"
                  style={{color: '#825432'}}
                >
                  <X className="w-4 h-5 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Quick Reply Buttons */}
            <div className="p-2 sm:p-3 border-b-4 border-gray-800 bg-gray-100">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleQuickReply('explore')}
                  className="flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-white border-2 border-gray-800 text-xs font-medium hover:bg-gray-200 transition-colors"
                  style={{color: '#825432'}}
                >
                  <span className="hidden sm:inline">🗺️ Help me explore the site</span>
                  <span className="sm:hidden">🗺️ Explore</span>
                </button>
                <button
                  onClick={() => handleQuickReply('standout')}
                  className="flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-white border-2 border-gray-800 text-xs font-medium hover:bg-gray-200 transition-colors"
                  style={{color: '#825432'}}
                >
                  <span className="hidden sm:inline">🧠 What makes her stand out?</span>
                  <span className="sm:hidden">🧠 Stand Out</span>
                </button>
                <button
                  onClick={() => handleQuickReply('achievements')}
                  className="flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-white border-2 border-gray-800 text-xs font-medium hover:bg-gray-200 transition-colors"
                  style={{color: '#825432'}}
                >
                  <span className="hidden sm:inline">🏆 Show me achievements</span>
                  <span className="sm:hidden">🏆 Achievements</span>
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 text-sm ${
                      message.sender === 'user'
                        ? 'bg-white border-2 border-gray-800'
                        : 'bg-gray-200 border-2 border-gray-600'
                    }`}
                    style={{color: '#825432'}}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <img 
                          src="/robo.jpeg" 
                          alt="AI Assistant" 
                          className="w-4 h-4 mt-0.5 flex-shrink-0 object-cover object-center"
                          style={{ transform: 'scale(1.2)' }}
                        />
                      )}
                      <p className="text-xs leading-relaxed">{message.text}</p>
                      {message.sender === 'user' && (
                        <span className="text-sm mt-0.5 flex-shrink-0">👤</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 border-2 border-gray-600 px-3 py-2" style={{color: '#825432'}}>
                    <div className="flex items-center gap-2">
                      <img 
                        src="/robo.jpeg" 
                        alt="AI Assistant" 
                        className="w-4 h-4 object-cover object-center"
                        style={{ transform: 'scale(1.2)' }}
                      />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-600 animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-600 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-2 sm:p-3 border-t-4 border-gray-800 bg-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-2 py-1.5 sm:px-3 sm:py-2 border-2 border-gray-800 bg-white text-sm focus:outline-none focus:border-gray-600 transition-colors"
                  style={{color: '#825432'}}
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-2 py-1.5 sm:px-3 sm:py-2 bg-white border-2 border-gray-800 hover:bg-gray-200 disabled:bg-gray-300 text-sm transition-colors disabled:cursor-not-allowed"
                  style={{color: '#825432'}}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget; 