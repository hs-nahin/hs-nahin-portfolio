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
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor"
          style={{
            top: 0,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        />
      ))}
    </>
  )
}