'use client'

import { useEffect, useState } from 'react'

export function Meteors({ number = 20 }) {
  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    const meteorArray = []
    for (let i = 0; i < number; i++) {
      meteorArray.push({
        id: i,
        left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
      })
    }
    setMeteors(meteorArray)
  }, [number])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-transparent shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor"
          style={{
            top: 0,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        >
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[1px] w-[50px] -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-400 via-pink-400 to-transparent" />
        </span>
      ))}
    </div>
  )
}