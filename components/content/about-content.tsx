"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Facebook, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function AboutContent() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:hasnat@example.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/hs-nahin', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/hasnat-shahriyar', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/hasnat.shahriyar', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/hasnat_shahriyar', label: 'Twitter' },
  ]

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="relative inline-block mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Hasnat Shahriyar"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 aurora-text"
        >
          Hasnat Shahriyar
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-blue-400 mb-4 typing-animation"
        >
          Frontend Web Developer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-8"
        >
          Crafting clean, fast, and interactive web interfaces with React, Next.js, and Tailwind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center space-x-4 flex-wrap gap-4"
        >
          {socialLinks.map((social, index) => (
            <Button
              key={social.label}
              variant="outline"
              size="icon"
              asChild
              className="rounded-full border-blue-500 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-blue-400" />
              </a>
            </Button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="prose prose-invert max-w-none"
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I'm a passionate Frontend Web Developer with a keen eye for creating beautiful, 
          functional, and user-friendly web applications. With expertise in modern web 
          technologies, I specialize in building responsive and interactive interfaces 
          that provide exceptional user experiences.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          My journey in web development started with a curiosity about how websites work, 
          and it has evolved into a passion for creating digital solutions that make a 
          difference. I enjoy working with cutting-edge technologies and am always eager 
          to learn and adapt to new trends in the ever-evolving world of web development.
        </p>
        <p className="text-gray-300 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, contributing 
          to open-source projects, or sharing knowledge with the developer community.
        </p>
      </motion.div>
    </div>
  )
}