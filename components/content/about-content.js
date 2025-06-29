'use client'

import { useEffect, useState } from 'react'
import { Github, Mail, Linkedin, Facebook, Twitter, Download, ExternalLink, MapPin, Calendar } from 'lucide-react'
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

    gsap.fromTo('.profile-container', 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay: 0.3, ease: 'back.out(1.7)' }
    )

    gsap.fromTo('.social-icons', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, stagger: 0.1, ease: 'power2.out' }
    )

    gsap.fromTo('.info-cards', 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 1, stagger: 0.2, ease: 'power2.out' }
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
    <div className="p-8 max-w-7xl mx-auto">
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      {/* Retro Grid Background */}
      <div className="absolute inset-0 retro-grid opacity-20 pointer-events-none"></div>
      
      {/* Hero Section */}
      <div className="hero-section text-center mb-16 relative z-10">
        {/* Professional Profile Container */}
        <div className="profile-container relative w-48 h-48 mx-auto mb-8">
          {/* Floating Elements Animation */}
          <div className="absolute inset-0 animate-pulse">
            <div className="absolute top-0 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/4 right-0 w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          {/* Hexagonal Profile Frame */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-2 bg-background rounded-3xl transform rotate-45"></div>
            <div className="absolute inset-4 rounded-2xl overflow-hidden transform -rotate-45">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Hasnat Shahriyar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-green-500 text-white px-4 py-1 text-sm font-semibold animate-pulse">
              Available for Work
            </Badge>
          </div>
        </div>

        {/* Name with Enhanced Typewriter Effect */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {displayedText}
              <span className="animate-pulse text-blue-500">|</span>
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Professional Title */}
        <div className="text-blur-in mb-6">
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
            Senior Frontend Developer
          </h2>
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <Badge variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400">8+ Years Experience</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-600 dark:text-purple-400">React Specialist</Badge>
            <Badge variant="outline" className="border-cyan-500 text-cyan-600 dark:text-cyan-400">TypeScript Expert</Badge>
            <Badge variant="outline" className="border-green-500 text-green-600 dark:text-green-400">Next.js Pro</Badge>
          </div>
        </div>

        {/* Enhanced Description */}
        <p className="text-slide-up text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          Passionate senior frontend developer with 8+ years of experience crafting exceptional web experiences. 
          Specialized in React, Next.js, and TypeScript with a deep understanding of modern web architecture, 
          performance optimization, and scalable application development. Committed to delivering pixel-perfect, 
          accessible, and high-performance web applications.
        </p>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 interactive-hover shadow-lg hover:shadow-xl"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 interactive-hover shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Projects
          </Button>
        </div>
      </div>

      {/* Enhanced Social Icons */}
      <div className="social-icons flex justify-center space-x-6 mb-16">
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="mailto:hs.nahin430@gmail.com"
              className="group p-4 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all duration-300 hover:scale-110 interactive-hover shadow-lg hover:shadow-xl"
            >
              <Mail className="w-6 h-6 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm font-medium">Email</p>
            <p className="text-xs text-muted-foreground">hs.nahin430@gmail.com</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://github.com/hs-nahin"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:scale-110 interactive-hover shadow-lg hover:shadow-xl"
            >
              <Github className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm font-medium">GitHub</p>
            <p className="text-xs text-muted-foreground">@hs-nahin</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://linkedin.com/in/hasnat-shahriyar"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 interactive-hover shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm font-medium">LinkedIn</p>
            <p className="text-xs text-muted-foreground">Professional Network</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://facebook.com/hs.nahin"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 interactive-hover shadow-lg hover:shadow-xl"
            >
              <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm font-medium">Facebook</p>
            <p className="text-xs text-muted-foreground">Social Profile</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="https://twitter.com/hs_nahin"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:scale-110 interactive-hover shadow-lg hover:shadow-xl"
            >
              <Twitter className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="text-sm font-medium">Twitter / X</p>
            <p className="text-xs text-muted-foreground">@hs_nahin</p>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Professional Info Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <Card className="info-cards p-8 magic-card bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-200 dark:border-blue-800">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-500 rounded-full mr-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">Experience</h3>
              <p className="text-blue-700 dark:text-blue-300">8+ Years Professional</p>
            </div>
          </div>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
            Extensive experience in frontend development, from startup MVPs to enterprise-scale applications. 
            Proven track record of delivering high-quality, maintainable code.
          </p>
        </Card>

        <Card className="info-cards p-8 magic-card bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border-purple-200 dark:border-purple-800">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-purple-500 rounded-full mr-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">Location</h3>
              <p className="text-purple-700 dark:text-purple-300">Remote & On-site</p>
            </div>
          </div>
          <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
            Based in Dhaka, Bangladesh. Available for remote work globally and open to relocation 
            for the right opportunities. Flexible with time zones.
          </p>
        </Card>

        <Card className="info-cards p-8 magic-card bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-500 rounded-full mr-4">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Specialization</h3>
              <p className="text-green-700 dark:text-green-300">React Ecosystem</p>
            </div>
          </div>
          <p className="text-green-800 dark:text-green-200 leading-relaxed">
            Deep expertise in React, Next.js, TypeScript, and modern web technologies. 
            Passionate about performance optimization and user experience.
          </p>
        </Card>
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
            <p className="leading-relaxed">
              Currently focused on creating exceptional user experiences through clean code, 
              performance optimization, and innovative solutions that drive business growth.
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
            <div className="flex items-center space-x-3">
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Proficient
              </Badge>
              <span>DevOps & CI/CD Pipelines</span>
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