import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomy Tavanae-Bouteilley | Portfolio",
  description:
    "Portfolio de Tomy Tavanae-Bouteilley — Étudiant ingénieur informatique & cybersécurité à l'ESEO. Projets, compétences et parcours.",
  keywords: [
    "portfolio",
    "ingénieur",
    "cybersécurité",
    "ESEO",
    "développeur",
    "informatique",
    "alternance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
