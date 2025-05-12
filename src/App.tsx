import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/ui/ParticleBackground';
import AnimatedCursor from './components/ui/AnimatedCursor';
import ThemeProvider from './components/providers/ThemeProvider';
export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return <ThemeProvider>
      <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 transition-colors duration-500">
        <AnimatedCursor />
        <ParticleBackground />
        <AnimatePresence>
          {loading ? <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                <span className="typing-animation">Ashen Fernando</span>
              </div>
            </div> : <main className="relative z-10 w-full">
              <Header />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </main>}
        </AnimatePresence>
      </div>
    </ThemeProvider>;
}