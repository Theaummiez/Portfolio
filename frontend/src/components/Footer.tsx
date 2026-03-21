'use client'

import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react'
import { ArrowUp } from 'lucide-react'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const techUsed = ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Tailwind CSS']

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative py-16 border-t border-gray-800/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />

      <div className="section-container relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={22} className="text-blue-400" />
              <span className="font-mono font-bold text-lg gradient-text">{'<Portfolio />'}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building the future, one commit at a time. Passionate about engineering
              elegant solutions to complex problems.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Mail, href: 'mailto:alex.martin@email.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {techUsed.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Open source & available on{' '}
              <a href="https://github.com" className="text-blue-400 hover:underline">GitHub</a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-800/50 gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> by{' '}
            <span className="text-gray-300 font-medium">Alex Martin</span>
            {' '}· {new Date().getFullYear()}
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full glass-card text-gray-400 hover:text-white hover:border-blue-500/30 transition-all duration-300 text-sm"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
