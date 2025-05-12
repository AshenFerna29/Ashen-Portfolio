import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import { GithubIcon, ExternalLinkIcon, ChevronDownIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'TankTrack',
      description:
        'A real-time IoT-based septic tank monitoring system built with Flutter and Firebase. It provides live tank level tracking, alert notifications, and a web dashboard for municipal or home management. Integrated with MongoDB for backend data storage and Spring Boot for API services.',
      image: '/TrankTrack logo.png',
      tags: ['Flutter', 'Dart', 'MongoDB', 'Firebase', 'Springboot'],
      github: 'https://github.com/AshenFerna29',
      demo: 'https://tank-track-official.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Ticketing System',
      description:
        'A desktop-based event ticketing application built in Java using JavaFX. It supports real-time seat reservation, multithreaded processing, and MySQL integration for event data storage. Designed for small-to-medium event organizers.',
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2070&q=80',
      tags: ['Java', 'Multithreading', 'MySQL', 'JavaFX'],
      github: 'https://github.com/AshenFerna29',
      featured: true
    },
    {
      id: 3,
      title: 'Zyrro Hunger',
      description:
        'A social responsibility web app that connects food donors with nearby shelters or NGOs. Built with HTML, CSS, and JavaScript, it enables easy listing of food surplus and real-time pickup coordination to reduce food waste and fight hunger.',
      image: '/1.jpeg',
      tags: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/AshenFerna29/Zero-Hunger',
      demo: 'https://ashenferna29.github.io/Zero-Hunger/HomePage.html',
      featured: true
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built with HTML and Framer Motion for smooth animations.',
      image: '/PORTFOLIO.jpg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/AshenFerna29/Portfolio',
      demo: 'https://ashenferna29.github.io/Portfolio/',
      featured: false
    },
    {
      id: 5,
      title: 'Event Dashboard',
      description:
        'An Event Updates Dashboard. Created to manage event logistics. Designed UI in Figma with a focus on clean, interactive components.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80',
      tags: ['Figma'],
      featured: false
    }
  ];

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <AnimatedText text="My Projects" tag="h2" className="text-4xl font-bold mb-4" gradient />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A showcase of my best work, demonstrating my skills in front-end development, mobile applications, and creative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-end space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-slate-800/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-blue-500/80 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                          <ExternalLinkIcon className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More / Show Less */}
          {projects.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center justify-center mx-auto space-x-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full font-medium transition-colors"
              >
                <span>{showAll ? 'Show Less' : 'Show More'}</span>
                <motion.div animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDownIcon className="w-5 h-5" />
                </motion.div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
