'use client'

import { useState } from 'react'
import { AboutContent } from '@/components/content/about-content'
import { SkillsContent } from '@/components/content/skills-content'
import { ProjectsContent } from '@/components/content/projects-content'
import { ContactContent } from '@/components/content/contact-content'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const contentMap = {
  'about.md': AboutContent,
  'skills.js': SkillsContent,
  'CodeLink.jsx': ProjectsContent,
  'CareerHive.jsx': ProjectsContent,
  'projects': ProjectsContent,
  'contact.tsx': ContactContent
}

export function ContentArea({ activeFile, className }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const ContentComponent = contentMap[activeFile] || AboutContent

  return (
    <div className={cn('flex-1 flex flex-col bg-background', className)}>
      {/* Tab Bar */}
      <div className="flex items-center justify-between bg-muted/20 border-b border-border">
        <div className="flex">
          <div className="flex items-center space-x-2 px-4 py-2 bg-background border-r border-border">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-mono">{activeFile}</span>
            <button className="text-muted-foreground hover:text-foreground ml-2">
              ×
            </button>
          </div>
        </div>
        
        <div className="px-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <div className={cn(
          'content-wrapper h-full',
          isTransitioning && 'pointer-events-none'
        )}>
          <ContentComponent activeFile={activeFile} />
        </div>
      </div>
    </div>
  )
}