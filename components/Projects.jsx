import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1',
      github: 'https://github.com/hs-nahin/project1',
      preview: 'https://project1.demo.com',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2',
      github: 'https://github.com/hs-nahin/project2',
      preview: 'https://project2.demo.com',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg'
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3',
      github: 'https://github.com/hs-nahin/project3',
      preview: 'https://project3.demo.com',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}