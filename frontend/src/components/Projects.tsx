'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, FolderOpen, Star, GitFork } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  long_description: string
  tech_stack: string[]
  github_url: string
  live_url?: string
  image_url?: string
  stars: number
  category: string
  featured: boolean
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'Full-stack data analytics platform with ML-driven insights and real-time dashboards.',
    long_description: 'Built a comprehensive analytics platform that processes millions of data points and provides actionable insights using machine learning models.',
    tech_stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'TensorFlow', 'Docker'],
    github_url: 'https://github.com',
    live_url: 'https://demo.example.com',
    stars: 128,
    category: 'Full-Stack',
    featured: true,
  },
  {
    id: 2,
    title: 'Distributed Task Scheduler',
    description: 'Microservices-based task scheduling system with fault tolerance and auto-scaling.',
    long_description: 'Designed and implemented a distributed task scheduling system capable of handling thousands of concurrent jobs.',
    tech_stack: ['Python', 'Redis', 'Docker', 'Kubernetes', 'RabbitMQ', 'PostgreSQL'],
    github_url: 'https://github.com',
    stars: 89,
    category: 'Backend',
    featured: true,
  },
  {
    id: 3,
    title: 'Smart Campus App',
    description: 'Mobile-first web app for campus management with IoT sensor integration.',
    long_description: 'Developed a smart campus application that integrates IoT sensors for room booking, energy monitoring, and campus navigation.',
    tech_stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'MQTT', 'Tailwind'],
    github_url: 'https://github.com',
    live_url: 'https://demo.example.com',
    stars: 67,
    category: 'Full-Stack',
    featured: true,
  },
  {
    id: 4,
    title: 'Real-Time Collaboration Tool',
    description: 'WebSocket-based collaborative coding environment with live code execution.',
    long_description: 'Built a real-time collaborative editor with syntax highlighting, live execution, and video chat.',
    tech_stack: ['React', 'Node.js', 'WebSocket', 'Docker', 'Monaco Editor'],
    github_url: 'https://github.com',
    stars: 156,
    category: 'Full-Stack',
    featured: false,
  },
  {
    id: 5,
    title: 'ML Model Deployment API',
    description: 'RESTful API for serving ML models with A/B testing and monitoring.',
    long_description: 'Created a production-ready API platform for deploying and monitoring machine learning models.',
    tech_stack: ['Python', 'FastAPI', 'PyTorch', 'Redis', 'Prometheus', 'Docker'],
    github_url: 'https://github.com',
    stars: 94,
    category: 'Backend',
    featured: false,
  },
  {
    id: 6,
    title: 'DevSecOps Pipeline',
    description: 'Automated CI/CD pipeline with integrated security scanning and testing.',
    long_description: 'Built a complete DevSecOps pipeline integrating SAST, DAST, and dependency scanning.',
    tech_stack: ['GitHub Actions', 'Docker', 'Terraform', 'AWS', 'Python', 'Shell'],
    github_url: 'https://github.com',
    stars: 73,
    category: 'DevOps',
    featured: false,
  },
]

const categories = ['All', 'Full-Stack', 'Backend', 'DevOps']

const categoryColors: Record<string, string> = {
  'Full-Stack': 'from-blue-500 to-cyan-500',
  'Backend': 'from-green-500 to-emerald-500',
  'DevOps': 'from-orange-500 to-amber-500',
  'Frontend': 'from-purple-500 to-pink-500',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`project-card glass-card rounded-2xl overflow-hidden gradient-border transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project image / header */}
      <div className={`h-40 bg-gradient-to-br ${categoryColors[project.category] || 'from-blue-500 to-purple-500'} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-dark-900/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FolderOpen size={48} className="text-white/40" />
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-medium">
            ⭐ Featured
          </div>
        )}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-full glass-card text-xs font-medium text-gray-200">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech_stack.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag text-xs">{tech}</span>
          ))}
          {project.tech_stack.length > 4 && (
            <span className="tech-tag text-xs">+{project.tech_stack.length - 4}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span className="flex items-center gap-1">
              <Star size={12} className="text-yellow-400" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={12} />
              {Math.floor(project.stars / 3)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [projects, setProjects] = useState<Project[]>(defaultProjects)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
        if (res.ok) {
          const data = await res.json()
          if (data.length > 0) setProjects(data)
        }
      } catch {
        // Use default projects on error
      }
    }
    fetchProjects()
  }, [])

  const filtered = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  )
  const displayed = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <FolderOpen size={16} className="text-blue-400" />
            <span className="text-sm font-mono text-blue-400">Projects</span>
          </div>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for engineering
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass-card text-gray-400 hover:text-white hover:border-blue-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Show more */}
        {filtered.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
