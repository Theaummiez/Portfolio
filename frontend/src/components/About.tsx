"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Shield,
  Server,
  Cpu,
  GraduationCap,
  Briefcase,
  Globe,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Développement Logiciel",
    description: "Python, C/C++, C#, JavaScript — applications complètes et projets techniques",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Sécurité applicative, CTF (PicoCTF, TryHackMe), vulnérabilités courantes",
  },
  {
    icon: Server,
    title: "Développement Web",
    description: "React, Next.js, HTML/CSS, APIs REST — interfaces modernes et responsives",
  },
  {
    icon: Globe,
    title: "International",
    description: "Mobilité au Vietnam, enseignements en anglais, adaptation interculturelle",
  },
];

const stats = [
  { value: "5", label: "Projets techniques" },
  { value: "4+", label: "Langages maîtrisés" },
  { value: "3", label: "Langues parlées" },
  { value: "11 ans", label: "Judo (ceinture marron)" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-3 block">
            À propos
          </span>
          <h2 className="section-title text-white">
            Passionné par l&apos;
            <span className="gradient-text">Ingénierie</span>
          </h2>
          <p className="section-subtitle mt-4">
            Curieux et déterminé, j&apos;aime comprendre comment les choses
            fonctionnent et les construire de mes mains — que ce soit du code,
            de l&apos;électronique ou des systèmes complets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
                  <h3 className="text-white font-semibold">Étudiant Ingénieur</h3>
                  <p className="text-dark-400 text-sm">ESEO — Diplôme d&apos;ingénieur (grade Master)</p>
                </div>
              </div>
              <p className="text-dark-300 leading-relaxed">
                Tout a commencé en seconde avec l&apos;option Sciences de
                l&apos;Ingénieur, où j&apos;ai fait mes premiers pas dans la
                conception technique. La spécialité NSI m&apos;a ensuite confirmé
                ma passion pour le code. Aujourd&apos;hui en cycle préparatoire à
                ESEO, je vise une spécialisation en cybersécurité et une
                alternance de 2026 à 2029.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Recherche Alternance</h3>
                  <p className="text-dark-400 text-sm">Cybersécurité — 2026 à 2029</p>
                </div>
              </div>
            </motion.div>

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
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-dark-400 text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
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
                <span className="text-dark-500 text-xs ml-2">profil.py</span>
              </div>
              <pre className="text-dark-300 leading-relaxed">
                <code>
                  <span className="text-primary-400">class</span>{" "}
                  <span className="text-accent-400">Ingenieur</span>
                  <span className="text-dark-500">:</span>{"\n"}
                  {"  "}
                  <span className="text-primary-400">def</span>{" "}
                  <span className="text-amber-400">__init__</span>
                  <span className="text-dark-500">(self):</span>{"\n"}
                  {"    "}self.nom{" "}
                  <span className="text-dark-500">=</span>{" "}
                  <span className="text-amber-400">&quot;Tomy T-B&quot;</span>{"\n"}
                  {"    "}self.ecole{" "}
                  <span className="text-dark-500">=</span>{" "}
                  <span className="text-amber-400">&quot;ESEO&quot;</span>{"\n"}
                  {"    "}self.passion{" "}
                  <span className="text-dark-500">=</span>{" "}
                  <span className="text-amber-400">&quot;Cybersécurité&quot;</span>{"\n"}
                  {"    "}self.dispo{" "}
                  <span className="text-dark-500">=</span>{" "}
                  <span className="text-accent-400">True</span>{"\n"}
                  {"    "}self.cafe{" "}
                  <span className="text-dark-500">=</span>{" "}
                  <span className="text-primary-400">float</span>
                  <span className="text-dark-500">(</span>
                  <span className="text-amber-400">&quot;inf&quot;</span>
                  <span className="text-dark-500">)</span>
                </code>
              </pre>
            </motion.div>

            {/* Languages & Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card p-6"
            >
              <h4 className="text-white font-semibold mb-4">Langues & Centres d&apos;intérêt</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🇫🇷</span>
                  <span className="text-dark-300 text-sm">Français — langue maternelle</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-dark-300 text-sm">Anglais — avancé (mobilité internationale)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🇪🇸</span>
                  <span className="text-dark-300 text-sm">Espagnol — débutant</span>
                </div>
                <div className="border-t border-dark-700/50 mt-4 pt-4 flex flex-wrap gap-3">
                  {["🥋 Judo (11 ans)", "🧗 Escalade (4 ans)", "🎹 Piano", "🎸 Guitare", "💻 Code"].map(
                    (interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1.5 rounded-lg bg-dark-800/50 border border-dark-700/50 text-dark-300 text-xs"
                      >
                        {interest}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
