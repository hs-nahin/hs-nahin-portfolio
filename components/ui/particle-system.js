'use client'

import { useEffect, useState } from 'react'

export function ParticleSystem() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
      setParticles(newParticles)
    }

    createParticles()

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX
        let newY = particle.y + particle.speedY

        // Wrap around screen edges
        if (newX > window.innerWidth) newX = 0
        if (newX < 0) newX = window.innerWidth
        if (newY > window.innerHeight) newY = 0
        if (newY < 0) newY = window.innerHeight

        return {
          ...particle,
          x: newX,
          y: newY,
        }
      }))
    }

    const interval = setInterval(animateParticles, 50)
    
    // Handle window resize
    const handleResize = () => {
      createParticles()
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  )
}