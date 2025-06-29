'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react'
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
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, ease: 'power2.out' }
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold gradient-text">Hasnat Shahriyar</h1>
                <p className="text-xs text-muted-foreground">Senior Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Social Links & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="https://github.com/hs-nahin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/hasnat-shahriyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:hs.nahin430@gmail.com"
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
              
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-menu-item block w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center justify-center space-x-6 pt-6 border-t border-border/50">
                <a
                  href="https://github.com/hs-nahin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                >
                  <Github className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="https://linkedin.com/in/hasnat-shahriyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="mailto:hs.nahin430@gmail.com"
                  className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}