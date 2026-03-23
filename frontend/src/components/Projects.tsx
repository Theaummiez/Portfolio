"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";

const EMOJIS = ["🧩", "🤖", "🎮", "📡", "❌"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = projects.length;

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
  }, [total]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplay]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    resetAutoplay();
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
    resetAutoplay();
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
    resetAutoplay();
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const project = projects[current];

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
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="section-subtitle mt-4">
            Une sélection de projets techniques réalisés durant ma formation et
            à titre personnel.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-card overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left: visual */}
                  <div className="relative h-64 lg:h-auto min-h-[280px] bg-gradient-to-br from-primary-900/40 to-dark-800 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-3xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                      <span className="text-5xl">
                        {EMOJIS[project.id - 1] ?? "💡"}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-900/30 lg:block hidden" />

                    {/* Counter */}
                    <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-dark-950/60 backdrop-blur-sm border border-dark-700/50 text-dark-300 text-xs font-mono">
                      {String(current + 1).padStart(2, "0")} /{" "}
                      {String(total).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-dark-300 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-dark-800/80 border border-dark-700/50 text-dark-300 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Voir sur GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-6 w-12 h-12 rounded-full bg-dark-900/90 backdrop-blur-sm border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/50 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-6 w-12 h-12 rounded-full bg-dark-900/90 backdrop-blur-sm border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/50 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2.5 bg-primary-500"
                    : "w-2.5 h-2.5 bg-dark-700 hover:bg-dark-500"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
