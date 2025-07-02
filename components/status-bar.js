'use client'

import { CheckCircle, GitBranch, Wifi } from 'lucide-react'
import { useEffect, useState } from 'react'

export function StatusBar({ activeFile, className = '' }) {
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
      '.tsx': 'TypeScript React',
    }
    
    const ext = filename.includes('.') ? `.${filename.split('.').pop()}` : ''
    return extensions[ext] || 'File'
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-1 bg-primary text-primary-foreground text-xs font-mono backdrop-blur-sm border-t border-border z-50 ${className}`}
      style={{ height: '36px' }} // fixed height to control layout
    >
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
