'use client'

import { useEffect } from 'react'
import { Code2, Zap, Target, Users, Sparkles, Heart, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { gsap } from 'gsap'

const achievements = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Crafting maintainable, scalable code that stands the test of time with modern best practices.',
    color: 'from-purple-500 via-purple-600 to-blue-600',
    glow: 'shadow-purple-500/25'
  },
  {
    icon: Zap,
    title: 'Performance Magic',
    description: 'Optimizing applications for lightning-fast performance and exceptional user experiences.',
    color: 'from-blue-500 via-cyan-500 to-teal-500',
    glow: 'shadow-blue-500/25'
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Transforming complex challenges into elegant solutions with innovative thinking.',
    color: 'from-pink-500 via-rose-500 to-red-500',
    glow: 'shadow-pink-500/25'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Leading cross-functional teams to deliver exceptional products that exceed expectations.',
    color: 'from-green-500 via-emerald-500 to-teal-500',
    glow: 'shadow-green-500/25'
  }
]

export function AboutSection() {
  useEffect(() => {
    gsap.fromTo('.about-card', 
      { opacity: 0, y: 80, scale: 0.8, rotateY: -15 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: 0,
        duration: 1.2, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-cards',
          start: 'top 80%'
        }
      }
    )

    gsap.fromTo('.about-stats', 
      { opacity: 0, scale: 0.5, y: 50 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        duration: 1, 
        stagger: 0.1, 
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%'
        }
      }
    )
  }, [])

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Magical background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Magical section header */}
        <div className="text-center mb-24">
          <Badge className="mb-8 px-6 py-3 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 border border-purple-400/30 text-purple-200 backdrop-blur-xl">
            <Heart className="w-4 h-4 mr-2 animate-pulse" />
            About Me
            <Sparkles className="w-4 h-4 ml-2 animate-bounce" />
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Passionate Creator
          </h2>
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-4xl mx-auto leading-relaxed">
            With over 8 years of experience in frontend development, I've evolved from a curious developer 
            into a senior engineer who architects magical web experiences that inspire and delight users.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          {/* Left column - Story */}
          <div className="space-y-10">
            <Card className="p-10 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
                My Journey
              </h3>
              <div className="space-y-6 text-purple-200/80 relative z-10">
                <p className="leading-relaxed text-lg">
                  I started my development journey with a curiosity about how websites work. What began 
                  as simple HTML and CSS experiments quickly evolved into a passion for creating 
                  interactive, magical web applications.
                </p>
                <p className="leading-relaxed text-lg">
                  Over the years, I've specialized in React and its ecosystem, mastering modern 
                  development practices including TypeScript, Next.js, and advanced state management. 
                  I believe in writing clean, maintainable code that scales with business needs.
                </p>
                <p className="leading-relaxed text-lg">
                  Today, I focus on building high-performance web applications that provide exceptional 
                  user experiences while maintaining code quality and development efficiency.
                </p>
              </div>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                What Drives Me
              </h3>
              <div className="space-y-6 text-purple-200/80 relative z-10">
                <p className="leading-relaxed text-lg">
                  I'm passionate about the intersection of technology and user experience. Every line 
                  of code I write is aimed at creating something meaningful that solves real problems 
                  and delights users.
                </p>
                <p className="leading-relaxed text-lg">
                  Continuous learning is at the core of my approach. The web development landscape 
                  evolves rapidly, and I stay current with emerging technologies and best practices 
                  to deliver cutting-edge solutions.
                </p>
              </div>
            </Card>
          </div>

          {/* Right column - Achievements */}
          <div className="about-cards space-y-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={achievement.title} className="about-card p-8 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-105 group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-2xl ${achievement.glow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-4 text-purple-200 group-hover:text-white transition-colors duration-500">
                        {achievement.title}
                      </h4>
                      <p className="text-purple-200/80 leading-relaxed text-lg">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Magical stats */}
        <div className="stats-grid grid md:grid-cols-4 gap-8">
          {[
            { number: '8+', label: 'Years Experience', icon: Star },
            { number: '50+', label: 'Projects Completed', icon: Code2 },
            { number: '12+', label: 'Technologies', icon: Zap },
            { number: '100%', label: 'Client Satisfaction', icon: Heart }
          ].map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={stat.label} className="about-stats p-8 text-center bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-500" />
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-purple-200/80 font-medium">{stat.label}</div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}