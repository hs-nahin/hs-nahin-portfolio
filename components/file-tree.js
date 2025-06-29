'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, File, Folder, FolderOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { gsap } from 'gsap'

const fileStructure = [
  { 
    name: 'about.md', 
    type: 'file', 
    icon: '📄',
    description: 'Senior Developer Profile'
  },
  { 
    name: 'skills.js', 
    type: 'file', 
    icon: '⚡',
    description: '8+ Years of Expertise'
  },
  {
    name: 'projects',
    type: 'folder',
    icon: '📁',
    description: 'Professional Portfolio',
    children: [
      { 
        name: 'CodeLink.jsx', 
        type: 'file', 
        icon: '⚛️',
        description: 'Collaborative Platform'
      },
      { 
        name: 'CareerHive.jsx', 
        type: 'file', 
        icon: '⚛️',
        description: 'Job Board Platform'
      },
    ]
  },
  { 
    name: 'contact.jsx', 
    type: 'file', 
    icon: '📧',
    description: 'Get In Touch'
  },
]

export function FileTree({ selectedFile, onFileSelect }) {
  const [expandedFolders, setExpandedFolders] = useState(['projects'])

  useEffect(() => {
    // Animate file tree items
    gsap.fromTo('.file-tree-item', 
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        stagger: 0.1,
        delay: 0.8,
        ease: 'power2.out'
      }
    )
  }, [])

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev =>
      prev.includes(folderName)
        ? prev.filter(name => name !== folderName)
        : [...prev, folderName]
    )
  }

  const renderItem = (item, depth = 0) => {
    const isExpanded = expandedFolders.includes(item.name)
    const isSelected = selectedFile === item.name

    if (item.type === 'folder') {
      return (
        <div key={item.name} className="mb-1">
          <div
            className={cn(
              "file-tree-item cursor-pointer hover:bg-accent/50 transition-all duration-200",
              "text-sm rounded-md mx-2"
            )}
            style={{ paddingLeft: `${depth * 16 + 8}px` }}
            onClick={() => toggleFolder(item.name)}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground mr-1" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground mr-1" />
            )}
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-blue-500 mr-2" />
            ) : (
              <Folder className="w-4 h-4 text-blue-500 mr-2" />
            )}
            <div className="flex-1">
              <div className="font-medium text-foreground">{item.name}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </div>
          </div>
          {isExpanded && item.children && (
            <div className="ml-4">
              {item.children.map((child) => renderItem(child, depth + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        key={item.name}
        className={cn(
          "file-tree-item cursor-pointer hover:bg-accent/50 transition-all duration-200 rounded-md mx-2 mb-1",
          "text-sm",
          isSelected && "bg-primary/10 border-l-2 border-primary"
        )}
        style={{ paddingLeft: `${depth * 16 + 24}px` }}
        onClick={() => onFileSelect(item.name)}
      >
        <File className="w-4 h-4 text-muted-foreground mr-2" />
        <div className="flex-1">
          <div className="font-medium text-foreground">{item.name}</div>
          <div className="text-xs text-muted-foreground">{item.description}</div>
        </div>
        {isSelected && (
          <Badge variant="secondary" className="text-xs">
            Active
          </Badge>
        )}
      </div>
    )
  }

  return (
    <div className="p-4 space-y-2">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2 py-1 mb-4">
        Senior Developer Portfolio
      </div>
      {fileStructure.map(item => renderItem(item))}
    </div>
  )
}