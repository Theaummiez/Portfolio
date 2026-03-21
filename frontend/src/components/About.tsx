'use client'

import { useInView } from 'react-intersection-observer'
import { Code2, Cpu, Database, Globe, Award, BookOpen } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Dev',
    description: 'Building end-to-end applications with modern tech stacks',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Systems Thinking',
    description: 'Designing scalable architectures and efficient algorithms',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Working with databases, pipelines, and analytics',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Open Source',
    description: 'Contributing to the community and collaborative projects',
    color: 'from-orange-500 to-amber-500',
  },
]

const stats = [
  { value: '15+', label: 'Projects Completed' },
  { value: '5+', label: 'Technologies Mastered' },
  { value: '2+', label: 'Years Experience' },
  { value: '3', label: 'Internships' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="section-container" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <BookOpen size={16} className="text-blue-400" />
            <span className="text-sm font-mono text-blue-400">About Me</span>
          </div>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Passionate About <span className="gradient-text">Engineering</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A computer engineering student with a deep love for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Photo & Stats */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Profile card */}
            <div className="relative mx-auto max-w-sm">
              <div className="relative glass-card rounded-2xl p-8 gradient-border">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 glow-blue">
                  <span className="text-5xl font-black text-white">A</span>
                </div>

                <h3 className="text-xl font-bold text-white text-center mb-1">Alex Martin</h3>
                <p className="text-blue-400 text-center font-mono text-sm mb-6">Computer Engineering Student</p>

                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4">
                  <Globe size={14} />
                  <span>Paris, France 🇫🇷</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <Award size={14} />
                  <span>École Centrale Paris — Class of 2026</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl glass-card border border-blue-500/30 text-xs font-mono text-blue-400 animate-float">
                🚀 Open to work
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl glass-card border border-purple-500/30 text-xs font-mono text-purple-400 animate-float" style={{ animationDelay: '3s' }}>
                💡 Problem solver
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`glass-card rounded-xl p-4 text-center transition-all duration-500 hover:border-blue-500/30`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text & Highlights */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a <span className="text-blue-400 font-semibold">computer engineering student</span> with
                a passion for building impactful software. I thrive at the intersection of
                theory and practice — from designing distributed systems to crafting elegant user experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently pursuing my engineering degree, I&apos;ve worked on diverse projects spanning
                web development, machine learning, and embedded systems. I believe great engineers
                combine technical excellence with creative problem-solving.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                open source, or mentoring fellow students. I&apos;m always looking for opportunities to
                learn and grow.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                    <item.icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
