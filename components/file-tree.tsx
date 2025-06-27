"use client"

import { ChevronDown, ChevronRight, File, Folder, FolderOpen } from 'lucide-react'
import { useState } from 'react'

interface FileTreeProps {
  selectedFile: string
  onFileSelect: (file: string) => void
}

export function FileTree({ selectedFile, onFileSelect }: FileTreeProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['projects']))

  const toggleFolder = (folder: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folder)) {
      newExpanded.delete(folder)
    } else {
      newExpanded.add(folder)
    }
    setExpandedFolders(newExpanded)
  }

  const files = [
    { name: 'about.md', type: 'file', icon: File },
    { name: 'skills.js', type: 'file', icon: File },
    {
      name: 'projects',
      type: 'folder',
      icon: expandedFolders.has('projects') ? FolderOpen : Folder,
      children: [
        { name: 'CodeLink.jsx', type: 'file', icon: File },
        { name: 'CareerHive.jsx', type: 'file', icon: File },
      ]
    },
    { name: 'contact.tsx', type: 'file', icon: File },
  ]

  const renderFileItem = (item: any, depth = 0) => {
    const isSelected = selectedFile === item.name
    const paddingLeft = depth * 20 + 16

    if (item.type === 'folder') {
      const isExpanded = expandedFolders.has(item.name)
      return (
        <div key={item.name}>
          <div
            className={`flex items-center py-1 px-2 cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors`}
            style={{ paddingLeft }}
            onClick={() => toggleFolder(item.name)}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 mr-1 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-1 text-gray-400" />
            )}
            <item.icon className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-gray-300">{item.name}</span>
          </div>
          {isExpanded && item.children && (
            <div>
              {item.children.map((child: any) => renderFileItem(child, depth + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        key={item.name}
        className={`flex items-center py-1 px-2 cursor-pointer transition-colors ${
          isSelected
            ? 'bg-blue-600 dark:bg-blue-700 text-white'
            : 'hover:bg-gray-800 dark:hover:bg-gray-700 text-gray-300'
        }`}
        style={{ paddingLeft }}
        onClick={() => onFileSelect(item.name)}
      >
        <item.icon className="w-4 h-4 mr-2 text-gray-400" />
        <span>{item.name}</span>
      </div>
    )
  }

  return (
    <div className="p-2">
      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 px-2">
        Explorer
      </div>
      {files.map(file => renderFileItem(file))}
    </div>
  )
}