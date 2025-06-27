'use client'

import { useEffect, useState } from 'react'
import { Github, Mail, Linkedin, Facebook, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Confetti } from '@/components/ui/confetti'

export function AboutContent() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hasnat Shahriyar"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  const handleDownloadCV = () => {
    setShowConfetti(true)
    // Simulate CV download
    const link = document.createElement('a')
    link.href = '#'
    link.download = 'Hasnat_Shahriyar_CV.pdf'
    link.click()
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      {/* Header */}
      <div className="text-center mb-12">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-spin">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Hasnat Shahriyar"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name with Typewriter Effect */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="aurora-text">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in">
          Frontend Web Developer
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up">
          Crafting clean, fast, and interactive web interfaces with React, Next.js, and Tailwind.
          Passionate about creating exceptional user experiences through modern web technologies.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Download CV
          </Button>
          <Button
            variant="outline"
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Contact Icons */}
      <div className="flex justify-center space-x-6 mb-12">
        <a
          href="mailto:hs.nahin430@gmail.com"
          className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <Mail className="w-6 h-6 text-primary" />
        </a>
        <a
          href="https://github.com/hs-nahin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <Github className="w-6 h-6 text-primary" />
        </a>
        <a
          href="https://linkedin.com/in/hasnat-shahriyar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <Linkedin className="w-6 h-6 text-primary" />
        </a>
        <a
          href="https://facebook.com/hs.nahin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <Facebook className="w-6 h-6 text-primary" />
        </a>
        <a
          href="https://twitter.com/hs_nahin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <Twitter className="w-6 h-6 text-primary" />
        </a>
      </div>

      {/* About Section */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate frontend developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in modern web technologies, I transform ideas 
              into interactive, responsive, and performant web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development started with curiosity and has evolved into a professional 
              pursuit of excellence. I believe in writing clean, maintainable code and staying updated 
              with the latest industry trends and best practices.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What I Do</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Responsive Web Design</li>
              <li>• React & Next.js Development</li>
              <li>• UI/UX Implementation</li>
              <li>• Performance Optimization</li>
              <li>• Modern CSS & Animations</li>
              <li>• API Integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2025 Hasnat Shahriyar. Built with ❤️ using Next.js, Tailwind CSS, shadcn, and Magic UI.
        </p>
      </footer>
    </div>
  )
}