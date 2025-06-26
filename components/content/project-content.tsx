"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectContentProps {
  project: 'CodeLink' | 'CareerHive'
}

export function ProjectContent({ project }: ProjectContentProps) {
  const projects = {
    CodeLink: {
      name: 'CodeLink',
      description: 'A collaborative developer platform to share and review code snippets',
      longDescription: 'CodeLink is a modern platform designed for developers to share, review, and collaborate on code snippets. Built with a focus on clean UI and seamless user experience, it allows developers to showcase their work, get feedback from the community, and discover new coding techniques.',
      techStack: ['React', 'Tailwind', 'Firebase'],
      features: [
        'Real-time code sharing and collaboration',
        'Syntax highlighting for multiple languages',
        'Community-driven code reviews',
        'User profiles and portfolios',
        'Advanced search and filtering'
      ],
      liveUrl: '#',
      githubUrl: '#',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    },
    CareerHive: {
      name: 'CareerHive',
      description: 'Job board platform connecting developers with hiring startups',
      longDescription: 'CareerHive is a specialized job board platform that bridges the gap between talented developers and innovative startups. The platform features advanced matching algorithms, comprehensive company profiles, and streamlined application processes.',
      techStack: ['Next.js', 'Tailwind', 'MongoDB'],
      features: [
        'Advanced job matching algorithms',
        'Company profiles and culture insights',
        'One-click application process',
        'Salary transparency and insights',
        'Remote-first job opportunities'
      ],
      liveUrl: '#',
      githubUrl: '#',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    }
  }

  const currentProject = projects[project]

  return (
    <div className="text-white p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {currentProject.name}
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          {currentProject.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Project Image */}
        <Card className="border-blue-500/20 bg-gray-900/30 overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-blue-300 font-semibold">{currentProject.name}</p>
            </div>
          </div>
        </Card>

        {/* Project Details */}
        <div className="space-y-6">
          <Card className="border-blue-500/20 bg-gray-900/30">
            <CardHeader>
              <CardTitle className="text-blue-300">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                {currentProject.longDescription}
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gray-900/30">
            <CardHeader>
              <CardTitle className="text-blue-300">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gray-900/30">
            <CardHeader>
              <CardTitle className="text-blue-300">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="shine"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
              asChild
            >
              <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="mr-2" />
                View Live
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="flex-1 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10"
              asChild
            >
              <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-2" />
                View Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}