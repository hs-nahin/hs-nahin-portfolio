'use client'

import { useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Calendar, Star } from 'lucide-react'
import { gsap } from 'gsap'

const projects = [
  {
    title: 'CodeLink',
    description: 'A modern collaborative platform for developers to share, discover, and work together on code snippets. Features real-time collaboration, syntax highlighting, and community-driven content with advanced search capabilities.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://codelink-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/codelink',
    status: 'Live',
    year: '2024',
    featured: true,
    metrics: {
      users: '10K+',
      performance: '98/100',
      uptime: '99.9%'
    }
  },
  {
    title: 'CareerHive',
    description: 'A comprehensive job portal connecting talented professionals with top companies. Features advanced job matching algorithms, application tracking, career development resources, and AI-powered recommendations.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://careerhive-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/careerhive',
    status: 'In Development',
    year: '2024',
    featured: false,
    metrics: {
      users: '5K+',
      performance: '95/100',
      uptime: '99.5%'
    }
  }
]

export function ProjectsContent() {
  useEffect(() => {
    gsap.fromTo('.project-card', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2,
        ease: 'power2.out'
      }
    )
  }, [])

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-4">Featured Projects</h1>
        <p className="text-muted-foreground text-lg">
          A showcase of recent work demonstrating expertise in modern web development and user experience design.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card key={project.title} className="project-card professional-hover overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={
                    project.status === 'Live' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-yellow-500 hover:bg-yellow-600'
                  }>
                    {project.status}
                  </Badge>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary hover:bg-primary/90">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                {/* Year */}
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                    Key Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.metrics.users}</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.metrics.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.metrics.uptime}</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 shine-effect"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Summary */}
      <Card className="mt-8 p-6 professional-hover">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="text-primary mr-2">//</span>
          Project Portfolio Summary
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground">Avg Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">96/100</div>
            <div className="text-sm text-muted-foreground">Avg Performance</div>
          </div>
        </div>
      </Card>
    </div>
  )
}