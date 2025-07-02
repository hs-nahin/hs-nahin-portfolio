'use client'

import { useState, useEffect } from 'react'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Sparkles, Heart } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Meteors } from '@/components/ui/meteors'
import { gsap } from 'gsap'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hs.nahin430@gmail.com',
    href: 'mailto:hs.nahin430@gmail.com',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 123 456 789',
    href: 'tel:+880123456789',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
    color: 'from-green-500 to-emerald-500'
  }
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/hs-nahin', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
  { icon: Linkedin, href: 'https://linkedin.com/in/hasnat-shahriyar', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
  { icon: Facebook, href: 'https://facebook.com/hs.nahin', label: 'Facebook', color: 'from-blue-500 to-blue-700' },
  { icon: Twitter, href: 'https://twitter.com/hs_nahin', label: 'Twitter', color: 'from-cyan-500 to-blue-500' },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    gsap.fromTo('.contact-card', 
      { opacity: 0, y: 100, scale: 0.8, rotateY: -15 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: 0,
        duration: 1.2, 
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 80%'
        }
      }
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Magical background with meteors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <Meteors number={20} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Magical section header */}
        <div className="text-center mb-24">
          <Badge className="mb-8 px-6 py-3 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 border border-purple-400/30 text-purple-200 backdrop-blur-xl">
            <Heart className="w-4 h-4 mr-2 animate-pulse" />
            Get In Touch
            <Sparkles className="w-4 h-4 ml-2 animate-bounce" />
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Let's Create Magic
          </h2>
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you and create something extraordinary together.
          </p>
        </div>

        {/* Contact container */}
        <div className="contact-container grid lg:grid-cols-2 gap-20">
          {/* Contact form */}
          <Card className="contact-card p-10 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium mb-3 text-purple-200">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border-purple-500/30 focus:border-purple-400/60 text-purple-100 placeholder:text-purple-300/50 backdrop-blur-xl h-12 text-lg"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-medium mb-3 text-purple-200">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border-purple-500/30 focus:border-purple-400/60 text-purple-100 placeholder:text-purple-300/50 backdrop-blur-xl h-12 text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg font-medium mb-3 text-purple-200">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[150px] bg-slate-800/50 border-purple-500/30 focus:border-purple-400/60 text-purple-100 placeholder:text-purple-300/50 backdrop-blur-xl text-lg"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white py-4 text-lg group shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  {isSubmitting ? (
                    <div className="flex items-center justify-center relative z-10">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Sending Magic...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center relative z-10">
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact information */}
          <div className="space-y-10">
            {/* Contact details */}
            <Card className="contact-card p-10 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center space-x-6 p-6 rounded-2xl hover:bg-purple-600/10 transition-all duration-500 group"
                      >
                        <div className={`p-4 bg-gradient-to-br ${info.color} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-purple-200 group-hover:text-white transition-colors">{info.label}</p>
                          <p className="text-purple-200/80 text-lg">{info.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            {/* Social links */}
            <Card className="contact-card p-10 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 via-transparent to-blue-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-6 rounded-2xl hover:bg-purple-600/10 transition-all duration-500 group"
                      >
                        <div className={`p-3 bg-gradient-to-br ${social.color} rounded-xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-lg text-purple-200 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="contact-card p-10 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-blue-600/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Let's Build Something Extraordinary
                </h3>
                <p className="text-purple-200/80 mb-8 leading-relaxed text-lg">
                  I'm currently available for new projects and collaborations. Whether you're a startup 
                  looking to build your first product or an established company wanting to modernize 
                  your web presence, I'm here to help create something magical.
                </p>
                <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 px-4 py-2 text-lg">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Available for Projects
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}