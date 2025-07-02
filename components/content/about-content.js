'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { gsap } from 'gsap'
import { Calendar, Coffee, MapPin } from 'lucide-react'
import { useEffect } from 'react'

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
    <div className="h-full overflow-y-auto">
      <div className="px-4 sm:px-6 md:px-8 py-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="about-section mb-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shrink-0">
              HS
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">Hasnat Shahriyar</h1>
              <p className="text-muted-foreground text-base sm:text-lg">Frontend Developer</p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2 text-sm text-muted-foreground space-y-1 sm:space-y-0">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Less than 1 year experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="about-section mb-12">
          <Card className="p-6 sm:p-8 professional-hover">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="text-primary mr-2">//</span>
              Introduction
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none text-muted-foreground leading-relaxed text-balance">
              <p className="mb-4">
                I am a passionate and motivated junior frontend developer with a focus on learning 
                modern web technologies. Currently improving my skills in React, Next.js, and TypeScript.
              </p>
              <p className="mb-4">
                I enjoy solving problems through code and am eager to contribute to real projects 
                while gaining professional experience.
              </p>
              <p>
                Outside of coding, I’m exploring best practices, UI/UX fundamentals, and web performance optimization.
              </p>
            </div>
          </Card>
        </div>

        {/* Skills & Learning */}
        <div className="about-section mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Skills & Learning Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 professional-hover">
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Frontend Development</h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Familiar with HTML, CSS, JavaScript fundamentals, and building responsive layouts 
                using Tailwind CSS and React.js.
              </p>
            </Card>

            <Card className="p-6 professional-hover">
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Actively learning Next.js, TypeScript, and improving understanding of React hooks, state management, 
                and component design.
              </p>
            </Card>
          </div>
        </div>

        {/* Current Focus */}
        <div className="about-section mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Current Focus
          </h2>
          <Card className="p-6 professional-hover">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Next.js (Learning)</Badge>
              <Badge variant="secondary">TypeScript (Learning)</Badge>
              <Badge variant="secondary">React.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">JavaScript ES6+</Badge>
              <Badge variant="secondary">Problem Solving</Badge>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Focused on mastering core frontend technologies and improving my ability to build clean, accessible, 
              and performant web applications. Open to learning new tools and frameworks.
            </p>
          </Card>
        </div>

        {/* Professional Journey */}
        <div className="about-section mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Professional Journey
          </h2>
          <Card className="p-6 professional-hover">
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base text-balance">
              <p>
                I started my journey into web development recently, motivated by a passion for technology 
                and building websites. Since then, I've been actively learning and practicing frontend 
                development fundamentals.
              </p>
              <p>
                I’ve worked on several personal projects to apply my skills, and I’m eager to gain practical 
                experience through internships or entry-level roles.
              </p>
              <p>
                My goal is to grow steadily as a developer by taking on challenging projects and continuously 
                expanding my knowledge.
              </p>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="about-section mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Values & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Learning Mindset',
                desc: 'I approach every project as a learning opportunity, eager to absorb new knowledge and improve my skills.',
              },
              {
                title: 'Attention to Detail',
                desc: 'I strive to write clean, readable code and pay close attention to UI consistency and usability.',
              },
              {
                title: 'Persistence',
                desc: 'I understand that mastery takes time, and I’m committed to overcoming challenges and setbacks.',
              },
              {
                title: 'Collaboration',
                desc: 'I value working with others, asking questions, and learning from experienced developers.',
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 professional-hover">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
