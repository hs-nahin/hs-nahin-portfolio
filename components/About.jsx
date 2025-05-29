import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-dark rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p>
              As a frontend developer, I specialize in creating clean, efficient, and user-friendly
              interfaces. My approach combines modern design principles with robust technical
              implementation to deliver exceptional user experiences.
            </p>
            <p>
              I believe in writing maintainable, scalable code and staying current with the latest
              web technologies and best practices. My UI/UX philosophy centers on creating intuitive,
              accessible interfaces that solve real user problems.
            </p>
            <p>
              My learning approach is hands-on and project-driven. I continuously expand my skill set
              through practical application and staying engaged with the developer community.
            </p>
            <p>
              When delivering work, I focus on attention to detail, clear communication, and meeting
              project objectives while maintaining high code quality standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}