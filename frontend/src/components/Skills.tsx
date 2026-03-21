'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Layers } from 'lucide-react'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  category: string
  icon: string
  color: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React / Next.js', level: 90, color: '#61dafb' },
      { name: 'TypeScript', level: 85, color: '#3178c6' },
      { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
      { name: 'HTML / CSS', level: 95, color: '#e34f26' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Python / FastAPI', level: 88, color: '#3776ab' },
      { name: 'Node.js / Express', level: 82, color: '#68a063' },
      { name: 'REST APIs', level: 90, color: '#ff6b6b' },
      { name: 'GraphQL', level: 70, color: '#e535ab' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'PostgreSQL', level: 85, color: '#336791' },
      { name: 'SQLite', level: 88, color: '#003b57' },
      { name: 'MongoDB', level: 75, color: '#4db33d' },
      { name: 'Redis', level: 65, color: '#dc382d' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Docker', level: 80, color: '#2496ed' },
      { name: 'Git / GitHub', level: 92, color: '#f1502f' },
      { name: 'Linux / Bash', level: 85, color: '#fcc624' },
      { name: 'CI/CD', level: 72, color: '#6f42c1' },
    ],
  },
  {
    category: 'AI & Data',
    icon: '🧠',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Machine Learning', level: 78, color: '#ff6f00' },
      { name: 'TensorFlow / PyTorch', level: 72, color: '#ff6f00' },
      { name: 'Data Analysis', level: 82, color: '#150458' },
      { name: 'Pandas / NumPy', level: 85, color: '#130654' },
    ],
  },
  {
    category: 'Systems',
    icon: '💻',
    color: 'from-slate-500 to-gray-500',
    skills: [
      { name: 'C / C++', level: 80, color: '#a8b9cc' },
      { name: 'Java', level: 75, color: '#007396' },
      { name: 'Algorithms & DS', level: 85, color: '#ffd700' },
      { name: 'System Design', level: 78, color: '#00d4aa' },
    ],
  },
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL',
  'Docker', 'Git', 'Linux', 'TensorFlow', 'Node.js', 'Tailwind',
  'SQLAlchemy', 'Redis', 'Pandas', 'C++', 'Java', 'GraphQL',
]

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
        <span className="text-xs font-mono text-gray-400">{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [animateBar, setAnimateBar] = useState(false)

  useEffect(() => {
    if (inView) {
      setTimeout(() => setAnimateBar(true), 300)
    }
  }, [inView])

  return (
    <section id="skills" className="relative py-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Layers size={16} className="text-purple-400" />
            <span className="text-sm font-mono text-purple-400">Technical Skills</span>
          </div>
          <h2 className="text-responsive-md font-bold text-white mb-4">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build outstanding products
          </p>
        </div>

        {/* Tech stack marquee */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-3 flex-wrap justify-center">
              {techStack.map((tech, i) => (
                <span
                  key={tech}
                  className="tech-tag hover:border-blue-400/50 hover:text-blue-300 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, catIndex) => (
            <div
              key={category.category}
              className={`glass-card rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills */}
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} animate={animateBar} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
