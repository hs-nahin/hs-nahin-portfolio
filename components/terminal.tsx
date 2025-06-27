'use client'

import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([
    '$ Welcome to Hasnat\'s Portfolio Terminal',
    '$ Type "help" for available commands',
    ''
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()

  const commands = {
    help: () => [
      'Available commands:',
      '  about    - Learn about Hasnat',
      '  skills   - View technical skills',
      '  projects - See recent projects',
      '  contact  - Get contact information',
      '  clear    - Clear terminal',
      '  theme    - Toggle theme',
      ''
    ],
    about: () => [
      'Hasnat Shahriyar - Frontend Developer',
      'Passionate about creating exceptional web experiences',
      'Specializing in React, Next.js, and modern web technologies',
      ''
    ],
    skills: () => [
      'Technical Skills:',
      '• Frontend: React.js, Next.js, TypeScript, JavaScript',
      '• Styling: Tailwind CSS, CSS3, Bootstrap',
      '• Tools: Git, VS Code, Figma, Vercel, Netlify',
      '• Other: Responsive Design, Performance Optimization',
      ''
    ],
    projects: () => [
      'Recent Projects:',
      '1. CodeLink - Code sharing platform',
      '2. CareerHive - Job portal application',
      '3. Portfolio - This interactive portfolio',
      ''
    ],
    contact: () => [
      'Contact Information:',
      'Email: hs.nahin430@gmail.com',
      'GitHub: https://github.com/hs-nahin',
      'LinkedIn: https://linkedin.com/in/hasnat-shahriyar',
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

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const output = commands[command as keyof typeof commands]
    
    if (output) {
      if (command === 'clear') {
        output()
        return
      }
      if (command === 'theme') {
        // Theme toggle is handled by the theme toggle button
      }
      setHistory(prev => [...prev, `$ ${cmd}`, ...output()])
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, `Command not found: ${cmd}`, 'Type "help" for available commands', ''])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
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
      <div className="flex items-center justify-between p-3 border-b border-border">
        <span className="text-xs font-semibold">TERMINAL</span>
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