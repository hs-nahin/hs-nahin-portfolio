'use client'

import { useEffect, useState } from 'react'
import { Github, Mail, Linkedin, Facebook, Twitter, Download, ExternalLink, Code2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Confetti } from '@/components/ui/confetti'
import { gsap } from 'gsap'

export function AboutContent() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hasnat Shahriyar"

  useEffect(() => {
    // Advanced GSAP animations
    const tl = gsap.timeline()
    
    tl.fromTo('.hero-container', 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo('.logo-container', 
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' }, '-=0.8'
    )
    .fromTo('.social-icons > *', 
      { opacity: 0, y: 50, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.5'
    )
    .fromTo('.content-cards > *', 
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, '-=0.3'
    )

    // Typewriter effect with advanced timing
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 120)

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
    <div className="min-h-screen p-8 max-w-7xl mx-auto relative overflow-hidden">
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Hero Section */}
      <div className="hero-container text-center mb-20 relative z-10">
        {/* Professional Logo */}
        <div className="logo-container relative w-48 h-48 mx-auto mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse-glow"></div>
          <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-3xl bg-background/95 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>
              <Code2 className="w-24 h-24 text-primary relative z-10" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute top-4 right-4 animate-pulse" />
            </div>
          </div>
          <Badge className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg px-4 py-1">
            Senior Developer
          </Badge>
        </div>

        {/* Name with Advanced Typewriter Effect */}
        <h1 className="heading-xl mb-6">
          <span className="gradient-text">
            {displayedText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </h1>

        {/* Enhanced Title */}
        <div className="animate-fade-in-up mb-8">
          <h2 className="heading-lg text-muted-foreground mb-6">
            Senior Frontend Developer
          </h2>
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <Badge variant="outline" className="glass-effect hover-lift">8+ Years Experience</Badge>
            <Badge variant="outline" className="glass-effect hover-lift">React Specialist</Badge>
            <Badge variant="outline" className="glass-effect hover-lift">TypeScript Expert</Badge>
            <Badge variant="outline" className="glass-effect hover-lift">Next.js Pro</Badge>
          </div>
        </div>

        {/* Enhanced Description */}
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          Passionate senior frontend developer with 8+ years of experience crafting exceptional web experiences. 
          Specialized in React, Next.js, and TypeScript with expertise in modern web architecture, 
          performance optimization, and scalable application development.
        </p>

        {/* Professional Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            onClick={handleDownloadCV}
            className="btn-primary px-8 py-4 text-lg rounded-2xl hover-lift group"
          >
            <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Download CV
          </Button>
          <Button
            variant="outline"
            className="glass-effect border-2 border-primary/30 hover:border-primary/60 px-8 py-4 text-lg rounded-2xl hover-lift group"
          >
            <ExternalLink className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
            View Projects
          </Button>
        </div>
      </div>

      {/* Enhanced Contact Icons */}
      <div className="social-icons flex justify-center space-x-8 mb-20">
        {[
          { icon: Mail, href: 'mailto:hs.nahin430@gmail.com', label: 'Email', color: 'from-red-500 to-pink-600' },
          { icon: Github, href: 'https://github.com/hs-nahin', label: 'GitHub', color: 'from-gray-700 to-gray-900' },
          { icon: Linkedin, href: 'https://linkedin.com/in/hasnat-shahriyar', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
          { icon: Facebook, href: 'https://facebook.com/hs.nahin', label: 'Facebook', color: 'from-blue-500 to-blue-700' },
          { icon: Twitter, href: 'https://twitter.com/hs_nahin', label: 'Twitter', color: 'from-sky-400 to-blue-600' },
        ].map(({ icon: Icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
            <div className="relative p-4 rounded-2xl glass-effect hover-lift group-hover:scale-110 transition-all duration-300">
              <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
        ))}
      </div>

      {/* Professional Content Cards */}
      <div className="content-cards grid lg:grid-cols-2 gap-8 mb-20">
        <Card className="pro-card p-8 hover-lift">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Professional Journey</h3>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              With over 8 years in frontend development, I've evolved from a curious developer 
              into a senior engineer who architects scalable web applications. My journey spans 
              from traditional web development to modern React ecosystems.
            </p>
            <p className="leading-relaxed">
              I specialize in building high-performance, accessible web applications using React, 
              Next.js, and TypeScript. My expertise extends to modern development practices, 
              including component architecture, state management, and performance optimization.
            </p>
          </div>
        </Card>

        <Card className="pro-card p-8 hover-lift">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-4">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Core Expertise</h3>
          </div>
          <div className="space-y-4">
            {[
              { skill: 'React.js & Next.js Architecture', level: 'Expert', color: 'from-blue-500 to-cyan-500' },
              { skill: 'TypeScript & JavaScript', level: 'Expert', color: 'from-purple-500 to-indigo-500' },
              { skill: 'Modern CSS & Tailwind', level: 'Expert', color: 'from-green-500 to-emerald-500' },
              { skill: 'Performance Optimization', level: 'Advanced', color: 'from-orange-500 to-red-500' },
            ].map(({ skill, level, color }) => (
              <div key={skill} className="flex items-center justify-between p-3 rounded-xl glass-effect hover-lift">
                <span className="font-medium">{skill}</span>
                <Badge className={`bg-gradient-to-r ${color} text-white border-0`}>
                  {level}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Professional Footer */}
      <footer className="text-center pt-12 border-t border-border/50">
        <div className="glass-effect rounded-2xl p-6 max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            © 2025 Hasnat Shahriyar. Senior Frontend Developer with 8+ years of experience. 
            Built with Next.js, Tailwind CSS, and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  )
}