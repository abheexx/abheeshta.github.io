import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minimize, Square, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const terminalSequence = [
    '$ whoami',
    'abheeshta-vemuri — ai-engineer, backend-specialist',
    '',
    '$ cd ~/skills',
    '',
    '$ ls',
    '🧠  openai-agents.js',
    '🌲  pinecone-vector-db.sql',
    '🕸️  langchain-router.ts',
    '🚀  fastapi-server.py',
    '📦  dockerize.sh',
    '',
    '$ npx start voice-agent',
    '> Syncing Vapi.ai...',
    '> Connecting to GPT backend...',
    '> Calibrating tone, context, and personality... done ✅',
    '> "Hey there, how can I assist your users today?"',
    '$ _'
  ];

  useEffect(() => {
    if (isOpen && lines.length === 0) {
      typeSequence();
    }
  }, [isOpen]);

  const typeSequence = async () => {
    setIsTyping(true);
    
    for (let i = 0; i < terminalSequence.length; i++) {
      const line = terminalSequence[i];
      
      // Type character by character
      for (let j = 0; j <= line.length; j++) {
        setCurrentLine(line.substring(0, j));
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      
      // Add completed line and clear current
      setLines(prev => [...prev, line]);
      setCurrentLine('');
      
      // Pause between lines
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setIsTyping(false);
  };

  const handleClose = () => {
    setLines([]);
    setCurrentLine('');
    setIsTyping(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-2xl h-96 flex flex-col overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <TerminalIcon size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">terminal</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-400 hover:text-white">
                  <Minimize size={16} />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Square size={16} />
                </button>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={handleClose}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 p-4 bg-gray-900 text-green-400 font-mono text-sm overflow-y-auto">
              {lines.map((line, index) => (
                <div key={index} className="mb-1">
                  {line}
                </div>
              ))}
              {currentLine && (
                <div className="mb-1">
                  {currentLine}
                  <span className="animate-pulse">|</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;