'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Download, ExternalLink, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { gsap } from 'gsap'

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hasnat Shahriyar"

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
    )
    .fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.3'
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5'
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3'
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3'
    )
    .fromTo('.hero-scroll', 
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2'
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

    // Floating animation for background elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    })

    return () => clearInterval(timer)
  }, [])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="floating-element absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="hero-badge mb-8">
          <Badge className="px-6 py-2 text-sm bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-primary/20 text-primary hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            Available for Projects
          </Badge>
        </div>

        {/* Main Title */}
        <div className="hero-title mb-6">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="gradient-text">
              {displayedText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="hero-subtitle mb-8">
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-light">
            Senior Frontend Developer
          </h2>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Badge variant="outline" className="glass-effect">8+ Years Experience</Badge>
            <Badge variant="outline" className="glass-effect">React Expert</Badge>
            <Badge variant="outline" className="glass-effect">TypeScript Pro</Badge>
          </div>
        </div>

        {/* Description */}
        <div className="hero-description mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Crafting exceptional web experiences with modern technologies. 
            Specialized in React, Next.js, and TypeScript with a passion for 
            performance and user experience.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="hero-buttons mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-2 border-primary/30 hover:border-primary/60 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <ExternalLink className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}