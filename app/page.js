'use client'

import { ContentArea } from '@/components/content-area'
import { FileExplorer } from '@/components/file-explorer'
import { StatusBar } from '@/components/status-bar'
import { ParticleSystem } from '@/components/ui/particle-system'
import { useState } from 'react'

export default function Home() {
  const [activeFile, setActiveFile] = useState('about.md')

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ParticleSystem />

      <div className="flex flex-col h-screen border border-border bg-card/50 backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm font-mono text-muted-foreground ml-4">
              hasnat-shahriyar.dev
            </span>
          </div>
          <div className="text-xs text-muted-foreground font-mono hidden sm:block">
            Frontend Developer • React | Tailwind | Next.js
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden relative">
          <FileExplorer
            activeFile={activeFile}
            onFileSelect={setActiveFile}
            className="hidden md:flex md:w-80 border-r border-border"
          />
          
          {/* Mobile File Explorer */}
          <FileExplorer
            activeFile={activeFile}
            onFileSelect={setActiveFile}
            className="md:hidden"
          />
          
          <ContentArea
            activeFile={activeFile}
            className="flex-1 overflow-hidden"
          />
        </div>
      </div>

      {/* Footer / Status Bar */}
      <StatusBar activeFile={activeFile} />
    </div>
  )
}