"use client"

import * as React from "react"
import { Moon, Sun, Sparkles } from "lucide-react"
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
    <div className="relative group">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-20 h-10 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-1 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-blue-500"
        aria-label="Toggle theme"
      >
        {/* Magical background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500"></div>
        
        {/* Toggle circle with magical effects */}
        <div
          className={`relative w-8 h-8 rounded-xl bg-white dark:bg-slate-900 shadow-2xl transform transition-all duration-500 ease-in-out flex items-center justify-center ${
            isDark ? 'translate-x-10' : 'translate-x-0'
          } group-hover:scale-110`}
        >
          {/* Magical sparkles */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Sparkles className={`absolute top-0.5 right-0.5 w-2 h-2 text-purple-400 transition-all duration-300 ${
              isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
            }`} />
            <Sparkles className={`absolute bottom-0.5 left-0.5 w-2 h-2 text-yellow-400 transition-all duration-300 ${
              isDark ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`} />
          </div>
          
          {/* Icons with magical transitions */}
          <Sun className={`w-4 h-4 text-yellow-500 absolute transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} />
          <Moon className={`w-4 h-4 text-purple-400 absolute transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`} />
        </div>
        
        {/* Animated magical sweep */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform transition-transform duration-1000 ${
            isDark ? 'translate-x-full' : '-translate-x-full'
          }`} style={{ width: '200%' }}></div>
        </div>
      </button>
      
      {/* Magical tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-slate-900/90 backdrop-blur-xl text-purple-200 text-sm px-3 py-2 rounded-lg border border-purple-500/20 shadow-2xl">
          {isDark ? 'Light mode' : 'Dark mode'}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900/90 border-l border-t border-purple-500/20 rotate-45"></div>
        </div>
      </div>
    </div>
  )
}