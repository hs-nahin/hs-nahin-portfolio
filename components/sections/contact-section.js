'use client'

import { useState, useEffect } from 'react'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { gsap } from 'gsap'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hs.nahin430@gmail.com',
    href: 'mailto:hs.nahin430@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 123 456 789',
    href: 'tel:+880123456789'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#'
  }
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/hs-nahin', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/hasnat-shahriyar', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/hs.nahin', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/hs_nahin', label: 'Twitter' },
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
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.2,
        ease: 'back.out(1.7)',
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-primary/20 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Container */}
        <div className="contact-container grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="contact-card p-8 glass-effect hover-lift">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background/50 border-primary/20 focus:border-primary/50"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background/50 border-primary/20 focus:border-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/50"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="contact-card p-8 glass-effect hover-lift">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="contact-card p-8 glass-effect hover-lift">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </Card>

            {/* Availability */}
            <Card className="contact-card p-8 glass-effect hover-lift bg-gradient-to-br from-primary/5 to-purple/5">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Build Something Great</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently available for new projects and collaborations. Whether you're a startup 
                looking to build your first product or an established company wanting to modernize 
                your web presence, I'm here to help.
              </p>
              <Badge className="bg-green-500/10 text-green-600 border border-green-500/20">
                Available for Projects
              </Badge>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}