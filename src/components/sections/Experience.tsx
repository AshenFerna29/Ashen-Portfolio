import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  badges?: string[];
}
const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [{
    id: 1,
    role: 'Project Manager',
    company: 'TankTrack',
    duration: 'Oct 2024 - March 2025',
    description:  'A real-time IoT-based septic tank and fleet monitoring system designed for fuel distribution and municipal services. Built with Flutter for mobile, Spring Boot for APIs, Firebase for messaging, and MongoDB for data storage. The system includes live tank level readings, dashboard analytics, and alert-based notifications.',
    achievements:  [
    'Developed both the frontend (Flutter) and backend (Spring Boot + MongoDB)',
    'Integrated Firebase Cloud Messaging to trigger alerts when tank levels reached thresholds',
    'Created a web dashboard for historical tank level analytics and location tracking'
  ],
    badges: ['Leadership', 'Project Management','IoT Integration','Full Stack']
  }, {
    id: 3,
    role: 'Member',
    company: 'LEO Club (IIT Chapter)',
    duration: '2024 – 2025 ',
    description: 'General member of the LEO Club during university years. Participated in meetings and club events occasionally.',
    achievements: ['Maintained active membership status'],
    badges: ['LEO Club Member']
  },{
    id: 3,
    role: 'Foundation in IT – Distinction Graduate',
    company: 'Informatics Institute of Technology',
    duration: 'May 2023  – Dec 2023 ',
    description: 'Completed Foundation in IT with high academic performance leading to direct entry into the BSc programme.',
    achievements: ['Achieved Distinction in Foundation year'],
    badges: ['Distinction', 'Academic Excellence']
  }, {
    id: 4,
    role: 'Batch Representative',
    company: 'IIT University',
    duration: 'Sep 2024 - 2025 May',
    description: 'Elected representative for Computer Science undergraduate batch, coordinating between faculty and students.',
    achievements: ['Organized 5 successful technical workshops with industry professionals', 'Advocated for curriculum improvements adopted by the department', 'Led team to victory in inter-university hackathon'],
    badges: ['Leadership', 'Event Management', ]
  }]
  return <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText text="Experience & Achievements" tag="h2" className="text-4xl font-bold mb-4" gradient />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My professional journey and key accomplishments that showcase my
              growth, leadership, and technical expertise.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => <motion.div key={exp.id} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.2
            }} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-500 z-10"></div>
                  {/* Content */}
                  <div className="md:w-1/2 md:px-10 pl-8 md:pl-0">
                    <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                      <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-4">
                        {exp.company}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-slate-600 dark:text-slate-300 text-sm">
                              {achievement}
                            </span>
                          </li>)}
                      </ul>
                      {exp.badges && <div className="flex flex-wrap gap-2">
                          {exp.badges.map((badge, i) => <span key={i} className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                              {badge}
                            </span>)}
                        </div>}
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;