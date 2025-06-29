'use client'

import { useState, useEffect } from 'react'
import { Send, Mail, Phone, MapPin, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Meteors } from '@/components/ui/meteors'
import { Confetti } from '@/components/ui/confetti'
import { gsap } from 'gsap'

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // GSAP animations
    gsap.fromTo('.contact-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )

    gsap.fromTo('.contact-form', 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
    )

    gsap.fromTo('.contact-info', 
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setShowSuccess(true)
    setShowConfetti(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
    
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      {/* Header */}
      <div className="contact-header mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Ready to discuss your next project? As a senior frontend developer with 8+ years of experience, 
          I'm here to help bring your vision to life with cutting-edge web technologies.
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="outline">Available for Projects</Badge>
          <Badge variant="outline">Remote Friendly</Badge>
          <Badge variant="outline">Quick Response</Badge>
        </div>
      </div>

      {/* Success Alert */}
      {showSuccess && (
        <Alert className="mb-8 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <Send className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            Thank you for your message! I'll get back to you within 24 hours.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="contact-form p-8 magic-card relative overflow-hidden">
          <Meteors number={20} />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company/Organization
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[150px]"
                  placeholder="Tell me about your project, timeline, and how I can help..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white interactive-hover"
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </Card>

        {/* Contact Information */}
        <div className="contact-info space-y-8">
          {/* Contact Details */}
          <Card className="p-8 magic-card">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hs.nahin430@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+880 123 456 789</p>
                  <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM (GMT+6)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  <p className="text-sm text-muted-foreground">Open to remote work globally</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-muted-foreground">Currently Available</p>
                  <p className="text-sm text-muted-foreground">Ready for new projects</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Why Work With Me */}
          <Card className="p-8 magic-card">
            <h3 className="text-xl font-bold mb-6">Why Choose Me?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">8+ Years of Experience</p>
                  <p className="text-sm text-muted-foreground">Senior-level expertise in modern web development</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">React & Next.js Specialist</p>
                  <p className="text-sm text-muted-foreground">Deep expertise in modern React ecosystem</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Performance Focused</p>
                  <p className="text-sm text-muted-foreground">Optimized, scalable, and maintainable code</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Clear Communication</p>
                  <p className="text-sm text-muted-foreground">Regular updates and transparent workflow</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 magic-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project requirements and how my 8+ years of frontend expertise 
              can help bring your vision to life. I'm committed to delivering exceptional results 
              that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white interactive-hover">
                Schedule a Call
              </Button>
              <Button variant="outline" className="interactive-hover">
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}