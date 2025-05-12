import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import { ActivityIcon, MicIcon, AwardIcon, BrainIcon } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground'; // ✅ Add this import

const About: React.FC = () => {
  const funFacts = [
    {
      icon: <ActivityIcon className="w-6 h-6" />,
      title: 'Project Manager',
      description:
        'Took the lead role in academic and personal tech projects, coordinating development and timelines.',
    },
    {
      icon: <MicIcon className="w-6 h-6" />,
      title: 'Hackathon Presenter – VisionX 2025',
      description: 'Pitched the TankTrack system at IIT’s prestigious VisionX Hackathon',
    },
    {
      icon: <AwardIcon className="w-6 h-6" />,
      title: 'Fast Learner',
      description:
        'Self-taught multiple programming languages within short periods and applied them in real projects.',
    },
    {
      icon: <BrainIcon className="w-6 h-6" />,
      title: 'Can Speak 3 Languages',
      description: 'Fluent in English and Sinhala; conversational in Tamil.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
      {/* 👇 Particle background behind everything */}
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedText text="About Me" tag="h2" className="text-4xl font-bold mb-4" gradient />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Bio Text */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
            <motion.div
              className="col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatedText
                text={['Crafting Digital Experiences', 'With Code & Creativity']}
                tag="h3"
                className="text-2xl font-bold mb-6 text-center text-white"
              />

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm a passionate front-end developer and computer science undergraduate
                  focused on designing responsive, scalable, and user-friendly digital experiences.
                  My academic journey includes distinction-level performance and impactful projects like
                  TankTrack and a real-time Java-based ticketing system.
                  I believe in writing clean code, continuously learning, and building meaningful apps
                  that solve real-world problems with precision and elegance.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Fact Cards */}
          <motion.div
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden backdrop-blur-md"
              >
                {/* Glow ring behind icon */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-xl rounded-full animate-pulse z-0" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 shadow-md">
                    {fact.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">{fact.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
