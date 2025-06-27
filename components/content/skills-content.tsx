'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Icon } from '@iconify/react'

const skillCategories = [
  {
    name: 'Frontend',
    expanded: true,
    subcategories: [
      {
        name: 'Markup & Styling',
        skills: [
          { name: 'HTML', icon: 'vscode-icons:file-type-html', color: '#E34F26' },
          { name: 'CSS', icon: 'vscode-icons:file-type-css', color: '#1572B6' },
          { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind', color: '#06B6D4' },
          { name: 'Bootstrap', icon: 'logos:bootstrap', color: '#7952B3' },
        ]
      },
      {
        name: 'Frameworks & Libraries',
        skills: [
          { name: 'JavaScript', icon: 'logos:javascript', color: '#F7DF1E' },
          { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6' },
          { name: 'React.js', icon: 'logos:react', color: '#61DAFB' },
          { name: 'Next.js', icon: 'logos:nextjs-icon', color: '#000000' },
        ]
      }
    ]
  },
  {
    name: 'Tools',
    expanded: false,
    skills: [
      { name: 'Git', icon: 'logos:git-icon', color: '#F05032' },
      { name: 'GitHub', icon: 'logos:github-icon', color: '#181717' },
      { name: 'Vercel', icon: 'logos:vercel-icon', color: '#000000' },
      { name: 'Netlify', icon: 'logos:netlify-icon', color: '#00C7B7' },
      { name: 'Surge', icon: 'simple-icons:surge', color: '#B7178C' },
      { name: 'VS Code', icon: 'logos:visual-studio-code', color: '#007ACC' },
      { name: 'Ubuntu/Linux', icon: 'logos:ubuntu', color: '#E95420' },
      { name: 'Figma', icon: 'logos:figma', color: '#F24E1E' },
    ]
  }
]

export function SkillsContent() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Frontend'])

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  const renderSkillCard = (skill: any) => (
    <Card
      key={skill.name}
      className="p-4 border-beam gradient-hover cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-center space-x-3">
        <Icon icon={skill.icon} className="w-8 h-8" />
        <span className="font-medium">{skill.name}</span>
      </div>
    </Card>
  )

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 aurora-text">Skills & Technologies</h1>
        <p className="text-lg text-muted-foreground">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category) => {
          const isExpanded = expandedCategories.includes(category.name)
          
          return (
            <div key={category.name} className="border border-border rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 bg-card/50 cursor-pointer hover:bg-card/70 transition-colors"
                onClick={() => toggleCategory(category.name)}
              >
                <h2 className="text-xl font-semibold">{category.name}</h2>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
              
              {isExpanded && (
                <div className="p-6 space-y-6">
                  {category.subcategories ? (
                    category.subcategories.map((subcategory) => (
                      <div key={subcategory.name}>
                        <h3 className="text-lg font-medium mb-4 text-primary">
                          {subcategory.name}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {subcategory.skills.map(renderSkillCard)}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {category.skills?.map(renderSkillCard)}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Experience Section */}
      <div className="mt-12 p-6 bg-card/30 rounded-lg border border-border">
        <h2 className="text-2xl font-bold mb-4">Experience Level</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Frontend Development</h3>
            <p className="text-muted-foreground">
              2+ years of experience building responsive web applications with modern frameworks
              and libraries. Proficient in creating pixel-perfect designs and optimizing performance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">UI/UX Implementation</h3>
            <p className="text-muted-foreground">
              Strong focus on user experience and interface design. Experienced in translating
              design mockups into interactive, accessible web interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}