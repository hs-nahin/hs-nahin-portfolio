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
    expanded: true,
    skills: [
      { name: 'Bootstrap', icon: 'logos:bootstrap' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
    ]
  },
  {
    name: 'Backend Technologies',
    expanded: true,
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Express.js', icon: 'logos:express' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
    ]
  },
  {
    name: 'Tools & Deployment',
    expanded: true,
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
  const [expandedCategories, setExpandedCategories] = useState(['Frontend Technologies', 'Styling & Frameworks', 'Backend Technologies', 'Tools & Deployment'])

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

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8 max-w-4xl mx-auto">
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
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.skills.map((skill) => (
                        <Card key={skill.name} className="p-4 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                          <div className="flex items-center space-x-3">
                            <Icon icon={skill.icon} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
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

        {/* Summary */}
        <Card className="p-6 professional-hover mb-8">
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
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}