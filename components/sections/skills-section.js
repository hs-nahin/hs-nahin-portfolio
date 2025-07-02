'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Sparkles, Code2, Palette, Wrench } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@iconify/react'
import { gsap } from 'gsap'

const skillCategories = [
  {
    name: 'Frontend Technologies',
    icon: Code2,
    expanded: true,
    color: 'from-purple-500 via-purple-600 to-blue-600',
    borderColor: 'border-purple-500/30',
    skills: [
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', level: 'Expert', description: 'Semantic markup, accessibility, SEO optimization' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', level: 'Expert', description: 'Grid, Flexbox, animations, responsive design' },
      { name: 'JavaScript', icon: 'logos:javascript', level: 'Expert', description: 'ES6+, async/await, modules, performance optimization' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', level: 'Expert', description: 'Advanced types, generics, strict typing' },
      { name: 'React.js', icon: 'logos:react', level: 'Expert', description: 'Hooks, context, performance, testing' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', level: 'Expert', description: 'SSR, SSG, app router, optimization' },
    ]
  },
  {
    name: 'Styling & Design',
    icon: Palette,
    expanded: true,
    color: 'from-pink-500 via-rose-500 to-purple-500',
    borderColor: 'border-pink-500/30',
    skills: [
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', level: 'Expert', description: 'Utility-first, custom components, responsive design' },
      { name: 'Bootstrap', icon: 'logos:bootstrap', level: 'Advanced', description: 'Responsive design, component library, utilities' },
    ]
  },
  {
    name: 'Tools & Deployment',
    icon: Wrench,
    expanded: false,
    color: 'from-blue-500 via-cyan-500 to-teal-500',
    borderColor: 'border-blue-500/30',
    skills: [
      { name: 'Git', icon: 'logos:git-icon', level: 'Expert', description: 'Version control, branching strategies, workflows' },
      { name: 'GitHub', icon: 'logos:github-icon', level: 'Expert', description: 'Collaboration, CI/CD, project management' },
      { name: 'Vercel', icon: 'logos:vercel-icon', level: 'Expert', description: 'Deployment, analytics, edge functions' },
      { name: 'Netlify', icon: 'logos:netlify-icon', level: 'Advanced', description: 'Static hosting, serverless functions' },
      { name: 'Firebase', icon: 'logos:firebase', level: 'Advanced', description: 'Authentication, database, hosting, analytics' },
    ]
  }
]

export function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState(['Frontend Technologies', 'Styling & Design'])

  useEffect(() => {
    gsap.fromTo('.skill-category', 
      { opacity: 0, y: 80, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1, 
        stagger: 0.3,
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
      {/* Magical background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Magical section header */}
        <div className="text-center mb-24">
          <Badge className="mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-blue-400/30 text-blue-200 backdrop-blur-xl">
            <Code2 className="w-4 h-4 mr-2 animate-pulse" />
            Technical Skills
            <Sparkles className="w-4 h-4 ml-2 animate-bounce" />
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Expertise
          </h2>
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-4xl mx-auto leading-relaxed">
            A comprehensive showcase of the technologies and tools I use to build extraordinary web applications.
          </p>
        </div>

        {/* Skills container */}
        <div className="skills-container space-y-10">
          {skillCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.name)
            const IconComponent = category.icon
            
            return (
              <Card key={category.name} className={`skill-category overflow-hidden bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border ${category.borderColor} hover:border-opacity-60 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10`}>
                <div
                  className="flex items-center justify-between p-10 cursor-pointer group relative overflow-hidden"
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  <div className="flex items-center space-x-6 relative z-10">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-purple-200 group-hover:text-white transition-colors duration-500">
                        {category.name}
                      </h3>
                      <p className="text-purple-200/60 text-lg">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10`}>
                    {isExpanded ? (
                      <ChevronDown className="w-8 h-8 text-white transition-transform duration-500" />
                    ) : (
                      <ChevronRight className="w-8 h-8 text-white transition-transform duration-500" />
                    )}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="p-10 pt-0 bg-gradient-to-br from-slate-900/20 to-slate-800/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.skills.map((skill, index) => (
                        <Card
                          key={skill.name}
                          className="p-8 group relative overflow-hidden bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center space-x-4">
                                <div className="relative p-3 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                                  <Icon icon={skill.icon} className="w-10 h-10" />
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-purple-200 group-hover:text-white transition-colors duration-500">
                                    {skill.name}
                                  </h4>
                                </div>
                              </div>
                              <Badge className={`bg-gradient-to-r ${getLevelColor(skill.level)} text-white border-0 shadow-lg px-3 py-1`}>
                                {skill.level}
                              </Badge>
                            </div>
                            <p className="text-purple-200/70 leading-relaxed text-sm">
                              {skill.description}
                            </p>
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