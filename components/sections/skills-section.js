'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@iconify/react'
import { gsap } from 'gsap'

const skillCategories = [
  {
    name: 'Frontend Technologies',
    expanded: true,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', level: 'Expert', description: 'Semantic markup, accessibility' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', level: 'Expert', description: 'Grid, Flexbox, animations' },
      { name: 'JavaScript', icon: 'logos:javascript', level: 'Expert', description: 'ES6+, async/await, modules' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', level: 'Expert', description: 'Advanced types, generics' },
      { name: 'React.js', icon: 'logos:react', level: 'Expert', description: 'Hooks, context, performance' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', level: 'Expert', description: 'SSR, SSG, app router' },
    ]
  },
  {
    name: 'Styling & Design',
    expanded: true,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', level: 'Expert', description: 'Utility-first, custom components' },
      { name: 'Bootstrap', icon: 'logos:bootstrap', level: 'Advanced', description: 'Responsive design, utilities' },
    ]
  },
  {
    name: 'Tools & Deployment',
    expanded: false,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git', icon: 'logos:git-icon', level: 'Expert', description: 'Version control, workflows' },
      { name: 'GitHub', icon: 'logos:github-icon', level: 'Expert', description: 'Collaboration, CI/CD' },
      { name: 'Vercel', icon: 'logos:vercel-icon', level: 'Expert', description: 'Deployment, analytics' },
      { name: 'Netlify', icon: 'logos:netlify-icon', level: 'Advanced', description: 'Static hosting, functions' },
      { name: 'Firebase', icon: 'logos:firebase', level: 'Advanced', description: 'Auth, database, hosting' },
    ]
  }
]

export function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState(['Frontend Technologies', 'Styling & Design'])

  useEffect(() => {
    gsap.fromTo('.skill-category', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 80%'
        }
      }
    )
  }, [])

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'from-green-500 to-emerald-600'
      case 'Advanced':
        return 'from-blue-500 to-cyan-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-primary/20 text-primary">
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            My Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills Container */}
        <div className="skills-container space-y-8">
          {skillCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.name)
            
            return (
              <Card key={category.name} className="skill-category overflow-hidden border-0 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm shadow-xl">
                <div
                  className="flex items-center justify-between p-8 cursor-pointer group hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-500"
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-white transition-transform duration-300" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-white transition-transform duration-300" />
                    )}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="p-8 pt-0 bg-gradient-to-br from-background/50 to-muted/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.skills.map((skill) => (
                        <Card
                          key={skill.name}
                          className="p-6 group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:from-card/70 hover:to-card/50 hover-lift"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="relative p-2 rounded-lg bg-gradient-to-br from-background to-background/80 border border-primary/20">
                                <Icon icon={skill.icon} className="w-8 h-8" />
                              </div>
                              <div>
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                  {skill.name}
                                </h4>
                                <p className="text-xs text-muted-foreground">{skill.description}</p>
                              </div>
                            </div>
                            <Badge className={`bg-gradient-to-r ${getLevelColor(skill.level)} text-white border-0 shadow-lg`}>
                              {skill.level}
                            </Badge>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}