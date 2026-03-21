export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          À propos
        </h2>
        <p className="mt-3 max-w-2xl text-sm uppercase tracking-widest text-cyan-400/80">
          Profil
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              Étudiant(e) en ingénierie avec une approche à la fois analytique et
              créative : j&apos;aime structurer les problèmes, expérimenter, puis
              itérer jusqu&apos;à un résultat fiable.
            </p>
            <p>
              Mes centres d&apos;intérêt vont de l&apos;algorithmique et les
              systèmes logiciels à la data, en passant par l&apos;interface
              utilisateur lorsque le produit le demande.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8">
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Formation
                </dt>
                <dd className="mt-1 text-white">École d&apos;ingénieur — à compléter</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Langues
                </dt>
                <dd className="mt-1 text-white">Français · Anglais technique</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Localisation
                </dt>
                <dd className="mt-1 text-white">France · mobilité possible</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
