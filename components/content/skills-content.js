'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@iconify/react'
import { gsap } from 'gsap'

const skillCategories = [
  {
    name: 'Languages',
    expanded: true,
    skills: [
      { name: 'JavaScript', icon: 'logos:javascript', level: 'Expert', years: '8+' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', level: 'Expert', years: '5+' },
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', level: 'Expert', years: '8+' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', level: 'Expert', years: '8+' },
    ]
  },
  {
    name: 'Frameworks & Libraries',
    expanded: true,
    skills: [
      { name: 'React.js', icon: 'logos:react', level: 'Expert', years: '6+' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', level: 'Expert', years: '4+' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', level: 'Expert', years: '4+' },
      { name: 'Bootstrap', icon: 'logos:bootstrap', level: 'Advanced', years: '6+' },
    ]
  },
  {
    name: 'Tools & Technologies',
    expanded: false,
    skills: [
      { name: 'Git', icon: 'logos:git-icon', level: 'Expert', years: '8+' },
      { name: 'GitHub', icon: 'logos:github-icon', level: 'Expert', years: '8+' },
      { name: 'Vercel', icon: 'logos:vercel-icon', level: 'Expert', years: '4+' },
      { name: 'Netlify', icon: 'logos:netlify-icon', level: 'Advanced', years: '3+' },
      { name: 'Firebase', icon: 'logos:firebase', level: 'Advanced', years: '3+' },
    ]
  }
]

export function SkillsContent() {
  const [expandedCategories, setExpandedCategories] = useState(['Languages', 'Frameworks & Libraries'])

  useEffect(() => {
    // GSAP animations
    gsap.fromTo('.skills-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )

    gsap.fromTo('.skill-category', 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        stagger: 0.1,
        delay: 0.3,
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
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const renderSkillCard = (skill) => (
    <Card
      key={skill.name}
      className="p-6 magic-card interactive-hover cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Icon icon={skill.icon} className="w-8 h-8" />
          <div>
            <h4 className="font-semibold">{skill.name}</h4>
            <p className="text-sm text-muted-foreground">{skill.years} experience</p>
          </div>
        </div>
        <Badge className={getLevelColor(skill.level)}>
          {skill.level}
        </Badge>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${
            skill.level === 'Expert' ? 'bg-green-500 w-full' :
            skill.level === 'Advanced' ? 'bg-blue-500 w-4/5' :
            'bg-yellow-500 w-3/5'
          }`}
        ></div>
      </div>
    </Card>
  )

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="skills-header mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
          Technical Expertise
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          8+ years of professional experience across modern web technologies and frameworks.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Senior Level</Badge>
          <Badge variant="outline">Full-Stack Capable</Badge>
          <Badge variant="outline">Architecture Design</Badge>
          <Badge variant="outline">Team Leadership</Badge>
        </div>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, index) => {
          const isExpanded = expandedCategories.includes(category.name)
          
          return (
            <div key={category.name} className="skill-category border border-border rounded-lg overflow-hidden magic-card">
              <div
                className="flex items-center justify-between p-6 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors interactive-hover"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <Badge variant="secondary">
                    {category.skills.length} skills
                  </Badge>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform" />
                )}
              </div>
              
              {isExpanded && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.skills.map(renderSkillCard)}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Experience Summary */}
      <Card className="mt-12 p-8 magic-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <h2 className="text-2xl font-bold mb-6">Professional Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-card rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-4">Senior Developer Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>• Architecture design and system planning</div>
            <div>• Performance optimization and monitoring</div>
            <div>• Code review and mentoring junior developers</div>
            <div>• Cross-functional team collaboration</div>
            <div>• Technical decision making and strategy</div>
            <div>• Modern development workflow implementation</div>
          </div>
        </div>
      </Card>
    </div>
  )
}