'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
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
  { icon: Github, href: 'https://github.com/hs-nahin', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/hs-nahin/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/hs_nahin', label: 'Twitter' },
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
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      setIsSubmitting(false)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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
          {/* Contact Form - Redesigned without Card */}
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
                    className="w-full"
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
                    className="min-h-[120px] w-full resize-none"
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
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center">
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
                      <div
                        className={`p-2 rounded-lg ${
                          info.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base">
                          {info.label}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center">
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
                      className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-transparent hover:border-primary hover:bg-primary/20 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 mb-2 group-hover:text-primary transition-colors" />
                      <span className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">//</span>
                Availability
              </h2>
              <div className="space-y-3">
                <Badge className="bg-green-500 hover:bg-green-600">
                  Available for Projects
                </Badge>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Currently accepting new projects and collaborations. Response time: 24-48
                  hours.
                </p>
              </div>
            </div>

            {/* Work Approach */}
            <div className="p-4 sm:p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                <span className="text-primary mr-2">//</span>
                Work Approach
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                <p>
                  I believe in building long-term partnerships with clients through transparent
                  communication, quality deliverables, and continuous collaboration.
                </p>
                <p>
                  Whether you're a startup looking to build your first product or an established
                  company wanting to modernize your web presence, I'm here to help bring your
                  vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}