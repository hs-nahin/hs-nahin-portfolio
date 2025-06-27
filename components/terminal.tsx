"use client"

import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'

interface TerminalProps {
  children: ReactNode
}

export function Terminal({ children }: TerminalProps) {
  return (
    <Card className="bg-gray-900 dark:bg-gray-950 border-gray-700 dark:border-gray-800 shadow-2xl overflow-hidden">
      <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center space-x-2 border-b border-gray-700 dark:border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-gray-400 text-sm font-mono">
            hasnat-shahriyar-portfolio
          </span>
        </div>
      </div>
      <div className="bg-gray-900 dark:bg-black text-green-400 font-mono text-sm">
        {children}
      </div>
    </Card>
  )
}