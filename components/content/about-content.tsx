"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Facebook, Twitter, Mail } from 'lucide-react'

export function AboutContent() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Hasnat Shahriyar'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  const spinningTexts = [
    'Web Developer',
    'UI Crafter', 
    'Frontend Enthusiast',
    'React Specialist'
  ]

  return (
    <div className="text-white p-8 max-w-4xl mx-auto">
      {/* Header with typewriter effect */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl text-blue-300 mb-2">Frontend Web Developer</p>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Crafting clean, fast, and interactive web interfaces with React, Next.js, and Tailwind
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        {/* Profile Image with Spinning Text */}
        <div className="relative">
          <div className="relative w-64 h-64">
            {/* Spinning text around image */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
              {spinningTexts.map((text, index) => (
                <div
                  key={text}
                  className="absolute text-sm font-mono text-blue-400"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${index * 90}deg) translateY(-140px) rotate(-${index * 90}deg)`,
                    transformOrigin: '0 140px',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
            
            {/* Profile Image */}
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Hasnat Shahriyar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="flex-1 space-y-6">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate frontend developer with a keen eye for design and user experience. 
              I specialize in building modern, responsive web applications using cutting-edge technologies 
              like React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in web development started with a curiosity about how websites work, 
              and it has evolved into a passion for creating digital experiences that are both 
              beautiful and functional.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-300">Connect with me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="justify-start space-x-3 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10"
                asChild
              >
                <a href="mailto:hs.nahin430@gmail.com">
                  <Mail size={18} />
                  <span>hs.nahin430@gmail.com</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="justify-start space-x-3 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10"
                asChild
              >
                <a href="https://github.com/hs-nahin" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="justify-start space-x-3 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="justify-start space-x-3 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Facebook size={18} />
                  <span>Facebook</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="justify-start space-x-3 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 sm:col-span-2"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter size={18} />
                  <span>Twitter/X</span>
                </a>
              </Button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              variant="shine"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}