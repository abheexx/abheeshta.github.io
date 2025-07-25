import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/sections/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Footer from './components/layout/Footer';
import SimpleFooter from './components/layout/SimpleFooter';
import ChatWidget from './components/ui/ChatWidget';
import Clouds from './components/ui/Clouds';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/ui/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <Router>
            <Clouds />
            <ChatWidget />
            <Routes>
              <Route path="/" element={
                <div className="h-screen flex flex-col">
                  <main className="flex-1 overflow-hidden">
                    <Hero />
                  </main>
                  <SimpleFooter />
                </div>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;