import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, MessageCircle, X, FileText, FolderOpen, HelpCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const initialMessage: Message = {
    id: '1',
    text: "Hi! I'm Abheeshta's AI Assistant 🤖 How can I help you today?",
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
    about: "Abheeshta Vemuri is an AI Engineer and Data Scientist passionate about solving complex problems using cutting-edge technologies. She specializes in machine learning, deep learning, and statistical analysis.",
    education: "Abheeshta is currently pursuing her Master's in Computer Science at the University of Florida (2023-Present). She completed her Bachelor's in Computer Science with Data Science specialization at Bennett University (2019-2023) and transferred to UF in her 4th year.",
    experience: "She has worked at Amazon Web Services as a Software Development Engineer (2023-Present), Barclays as a Software Engineer Intern (2022), Allogene for AI Research (2022), Simon Business School for Data Science (2021), KITOLIT as a Full Stack Developer (2020-2021), and BITS Pilani Indibots as an IoT Intern (2018).",
    skills: "Her technical skills include Python, React, Node.js, Docker, AWS/GCP, FastAPI, PostgreSQL, Redis, OpenAI, LangChain, Pinecone, Vector Databases, LLM Agents, API Integrations, and more.",
    projects: "She has worked on various projects including cloud-native services, automation scripts, deep learning models for cancer research, data analysis dashboards, and SaaS platforms.",
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
    
    if (message.includes('joke') || message.includes('funny')) {
      return knowledgeBase.joke;
    }
    
    if (message.includes('superpower') || message.includes('power')) {
      return knowledgeBase.superpower;
    }
    
    if (message.includes('talent') || message.includes('secret')) {
      return knowledgeBase.talent;
    }
    
    if (message.includes('spirit') || message.includes('animal')) {
      return knowledgeBase.spirit;
    }
    
    if (message.includes('coffee') || message.includes('fuel') || message.includes('coding')) {
      return knowledgeBase.coffee;
    }
    
    if (message.includes('future') || message.includes('vision') || message.includes('ai')) {
      return knowledgeBase.future;
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
      case 'joke':
        message = "Tell me a joke!";
        break;
      case 'superpower':
        message = "What's your superpower?";
        break;
      case 'talent':
        message = "What's your secret talent?";
        break;
      case 'spirit':
        message = "What's your spirit animal?";
        break;
      case 'coffee':
        message = "How do you fuel your coding sessions?";
        break;
      case 'future':
        message = "What's your vision for the future of AI?";
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
      {/* Quirky Arrow and Label */}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col items-center select-none pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-200 text-xs font-semibold shadow-md animate-pulse pointer-events-auto" style={{marginTop: '-0.5rem'}}>Try my AI chatbot!</span>
      </div>
      <motion.button
        onClick={() => {
          setMessages([initialMessage]);
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[32rem] bg-white dark:bg-dark-100 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-300 overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Hi, I'm Abheeshta's AI Assistant 🤖</h3>
                    <p className="text-blue-100 text-xs">Ask me anything!</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setMessages([initialMessage]);
                  }}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Reply Buttons */}
            <div className="p-3 border-b border-gray-200 dark:border-dark-300">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleQuickReply('joke')}
                  className="flex items-center gap-1 px-3 py-1.5 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-medium hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors"
                >
                  😄 Tell me a joke
                </button>
                <button
                  onClick={() => handleQuickReply('superpower')}
                  className="flex items-center gap-1 px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-xs font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                >
                  ⚡ What's your superpower?
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
                    className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-md'
                        : 'bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-white rounded-bl-md'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="w-3 h-3 mt-0.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      )}
                      <p className="text-xs leading-relaxed">{message.text}</p>
                      {message.sender === 'user' && (
                        <User className="w-3 h-3 mt-0.5 text-blue-100 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-white rounded-2xl rounded-bl-md px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Bot className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-gray-200 dark:border-dark-300 bg-white dark:bg-dark-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 rounded-xl border border-gray-200 dark:border-dark-300 bg-white dark:bg-dark-100 text-gray-800 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-3 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-xl transition-colors disabled:cursor-not-allowed"
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