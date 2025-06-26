import { Terminal } from '@/components/terminal'
import { Particles } from '@/components/ui/particles'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-500 relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#3b82f6"
        refresh
      />
      <div className="relative z-10 p-4 md:p-8">
        <Terminal />
      </div>
      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm text-white/70 z-20">
        © 2025 Hasnat Shahriyar. Built in a terminal. Deployed with love.
      </footer>
    </main>
  )
}