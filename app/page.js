'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Particles } from '@/components/ui/particles'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    
    // Mouse tracking for magical effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // Advanced page load animation
    const tl = gsap.timeline()
    
    tl.fromTo('.page-loader', 
      { opacity: 1 },
      { opacity: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo('.main-content', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    )

    // Magical scroll animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Section detection for navigation
    const sections = ['hero', 'about', 'skills', 'projects', 'contact']
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section)
      })
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="page-loader fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-transparent border-t-purple-400 border-r-blue-400 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-b-pink-400 border-l-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-2 w-20 h-20 border-2 border-transparent border-t-purple-300 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
      </div>
    )
  }

  return (
    <div className="main-content relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* Magical cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />
      
      {/* Animated background particles */}
      <Particles />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} />
      
      {/* Main content */}
      <main className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about" className="animate-on-scroll">
          <AboutSection />
        </section>
        
        <section id="skills" className="animate-on-scroll">
          <SkillsSection />
        </section>
        
        <section id="projects" className="animate-on-scroll">
          <ProjectsSection />
        </section>
        
        <section id="contact" className="animate-on-scroll">
          <ContactSection />
        </section>
      </main>
      
      {/* Magical floating orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
      </div>
    </div>
  )
}