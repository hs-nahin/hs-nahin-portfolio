'use client'

import { useState, useEffect } from 'react'
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
  const [currentContent, setCurrentContent] = useState(activeFile)
  const [mounted, setMounted] = useState(false)
  const ContentComponent = contentMap[currentContent] || AboutContent

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (activeFile !== currentContent) {
      setIsTransitioning(true)
      
      // Start transition with blur effect
      const timer = setTimeout(() => {
        setCurrentContent(activeFile)
        setIsTransitioning(false)
      }, 200) // Slightly longer for blur effect

      return () => clearTimeout(timer)
    }
  }, [activeFile, currentContent])

  if (!mounted) {
    return (
      <div className={cn('flex-1 flex flex-col bg-background', className)}>
        <div className="flex items-center justify-between bg-muted/20 border-b border-border">
          <div className="flex">
            <div className="flex items-center space-x-2 px-4 py-2 bg-background border-r border-border">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-mono">Loading...</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-muted-foreground">Loading content...</div>
        </div>
      </div>
    )
  }
  return (
    <div className={cn('flex-1 flex flex-col bg-background', className)}>
      {/* Tab Bar */}
      <div className="flex items-center justify-between bg-muted/20 border-b border-border">
        <div className="flex">
          <div className="flex items-center space-x-2 px-4 py-2 bg-background border-r border-border">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-mono">{activeFile}</span>
            <button className="text-muted-foreground hover:text-foreground ml-2 transition-colors duration-200">
              ×
            </button>
          </div>
        </div>
        
        <div className="px-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Content with MagicUI blur transitions */}
      <div className="flex-1 overflow-hidden relative">
        <div 
          className={cn(
            'content-wrapper h-full transition-all duration-400 ease-out',
            isTransitioning && 'opacity-0 blur-sm transform translate-y-4 scale-[0.98]',
            !isTransitioning && 'opacity-100 blur-0 transform translate-y-0 scale-100 blur-in'
          )}
        >
          <ContentComponent activeFile={currentContent} />
        </div>
      </div>
    </div>
  )
}