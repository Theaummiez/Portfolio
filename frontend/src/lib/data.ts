export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  resumeUrl: string;
  avatarUrl: string;
}

export const personalInfo = {
  name: "Tomy Tavanae-Bouteilley",
  title: "Étudiant Ingénieur Informatique & Cybersécurité",
  subtitle: "Recherche alternance 2026–2029",
  bio: "Je m'appelle Tomy Tavanae Bouteilley. Passionné par l'informatique depuis le lycée, j'ai développé un intérêt marqué pour ce domaine dès la découverte des Sciences de l'Ingénieur, intérêt confirmé par le choix de la spécialité NSI.\nActuellement étudiant en cycle ingénieur en électronique et informatique à l'école ESEO à Dijon, je poursuis ma formation avec un objectif de spécialisation en cybersécurité. Dans le cadre de mon parcours, j'effectue actuellement une mobilité internationale à l'Université des Sciences de Hanoï, au Vietnam.\nJe suis aujourd'hui à la recherche d'une alternance de longue durée (2026-2029) en cybersécurité, afin de mettre en pratique mes compétences et de contribuer activement à des projets concrets au sein d'une entreprise.",
  email: "tomy.tavanaebouteilley@reseau.eseo.fr",
  github: "https://github.com/Theaummiez",
  linkedin: "https://www.linkedin.com/in/tomy-tavanae-bouteilley",
  location: "Dijon, France",
  resumeUrl: "https://drive.google.com/file/d/15jbl5opmLJCdk5QRzPnTAX2S_ZHhAv7n/view?usp=drivesdk",
  avatarUrl: "/images/avatar.svg",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Extension d'Assistance Intelligente",
    description:
      "Extension navigateur permettant d'analyser des questions et de générer des réponses automatisées via API.",
    longDescription:
      "Développement d'une extension navigateur complète avec appels API asynchrones, gestion des réponses dynamiques, injection DOM, raccourcis clavier et gestion des permissions Manifest v3.",
    image: "/images/project-1.svg",
    tags: ["JavaScript", "API REST", "Manifest v3", "DOM", "Chrome Extension"],
    github: "https://github.com/Theaummiez",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Distributeur Automatique de Cartes",
    description:
      "Conception et développement d'un distributeur automatisé de cartes avec Arduino.",
    longDescription:
      "Projet ESEO : programmation du microcontrôleur en C/C++ pour piloter moteurs et servo-moteurs, intégration de capteurs et actionneurs, gestion de la logique de distribution, tests et calibration du mécanisme.",
    image: "/images/project-2.svg",
    tags: ["C/C++", "Arduino", "Capteurs", "Servo-moteurs", "Électronique"],
    github: "https://github.com/Theaummiez",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Mini-Jeu Unity",
    description:
      "Développement d'un mini-jeu avec mécaniques de gameplay, collisions et scripts en C#.",
    longDescription:
      "Projet personnel de développement de jeu vidéo sous Unity : implémentation de mécaniques de gameplay, gestion des collisions, scripting en C# et design de niveaux.",
    image: "/images/project-3.svg",
    tags: ["C#", "Unity", "Game Dev", "POO", "Scripting"],
    github: "https://github.com/Theaummiez",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "App Morse – Swift",
    description:
      "Application iOS permettant de convertir du texte en code Morse et de le transmettre visuellement ou par vibration.",
    longDescription:
      "Développement d'une application native iOS en Swift avec Xcode : saisie de texte, conversion en code Morse, affichage visuel des signaux et retour haptique pour la transmission.",
    image: "/images/project-4.svg",
    tags: ["Swift", "iOS", "Xcode", "UIKit", "Mobile"],
    github: "https://github.com/Theaummiez",
    live: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Morpion",
    description:
      "Mon tout premier projet : un jeu de morpion interactif, les premiers pas dans la programmation.",
    longDescription:
      "Premier projet de programmation : développement d'un jeu de morpion (Tic-Tac-Toe) avec gestion des tours, détection de victoire et interface joueur contre joueur.",
    image: "/images/project-5.svg",
    tags: ["Python", "Logique", "Premier projet"],
    github: "https://github.com/Theaummiez",
    live: "#",
    featured: true,
  },
];

export const skills: Skill[] = [
  { name: "Python", icon: "🐍", level: 80, category: "Développement" },
  { name: "C#", icon: "🎮", level: 72, category: "Développement" },
  { name: "JavaScript (ES6+)", icon: "⚡", level: 78, category: "Développement" },
  { name: "C / C++ (POO)", icon: "⚙️", level: 75, category: "Développement" },
  { name: "React", icon: "⚛️", level: 70, category: "Web" },
  { name: "Next.js", icon: "▲", level: 65, category: "Web" },
  { name: "HTML5 / CSS3", icon: "🌐", level: 85, category: "Web" },
  { name: "APIs REST", icon: "🔗", level: 72, category: "Web" },
  { name: "Git / GitHub", icon: "🔀", level: 82, category: "Outils" },
  { name: "Visual Studio Code", icon: "💻", level: 88, category: "Outils" },
  { name: "Unity", icon: "🎮", level: 60, category: "Outils" },
  { name: "Linux", icon: "🐧", level: 55, category: "Outils" },
  { name: "Xcode", icon: "🍎", level: 45, category: "Outils" },
  { name: "Sécurité Applicative", icon: "🛡️", level: 55, category: "Cybersécurité" },
  { name: "Vulnérabilités (SQL Injection...)", icon: "🔓", level: 50, category: "Cybersécurité" },
  { name: "PicoCTF / TryHackMe", icon: "🏴", level: 50, category: "Cybersécurité" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Agent de tri",
    company: "DPD",
    location: "France",
    period: "2024 – 2025 (CDD – 1 mois)",
    description: [
      "Tri et distribution de colis dans un environnement logistique à cadence élevée",
      "Respect des délais et des normes de sécurité",
      "Travail en équipe dans un contexte opérationnel dynamique",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Opérateur de conditionnement",
    company: "Joseph Drouhin",
    location: "Beaune, France",
    period: "2023 – 2024 (CDD – 1 mois)",
    description: [
      "Travail en équipe en environnement industriel",
      "Respect strict des procédures et des cadences de production",
      "Contrôle qualité et conditionnement",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Vendanges",
    company: "Domaines viticoles (Meursault)",
    location: "Meursault, France",
    period: "2023 – 2025",
    description: [
      "Domaine Pascal Prunier-Bonheur & Domaine Renaud Boyer",
      "Travail physique en équipe",
      "Rigueur, endurance et engagement",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "Diplôme d'ingénieur (grade de Master)",
    company: "ESEO",
    location: "Dijon, France",
    period: "Depuis 2024",
    description: [
      "Cycle préparatoire intégré",
      "Formation généraliste en informatique, mathématiques et sciences de l'ingénieur",
      "Spécialisation visée : Cybersécurité",
    ],
    type: "education",
  },
  {
    id: 5,
    title: "Mobilité Internationale",
    company: "Université des Sciences de Hanoï (USTH)",
    location: "Hanoï, Vietnam",
    period: "2025 – 2026",
    description: [
      "Suivi des enseignements en anglais",
      "Formation scientifique dans un environnement international",
      "Développement de l'autonomie et adaptation interculturelle",
    ],
    type: "education",
  },
  {
    id: 6,
    title: "Baccalauréat Général – Mention Assez Bien",
    company: "Lycée Clos Maire",
    location: "Beaune, France",
    period: "2024",
    description: [
      "Spécialités : Mathématiques & NSI (Numérique et Sciences Informatiques)",
      "Mention Assez Bien",
    ],
    type: "education",
  },
];

export const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Projets", href: "#projects" },
  { name: "Compétences", href: "#skills" },
  { name: "Parcours", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
