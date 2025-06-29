'use client'

import { useEffect } from 'react'
import { ExternalLink, Github, Calendar, Users, Code } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { gsap } from 'gsap'

const projectData = {
  CodeLink: {
    name: 'CodeLink',
    tagline: 'Collaborative Developer Platform',
    description: 'A sophisticated code sharing and collaboration platform designed for modern development teams. Features real-time collaboration, advanced syntax highlighting, and community-driven code reviews.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'WebRTC'],
    features: [
      'Real-time collaborative code editing',
      'Advanced syntax highlighting for 50+ languages',
      'Integrated code review system',
      'Community-driven snippet sharing',
      'Advanced search and filtering capabilities',
      'User profiles and portfolio integration',
      'Mobile-responsive design',
      'Dark/Light theme support'
    ],
    metrics: {
      users: '10K+',
      snippets: '50K+',
      languages: '50+'
    },
    liveUrl: 'https://codelink-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/codelink',
    status: 'Live',
    duration: '6 months',
    role: 'Lead Frontend Developer'
  },
  CareerHive: {
    name: 'CareerHive',
    tagline: 'Next-Gen Job Board Platform',
    description: 'A comprehensive job portal connecting talented developers with innovative companies. Built with modern architecture focusing on user experience, advanced matching algorithms, and seamless application tracking.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Redis'],
    features: [
      'AI-powered job matching algorithm',
      'Advanced application tracking system',
      'Company profiles with detailed insights',
      'Interactive resume builder and optimizer',
      'Automated interview scheduling',
      'Career development resources and guides',
      'Real-time notifications and updates',
      'Analytics dashboard for recruiters'
    ],
    metrics: {
      jobs: '5K+',
      companies: '500+',
      applications: '25K+'
    },
    liveUrl: 'https://careerhive-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/careerhive',
    status: 'In Development',
    duration: '8 months',
    role: 'Senior Frontend Architect'
  }
}

export function ProjectContent({ project }) {
  const data = projectData[project]

  useEffect(() => {
    // GSAP animations
    gsap.fromTo('.project-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )

    gsap.fromTo('.project-image', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    )

    gsap.fromTo('.project-details', 
      { opacity: 0, x: 30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        stagger: 0.1,
        delay: 0.5,
        ease: 'power2.out'
      }
    )
  }, [])

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Project Header */}
      <div className="project-header mb-12">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {data.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{data.tagline}</p>
            <div className="flex items-center gap-4 mb-4">
              <Badge className={`${
                data.status === 'Live' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {data.status}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {data.duration}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="w-4 h-4 mr-1" />
                {data.role}
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Project Image */}
      <div className="project-image mb-12 rounded-xl overflow-hidden border border-border shadow-lg">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white interactive-hover"
          onClick={() => window.open(data.liveUrl, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Live Demo
        </Button>
        <Button
          variant="outline"
          className="interactive-hover"
          onClick={() => window.open(data.githubUrl, '_blank')}
        >
          <Github className="w-4 h-4 mr-2" />
          View Source Code
        </Button>
      </div>

      {/* Project Details Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Tech Stack */}
        <Card className="project-details p-6 magic-card">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Code className="w-5 h-5 mr-2 text-primary" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Project Metrics */}
        <Card className="project-details p-6 magic-card">
          <h3 className="text-xl font-semibold mb-4">Project Impact</h3>
          <div className="space-y-3">
            {Object.entries(data.metrics).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-muted-foreground capitalize">{key}</span>
                <span className="font-semibold text-primary">{value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Project Status */}
        <Card className="project-details p-6 magic-card">
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Status</span>
              <Badge className={`${
                data.status === 'Live' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {data.status}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Duration</span>
              <span className="font-medium">{data.duration}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Role</span>
              <span className="font-medium text-sm">{data.role}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Key Features */}
      <Card className="project-details p-8 magic-card mb-12">
        <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Technical Highlights */}
      <Card className="project-details p-8 magic-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <h3 className="text-2xl font-semibold mb-6">Technical Highlights</h3>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            This project demonstrates advanced frontend architecture and modern development practices. 
            Built with a focus on performance, scalability, and user experience, it showcases expertise 
            in React ecosystem and modern web technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Key technical achievements include implementing real-time features, optimizing bundle sizes, 
            ensuring cross-browser compatibility, and maintaining high code quality standards. The project 
            follows industry best practices for testing, documentation, and deployment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Challenges overcome include complex state management, performance optimization for large datasets, 
            implementing responsive design patterns, and ensuring accessibility compliance. The solution 
            demonstrates senior-level problem-solving and architectural decision-making.
          </p>
        </div>
      </Card>
    </div>
  )
}