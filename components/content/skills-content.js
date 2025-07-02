'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'

const skillCategories = [
  {
    name: 'Frontend Technologies',
    expanded: true,
    skills: [
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', level: 'Expert', years: '10+' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', level: 'Expert', years: '10+' },
      { name: 'JavaScript', icon: 'logos:javascript', level: 'Expert', years: '10+' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', level: 'Expert', years: '5+' },
      { name: 'React.js', icon: 'logos:react', level: 'Expert', years: '7+' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', level: 'Expert', years: '4+' },
    ]
  },
  {
    name: 'Styling & Frameworks',
    expanded: true,
    skills: [
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', level: 'Expert', years: '4+' },
      { name: 'Bootstrap', icon: 'logos:bootstrap', level: 'Advanced', years: '6+' },
    ]
  },
  {
    name: 'Tools & Deployment',
    expanded: false,
    skills: [
      { name: 'Git', icon: 'logos:git-icon', level: 'Expert', years: '10+' },
      { name: 'GitHub', icon: 'logos:github-icon', level: 'Expert', years: '8+' },
      { name: 'Vercel', icon: 'logos:vercel-icon', level: 'Expert', years: '3+' },
      { name: 'Netlify', icon: 'logos:netlify-icon', level: 'Advanced', years: '4+' },
      { name: 'Firebase', icon: 'logos:firebase', level: 'Advanced', years: '3+' },
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
    if (level === 'Expert') return 'bg-green-500'
    if (level === 'Advanced') return 'bg-blue-500'
    return 'bg-gray-500'
  }

  return (
    <div className="p-8 max-w-4xl mx-auto h-full overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-4">Technical Skills</h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive overview of my technical expertise built over 10+ years of professional development.
        </p>
      </div>

      <div className="space-y-6 mb-8">
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
                                <Badge className={cn(
                                  'text-xs text-white',
                                  getLevelColor(skill.level)
                                )}>
                                  {skill.level}
                                </Badge>
                              </div>
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
      <Card className="p-6 professional-hover">
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