'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Zap, Code, Wrench } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@iconify/react'
import { gsap } from 'gsap'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code,
    expanded: true,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'JavaScript', icon: 'logos:javascript', level: 'Expert', years: '8+', description: 'ES6+, Async/Await, Modules' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', level: 'Expert', years: '5+', description: 'Advanced Types, Generics' },
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', level: 'Expert', years: '8+', description: 'Semantic, Accessibility' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', level: 'Expert', years: '8+', description: 'Grid, Flexbox, Animations' },
    ]
  },
  {
    name: 'Frameworks & Libraries',
    icon: Zap,
    expanded: true,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React.js', icon: 'logos:react', level: 'Expert', years: '6+', description: 'Hooks, Context, Performance' },
      { name: 'Next.js', icon: 'logos:nextjs-icon', level: 'Expert', years: '4+', description: 'SSR, SSG, App Router' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', level: 'Expert', years: '4+', description: 'Custom Components, JIT' },
      { name: 'Bootstrap', icon: 'logos:bootstrap', level: 'Advanced', years: '6+', description: 'Responsive Design, Utilities' },
    ]
  },
  {
    name: 'Tools & Deployment',
    icon: Wrench,
    expanded: false,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git', icon: 'logos:git-icon', level: 'Expert', years: '8+', description: 'Branching, Merging, Workflows' },
      { name: 'GitHub', icon: 'logos:github-icon', level: 'Expert', years: '8+', description: 'Actions, Pages, Collaboration' },
      { name: 'Vercel', icon: 'logos:vercel-icon', level: 'Expert', years: '4+', description: 'Deployment, Analytics' },
      { name: 'Netlify', icon: 'logos:netlify-icon', level: 'Advanced', years: '3+', description: 'CI/CD, Functions' },
      { name: 'Firebase', icon: 'logos:firebase', level: 'Advanced', years: '3+', description: 'Auth, Firestore, Hosting' },
    ]
  }
]

export function SkillsContent() {
  const [expandedCategories, setExpandedCategories] = useState(['Languages', 'Frameworks & Libraries'])

  useEffect(() => {
    // Advanced GSAP animations
    const tl = gsap.timeline()
    
    tl.fromTo('.skills-header', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.skill-category', 
      { opacity: 0, x: -50, scale: 0.9 },
      { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }, '-=0.5'
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
      case 'Intermediate':
        return 'from-yellow-500 to-orange-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const renderSkillCard = (skill) => (
    <Card
      key={skill.name}
      className="skill-card group p-6 relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:from-card/70 hover:to-card/50"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-background to-background/80 border border-primary/20">
                <Icon icon={skill.icon} className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h4>
              <p className="text-sm text-muted-foreground">{skill.years} experience</p>
              <p className="text-xs text-muted-foreground/80 mt-1">{skill.description}</p>
            </div>
          </div>
          <Badge className={`bg-gradient-to-r ${getLevelColor(skill.level)} text-white border-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {skill.level}
          </Badge>
        </div>
        
        {/* Professional skill indicator */}
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">Proficiency:</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < (skill.level === 'Expert' ? 5 : skill.level === 'Advanced' ? 4 : 3)
                    ? 'bg-gradient-to-r from-primary to-primary/80 group-hover:scale-125'
                    : 'bg-muted group-hover:bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="skills-header mb-16 text-center relative z-10">
        <h1 className="heading-xl mb-6 gradient-text">
          Technical Expertise
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          8+ years of professional experience across modern web technologies and frameworks.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="outline" className="glass-effect hover-lift">Senior Level</Badge>
          <Badge variant="outline" className="glass-effect hover-lift">Frontend Specialist</Badge>
          <Badge variant="outline" className="glass-effect hover-lift">Modern Stack</Badge>
          <Badge variant="outline" className="glass-effect hover-lift">Performance Expert</Badge>
        </div>
      </div>

      <div className="space-y-8 relative z-10">
        {skillCategories.map((category, index) => {
          const isExpanded = expandedCategories.includes(category.name)
          const IconComponent = category.icon
          
          return (
            <div key={category.name} className="skill-category">
              <Card className="overflow-hidden border-0 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm shadow-xl">
                <div
                  className="flex items-center justify-between p-8 cursor-pointer group hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-500"
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h2>
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
                  <div className="accordion-content p-8 pt-0 bg-gradient-to-br from-background/50 to-muted/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.skills.map(renderSkillCard)}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          )
        })}
      </div>

      {/* Professional Summary */}
      <Card className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-purple/5 border-primary/20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Professional Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { number: '8+', label: 'Years Experience', icon: '🚀' },
              { number: '50+', label: 'Projects Delivered', icon: '💼' },
              { number: '12+', label: 'Technologies Mastered', icon: '⚡' },
            ].map(({ number, label, icon }) => (
              <div key={label} className="text-center p-6 rounded-2xl glass-effect hover-lift">
                <div className="text-4xl mb-2">{icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{number}</div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
          
          <Card className="p-6 glass-effect">
            <h3 className="text-xl font-bold mb-4 gradient-text">Senior Developer Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              {[
                'Architecture design and system planning',
                'Performance optimization and monitoring',
                'Code review and mentoring',
                'Cross-functional team collaboration',
                'Technical decision making',
                'Modern development workflows'
              ].map((capability) => (
                <div key={capability} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}