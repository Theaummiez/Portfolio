"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
} from "lucide-react";
import type { PersonalInfo } from "@/lib/data";

function FloatingParticle({
  delay,
  x,
  y,
  size,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary-500/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero({ personalInfo }: { personalInfo: PersonalInfo }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-800/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <FloatingParticle delay={0} x="10%" y="20%" size={6} />
        <FloatingParticle delay={1} x="85%" y="15%" size={4} />
        <FloatingParticle delay={2} x="70%" y="70%" size={8} />
        <FloatingParticle delay={0.5} x="20%" y="80%" size={5} />
        <FloatingParticle delay={1.5} x="50%" y="10%" size={6} />
        <FloatingParticle delay={3} x="90%" y="50%" size={4} />
        <FloatingParticle delay={2.5} x="30%" y="50%" size={7} />
      </div>

      <div className="relative section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span className="text-sm text-dark-300">
            Recherche alternance 2026–2029 en Cybersécurité
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Bienvenue sur le portfolio de </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-200">
            {personalInfo.title}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-dark-400 text-lg max-w-2xl mx-auto mb-8"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-2 text-dark-500 mb-10"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{personalInfo.location}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary text-base px-8 py-4">
            Voir mes projets
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="btn-secondary text-base px-8 py-4"
          >
            <Download className="w-4 h-4" />
            Télécharger mon CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-xl bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/30 hover:bg-dark-800 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
