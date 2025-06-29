'use client'

import { useEffect, useState } from 'react'
import { Github, Mail, Linkedin, Facebook, Twitter, Download, ExternalLink, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Confetti } from '@/components/ui/confetti'
import { gsap } from 'gsap'

export function AboutContent() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hasnat Shahriyar"

  useEffect(() => {
    // GSAP animations
    gsap.fromTo('.hero-section', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    gsap.fromTo('.logo-container', 
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1.2, delay: 0.3, ease: 'back.out(1.7)' }
    )

    gsap.fromTo('.social-icons', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, stagger: 0.1, ease: 'power2.out' }
    )

    // Typewriter effect
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const handleDownloadCV = () => {
    setShowConfetti(true)
    // Simulate CV download
    const link = document.createElement('a')
    link.href = '#'
    link.download = 'Hasnat_Shahriyar_Senior_Developer_CV.pdf'
    link.click()
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      {/* Retro Grid Background */}
      <div className="absolute inset-0 retro-grid opacity-20 pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="hero-section text-center mb-16 relative z-10">
        {/* Professional Logo */}
        <div className="logo-container relative w-40 h-40 mx-auto mb-8">
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
              <Code2 className="w-20 h-20 text-primary" />
            </div>
          </div>
          <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground shadow-lg">
            Senior Developer
          </Badge>
        </div>

        {/* Name with Typewriter Effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Title */}
        <div className="text-blur-in">
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Senior Frontend Developer
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="outline">8+ Years Experience</Badge>
            <Badge variant="outline">React Specialist</Badge>
            <Badge variant="outline">TypeScript Expert</Badge>
          </div>
        </div>

        {/* Description */}
        <p className="text-slide-up text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Passionate senior frontend developer with 8+ years of experience crafting exceptional web experiences. 
          Specialized in React, Next.js, and TypeScript with a deep understanding of modern web architecture, 
          performance optimization, and scalable application development.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 interactive-hover"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button
            variant="outline"
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 interactive-hover"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Projects
          </Button>
        </div>
      </div>

      {/* Contact Icons */}
      <div className="social-icons flex justify-center space-x-6 mb-16">
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="mailto:hs.nahin430@gmail.com"
              className="p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 interactive-hover"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">hs.nahin430@gmail.com</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://github.com/hs-nahin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 interactive-hover"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">github.com/hs-nahin</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://linkedin.com/in/hasnat-shahriyar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 interactive-hover"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">LinkedIn Profile</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://facebook.com/hs.nahin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 interactive-hover"
            >
              <Facebook className="w-6 h-6 text-primary" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">Facebook Profile</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://twitter.com/hs_nahin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 interactive-hover"
            >
              <Twitter className="w-6 h-6 text-primary" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm">Twitter Profile</p>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* About Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <Card className="p-8 magic-card">
          <h3 className="text-2xl font-bold mb-6 text-fade-in">Professional Journey</h3>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              With over 8 years in frontend development, I've evolved from a curious developer 
              into a senior engineer who architects scalable web applications. My journey spans 
              from jQuery to modern React ecosystems, always staying ahead of industry trends.
            </p>
            <p className="leading-relaxed">
              I specialize in building high-performance, accessible web applications using React, 
              Next.js, and TypeScript. My expertise extends to modern development practices, 
              including micro-frontends, serverless architectures, and advanced state management.
            </p>
          </div>
        </Card>

        <Card className="p-8 magic-card">
          <h3 className="text-2xl font-bold mb-6 text-fade-in">Core Expertise</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Expert
              </Badge>
              <span>React.js & Next.js Architecture</span>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Expert
              </Badge>
              <span>TypeScript & Advanced JavaScript</span>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Advanced
              </Badge>
              <span>Performance Optimization</span>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
                Advanced
              </Badge>
              <span>Modern CSS & Design Systems</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="text-center pt-8 border-t border-border">
        <p className="text-muted-foreground">
          © 2025 Hasnat Shahriyar. Senior Frontend Developer with 8+ years of experience. 
          Built with Next.js, Tailwind CSS, shadcn/ui, and Magic UI.
        </p>
      </footer>
    </div>
  )
}