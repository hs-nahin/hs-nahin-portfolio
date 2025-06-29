'use client'

import { useState, useEffect } from 'react'
import { Terminal } from '@/components/terminal'
import { FileTree } from '@/components/file-tree'
import { FileContent } from '@/components/file-content'
import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { gsap } from 'gsap'

export default function Home() {
  const [selectedFile, setSelectedFile] = useState('about.md')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // GSAP entrance animation
    gsap.fromTo('.terminal-container', 
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    )
    
    gsap.fromTo('.file-tree-container', 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
    )
    
    gsap.fromTo('.content-container', 
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
    )
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-xs font-mono">
              Senior Developer
            </Badge>
            <Badge variant="secondary" className="text-xs">
              8+ Years Experience
            </Badge>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Terminal Interface */}
      <div className="container mx-auto p-4">
        <div className="terminal-container terminal-window h-[calc(100vh-120px)]">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-sm font-mono text-muted-foreground ml-4">
              hasnat-shahriyar-portfolio
            </span>
          </div>

          {/* Terminal Content */}
          <div className="flex h-full">
            {/* File Tree Sidebar */}
            <div className="file-tree-container w-80 border-r border-border bg-muted/30">
              <div className="p-4 border-b border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Explorer
                </h3>
              </div>
              <FileTree selectedFile={selectedFile} onFileSelect={setSelectedFile} />
            </div>

            {/* Main Content Area */}
            <div className="content-container flex-1 flex flex-col">
              {/* Tab Bar */}
              <div className="flex items-center border-b border-border bg-muted/20">
                <div className="flex items-center px-4 py-2 bg-card border-r border-border">
                  <span className="text-sm font-mono">{selectedFile}</span>
                  <div className="w-2 h-2 bg-primary rounded-full ml-2"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex">
                <div className="flex-1 overflow-auto">
                  <FileContent selectedFile={selectedFile} />
                </div>
                
                {/* Terminal Panel */}
                <div className="w-96 border-l border-border">
                  <Terminal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}