import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import Button from '../ui/Button';
import { DownloadIcon, ArrowRightIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium">Hello, I'm</span>
          </motion.div>

          <AnimatedText
            text="Ashen Fernando"
            tag="h1"
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient
            typewriter
          />

          <AnimatedText
            text="Full-Stack Developer | UI/UX Designer | Creative Technologist"
            tag="h2"
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8"
            delay={1}
          />

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Button href="#projects" size="lg" icon={<ArrowRightIcon className="w-4 h-4" />}>
              View Projects
            </Button>

            {/* ✅ Native <a> tag for download */}
            <a
              href="/AshenFernando_CV.pdf"
              download
              className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition px-6 py-3 rounded-lg text-sm font-medium"
            >
              <DownloadIcon className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#about"
              className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-5 h-5 border-b-2 border-r-2 border-current transform rotate-45"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
