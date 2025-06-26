"use client"

import { useState } from 'react'
import { FileTree } from './file-tree'
import { FileContent } from './file-content'
import { ThemeToggle } from './theme-toggle'
import { Card } from './ui/card'

export function Terminal() {
  const [activeFile, setActiveFile] = useState<string>('about.md')

  return (
    <Card className="w-full max-w-7xl mx-auto h-[90vh] bg-black/90 border-2 border-blue-500/30 rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-900/50 to-blue-700/50 border-b border-blue-500/30">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-white/80 text-sm font-mono ml-4">
            hasnat@portfolio:~/portfolio
          </span>
        </div>
        <ThemeToggle />
      </div>

      {/* Terminal Content */}
      <div className="flex h-full">
        {/* File Tree Sidebar */}
        <div className="w-80 bg-gray-900/50 border-r border-blue-500/20 p-4 overflow-y-auto">
          <FileTree activeFile={activeFile} onFileSelect={setActiveFile} />
        </div>

        {/* File Content Area */}
        <div className="flex-1 bg-gray-900/30 overflow-y-auto">
          <FileContent activeFile={activeFile} />
        </div>
      </div>
    </Card>
  )
}