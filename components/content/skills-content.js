'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'

const skillCategories = [
  {
    name: 'Frontend Technologies',
    expanded: true,
    skills: [
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', level: 95, years: '10+' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', level: 95, years: '10+' },
      { name: 'JavaScript', icon: 'logos:javascript', level: 95, years: '10+' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', level: 90, years: '5+' },
      { name: 'React.js', icon: 'logos:react', level: 95, years: '7+' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', level: 90, years: '4+' },
    ]
  },
  {
    name: 'Styling & Frameworks',
    expanded: true,
    skills: [
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', level: 95, years: '4+' },
      { name: 'Bootstrap', icon: 'logos:bootstrap', level: 85, years: '6+' },
    ]
  },
  {
    name: 'Tools & Deployment',
    expanded: false,
    skills: [
      { name: 'Git', icon: 'logos:git-icon', level: 95, years: '10+' },
      { name: 'GitHub', icon: 'logos:github-icon', level: 90, years: '8+' },
      { name: 'Vercel', icon: 'logos:vercel-icon', level: 90, years: '3+' },
      { name: 'Netlify', icon: 'logos:netlify-icon', level: 85, years: '4+' },
      { name: 'Firebase', icon: 'logos:firebase', level: 80, years: '3+' },
    ]
  }
]

export function SkillsContent() {
  const [expandedCategories, setExpandedCategories] = useState(['Frontend Technologies', 'Styling & Frameworks'])

  useEffect(() => {
    gsap.fromTo('.skill-category', 
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

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  const getLevelColor = (level) => {
    if (level >= 90) return 'bg-green-500'
    if (level >= 80) return 'bg-blue-500'
    if (level >= 70) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-4">Technical Skills</h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive overview of my technical expertise built over 10+ years of professional development.
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category) => {
          const isExpanded = expandedCategories.includes(category.name)
          
          return (
            <Card key={category.name} className="skill-category professional-hover">
              <div
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center space-x-3">
                  <div className="transition-transform duration-200">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <Badge variant="secondary">{category.skills.length} skills</Badge>
                </div>
              </div>
              
              {isExpanded && (
                <div className="px-6 pb-6">
                  <div className="grid gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3 flex-1">
                          <Icon icon={skill.icon} className="w-8 h-8" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{skill.name}</span>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="text-xs">
                                  {skill.years} years
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className={cn(
                                  'h-2 rounded-full transition-all duration-500',
                                  getLevelColor(skill.level)
                                )}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          )
        })}
      </div>

      {/* Summary */}
      <Card className="mt-8 p-6 professional-hover">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="text-primary mr-2">//</span>
          Expertise Summary
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
        </div>
      </Card>
    </div>
  )
}