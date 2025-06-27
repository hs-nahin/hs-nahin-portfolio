'use client'

import { useState } from 'react'
import { FileTree } from '@/components/file-tree'
import { FileContent } from '@/components/file-content'
import { Terminal } from '@/components/terminal'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  const [selectedFile, setSelectedFile] = useState('about.md')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex h-screen">
        {/* Left Panel - File Tree */}
        <div className="w-80 border-r border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-sm font-semibold text-muted-foreground">EXPLORER</h2>
            <ThemeToggle />
          </div>
          <FileTree selectedFile={selectedFile} onFileSelect={setSelectedFile} />
        </div>

        {/* Right Panel - File Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-muted-foreground">{selectedFile}</div>
          </div>
          
          <div className="flex-1 flex flex-col lg:flex-row">
            <div className="flex-1 overflow-auto">
              <FileContent selectedFile={selectedFile} />
            </div>
            
            {/* Terminal */}
            <div className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-border">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}