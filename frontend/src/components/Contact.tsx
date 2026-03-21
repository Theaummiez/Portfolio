'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageSquare, Send, MapPin, Github, Linkedin, Twitter, Phone } from 'lucide-react'
import toast from 'react-hot-toast'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alex.martin@email.com',
    href: 'mailto:alex.martin@email.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Paris, France',
    href: '#',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+33 6 XX XX XX XX',
    href: 'tel:+33600000000',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-white' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success('Message sent! I\'ll get back to you soon. 🚀')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch {
      toast.error('Oops! Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <MessageSquare size={16} className="text-blue-400" />
            <span className="text-sm font-mono text-blue-400">Get In Touch</span>
          </div>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you have a project idea, job opportunity, or just want to chat about tech —
            my inbox is always open!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${info.bg} flex items-center justify-center flex-shrink-0`}>
                      <info.icon size={18} className={info.color} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Find me online
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 ${color} hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Available for opportunities</span>
              </div>
              <p className="text-xs text-gray-400">
                Currently looking for internships, full-time positions, and exciting freelance projects.
                Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                >
                  <option value="" disabled>Select a subject...</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="internship">Internship</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="just-saying-hi">Just saying hi! 👋</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
