'use client'

import { useEffect, useState } from 'react'
import { AboutContent } from '@/components/content/about-content'
import { SkillsContent } from '@/components/content/skills-content'
import { ProjectsContent } from '@/components/content/projects-content'
import { ContactContent } from '@/components/content/contact-content'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'

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

  useEffect(() => {
    setIsTransitioning(true)
    
    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false)
    })
    
    tl.to('.content-wrapper', {
      opacity: 0,
      y: 20,
      duration: 0.2,
      ease: 'power2.out'
    })
    .to('.content-wrapper', {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }, [activeFile])

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
      <div className="flex-1 overflow-y-auto">
        <div className={cn(
          'content-wrapper h-full',
          isTransitioning && 'pointer-events-none'
        )}>
          <ContentComponent />
        </div>
      </div>
    </div>
  )
}