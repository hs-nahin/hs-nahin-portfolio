'use client'

import { useEffect, useState } from 'react'

interface Meteor {
  id: number
  left: string
  animationDelay: string
  animationDuration: string
}

export function Meteors({ number = 20 }: { number?: number }) {
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(() => {
    const meteorArray: Meteor[] = []
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
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: 0,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        >
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[1px] w-[50px] -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  )
}