"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workExp = experiences.filter((e) => e.type === "work");
  const eduExp = experiences.filter((e) => e.type === "education");

  return (
    <section id="experience" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-3 block">
            Parcours
          </span>
          <h2 className="section-title text-white">
            Expériences & <span className="gradient-text">Formations</span>
          </h2>
          <p className="section-subtitle mt-4">
            Mon parcours professionnel et académique qui forge mon profil d&apos;ingénieur.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Expériences */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Expériences Professionnelles</h3>
            </motion.div>

            <div className="relative space-y-6 pl-6 border-l-2 border-dark-800">
              {workExp.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950" />

                  <div className="glass-card-hover p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-white font-semibold">{exp.title}</h4>
                      <div className="flex items-center gap-1.5 text-dark-500 text-xs font-mono">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary-400 text-sm font-medium">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-dark-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="text-dark-400 text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 mt-1.5 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Formations</h3>
            </motion.div>

            <div className="relative space-y-6 pl-6 border-l-2 border-dark-800">
              {eduExp.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-accent-500 border-4 border-dark-950" />

                  <div className="glass-card-hover p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-white font-semibold">{exp.title}</h4>
                      <div className="flex items-center gap-1.5 text-dark-500 text-xs font-mono">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-accent-400 text-sm font-medium">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-dark-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="text-dark-400 text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500/50 mt-1.5 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
