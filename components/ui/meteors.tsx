"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface MeteorsProps {
  number?: number
}

export function Meteors({ number = 20 }: MeteorsProps) {
  const [meteors, setMeteors] = useState<Array<{ id: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const meteorArray = Array.from({ length: number }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }))
    setMeteors(meteorArray)
  }, [number])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rounded-full bg-blue-500 shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: Math.random() * -100 + 'px',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            x: [0, -400],
            y: [0, 400],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 10 + 5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}