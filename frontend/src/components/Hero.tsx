'use client'

import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, ChevronDown, Download, ExternalLink } from 'lucide-react'

const TYPING_WORDS = [
  'Future Engineer',
  'Full-Stack Developer',
  'Problem Solver',
  'Tech Innovator',
  'Open Source Contributor',
]

function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause)
        } else {
          setCharIndex((c) => c + 1)
        }
      } else {
        setText(current.substring(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((w) => (w + 1) % words.length)
          setCharIndex(0)
        } else {
          setCharIndex((c) => c - 1)
        }
      }
    }, isDeleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words, speed, pause])

  return text
}

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full opacity-20 animate-float"
      style={style}
    />
  )
}

export default function Hero() {
  const typedText = useTypingEffect(TYPING_WORDS)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{x: number; y: number; vx: number; vy: number; size: number; opacity: number}> = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300 font-mono">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-responsive-xl font-black leading-tight mb-4 animate-slide-up">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text">Alex Martin</span>
        </h1>

        {/* Typing animation */}
        <div className="flex items-center justify-center gap-2 mb-6 h-12">
          <span className="font-mono text-xl sm:text-2xl text-blue-400 font-semibold">
            {typedText}
          </span>
          <span className="w-0.5 h-7 bg-blue-400 animate-pulse" />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          Passionate engineering student building elegant solutions to complex problems.
          Specializing in full-stack development, data engineering, and system architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            <ExternalLink size={18} />
            View Projects
          </button>
          <a href="/cv.pdf" download className="btn-outline">
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 animate-fade-in">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="p-2 rounded-lg glass-card group-hover:border-blue-500/30 transition-all duration-300 group-hover:glow-blue">
                <Icon size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-500 font-mono">scroll down</span>
        <ChevronDown size={20} className="text-blue-400" />
      </div>
    </section>
  )
}
