'use client'

import { useEffect } from 'react'
import { Code2, Zap, Target, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { gsap } from 'gsap'

const achievements = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following industry best practices.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed, accessibility, and exceptional user experience.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Analyzing complex requirements and delivering innovative technical solutions.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams to deliver successful projects.',
    color: 'from-orange-500 to-red-500'
  }
]

export function AboutSection() {
  useEffect(() => {
    gsap.fromTo('.about-card', 
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.about-cards',
          start: 'top 80%'
        }
      }
    )
  }, [])

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-primary/20 text-primary">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Passionate Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With over 8 years of experience in frontend development, I've evolved from a curious developer 
            into a senior engineer who architects scalable web applications. My journey spans from traditional 
            web development to modern React ecosystems, always staying ahead of industry trends.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <Card className="p-8 glass-effect hover-lift">
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  I started my development journey with a curiosity about how websites work. What began 
                  as simple HTML and CSS experiments quickly evolved into a passion for creating 
                  interactive, dynamic web applications.
                </p>
                <p className="leading-relaxed">
                  Over the years, I've specialized in React and its ecosystem, mastering modern 
                  development practices including TypeScript, Next.js, and advanced state management. 
                  I believe in writing clean, maintainable code that scales with business needs.
                </p>
                <p className="leading-relaxed">
                  Today, I focus on building high-performance web applications that provide exceptional 
                  user experiences while maintaining code quality and development efficiency.
                </p>
              </div>
            </Card>

            <Card className="p-8 glass-effect hover-lift">
              <h3 className="text-2xl font-bold mb-6 gradient-text">What Drives Me</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I'm passionate about the intersection of technology and user experience. Every line 
                  of code I write is aimed at creating something meaningful that solves real problems 
                  and delights users.
                </p>
                <p className="leading-relaxed">
                  Continuous learning is at the core of my approach. The web development landscape 
                  evolves rapidly, and I stay current with emerging technologies and best practices 
                  to deliver cutting-edge solutions.
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Achievements */}
          <div className="about-cards space-y-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={achievement.title} className="about-card p-6 glass-effect hover-lift group">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: '8+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '12+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat) => (
            <Card key={stat.label} className="p-6 text-center glass-effect hover-lift">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}