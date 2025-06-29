'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Code, Palette, Wrench } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@iconify/react'
import { gsap } from 'gsap'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code,
    expanded: true,
    color: 'blue',
    skills: [
      { name: 'JavaScript', icon: 'logos:javascript', level: 'Expert', years: '8+', description: 'ES6+, Async/Await, Modules' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', level: 'Expert', years: '5+', description: 'Advanced Types, Generics' },
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', level: 'Expert', years: '8+', description: 'Semantic, Accessibility' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', level: 'Expert', years: '8+', description: 'Grid, Flexbox, Animations' },
    ]
  },
  {
    name: 'Frameworks & Libraries',
    icon: Palette,
    expanded: true,
    color: 'purple',
    skills: [
      { name: 'React.js', icon: 'logos:react', level: 'Expert', years: '6+', description: 'Hooks, Context, Performance' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', level: 'Expert', years: '4+', description: 'SSR, SSG, App Router' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', level: 'Expert', years: '4+', description: 'Custom Components, JIT' },
      { name: 'Bootstrap', icon: 'logos:bootstrap', level: 'Advanced', years: '6+', description: 'Custom Themes, Grid System' },
    ]
  },
  {
    name: 'Tools & Platforms',
    icon: Wrench,
    expanded: false,
    color: 'green',
    skills: [
      { name: 'Git', icon: 'logos:git-icon', level: 'Expert', years: '8+', description: 'Branching, Merging, Workflows' },
      { name: 'GitHub', icon: 'logos:github-icon', level: 'Expert', years: '8+', description: 'Actions, Pages, Collaboration' },
      { name: 'Vercel', icon: 'logos:vercel-icon', level: 'Expert', years: '4+', description: 'Deployment, Edge Functions' },
      { name: 'Netlify', icon: 'logos:netlify-icon', level: 'Advanced', years: '3+', description: 'JAMstack, Forms, Functions' },
      { name: 'Firebase', icon: 'logos:firebase', level: 'Advanced', years: '3+', description: 'Auth, Firestore, Hosting' },
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
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700'
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700'
      case 'Intermediate':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-700'
    }
  }

  const getCategoryColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600'
    }
    return colors[color] || colors.blue
  }

  const renderSkillCard = (skill) => (
    <Card
      key={skill.name}
      className="group p-6 magic-card interactive-hover cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/50"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
            <Icon icon={skill.icon} className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">{skill.name}</h4>
            <p className="text-sm text-muted-foreground">{skill.years} experience</p>
          </div>
        </div>
        <Badge className={`${getLevelColor(skill.level)} border`}>
          {skill.level}
        </Badge>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
      
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${
            skill.level === 'Expert' ? 'from-emerald-500 to-emerald-600 w-full' :
            skill.level === 'Advanced' ? 'from-blue-500 to-blue-600 w-4/5' :
            'from-amber-500 to-amber-600 w-3/5'
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
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400">Senior Level</Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-600 dark:text-purple-400">Full-Stack Capable</Badge>
          <Badge variant="outline" className="border-green-500 text-green-600 dark:text-green-400">Architecture Design</Badge>
          <Badge variant="outline" className="border-orange-500 text-orange-600 dark:text-orange-400">Team Leadership</Badge>
        </div>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, index) => {
          const isExpanded = expandedCategories.includes(category.name)
          const IconComponent = category.icon
          
          return (
            <div key={category.name} className="skill-category border border-border rounded-xl overflow-hidden magic-card shadow-lg">
              <div
                className={`flex items-center justify-between p-6 bg-gradient-to-r ${getCategoryColor(category.color)} text-white cursor-pointer hover:opacity-90 transition-all interactive-hover`}
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{category.name}</h2>
                    <p className="text-white/80 text-sm">{category.skills.length} technologies</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-white/20 text-white border-white/30">
                    {category.skills.length} skills
                  </Badge>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 transition-transform" />
                  ) : (
                    <ChevronRight className="w-5 h-5 transition-transform" />
                  )}
                </div>
              </div>
              
              {isExpanded && (
                <div className="p-6 bg-muted/30">
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
      <Card className="mt-12 p-8 magic-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-primary/20">
        <h2 className="text-2xl font-bold mb-6 text-center">Professional Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground font-medium">Technologies Mastered</div>
          </div>
        </div>
        
        <div className="p-6 bg-card rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-4">Senior Developer Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Architecture design and system planning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Performance optimization and monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Code review and mentoring junior developers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Cross-functional team collaboration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Technical decision making and strategy</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Modern development workflow implementation</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}