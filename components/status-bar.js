'use client'

import { cn } from '@/lib/utils'
import { Code, GitBranch, CheckCircle } from 'lucide-react'

export function StatusBar({ activeFile }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between h-8 px-4 bg-muted/50 border-t border-border text-xs text-muted-foreground font-mono">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <GitBranch className="w-3 h-3" />
          <span>main</span>
        </div>
        <div className="flex items-center space-x-1">
          <Code className="w-3 h-3" />
          <span>UTF-8</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>{activeFile}</span>
        <div className="flex items-center space-x-1">
          <CheckCircle className="w-3 h-3 text-green-500" />
          <span>Ready</span>
        </div>
      </div>
    </div>
  )
}