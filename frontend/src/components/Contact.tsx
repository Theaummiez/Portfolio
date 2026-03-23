"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-3 block">
            Contact
          </span>
          <h2 className="section-title text-white">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="section-subtitle mt-4">
            Un projet en tête ou une opportunité d&apos;alternance ? N&apos;hésitez pas
            à me contacter. Je suis ouvert aux nouvelles collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 space-y-6">
              <h3 className="text-white font-semibold text-lg">
                Mes coordonnées
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-all">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs">Email</p>
                    <p className="text-dark-200 text-sm group-hover:text-primary-400 transition-colors break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs">Localisation</p>
                    <p className="text-dark-200 text-sm">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-dark-700/50 pt-6">
                <p className="text-dark-500 text-xs mb-4">Retrouvez-moi sur</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500/30 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:border-primary-500/30 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-dark-300 text-sm font-medium mb-2"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-dark-300 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block text-dark-300 text-sm font-medium mb-2"
                >
                  Objet
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  placeholder="De quoi s'agit-il ?"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-dark-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none"
                  placeholder="Parlez-moi de votre projet ou opportunité..."
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-accent-400 text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Message envoyé avec succès !
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Une erreur est survenue. Réessayez.
                    </motion.div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    <>
                      Envoyer
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
