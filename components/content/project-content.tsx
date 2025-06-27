'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProjectContentProps {
  project: 'CodeLink' | 'CareerHive'
}

const projectData = {
  CodeLink: {
    name: 'CodeLink',
    description: 'A modern code sharing platform where developers can share, discover, and collaborate on code snippets. Features syntax highlighting, real-time collaboration, and community-driven content.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    features: [
      'Real-time code collaboration',
      'Syntax highlighting for 50+ languages',
      'Community-driven content sharing',
      'Advanced search and filtering',
      'User profiles and portfolios',
      'Responsive design'
    ],
    liveUrl: 'https://codelink-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/codelink',
    status: 'Live'
  },
  CareerHive: {
    name: 'CareerHive',
    description: 'A comprehensive job portal connecting talented professionals with top companies. Features advanced job matching, application tracking, and career development resources.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'Advanced job search and filtering',
      'Application tracking system',
      'Company profiles and reviews',
      'Resume builder and optimization',
      'Interview scheduling',
      'Career development resources'
    ],
    liveUrl: 'https://careerhive-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/careerhive',
    status: 'In Development'
  }
}

export function ProjectContent({ project }: ProjectContentProps) {
  const data = projectData[project]

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold aurora-text">{data.name}</h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            data.status === 'Live' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
          }`}>
            {data.status}
          </span>
        </div>
        <p className="text-lg text-muted-foreground mb-6">
          {data.description}
        </p>
      </div>

      {/* Project Image */}
      <div className="mb-8 rounded-lg overflow-hidden border border-border">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer"
          onClick={() => window.open(data.liveUrl, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Live Demo
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => window.open(data.githubUrl, '_blank')}
        >
          <Github className="w-4 h-4 mr-2" />
          View Source Code
        </Button>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {data.features.map((feature, index) => (
            <Card key={index} className="p-4 border-beam">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <Card className="p-6 bg-card/50">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            This project showcases my ability to build full-stack web applications with modern
            technologies and best practices. The application features a clean, intuitive interface
            built with React and Next.js, styled with Tailwind CSS for a responsive design.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The backend architecture ensures scalability and performance, while the frontend
            provides an exceptional user experience with smooth animations and interactions.
            The project demonstrates proficiency in both frontend and backend development,
            as well as deployment and DevOps practices.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Key challenges overcome include optimizing performance for large datasets,
            implementing real-time features, and ensuring cross-browser compatibility.
            The project follows industry best practices for code organization, testing,
            and documentation.
          </p>
        </div>
      </Card>
    </div>
  )
}