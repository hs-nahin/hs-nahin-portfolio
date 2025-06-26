"use client"

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Skill {
  name: string
  icon: string
  color: string
}

interface Subcategory {
  title: string
  skills: Skill[]
}

interface SkillCategory {
  title: string
  subcategories?: Record<string, Subcategory>
  skills?: Skill[]
}

export function SkillsContent() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['frontend', 'tools']))

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const skills: Record<string, SkillCategory> = {
    frontend: {
      title: 'Frontend',
      subcategories: {
        'markup-styling': {
          title: 'Markup & Styling',
          skills: [
            { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-red-500' },
            { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-blue-600' },
            { name: 'Tailwind', icon: '💨', color: 'from-cyan-500 to-blue-500' },
            { name: 'Bootstrap', icon: '🅱️', color: 'from-purple-500 to-purple-600' },
          ]
        },
        'frameworks-libraries': {
          title: 'Frameworks / Libraries',
          skills: [
            { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-yellow-600' },
            { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-700' },
            { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
            { name: 'Next.js', icon: '▲', color: 'from-gray-800 to-gray-900' },
          ]
        }
      }
    },
    tools: {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: '🔧', color: 'from-orange-600 to-red-600' },
        { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-gray-800' },
        { name: 'Vercel', icon: '▲', color: 'from-gray-800 to-black' },
        { name: 'Netlify', icon: '🌐', color: 'from-teal-500 to-cyan-500' },
        { name: 'Surge', icon: '⚡', color: 'from-green-500 to-green-600' },
        { name: 'VS Code', icon: '💻', color: 'from-blue-600 to-blue-700' },
        { name: 'Ubuntu/Linux', icon: '🐧', color: 'from-orange-600 to-red-600' },
        { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-500' },
      ]
    }
  }

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <Card className="group relative overflow-hidden border-blue-500/20 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 shine-border">
      <CardContent className="p-4 text-center">
        <div className={cn(
          "w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br",
          skill.color
        )}>
          {skill.icon}
        </div>
        <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
      </CardContent>
    </Card>
  )

  return (
    <div className="text-white p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h1>
        <p className="text-gray-300">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div className="space-y-6">
        {/* Frontend Category */}
        <Card className="border-blue-500/20 bg-gray-900/30">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-800/30 transition-colors"
            onClick={() => toggleCategory('frontend')}
          >
            <CardTitle className="flex items-center justify-between text-blue-300">
              <span className="flex items-center space-x-2">
                {expandedCategories.has('frontend') ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <span>{skills.frontend.title}</span>
              </span>
            </CardTitle>
          </CardHeader>
          
          {expandedCategories.has('frontend') && skills.frontend.subcategories && (
            <CardContent className="space-y-6">
              {Object.entries(skills.frontend.subcategories).map(([key, subcategory]) => (
                <div key={key}>
                  <h3 className="text-lg font-semibold text-blue-200 mb-4">{subcategory.title}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {subcategory.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        {/* Tools Category */}
        <Card className="border-blue-500/20 bg-gray-900/30">
          <CardHeader 
            className="cursor-pointer hover:bg-gray-800/30 transition-colors"
            onClick={() => toggleCategory('tools')}
          >
            <CardTitle className="flex items-center justify-between text-blue-300">
              <span className="flex items-center space-x-2">
                {expandedCategories.has('tools') ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <span>{skills.tools.title}</span>
              </span>
            </CardTitle>
          </CardHeader>
          
          {expandedCategories.has('tools') && skills.tools.skills && (
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.tools.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}