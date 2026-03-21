const projects = [
  {
    title: "Dashboard analytique",
    desc: "Visualisation de métriques et agrégations SQL pour suivre une activité fictive.",
    tags: ["Next.js", "Python", "SQLite"],
    href: "#",
  },
  {
    title: "API de portfolio",
    desc: "Backend FastAPI avec persistance SQL pour les messages de contact.",
    tags: ["FastAPI", "SQLAlchemy"],
    href: "#contact",
  },
  {
    title: "Prototype IoT / capteurs",
    desc: "Acquisition de données simulées, traitement et restitution simple.",
    tags: ["Python", "Modélisation"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Projets
        </h2>
        <p className="mt-3 max-w-2xl text-sm uppercase tracking-widest text-cyan-400/80">
          Sélection
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-6 transition hover:border-cyan-500/30"
            >
              <span className="font-mono text-xs text-zinc-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-zinc-500"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 transition group-hover:gap-2"
              >
                Détails
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
