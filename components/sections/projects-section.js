'use client'

import { useEffect } from 'react'
import { ExternalLink, Github, Calendar, Star, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'

const projects = [
  {
    title: 'CodeLink',
    description: 'A modern code sharing platform where developers can share, discover, and collaborate on code snippets. Features syntax highlighting, real-time collaboration, and community-driven content with advanced search capabilities.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://codelink-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/codelink',
    status: 'Live',
    year: '2024',
    featured: true
  },
  {
    title: 'CareerHive',
    description: 'A comprehensive job portal connecting talented professionals with top companies. Features advanced job matching algorithms, application tracking, and career development resources with AI-powered recommendations.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://careerhive-demo.vercel.app',
    githubUrl: 'https://github.com/hs-nahin/careerhive',
    status: 'In Development',
    year: '2024',
    featured: false
  }
]

export function ProjectsSection() {
  useEffect(() => {
    gsap.fromTo('.project-card', 
      { opacity: 0, y: 120, scale: 0.8, rotateY: -15 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: 0,
        duration: 1.5, 
        stagger: 0.4,
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
      {/* Magical background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Magical section header */}
        <div className="text-center mb-24">
          <Badge className="mb-8 px-6 py-3 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 border border-green-400/30 text-green-200 backdrop-blur-xl">
            <Star className="w-4 h-4 mr-2 animate-pulse" />
            Portfolio
            <Zap className="w-4 h-4 ml-2 animate-bounce" />
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in modern web development technologies and magical user experiences.
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-grid grid lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <Card key={project.title} className="project-card group overflow-hidden bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative">
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
              
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    project.status === 'Live' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                      : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                  } border-0 shadow-lg backdrop-blur-xl`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white/90">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-6 text-purple-200 group-hover:text-white transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-purple-200/80 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-purple-600/10 border-purple-400/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400/50 transition-all duration-300 px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white group/btn shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-purple-400/40 hover:border-purple-400/80 bg-slate-800/30 hover:bg-purple-600/20 text-purple-200 hover:text-white group/btn transition-all duration-500 hover:scale-105"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
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