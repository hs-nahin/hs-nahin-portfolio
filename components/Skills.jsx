import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const frontendSkills = [
    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
    'JavaScript (ES6+)', 'TypeScript',
    'React.js', 'Next.js'
  ];

  const devTools = [
    'Git/GitHub', 'Figma', 'VS Code',
    'Chrome DevTools', 'ESLint/Prettier',
    'npm/yarn', 'Vercel', 'Netlify'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Frontend Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Development Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {devTools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <p className="mt-12 text-center text-gray-600 dark:text-gray-400">
          I am comfortable working with basic backend APIs and integration tasks, though my core focus remains on frontend development.
        </p>
      </div>
    </section>
  );
}