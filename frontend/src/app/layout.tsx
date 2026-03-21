import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Future Engineer",
  description:
    "Personal portfolio showcasing projects, skills, and experience of a future engineer.",
  keywords: [
    "portfolio",
    "engineer",
    "developer",
    "software",
    "projects",
    "skills",
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
