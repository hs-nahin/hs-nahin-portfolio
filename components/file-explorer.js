'use client'

import { useState, useEffect } from 'react'
import { 
  ChevronRight, 
  ChevronDown, 
  FileText, 
  Code2, 
  User, 
  Briefcase, 
  Mail,
  Folder,
  FolderOpen
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'

const fileStructure = [
  {
    name: 'portfolio',
    type: 'folder',
    expanded: true,
    children: [
      { name: 'about.md', type: 'file', icon: User, description: 'Profile and introduction' },
      { name: 'skills.js', type: 'file', icon: Code2, description: 'Technical expertise' },
      {
        name: 'projects',
        type: 'folder',
        expanded: false,
        children: [
          { name: 'CodeLink.jsx', type: 'file', icon: FileText, description: 'Collaborative platform' },
          { name: 'CareerHive.jsx', type: 'file', icon: FileText, description: 'Job board platform' }
        ]
      },
      { name: 'contact.tsx', type: 'file', icon: Mail, description: 'Get in touch' }
    ]
  }
]

export function FileExplorer({ activeFile, onFileSelect, className }) {
  const [expandedFolders, setExpandedFolders] = useState(['portfolio'])

  useEffect(() => {
    gsap.fromTo('.file-item', 
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.3, 
        stagger: 0.1,
        ease: 'power2.out'
      }
    )
  }, [expandedFolders])

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => 
      prev.includes(folderName) 
        ? prev.filter(name => name !== folderName)
        : [...prev, folderName]
    )
  }

  const renderFileTree = (items, depth = 0) => {
    return items.map((item, index) => {
      const isExpanded = expandedFolders.includes(item.name)
      const isActive = activeFile === item.name
      const IconComponent = item.icon || (item.type === 'folder' ? (isExpanded ? FolderOpen : Folder) : FileText)

      return (
        <div key={item.name} className="file-item">
          <div
            className={cn(
              'flex items-center space-x-2 px-2 py-1.5 cursor-pointer transition-smooth file-tree-item rounded-sm',
              'hover:bg-accent/50',
              isActive && 'bg-primary/10 border-l-2 border-primary',
              depth > 0 && 'ml-4'
            )}
            style={{ paddingLeft: `${depth * 16 + 8}px` }}
            onClick={() => {
              if (item.type === 'folder') {
                toggleFolder(item.name)
              } else {
                onFileSelect(item.name)
                gsap.fromTo('.content-area', 
                  { opacity: 0.7, x: 20 },
                  { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
                )
              }
            }}
          >
            {item.type === 'folder' && (
              <div className="transition-transform duration-200">
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            )}
            
            <IconComponent className={cn(
              'w-4 h-4',
              item.type === 'folder' ? 'text-blue-500' : 'text-muted-foreground',
              isActive && 'text-primary'
            )} />
            
            <span className={cn(
              'text-sm font-mono',
              isActive ? 'text-primary font-medium' : 'text-foreground'
            )}>
              {item.name}
            </span>
            
            {item.description && (
              <span className="text-xs text-muted-foreground ml-auto hidden lg:block">
                {item.description}
              </span>
            )}
          </div>
          
          {item.type === 'folder' && isExpanded && item.children && (
            <div className="overflow-hidden">
              {renderFileTree(item.children, depth + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <div className={cn('w-80 bg-muted/20 border-r border-border flex flex-col', className)}>
      <div className="px-4 py-3 border-b border-border bg-muted/30">
        <h2 className="text-sm font-semibold text-foreground">EXPLORER</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        {renderFileTree(fileStructure)}
      </div>
      
      <div className="px-4 py-2 border-t border-border bg-muted/30">
        <div className="text-xs text-muted-foreground font-mono">
          <div>Files: 6</div>
          <div>Last modified: {new Date().toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  )
}