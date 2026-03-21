const steps = [
  {
    year: "20XX — 20XX",
    title: "Classes préparatoires / BUT / autre",
    detail: "Bases solides en maths, physique et méthode de travail.",
  },
  {
    year: "En cours",
    title: "Cycle ingénieur",
    detail: "Spécialisation à préciser : logiciel, data, ou domaine visé.",
  },
  {
    year: "Objectifs",
    title: "Stages & projets longs",
    detail: "Contribuer à des équipes techniques sur des problèmes réels.",
  },
];

export default function Path() {
  return (
    <section id="path" className="scroll-mt-24 border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Parcours
        </h2>
        <p className="mt-3 max-w-2xl text-sm uppercase tracking-widest text-cyan-400/80">
          Formation & ambitions
        </p>
        <ol className="relative mt-16 space-y-12 border-l border-white/10 pl-8 md:pl-10">
          {steps.map((s) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[calc(0.5rem+1px)] top-1.5 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-[#07080f] md:-left-[calc(0.625rem+1px)]" />
              <p className="font-mono text-xs text-cyan-400/90">{s.year}</p>
              <h3 className="font-display mt-1 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 max-w-xl text-zinc-400">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
