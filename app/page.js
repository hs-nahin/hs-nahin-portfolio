'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ContactSection } from '@/components/sections/contact-section'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // Advanced page load animation
    const tl = gsap.timeline()
    
    tl.fromTo('.page-loader', 
      { opacity: 1 },
      { opacity: 0, duration: 0.5, ease: 'power2.out' }
    )
    .fromTo('.main-content', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    // Scroll-triggered animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="page-loader fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
      </div>
    )
  }

  return (
    <div className="main-content">
      <Navigation activeSection={activeSection} />
      
      <main className="relative">
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
    </div>
  )
}