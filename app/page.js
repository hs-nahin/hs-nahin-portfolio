'use client'

import { useState, useEffect } from 'react'
import { FileExplorer } from '@/components/file-explorer'
import { ContentArea } from '@/components/content-area'
import { StatusBar } from '@/components/status-bar'
import { ParticleSystem } from '@/components/ui/particle-system'
import { gsap } from 'gsap'

export default function Home() {
  const [activeFile, setActiveFile] = useState('about.md')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // Professional page load animation
    const tl = gsap.timeline()
    
    tl.fromTo('.terminal-container', 
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo('.file-explorer', 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4'
    )
    .fromTo('.content-area', 
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4'
    )
    .fromTo('.status-bar', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2'
    )
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground font-mono">Initializing terminal...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleSystem />
      
      <div className="terminal-container h-screen flex flex-col border border-border bg-card/50 backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm font-mono text-muted-foreground ml-4">
              hasnat-shahriyar-portfolio
            </span>
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            Senior Developer • 10+ Years Experience
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          <FileExplorer 
            activeFile={activeFile} 
            onFileSelect={setActiveFile}
            className="file-explorer"
          />
          <ContentArea 
            activeFile={activeFile}
            className="content-area"
          />
        </div>

        <StatusBar 
          activeFile={activeFile}
          className="status-bar"
        />
      </div>
    </div>
  )
}