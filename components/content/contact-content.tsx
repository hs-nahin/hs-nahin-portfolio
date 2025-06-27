"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Meteors } from '@/components/ui/meteors'
import { Confetti } from '@/components/ui/confetti'
import { Download, Send } from 'lucide-react'
import { useState } from 'react'

export function ContactContent() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleDownloadCV = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
    // In a real app, this would trigger the actual CV download
    console.log('Downloading CV...')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="space-y-8 relative">
      <Meteors number={20} />
      {showConfetti && <Confetti />}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-blue-400 mb-4">Let's Work Together</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Let's connect and discuss how we can bring your ideas to life.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="p-8 bg-gray-800/50 border-gray-700 relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  placeholder="Your name"
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
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={handleDownloadCV}
                className="flex-1 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>
          </form>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center"
      >
        <p className="text-gray-400 mb-4">Or reach out directly:</p>
        <div className="flex justify-center space-x-8 text-sm">
          <a 
            href="mailto:hasnat@example.com" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            hasnat@example.com
          </a>
          <a 
            href="tel:+1234567890" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            +1 (234) 567-890
          </a>
        </div>
      </motion.div>
    </div>
  )
}