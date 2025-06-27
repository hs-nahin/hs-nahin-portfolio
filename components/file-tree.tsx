'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, File, Folder, FolderOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileTreeProps {
  selectedFile: string
  onFileSelect: (file: string) => void
}

const fileStructure = [
  { name: 'about.md', type: 'file', icon: '📄' },
  { name: 'skills.js', type: 'file', icon: '⚡' },
  {
    name: 'projects',
    type: 'folder',
    icon: '📁',
    children: [
      { name: 'CodeLink.jsx', type: 'file', icon: '⚛️' },
      { name: 'CareerHive.jsx', type: 'file', icon: '⚛️' },
    ]
  },
  { name: 'contact.tsx', type: 'file', icon: '📧' },
]

export function FileTree({ selectedFile, onFileSelect }: FileTreeProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['projects'])

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev =>
      prev.includes(folderName)
        ? prev.filter(name => name !== folderName)
        : [...prev, folderName]
    )
  }

  const renderItem = (item: any, depth = 0) => {
    const isExpanded = expandedFolders.includes(item.name)
    const isSelected = selectedFile === item.name

    if (item.type === 'folder') {
      return (
        <div key={item.name}>
          <div
            className={cn(
              "flex items-center space-x-2 px-2 py-1 cursor-pointer hover:bg-accent/50 transition-colors",
              "text-sm"
            )}
            style={{ paddingLeft: `${depth * 16 + 8}px` }}
            onClick={() => toggleFolder(item.name)}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-blue-500" />
            ) : (
              <Folder className="w-4 h-4 text-blue-500" />
            )}
            <span className="text-foreground">{item.name}</span>
          </div>
          {isExpanded && item.children && (
            <div>
              {item.children.map((child: any) => renderItem(child, depth + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        key={item.name}
        className={cn(
          "flex items-center space-x-2 px-2 py-1 cursor-pointer hover:bg-accent/50 transition-colors",
          "text-sm",
          isSelected && "bg-primary/20 border-r-2 border-primary"
        )}
        style={{ paddingLeft: `${depth * 16 + 24}px` }}
        onClick={() => onFileSelect(item.name)}
      >
        <File className="w-4 h-4 text-muted-foreground" />
        <span className="text-foreground">{item.name}</span>
      </div>
    )
  }

  return (
    <div className="p-2 space-y-1">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2 py-1">
        Portfolio Files
      </div>
      {fileStructure.map(item => renderItem(item))}
    </div>
  )
}