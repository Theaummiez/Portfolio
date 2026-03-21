"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Server,
  Cpu,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Building end-to-end applications with modern web technologies",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Designing robust, scalable server architectures and RESTful APIs",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive, beautiful interfaces with accessibility in mind",
  },
  {
    icon: Cpu,
    title: "Systems Thinking",
    description: "Understanding low-level systems and performance optimization",
  },
];

const stats = [
  { value: "15+", label: "Projects Completed" },
  { value: "3+", label: "Years Coding" },
  { value: "8+", label: "Technologies" },
  { value: "2", label: "Internships" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-3 block">
            About Me
          </span>
          <h2 className="section-title text-white">
            Passionate about{" "}
            <span className="gradient-text">Engineering</span>
          </h2>
          <p className="section-subtitle mt-4">{personalInfo.bio}</p>
        </motion.div>

        {/* About content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio and highlights */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Engineering Student</h3>
                  <p className="text-dark-400 text-sm">
                    Polytechnique Montreal
                  </p>
                </div>
              </div>
              <p className="text-dark-300 leading-relaxed">
                Currently pursuing a Bachelor&apos;s in Software Engineering, I
                combine academic excellence with hands-on project experience. My
                passion lies in building scalable systems and creating
                technology that makes a real impact.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Seeking Opportunities
                  </h3>
                  <p className="text-dark-400 text-sm">
                    Open for internships & full-time roles
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card-hover p-5 group"
                >
                  <item.icon className="w-8 h-8 text-primary-400 mb-3 group-hover:text-primary-300 transition-colors" />
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-dark-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Stats and visual */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="glass-card p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.5 + i * 0.15,
                    }}
                    className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-dark-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Code snippet visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-6 font-mono text-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-dark-500 text-xs ml-2">about.ts</span>
              </div>
              <pre className="text-dark-300 leading-relaxed">
                <code>
                  <span className="text-primary-400">const</span>{" "}
                  <span className="text-accent-400">engineer</span>{" "}
                  <span className="text-dark-500">=</span> {`{\n`}
                  {"  "}
                  <span className="text-dark-400">name</span>
                  <span className="text-dark-500">:</span>{" "}
                  <span className="text-amber-400">
                    &quot;{personalInfo.name}&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-dark-400">role</span>
                  <span className="text-dark-500">:</span>{" "}
                  <span className="text-amber-400">
                    &quot;Software Engineer&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-dark-400">passion</span>
                  <span className="text-dark-500">:</span>{" "}
                  <span className="text-amber-400">
                    &quot;Building the future&quot;
                  </span>
                  ,{"\n"}
                  {"  "}
                  <span className="text-dark-400">available</span>
                  <span className="text-dark-500">:</span>{" "}
                  <span className="text-accent-400">true</span>,{"\n"}
                  {"  "}
                  <span className="text-dark-400">coffee</span>
                  <span className="text-dark-500">:</span>{" "}
                  <span className="text-primary-400">Infinity</span>,{"\n"}
                  {`};`}
                </code>
              </pre>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
