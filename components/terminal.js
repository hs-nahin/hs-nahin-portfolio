'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { Badge } from '@/components/ui/badge'

export function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    '$ Welcome to Hasnat\'s Senior Developer Terminal',
    '$ 8+ years of frontend expertise at your service',
    '$ Type "help" for available commands',
    ''
  ])
  const inputRef = useRef(null)
  const { theme } = useTheme()

  const commands = {
    help: () => [
      'Available commands:',
      '  about      - Learn about Hasnat (Senior Developer)',
      '  skills     - View technical expertise (8+ years)',
      '  projects   - See professional projects',
      '  contact    - Get contact information',
      '  experience - View career highlights',
      '  clear      - Clear terminal',
      '  theme      - Toggle theme',
      ''
    ],
    about: () => [
      'Hasnat Shahriyar - Senior Frontend Developer',
      '8+ years of professional web development experience',
      'Specializing in React, Next.js, TypeScript, and modern web architecture',
      'Expert in performance optimization and scalable application development',
      ''
    ],
    skills: () => [
      'Senior Level Technical Skills:',
      '• Languages: JavaScript (Expert), TypeScript (Expert), HTML5, CSS3',
      '• Frameworks: React.js (6+ years), Next.js (4+ years), Vue.js',
      '• Styling: Tailwind CSS, Styled Components, SASS/SCSS',
      '• Tools: Git, Webpack, Vite, Docker, AWS, Vercel',
      '• Architecture: Micro-frontends, Design Systems, Performance Optimization',
      ''
    ],
    projects: () => [
      'Professional Projects:',
      '1. CodeLink - Collaborative developer platform (Lead Frontend)',
      '2. CareerHive - Job board platform (Senior Frontend Architect)',
      '3. 50+ commercial projects delivered successfully',
      ''
    ],
    contact: () => [
      'Contact Information:',
      'Email: hs.nahin430@gmail.com',
      'GitHub: https://github.com/hs-nahin',
      'LinkedIn: https://linkedin.com/in/hasnat-shahriyar',
      'Status: Available for senior-level projects',
      ''
    ],
    experience: () => [
      'Career Highlights:',
      '• 8+ years of professional frontend development',
      '• 50+ projects delivered across various industries',
      '• Team leadership and mentoring experience',
      '• Expert in React ecosystem and modern web technologies',
      '• Performance optimization and architecture design specialist',
      ''
    ],
    clear: () => {
      setHistory([])
      return []
    },
    theme: () => [
      'Theme toggled! ✨',
      ''
    ]
  }

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim()
    const output = commands[command]
    
    if (output) {
      if (command === 'clear') {
        output()
        return
      }
      setHistory(prev => [...prev, `$ ${cmd}`, ...output()])
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, `Command not found: ${cmd}`, 'Type "help" for available commands', ''])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className={`h-full flex flex-col ${
      theme === 'dark' 
        ? 'bg-gray-900 text-green-400' 
        : 'bg-white text-gray-800'
    } font-mono text-sm transition-colors duration-300`}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold">TERMINAL</span>
          <Badge variant="secondary" className="text-xs">
            Senior Dev
          </Badge>
        </div>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-1">
          {history.map((line, index) => (
            <div key={index} className={`${
              line.startsWith('$') 
                ? theme === 'dark' ? 'text-green-400' : 'text-blue-600'
                : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {line}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className={`mr-2 ${
            theme === 'dark' ? 'text-green-400' : 'text-blue-600'
          }`}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            placeholder="Type a command..."
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  )
}