"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-16 h-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 p-1 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Toggle theme"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 opacity-50 blur-sm"></div>
        
        {/* Toggle circle */}
        <div
          className={`relative w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-lg transform transition-all duration-300 ease-in-out flex items-center justify-center ${
            isDark ? 'translate-x-8' : 'translate-x-0'
          }`}
        >
          {/* Icons */}
          <Sun className={`w-3 h-3 text-amber-500 absolute transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} />
          <Moon className={`w-3 h-3 text-blue-600 absolute transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`} />
        </div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform transition-transform duration-1000 ${
            isDark ? 'translate-x-full' : '-translate-x-full'
          }`} style={{ width: '200%' }}></div>
        </div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap">
          {isDark ? 'Light mode' : 'Dark mode'}
        </div>
      </div>
    </div>
  )
}