'use client'

import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

interface TimelineItem {
  type: 'work' | 'education'
  title: string
  organization: string
  location: string
  period: string
  description: string[]
  tech?: string[]
  highlight?: string
}

const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Software Engineering Intern',
    organization: 'Tech Startup Paris',
    location: 'Paris, France',
    period: 'Jun 2025 — Aug 2025',
    description: [
      'Developed microservices architecture reducing API latency by 40%',
      'Built real-time data pipeline processing 100k events/sec with Kafka',
      'Implemented automated testing suite increasing code coverage to 85%',
    ],
    tech: ['Python', 'FastAPI', 'Kafka', 'PostgreSQL', 'Docker'],
    highlight: 'Performance Improvement: 40% faster APIs',
  },
  {
    type: 'education',
    title: 'Engineering Degree — Computer Science',
    organization: 'École Centrale Paris',
    location: 'Paris, France',
    period: 'Sep 2023 — Jun 2026',
    description: [
      'Specialization in Software Engineering and Distributed Systems',
      'Top 10% of class, Dean\'s List recipient',
      'Led student developer club with 50+ members',
    ],
    highlight: 'GPA: 3.9/4.0',
  },
  {
    type: 'work',
    title: 'Full-Stack Developer Intern',
    organization: 'Digital Agency Lyon',
    location: 'Lyon, France',
    period: 'Jan 2025 — Mar 2025',
    description: [
      'Built 5 client web applications using Next.js and Node.js',
      'Optimized database queries reducing load time by 60%',
      'Collaborated in agile team of 8 developers',
    ],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    highlight: 'Delivered 5 client projects on time',
  },
  {
    type: 'work',
    title: 'Research Assistant — ML Lab',
    organization: 'Université Paris-Saclay',
    location: 'Saclay, France',
    period: 'Sep 2024 — Dec 2024',
    description: [
      'Implemented novel neural network architecture for NLP tasks',
      'Co-authored research paper on efficient transformer models',
      'Reduced model training time by 35% through optimization',
    ],
    tech: ['Python', 'PyTorch', 'HuggingFace', 'CUDA'],
    highlight: 'Co-authored research paper',
  },
  {
    type: 'education',
    title: 'Scientific Baccalauréat',
    organization: 'Lycée Henri IV',
    location: 'Paris, France',
    period: '2020 — 2023',
    description: [
      'Mention Très Bien (Highest Honors) with average 19/20',
      'Math, Physics, Computer Science specialization',
      'First prize at regional programming olympiad',
    ],
    highlight: 'Mention Très Bien — 19/20',
  },
]

const certifications = [
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2025', icon: '☁️' },
  { name: 'Google Professional ML Engineer', issuer: 'Google Cloud', date: '2025', icon: '🧠' },
  { name: 'Docker Certified Associate', issuer: 'Docker Inc.', date: '2024', icon: '🐳' },
  { name: 'PostgreSQL Administration', issuer: 'PostgreSQL.org', date: '2024', icon: '🗄️' },
]

function TimelineCard({ item, index, isLeft }: { item: TimelineItem; index: number; isLeft: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const isWork = item.type === 'work'

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-8 mb-8 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Content card */}
      <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
        <div className="glass-card rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className={`flex items-start gap-3 mb-3 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
              isWork ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
            }`}>
              {isWork ? <Briefcase size={18} /> : <GraduationCap size={18} />}
            </div>
            <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
              <h3 className="font-bold text-white text-base">{item.title}</h3>
              <p className={`font-semibold text-sm ${isWork ? 'text-blue-400' : 'text-purple-400'}`}>
                {item.organization}
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className={`flex flex-wrap gap-3 mb-4 text-xs text-gray-400 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {item.location}
            </span>
          </div>

          {/* Highlight badge */}
          {item.highlight && (
            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              isWork ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20' : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
            }`}>
              <Award size={11} />
              {item.highlight}
            </div>
          )}

          {/* Description */}
          <ul className={`space-y-1 mb-4 ${isLeft ? 'text-right' : 'text-left'}`}>
            {item.description.map((desc, i) => (
              <li key={i} className={`text-gray-400 text-sm flex items-start gap-2 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          {item.tech && (
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {item.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center dot */}
      <div className="hidden lg:flex flex-col items-center w-2/12">
        <div className={`w-4 h-4 rounded-full border-4 z-10 ${
          isWork
            ? 'border-blue-500 bg-dark-900 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
            : 'border-purple-500 bg-dark-900 shadow-[0_0_10px_rgba(139,92,246,0.5)]'
        }`} />
      </div>

      {/* Empty space for opposite side */}
      <div className="hidden lg:block w-5/12" />
    </div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Briefcase size={16} className="text-blue-400" />
            <span className="text-sm font-mono text-blue-400">Experience & Education</span>
          </div>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic achievements and professional experience that shaped my engineering mindset
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            Work Experience
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            Education
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform -translate-x-1/2" />

          {timeline.map((item, index) => (
            <TimelineCard
              key={index}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Certifications */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <Award size={20} className="text-yellow-400" />
            Certifications & Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="glass-card rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="font-semibold text-white text-sm mb-1">{cert.name}</h4>
                <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
                <span className="tech-tag text-xs">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
