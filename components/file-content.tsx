"use client"

import { AboutContent } from '@/components/content/about-content'
import { SkillsContent } from '@/components/content/skills-content'
import { ProjectContent } from '@/components/content/project-content'
import { ContactContent } from '@/components/content/contact-content'

interface FileContentProps {
  selectedFile: string
}

export function FileContent({ selectedFile }: FileContentProps) {
  const renderContent = () => {
    switch (selectedFile) {
      case 'about.md':
        return <AboutContent />
      case 'skills.js':
        return <SkillsContent />
      case 'CodeLink.jsx':
        return <ProjectContent project="CodeLink" />
      case 'CareerHive.jsx':
        return <ProjectContent project="CareerHive" />
      case 'contact.tsx':
        return <ContactContent />
      default:
        return <AboutContent />
    }
  }

  return (
    <div className="h-full overflow-auto">
      <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 border-b border-gray-700 dark:border-gray-800">
        <span className="text-gray-300 text-sm font-mono">{selectedFile}</span>
      </div>
      <div className="p-6 text-gray-100">
        {renderContent()}
      </div>
    </div>
  )
}