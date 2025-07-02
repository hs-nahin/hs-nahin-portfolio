'use client'

import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { MapPin, Calendar, Award, Coffee } from 'lucide-react'
import { gsap } from 'gsap'

export function AboutContent() {
  useEffect(() => {
    gsap.fromTo('.about-section', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out'
      }
    )
  }, [])

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="about-section mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
            HS
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">Hasnat Shahriyar</h1>
            <p className="text-xl text-muted-foreground">Senior Frontend Developer</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="about-section mb-12">
        <Card className="p-8 professional-hover">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Introduction
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-4">
              A passionate and experienced Senior Frontend Developer with over 10 years of expertise 
              in building scalable, high-performance web applications. I specialize in modern JavaScript 
              frameworks and have a proven track record of delivering exceptional user experiences.
            </p>
            <p className="mb-4">
              Throughout my career, I've worked with startups and enterprise companies, leading 
              development teams and architecting complex frontend solutions. I'm passionate about 
              clean code, performance optimization, and staying current with the latest web technologies.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects, mentoring junior 
              developers, and exploring new technologies that push the boundaries of web development.
            </p>
          </div>
        </Card>
      </div>

      {/* Experience Highlights */}
      <div className="about-section mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="text-primary mr-2">//</span>
          Experience Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 professional-hover">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Technical Leadership</h3>
            </div>
            <p className="text-muted-foreground">
              Led cross-functional teams of 5-10 developers, architected scalable frontend solutions, 
              and established best practices for code quality and performance.
            </p>
          </Card>
          
          <Card className="p-6 professional-hover">
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Product Development</h3>
            </div>
            <p className="text-muted-foreground">
              Built and launched 20+ production applications serving millions of users, 
              with focus on performance, accessibility, and user experience.
            </p>
          </Card>
        </div>
      </div>

      {/* Current Focus */}
      <div className="about-section">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="text-primary mr-2">//</span>
          Current Focus
        </h2>
        <Card className="p-6 professional-hover">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">React 18</Badge>
            <Badge variant="secondary">Next.js 14</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Performance Optimization</Badge>
            <Badge variant="secondary">Team Leadership</Badge>
            <Badge variant="secondary">Mentoring</Badge>
          </div>
          <p className="text-muted-foreground">
            Currently focused on building high-performance React applications, exploring the latest 
            Next.js features, and mentoring the next generation of frontend developers. Always 
            learning and adapting to the evolving web development landscape.
          </p>
        </Card>
      </div>
    </div>
  )
}