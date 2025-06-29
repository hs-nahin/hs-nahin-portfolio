'use client'

import { useEffect } from 'react'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'

const projects = [
  {
    title: 'CodeLink',
    description: 'A modern code sharing platform where developers can share, discover, and collaborate on code snippets. Features syntax highlighting, real-time collaboration, and community-driven content.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://codelink-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/codelink',
    status: 'Live',
    year: '2024'
  },
  {
    title: 'CareerHive',
    description: 'A comprehensive job portal connecting talented professionals with top companies. Features advanced job matching, application tracking, and career development resources.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://careerhive-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/careerhive',
    status: 'In Development',
    year: '2024'
  }
]

export function ProjectsSection() {
  useEffect(() => {
    gsap.fromTo('.project-card', 
      { opacity: 0, y: 100, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1, 
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%'
        }
      }
    )
  }, [])

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-600/10 border border-primary/20 text-primary">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in modern web development technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="project-card group overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm shadow-2xl hover-lift">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    project.status === 'Live' 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-yellow-500/90 text-white'
                  } border-0`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white/80">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.year}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group/btn"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary/30 hover:border-primary/60 group/btn"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}