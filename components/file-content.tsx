'use client'

import { AboutContent } from './content/about-content'
import { SkillsContent } from './content/skills-content'
import { ProjectContent } from './content/project-content'
import { ContactContent } from './content/contact-content'

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
      {renderContent()}
    </div>
  )
}