'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react'
import { gsap } from 'gsap'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hs.nahin430@gmail.com',
    href: 'mailto:hs.nahin430@gmail.com',
    primary: true
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
  { icon: Twitter, href: 'https://twitter.com/hs_nahin', label: 'Twitter' },
]

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    gsap.fromTo('.contact-section', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out'
      }
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="contact-section mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-4">Get In Touch</h1>
        <p className="text-muted-foreground text-lg">
          Let's discuss your next project or explore opportunities to work together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="contact-section p-6 professional-hover">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <span className="text-primary mr-2">//</span>
            Send Message
          </h2>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px]"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full shine-effect"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          )}
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Details */}
          <Card className="contact-section p-6 professional-hover">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="text-primary mr-2">//</span>
              Contact Information
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className={`p-2 rounded-lg ${info.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {info.label}
                      </div>
                      <div className="text-sm text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </Card>

          {/* Social Links */}
          <Card className="contact-section p-6 professional-hover">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="text-primary mr-2">//</span>
              Connect Online
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <IconComponent className="w-6 h-6 mb-2 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                )
              })}
            </div>
          </Card>

          {/* Availability */}
          <Card className="contact-section p-6 professional-hover">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-primary mr-2">//</span>
              Availability
            </h2>
            <div className="space-y-3">
              <Badge className="bg-green-500 hover:bg-green-600">
                Available for Projects
              </Badge>
              <p className="text-sm text-muted-foreground">
                Currently accepting new projects and collaborations. 
                Response time: 24-48 hours.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}