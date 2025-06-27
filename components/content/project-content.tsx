"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { Icon } from '@iconify/react'

interface ProjectContentProps {
  project: 'CodeLink' | 'CareerHive'
}

export function ProjectContent({ project }: ProjectContentProps) {
  const projectData = {
    CodeLink: {
      title: 'CodeLink',
      description: 'Collaborative platform for sharing and reviewing code snippets',
      longDescription: 'CodeLink is a modern platform designed for developers to share, review, and collaborate on code snippets. Built with React and Firebase, it provides real-time collaboration features, syntax highlighting, and a clean interface for code sharing.',
      tech: ['React', 'Tailwind CSS', 'Firebase'],
      features: [
        'Real-time code sharing and collaboration',
        'Syntax highlighting for multiple languages',
        'User authentication and profiles',
        'Code snippet versioning',
        'Community-driven code reviews'
      ],
      github: 'https://github.com/hs-nahin/codelink',
      live: 'https://codelink-demo.vercel.app',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    CareerHive: {
      title: 'CareerHive',
      description: 'Developer-focused job board platform',
      longDescription: 'CareerHive is a specialized job board platform tailored for developers and tech professionals. Built with Next.js and MongoDB, it offers advanced filtering, company profiles, and a streamlined application process.',
      tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
      features: [
        'Advanced job filtering and search',
        'Company profiles and reviews',
        'Application tracking system',
        'Salary insights and trends',
        'Developer-focused job categories'
      ],
      github: 'https://github.com/hs-nahin/careerhive',
      live: 'https://careerhive-demo.vercel.app',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  }

  const currentProject = projectData[project]

  const techIcons: { [key: string]: string } = {
    'React': 'vscode-icons:file-type-reactjs',
    'Next.js': 'vscode-icons:file-type-next',
    'Tailwind CSS': 'vscode-icons:file-type-tailwind',
    'Firebase': 'vscode-icons:file-type-firebase',
    'MongoDB': 'vscode-icons:file-type-mongo'
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-blue-400 mb-2">{currentProject.title}</h1>
        <p className="text-xl text-gray-300 mb-6">{currentProject.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
          <div className="aspect-video bg-gray-700 rounded-lg mb-6 overflow-hidden">
            <img 
              src={currentProject.image} 
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href={currentProject.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild className="border-gray-600 hover:border-blue-500">
              <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {currentProject.tech.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-full">
                    <Icon icon={techIcons[tech]} className="w-5 h-5" />
                    <span className="text-sm text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{currentProject.longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {currentProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}