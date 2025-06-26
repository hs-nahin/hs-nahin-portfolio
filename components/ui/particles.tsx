"use client"

import { useEffect, useRef } from "react"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
}

export function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      translateX: number
      translateY: number
      size: number
      alpha: number
      targetAlpha: number
      dx: number
      dy: number
      magnetism: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles.length = 0
      for (let i = 0; i < quantity; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          translateX: 0,
          translateY: 0,
          size: Math.random() * 2 + 0.1,
          alpha: 1,
          targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
          magnetism: 0.1 + Math.random() * 4,
        })
      }
    }

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.dx + vx
        particle.y += particle.dy + vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        particle.alpha += (particle.targetAlpha - particle.alpha) * 0.02

        context.beginPath()
        context.arc(
          particle.x + particle.translateX,
          particle.y + particle.translateY,
          particle.size,
          0,
          2 * Math.PI
        )
        context.fillStyle = `${color}${Math.floor(particle.alpha * 255).toString(16).padStart(2, "0")}`
        context.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [quantity, staticity, ease, refresh, color, vx, vy])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        pointerEvents: "none",
      }}
    />
  )
}