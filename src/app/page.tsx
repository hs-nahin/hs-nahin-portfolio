import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Contact />
    </main>
  )
}