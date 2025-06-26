"use client"

import { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FolderOpen, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileTreeProps {
  activeFile: string
  onFileSelect: (file: string) => void
}

export function FileTree({ activeFile, onFileSelect }: FileTreeProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['portfolio', 'projects']))

  const toggleFolder = (folder: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folder)) {
      newExpanded.delete(folder)
    } else {
      newExpanded.add(folder)
    }
    setExpandedFolders(newExpanded)
  }

  const fileStructure = [
    {
      name: 'portfolio',
      type: 'folder',
      children: [
        { name: 'about.md', type: 'file' },
        { name: 'skills.js', type: 'file' },
        {
          name: 'projects',
          type: 'folder',
          children: [
            { name: 'CodeLink.jsx', type: 'file' },
            { name: 'CareerHive.jsx', type: 'file' },
          ]
        },
        { name: 'contact.tsx', type: 'file' },
      ]
    }
  ]

  const renderFileTree = (items: any[], level = 0) => {
    return items.map((item) => {
      const isExpanded = expandedFolders.has(item.name)
      const isActive = activeFile === item.name
      
      return (
        <div key={item.name} className={cn("select-none", level > 0 && "ml-4")}>
          <div
            className={cn(
              "flex items-center space-x-2 py-1 px-2 rounded cursor-pointer hover:bg-blue-500/20 transition-colors",
              isActive && "bg-blue-500/30 text-blue-300"
            )}
            onClick={() => {
              if (item.type === 'folder') {
                toggleFolder(item.name)
              } else {
                onFileSelect(item.name)
              }
            }}
          >
            {item.type === 'folder' ? (
              <>
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                {isExpanded ? <FolderOpen size={16} className="text-blue-400" /> : <Folder size={16} className="text-blue-400" />}
              </>
            ) : (
              <>
                <div className="w-4" />
                <FileText size={16} className="text-gray-400" />
              </>
            )}
            <span className="text-sm font-mono text-white/80">{item.name}</span>
          </div>
          
          {item.children && isExpanded && (
            <div className="ml-2">
              {renderFileTree(item.children, level + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <div className="text-white">
      <h3 className="text-sm font-mono text-blue-300 mb-4 uppercase tracking-wider">Explorer</h3>
      {renderFileTree(fileStructure)}
    </div>
  )
}