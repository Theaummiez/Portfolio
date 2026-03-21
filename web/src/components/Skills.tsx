const groups = [
  {
    title: "Développement",
    items: ["Python", "TypeScript", "React", "Next.js", "API REST"],
  },
  {
    title: "Ingénierie & data",
    items: ["Modélisation", "SQL", "Git", "Tests", "CI basique"],
  },
  {
    title: "Outils",
    items: ["Linux", "VS Code", "Figma", "Notion"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Compétences
        </h2>
        <p className="mt-3 max-w-2xl text-sm uppercase tracking-widest text-cyan-400/80">
          Stack & méthodes
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-white/10 bg-[#07080f]/80 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-100/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
