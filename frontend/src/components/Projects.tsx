"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="section-title text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mt-4">
            A selection of projects that showcase my skills and passion for
            building impactful software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card-hover group overflow-hidden flex flex-col"
            >
              {/* Project image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-900/40 to-dark-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">
                      {project.id <= 3
                        ? ["🚀", "🤖", "📊"][project.id - 1]
                        : ["💰", "⚙️", "🌿"][project.id - 4]}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />

                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-dark-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/50 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/50 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-dark-800/80 border border-dark-700/50 text-dark-300 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more button */}
        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
