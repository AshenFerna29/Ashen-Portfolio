import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUpIcon } from 'lucide-react';
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.button onClick={scrollToTop} className="bg-blue-500 hover:bg-blue-600 rounded-full p-3 mb-6 shadow-lg transition-colors" whileHover={{
          y: -5
        }} whileTap={{
          scale: 0.95
        }}>
            <ChevronUpIcon className="w-6 h-6" />
          </motion.button>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Ashen Ferna
            </h3>
            <p className="text-slate-300 mb-4">
             Full-Stack Developer | UI/UX Designer | Creative Technologist
            </p>
            <div className="mb-6">
              <motion.span className="inline-block text-blue-400 font-medium" animate={{
              opacity: [0.5, 1, 0.5]
            }} transition={{
              repeat: Infinity,
              duration: 3
            }}>
                Code. Create. Connect.
              </motion.span>
            </div>
            <p className="text-slate-400 text-sm">
              © {currentYear} Ashen Fernando. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;