'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Calendar, Coffee, MapPin } from 'lucide-react'

export function AboutContent() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shrink-0">
              HS
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Hasnat Shahriyar</h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Frontend Developer</p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2 text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-0">
                <div className="flex items-center justify-center sm:justify-start space-x-1">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-1">
                  <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Less than 1 year experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6 md:p-8 professional-hover">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
              <span className="text-primary mr-2">//</span>
              Introduction
            </h2>
            <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground leading-relaxed text-balance">
              <p className="mb-4 text-sm sm:text-base">
                I am a passionate and motivated junior frontend developer with a focus on learning 
                modern web technologies. Currently improving my skills in React, Next.js, and TypeScript.
              </p>
              <p className="mb-4 text-sm sm:text-base">
                I enjoy solving problems through code and am eager to contribute to real projects 
                while gaining professional experience.
              </p>
              <p className="text-sm sm:text-base">
                Outside of coding, I'm exploring best practices, UI/UX fundamentals, and web performance optimization.
              </p>
            </div>
          </Card>
        </div>

        {/* Skills & Learning */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Skills & Learning Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 professional-hover">
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold">Frontend Development</h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                Familiar with HTML, CSS, JavaScript fundamentals, and building responsive layouts 
                using Tailwind CSS and React.js.
              </p>
            </Card>

            <Card className="p-4 sm:p-6 professional-hover">
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                Actively learning Next.js, TypeScript, and improving understanding of React hooks, state management, 
                and component design.
              </p>
            </Card>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Current Focus
          </h2>
          <Card className="p-4 sm:p-6 professional-hover">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="text-xs sm:text-sm">Next.js (Learning)</Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">TypeScript (Learning)</Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">React.js</Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">Tailwind CSS</Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">JavaScript ES6+</Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm">Problem Solving</Badge>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
              Focused on mastering core frontend technologies and improving my ability to build clean, accessible, 
              and performant web applications. Open to learning new tools and frameworks.
            </p>
          </Card>
        </div>

        {/* Professional Journey */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Professional Journey
          </h2>
          <Card className="p-4 sm:p-6 professional-hover">
            <div className="space-y-4 text-muted-foreground text-xs sm:text-sm md:text-base text-balance">
              <p>
                I started my journey into web development recently, motivated by a passion for technology 
                and building websites. Since then, I've been actively learning and practicing frontend 
                development fundamentals.
              </p>
              <p>
                I've worked on several personal projects to apply my skills, and I'm eager to gain practical 
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
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Values & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                desc: 'I understand that mastery takes time, and I\'m committed to overcoming challenges and setbacks.',
              },
              {
                title: 'Collaboration',
                desc: 'I value working with others, asking questions, and learning from experienced developers.',
              }
            ].map((item, index) => (
              <Card key={index} className="p-4 sm:p-6 professional-hover">
                <h3 className="text-base sm:text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}