"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Skill } from "@/lib/data";

const categories = ["Développement", "Web", "Outils", "Cybersécurité"];

export default function Skills({ skills }: { skills: Skill[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-3 block">
            Tech Stack
          </span>
          <h2 className="section-title text-white">
            Compétences & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mt-4">
            Les technologies et outils que j&apos;utilise au quotidien.
            Toujours en apprentissage.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, catIdx) => {
            const categorySkills = skills.filter(
              (s) => s.category === category
            );
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-dark-200 mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary-500/50 rounded" />
                  {category}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + catIdx * 0.1 + i * 0.05,
                      }}
                      className="glass-card-hover p-5 group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>

                      <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${skill.level}%` } : {}
                          }
                          transition={{
                            duration: 1,
                            delay: 0.3 + catIdx * 0.1 + i * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
                        />
                      </div>
                      <div className="flex justify-end mt-2">
                        <span className="text-dark-500 text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
