'use client'

import { Badge } from '@/components/ui/badge'
import { Icon } from '@iconify/react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const skillCategories = [
  {
    name: 'Frontend Technologies',
    expanded: false,
    skills: [
      { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'React.js', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'React Router', icon: 'logos:react-router' },
      { name: 'Redux', icon: 'logos:redux' },
    ]
  },
  {
    name: 'Styling & Frameworks',
    expanded: false,
    skills: [
      { name: 'Bootstrap', icon: 'logos:bootstrap' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    ]
  },
  {
    name: 'Backend Technologies',
    expanded: false,
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Express.js', icon: 'logos:express' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
    ]
  },
  {
    name: 'Tools & Deployment',
    expanded: false,
    skills: [
      { name: 'NPM', icon: 'logos:npm-icon' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'logos:github-icon' },
      { name: 'Vercel', icon: 'logos:vercel-icon' },
      { name: 'Netlify', icon: 'logos:netlify-icon' },
      { name: 'Figma', icon: 'logos:figma' },
    ]
  }
]

export function SkillsContent() {
  const [expandedCategories, setExpandedCategories] = useState([])

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">Technical Skills</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            A hands-on overview of the technologies I've been learning and applying through practical projects. 
            My focus is on mastering frontend development with modern tools and clean coding practices.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 mb-8">
          {skillCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.name)

            return (
              <div
                key={category.name}
                className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30"
              >
                <div
                  className="flex items-center justify-between p-4 sm:p-6 cursor-pointer select-none"
                  onClick={() => toggleCategory(category.name)}
                  aria-expanded={isExpanded}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleCategory(category.name)
                    }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                      ) : (
                        <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                      )}
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold">{category.name}</h2>
                    <Badge variant="secondary" className="text-xs sm:text-sm">{category.skills.length} skills</Badge>
                  </div>
                </div>

                {/* Accordion Content with smooth slide/fade */}
                <div
                  style={{
                    maxHeight: isExpanded ? `${category.skills.length * 60}px` : '0px',
                    opacity: isExpanded ? 1 : 0,
                    transition: 'max-height 0.35s ease, opacity 0.35s ease',
                    overflow: 'hidden',
                  }}
                  aria-hidden={!isExpanded}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={skill.name}
                          className="p-3 sm:p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                          style={{
                            transitionDelay: isExpanded ? `${idx * 70}ms` : '0ms',
                            opacity: isExpanded ? 1 : 0,
                            transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
                            transitionProperty: 'opacity, transform',
                            transitionDuration: '0.3s',
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Icon
                                icon={skill.icon}
                                className="w-6 sm:w-8 h-6 sm:h-8 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                              />
                            </div>
                            <span className="font-medium group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{skill.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
            <span className="text-primary mr-2">//</span>
            Expertise Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Technologies Explored</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Personal Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">2023</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Started Journey</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
