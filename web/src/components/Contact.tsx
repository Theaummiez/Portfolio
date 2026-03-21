"use client";

import { FormEvent, useState } from "react";

const apiBase =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://127.0.0.1:8000";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [detail, setDetail] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("err");
      setDetail("Merci de remplir tous les champs.");
      return;
    }
    setStatus("sending");
    setDetail("");
    try {
      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const err: { detail?: unknown } = await res.json().catch(() => ({}));
        let msg = "Envoi impossible";
        if (typeof err.detail === "string") msg = err.detail;
        else if (Array.isArray(err.detail))
          msg = err.detail
            .map((d: { msg?: string }) => d?.msg)
            .filter(Boolean)
            .join(", ");
        throw new Error(msg || "Envoi impossible");
      }
      setStatus("ok");
      setDetail("Message bien reçu — merci !");
      form.reset();
    } catch (err) {
      setStatus("err");
      setDetail(
        err instanceof Error
          ? err.message
          : "Impossible de joindre l’API. Vérifiez que le serveur Python tourne.",
      );
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-sm uppercase tracking-widest text-cyan-400/80">
          Projet, stage ou simple prise de contact
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-lg leading-relaxed text-zinc-400">
              Une idée de collaboration, une question sur un projet ou une
              opportunité de stage ? Écrivez quelques lignes : le message est
              enregistré côté serveur (API Python + base SQL).
            </p>
            <p className="mt-6 text-sm text-zinc-600">
              Remplacez les textes factices (formation, projets, liens) par vos
              informations réelles pour refléter votre parcours.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
          >
            <div>
              <label htmlFor="name" className="text-xs font-medium text-zinc-400">
                Nom
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080f] px-4 py-3 text-white outline-none ring-cyan-500/40 transition focus:border-cyan-500/50 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium text-zinc-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#07080f] px-4 py-3 text-white outline-none ring-cyan-500/40 transition focus:border-cyan-500/50 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-medium text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-[#07080f] px-4 py-3 text-white outline-none ring-cyan-500/40 transition focus:border-cyan-500/50 focus:ring-2"
              />
            </div>
            {detail ? (
              <p
                className={`text-sm ${
                  status === "ok" ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {detail}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-semibold text-[#07080f] shadow-lg shadow-cyan-500/20 transition hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? "Envoi…" : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
