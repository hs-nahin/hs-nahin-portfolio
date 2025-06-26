"use client"

import { AboutContent } from './content/about-content'
import { SkillsContent } from './content/skills-content'
import { ProjectContent } from './content/project-content'
import { ContactContent } from './content/contact-content'

interface FileContentProps {
  activeFile: string
}

export function FileContent({ activeFile }: FileContentProps) {
  const renderContent = () => {
    switch (activeFile) {
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
    <div className="p-6 h-full">
      {renderContent()}
    </div>
  )
}