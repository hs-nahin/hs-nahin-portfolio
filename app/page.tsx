'use client'

import { Terminal } from '@/components/terminal'
import { FileTree } from '@/components/file-tree'
import { FileContent } from '@/components/file-content'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'

export default function Home() {
  const [selectedFile, setSelectedFile] = useState('about.md')

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Portfolio Terminal
          </h1>
          <ThemeToggle />
        </div>
        
        <Terminal>
          <div className="flex h-[80vh]">
            <div className="w-1/4 border-r border-gray-300 dark:border-gray-600">
              <FileTree selectedFile={selectedFile} onFileSelect={setSelectedFile} />
            </div>
            <div className="flex-1">
              <FileContent selectedFile={selectedFile} />
            </div>
          </div>
        </Terminal>
      </div>
    </main>
  )
}