"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Meteors } from '@/components/ui/meteors'
import { Confetti } from '@/components/ui/confetti'
import { Download, Send } from 'lucide-react'

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showConfetti, setShowConfetti] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleDownloadCV = () => {
    setShowConfetti(true)
    // Handle CV download here
    console.log('CV download triggered')
  }

  return (
    <div className="text-white p-8 max-w-4xl mx-auto relative">
      <Confetti trigger={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-gray-300">
          Let's discuss your next project or just say hello!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="relative border-blue-500/20 bg-gray-900/30 overflow-hidden">
          <Meteors number={20} />
          <CardHeader>
            <CardTitle className="text-blue-300">Send Message</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                variant="shine"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info & CV Download */}
        <div className="space-y-6">
          <Card className="border-blue-500/20 bg-gray-900/30">
            <CardHeader>
              <CardTitle className="text-blue-300">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">hs.nahin430@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Available for remote work worldwide</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Response Time</h3>
                <p className="text-gray-300">Usually within 24 hours</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gray-900/30">
            <CardHeader>
              <CardTitle className="text-blue-300">Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Download my resume to learn more about my experience and skills.
              </p>
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                className="w-full border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gray-900/30">
            <CardHeader>
              <CardTitle className="text-blue-300">Let's Work Together</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a frontend developer for your team or want to discuss 
                a freelance project, I'd love to hear from you.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>✓ Frontend Development</p>
                <p>✓ React & Next.js Applications</p>
                <p>✓ UI/UX Implementation</p>
                <p>✓ Performance Optimization</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}