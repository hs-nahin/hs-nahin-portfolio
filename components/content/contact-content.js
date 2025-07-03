'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Download, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { Input } from '../ui/input'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hs.nahin430@gmail.com',
    href: 'mailto:hs.nahin430@gmail.com',
    primary: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+8801762999402',
    href: 'tel:+8801762999402',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
  },
]

const socialLinks = [
  { 
    icon: () => (
      <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ), 
    href: 'https://github.com/hs-nahin', 
    label: 'GitHub' 
  },
  { 
    icon: () => (
      <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ), 
    href: 'https://www.linkedin.com/in/hs-nahin/', 
    label: 'LinkedIn' 
  },
  { 
    icon: () => (
      <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
      </svg>
    ), 
    href: 'https://twitter.com/hs_nahin', 
    label: 'X (Twitter)' 
  },
]

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
<<<<<<< HEAD
    
    // Validate form
=======

>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
<<<<<<< HEAD
      // Simulate form submission delay
=======
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
<<<<<<< HEAD

      // Reset success state after 3 seconds
=======
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      setIsSubmitting(false)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
<<<<<<< HEAD
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
=======
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1fedkbaLSzHHWj3-XGMLSKkKhHhLGKCX6/view?usp=sharing', '_blank')
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
  }

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1fedkbaLSzHHWj3-XGMLSKkKhHhLGKCX6/view?usp=sharing', '_blank')
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">Get In Touch</h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Let's discuss your next project or explore opportunities to work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
<<<<<<< HEAD
          {/* Contact Form - Redesigned without Card */}
=======
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
          <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center">
              <span className="text-primary mr-2">//</span>
              Send Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <CheckCircle className="w-12 sm:w-16 h-12 sm:h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
<<<<<<< HEAD
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
                      className="w-full"
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
                      className="w-full"
                    />
=======
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="w-full" />
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
                  </div>
                </div>
                <div>
<<<<<<< HEAD
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
                    className="w-full"
                  />
=======
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                  <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="Project discussion, collaboration, etc." className="w-full" />
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
                </div>
                <div>
<<<<<<< HEAD
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] w-full resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
=======
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} className="min-h-[120px] w-full resize-none" placeholder="Tell me about your project or how I can help..." />
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full shine-effect">
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
          </div>

          <div className="space-y-6">
<<<<<<< HEAD
            {/* Contact Details */}
=======
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center">
                <span className="text-primary mr-2">//</span>
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon
                  return (
                    <a key={info.label} href={info.href} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                      <div className={`p-2 rounded-lg ${info.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
<<<<<<< HEAD
                        <div className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base">
                          {info.label}
                        </div>
=======
                        <div className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base">{info.label}</div>
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
                        <div className="text-xs sm:text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

<<<<<<< HEAD
            {/* Download CV Button */}
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">//</span>
                Resume
              </h2>
              <Button
                onClick={handleDownloadCV}
                className="w-full shine-effect bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
=======
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">//</span>
                Resume / CV
              </h2>
              <Button onClick={handleDownloadCV} type="button" disabled={isSubmitting} className="w-full shine-effect">
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

<<<<<<< HEAD
            {/* Social Links - Redesigned without Card */}
=======
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center">
                <span className="text-primary mr-2">//</span>
                Connect Online
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
<<<<<<< HEAD
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-transparent hover:border-primary hover:bg-primary/20 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <IconComponent className="mb-2 group-hover:text-primary transition-colors" />
                      <span className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors text-center">
                        {social.label}
                      </span>
=======
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-transparent hover:border-primary hover:bg-primary/20 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary">
                      <IconComponent className="mb-2 group-hover:text-primary transition-colors" />
                      <span className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors text-center">{social.label}</span>
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
                    </a>
                  )
                })}
              </div>
            </div>

<<<<<<< HEAD
            {/* Availability */}
=======
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">//</span>
                Availability
              </h2>
              <div className="space-y-3">
<<<<<<< HEAD
                <Badge className="bg-green-500 hover:bg-green-600">
                  Available for Projects
                </Badge>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Currently accepting new projects and collaborations. Response time: 24-48
                  hours.
=======
                <Badge className="bg-green-500 hover:bg-green-600">Available for Projects</Badge>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Currently accepting new projects and collaborations. Response time: 24-48 hours.
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
                </p>
              </div>
            </div>

<<<<<<< HEAD
            {/* Work Approach */}
=======
>>>>>>> 7ab7d04 (updated and fixed responsiveness and redesigned the download cv button)
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">//</span>
                Work Approach
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                <p>
                  I believe in building long-term partnerships with clients through transparent communication, quality deliverables, and continuous collaboration.
                </p>
                <p>
                  Whether you're a startup looking to build your first product or an established company wanting to modernize your web presence, I'm here to help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}