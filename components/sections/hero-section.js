'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Download, ExternalLink, Sparkles, Code2, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { gsap } from 'gsap'

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hasnat Shahriyar"

  useEffect(() => {
    // Hero magical entrance animation
    const tl = gsap.timeline({ delay: 1 })
    
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: 50, scale: 0.5, rotateX: -90 },
      { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 1.2, ease: 'back.out(2)' }
    )
    .fromTo('.hero-title', 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power4.out' }, '-=0.8'
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 50, rotateY: -45 },
      { opacity: 1, y: 0, rotateY: 0, duration: 1, ease: 'power3.out' }, '-=1'
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' }, '-=0.7'
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 40, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)' }, '-=0.5'
    )
    .fromTo('.hero-scroll', 
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' }, '-=0.3'
    )

    // Magical typewriter effect
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 120)

    // Floating magical elements
    gsap.to('.floating-magic', {
      y: -30,
      x: 20,
      rotation: 360,
      duration: 6,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 1
    })

    return () => clearInterval(timer)
  }, [])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Magical animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-magic absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="floating-magic absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="floating-magic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Magical grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Magical badge */}
        <div className="hero-badge mb-12">
          <Badge className="px-8 py-3 text-base bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 border border-purple-400/30 text-purple-200 hover:scale-110 transition-all duration-500 backdrop-blur-xl shadow-2xl shadow-purple-500/25">
            <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
            Available for Magical Projects
            <Code2 className="w-5 h-5 ml-3 animate-bounce" />
          </Badge>
        </div>

        {/* Main magical title */}
        <div className="hero-title mb-8">
          <h1 className="text-7xl md:text-9xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              {displayedText}
              <span className="text-purple-400 animate-ping">|</span>
            </span>
          </h1>
        </div>

        {/* Magical subtitle */}
        <div className="hero-subtitle mb-10">
          <h2 className="text-3xl md:text-5xl text-purple-200/90 font-light mb-8">
            Senior Frontend Developer & UI Wizard
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <Badge variant="outline" className="bg-slate-800/50 border-purple-400/30 text-purple-300 backdrop-blur-xl px-4 py-2 hover:scale-105 transition-all duration-300">
              <Zap className="w-4 h-4 mr-2" />
              8+ Years Experience
            </Badge>
            <Badge variant="outline" className="bg-slate-800/50 border-pink-400/30 text-pink-300 backdrop-blur-xl px-4 py-2 hover:scale-105 transition-all duration-300">
              <Code2 className="w-4 h-4 mr-2" />
              React Expert
            </Badge>
            <Badge variant="outline" className="bg-slate-800/50 border-blue-400/30 text-blue-300 backdrop-blur-xl px-4 py-2 hover:scale-105 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              TypeScript Pro
            </Badge>
          </div>
        </div>

        {/* Magical description */}
        <div className="hero-description mb-16">
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-4xl mx-auto leading-relaxed">
            Crafting extraordinary digital experiences with cutting-edge technologies. 
            Specialized in React, Next.js, and TypeScript with a passion for 
            creating magical user interfaces that captivate and inspire.
          </p>
        </div>

        {/* Magical action buttons */}
        <div className="hero-buttons mb-20">
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button
              size="lg"
              className="px-10 py-5 text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/50 hover:scale-110 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Download CV</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-5 text-lg border-2 border-purple-400/40 hover:border-purple-400/80 bg-slate-800/30 hover:bg-purple-600/20 text-purple-200 hover:text-white rounded-2xl hover:scale-110 transition-all duration-500 group backdrop-blur-xl"
            >
              <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">View Projects</span>
            </Button>
          </div>
        </div>

        {/* Magical scroll indicator */}
        <div className="hero-scroll">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center space-y-3 text-purple-300/80 hover:text-purple-200 transition-all duration-500"
          >
            <span className="text-sm font-medium">Discover the Magic</span>
            <div className="w-8 h-12 border-2 border-purple-400/40 rounded-full flex justify-center backdrop-blur-xl bg-slate-800/20">
              <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-bounce"></div>
            </div>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-2 transition-transform duration-500 animate-pulse" />
          </button>
        </div>
      </div>

      {/* Magical floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-magic absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-60 blur-sm"></div>
        <div className="floating-magic absolute top-3/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-40"></div>
        <div className="floating-magic absolute top-1/2 left-3/4 w-6 h-6 bg-blue-400 rounded-full animate-bounce opacity-30 blur-sm"></div>
        <div className="floating-magic absolute bottom-1/4 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
      </div>
    </section>
  )
}