import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../providers/ThemeProvider';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
const Header: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Ashen Ferna
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium">
              {item.name}
            </a>)}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Toggle theme">
            {theme === 'light' ? <MoonIcon className="w-5 h-5 text-slate-700" /> : <SunIcon className="w-5 h-5 text-yellow-400" />}
          </button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800" aria-label="Toggle theme">
            {theme === 'light' ? <MoonIcon className="w-5 h-5 text-slate-700" /> : <SunIcon className="w-5 h-5 text-yellow-400" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" /> : <MenuIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium py-2">
                {item.name}
              </a>)}
          </div>
        </motion.div>}
    </motion.header>;
};
export default Header;