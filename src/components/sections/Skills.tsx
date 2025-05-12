import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import { FaJava, FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaFigma, FaAndroid } from 'react-icons/fa';
import { SiKotlin, SiDart, SiFlutter, SiJetpackcompose, SiMongodb, SiFirebase, SiMysql, SiVscodium, SiIntellijidea } from 'react-icons/si';

type SkillCategory = 'all' | 'languages' | 'frameworks' | 'tools' | 'databases';

interface Skill {
  name: string;
  category: Exclude<SkillCategory, 'all'>[];
  icon: JSX.Element;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const skills: Skill[] = [
    { name: 'Java', category: ['languages'], icon: <FaJava className="text-orange-500 text-3xl" /> },
    { name: 'JavaScript', category: ['languages'], icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: 'Python', category: ['languages'], icon: <FaPython className="text-blue-400 text-3xl" /> },
    { name: 'HTML5', category: ['languages'], icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
    { name: 'CSS3', category: ['languages'], icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
    { name: 'Kotlin', category: ['languages'], icon: <SiKotlin className="text-purple-500 text-3xl" /> },
    { name: 'Dart', category: ['languages'], icon: <SiDart className="text-blue-500 text-3xl" /> },
    { name: 'React.js', category: ['frameworks'], icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: 'Flutter', category: ['frameworks'], icon: <SiFlutter className="text-blue-400 text-3xl" /> },
    { name: 'Jetpack Compose', category: ['frameworks'], icon: <SiJetpackcompose className="text-green-500 text-3xl" /> },
    { name: 'Figma', category: ['tools'], icon: <FaFigma className="text-pink-500 text-3xl" /> },
    { name: 'Git', category: ['tools'], icon: <FaGitAlt className="text-red-500 text-3xl" /> },
    { name: 'VS Code', category: ['tools'], icon: <SiVscodium className="text-blue-400 text-3xl" /> },
    { name: 'IntelliJ IDEA', category: ['tools'], icon: <SiIntellijidea className="text-purple-600 text-3xl" /> },
    { name: 'Android Studio', category: ['tools'], icon: <FaAndroid className="text-green-600 text-3xl" /> },
    { name: 'Firebase', category: ['databases'], icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
    { name: 'MongoDB', category: ['databases'], icon: <SiMongodb className="text-green-600 text-3xl" /> },
    { name: 'MySQL', category: ['databases'], icon: <SiMysql className="text-blue-500 text-3xl" /> }
  ];

  const categories = [
    { value: 'all', label: 'All Skills' },
    { value: 'languages', label: 'Languages' },
    { value: 'frameworks', label: 'Frameworks' },
    { value: 'tools', label: 'Tools' },
    { value: 'databases', label: 'Databases' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category.includes(activeCategory));

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText text="My Skills" tag="h2" className="text-4xl font-bold mb-4" gradient />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A comprehensive collection of my technical skills and expertise developed through real-world projects and academic excellence.
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value as SkillCategory)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Animated Grid */}
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-2">{skill.icon}</div>
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
