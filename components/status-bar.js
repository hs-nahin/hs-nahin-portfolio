'use client'

import { useState, useEffect } from 'react'
import { Wifi, GitBranch, CheckCircle } from 'lucide-react'

export function StatusBar({ activeFile, className }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const getFileInfo = (filename) => {
    const extensions = {
      '.md': 'Markdown',
      '.js': 'JavaScript',
      '.jsx': 'React JSX',
      '.tsx': 'TypeScript React'
    }
    
    const ext = filename.includes('.') ? `.${filename.split('.').pop()}` : ''
    return extensions[ext] || 'File'
  }

  return (
    <div className={`flex items-center justify-between px-4 py-1 bg-primary text-primary-foreground text-xs font-mono ${className}`}>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <GitBranch className="w-3 h-3" />
          <span>main</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <CheckCircle className="w-3 h-3" />
          <span>No issues</span>
        </div>
        
        <div>
          {getFileInfo(activeFile)}
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <Wifi className="w-3 h-3" />
          <span>Connected</span>
        </div>
        
        <div>
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  )
}