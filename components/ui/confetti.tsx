"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
}

interface ConfettiProps {
  trigger: boolean
  onComplete?: () => void
}

export function Confetti({ trigger, onComplete }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (!trigger) return

    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: typeof window !== 'undefined' ? window.innerWidth / 2 : 400,
      y: typeof window !== 'undefined' ? window.innerHeight / 2 : 300,
      vx: (Math.random() - 0.5) * 20,
      vy: (Math.random() - 0.5) * 20 - 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
    }))

    setParticles(newParticles)

    const timer = setTimeout(() => {
      setParticles([])
      onComplete?.()
    }, 3000)

    return () => clearTimeout(timer)
  }, [trigger, onComplete])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-bounce"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            transform: `translate(${particle.vx * 10}px, ${particle.vy * 10}px)`,
            animation: `confetti-fall 3s ease-out forwards`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}