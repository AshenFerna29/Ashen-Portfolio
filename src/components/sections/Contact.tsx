import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import { LinkedinIcon, GithubIcon, MailIcon, SendIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/ashen-fernando-5420a4266/',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      url: 'https://github.com/AshenFerna29',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      icon: <MailIcon className="w-5 h-5" />,
      url: 'mailto:ashen2742@gmail.com',
      color: 'bg-red-500 hover:bg-red-600'
    }
  ];

  const inputClasses =
    'w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors';

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <AnimatedText text="Get In Touch" tag="h2" className="text-4xl font-bold mb-4" gradient />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind or want to explore collaboration opportunities? Feel free to reach out—I'm always
              open to discussing new ideas and challenges.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Whether you're looking for a developer for your next project or just want to say hello, I'd love to hear
                from you.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">Email</h4>
                    <a href="mailto:ashen2742@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      ashen2742@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/ashen-fernando-5420a4266/"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      AshenFernando
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full ${link.color} flex items-center justify-center text-white transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                action="https://formspree.io/f/mvgabvwg" // 🔁 Replace this line
                method="POST"
                className="space-y-6"
              >
                <input name="name" type="text" required className={inputClasses} placeholder="Your Name" />
                <input name="email" type="email" required className={inputClasses} placeholder="Your Email" />
                <input name="subject" type="text" required className={inputClasses} placeholder="Subject" />
                <textarea
                  name="message"
                  rows={5}
                  required
                  className={inputClasses}
                  placeholder="Your Message"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-4 rounded-lg inline-flex justify-center items-center gap-2"
                >
                  <SendIcon className="w-4 h-4" /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
