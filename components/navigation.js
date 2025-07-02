'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { gsap } from 'gsap'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Navigation({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-menu-item', 
        { opacity: 0, x: -50, rotateY: -90 },
        { opacity: 1, x: 0, rotateY: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' }
      )
    }
  }, [isOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Magical Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110">
                  <Sparkles className="w-7 h-7 text-white animate-pulse" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Hasnat Shahriyar
                </h1>
                <p className="text-sm text-purple-300/80 font-medium">Senior Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-500 rounded-xl group ${
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30' 
                      : 'text-purple-200/80 hover:text-white hover:bg-purple-600/10'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl blur-sm"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-xl transition-all duration-500"></div>
                </button>
              ))}
            </div>

            {/* Social Links & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href="https://github.com/hs-nahin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/hasnat-shahriyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://twitter.com/hs_nahin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-cyan-600/20 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:hs.nahin430@gmail.com"
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-pink-600/20 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-pink-300 group-hover:text-white transition-colors" />
                </a>
              </div>
              
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-3 rounded-xl bg-slate-800/50 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-600/20"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5 text-purple-300" /> : <Menu className="w-5 h-5 text-purple-300" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-menu-item block w-full text-left px-6 py-4 text-lg font-medium rounded-2xl transition-all duration-500 ${
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/30' 
                      : 'text-purple-200/80 hover:text-white hover:bg-purple-600/20 border border-transparent hover:border-purple-500/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center justify-center space-x-4 pt-6 border-t border-purple-500/20">
                <a
                  href="https://github.com/hs-nahin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-800/50 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-purple-300" />
                </a>
                <a
                  href="https://linkedin.com/in/hasnat-shahriyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-800/50 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-blue-300" />
                </a>
                <a
                  href="https://twitter.com/hs_nahin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-800/50 hover:bg-cyan-600/20 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6 text-cyan-300" />
                </a>
                <a
                  href="mailto:hs.nahin430@gmail.com"
                  className="p-4 rounded-2xl bg-slate-800/50 hover:bg-pink-600/20 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-pink-300" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}