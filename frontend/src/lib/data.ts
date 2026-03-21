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

export const personalInfo = {
  name: "Alex Martin",
  title: "Future Software Engineer",
  subtitle: "Building tomorrow's solutions today",
  bio: "Passionate engineering student with a love for clean code, innovative solutions, and cutting-edge technology. I specialize in full-stack development, systems design, and creating impactful digital experiences.",
  email: "alex.martin@email.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Montreal, Canada",
  resumeUrl: "#",
  avatarUrl: "/images/avatar.svg",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CloudSync Platform",
    description:
      "A distributed cloud synchronization platform with real-time collaboration features.",
    longDescription:
      "Built a scalable cloud platform that enables real-time file synchronization and collaboration across distributed teams. Implemented conflict resolution algorithms and optimistic UI updates.",
    image: "/images/project-1.svg",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Code Assistant",
    description:
      "An intelligent code completion and review tool powered by machine learning.",
    longDescription:
      "Developed an AI-powered code assistant that provides intelligent suggestions, automated code reviews, and pattern recognition to improve developer productivity.",
    image: "/images/project-2.svg",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Smart IoT Dashboard",
    description:
      "Real-time monitoring dashboard for IoT devices with predictive analytics.",
    longDescription:
      "Created a comprehensive IoT monitoring solution with real-time data visualization, predictive maintenance alerts, and device management capabilities.",
    image: "/images/project-3.svg",
    tags: ["Next.js", "MQTT", "InfluxDB", "Grafana", "Python"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "CryptoTracker",
    description:
      "Cryptocurrency portfolio tracker with real-time market data and analytics.",
    longDescription:
      "A full-featured crypto portfolio management app with real-time price tracking, portfolio analytics, and automated trading alerts.",
    image: "/images/project-4.svg",
    tags: ["React Native", "Node.js", "WebSocket", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "DevOps Pipeline Tool",
    description:
      "CI/CD pipeline management tool with automated testing and deployment.",
    longDescription:
      "Automated CI/CD pipeline builder with visual workflow editor, test result analytics, and multi-cloud deployment support.",
    image: "/images/project-5.svg",
    tags: ["Go", "Docker", "Kubernetes", "Terraform", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "EcoTrack App",
    description:
      "Carbon footprint tracking application with sustainability recommendations.",
    longDescription:
      "A mobile-first app helping users track and reduce their carbon footprint through daily activity logging, personalized recommendations, and community challenges.",
    image: "/images/project-6.svg",
    tags: ["Flutter", "Firebase", "Python", "ML Kit"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: "React / Next.js", icon: "⚛️", level: 90, category: "Frontend" },
  { name: "TypeScript", icon: "📘", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", level: 92, category: "Frontend" },
  { name: "HTML / CSS", icon: "🌐", level: 95, category: "Frontend" },
  { name: "Python", icon: "🐍", level: 88, category: "Backend" },
  { name: "Node.js", icon: "🟢", level: 85, category: "Backend" },
  { name: "FastAPI", icon: "⚡", level: 82, category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", level: 80, category: "Backend" },
  { name: "Docker", icon: "🐳", level: 78, category: "DevOps" },
  { name: "Git / GitHub", icon: "🔀", level: 90, category: "DevOps" },
  { name: "AWS / Cloud", icon: "☁️", level: 72, category: "DevOps" },
  { name: "Linux", icon: "🐧", level: 82, category: "DevOps" },
  { name: "TensorFlow", icon: "🧠", level: 65, category: "AI/ML" },
  { name: "Data Analysis", icon: "📊", level: 75, category: "AI/ML" },
  { name: "C / C++", icon: "⚙️", level: 78, category: "Systems" },
  { name: "System Design", icon: "🏗️", level: 70, category: "Systems" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp Inc.",
    location: "Montreal, QC",
    period: "May 2025 – Aug 2025",
    description: [
      "Developed RESTful APIs serving 10K+ daily requests using FastAPI and PostgreSQL",
      "Implemented automated testing pipeline reducing bug reports by 40%",
      "Collaborated with cross-functional team of 8 engineers on microservices architecture",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupLab",
    location: "Remote",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Built responsive web applications using React, Next.js, and Tailwind CSS",
      "Designed and implemented database schemas for complex business logic",
      "Mentored 3 junior developers on best practices and code review",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "B.Eng Software Engineering",
    company: "Polytechnique Montreal",
    location: "Montreal, QC",
    period: "2022 – 2026",
    description: [
      "Relevant coursework: Data Structures, Algorithms, Operating Systems, Database Systems",
      "Dean's List — GPA: 3.8/4.0",
      "Active member of the Software Engineering Student Association",
    ],
    type: "education",
  },
  {
    id: 4,
    title: "DEC in Computer Science",
    company: "CÉGEP de Montréal",
    location: "Montreal, QC",
    period: "2020 – 2022",
    description: [
      "Foundation in programming, mathematics, and computer science principles",
      "Led team project: automated inventory management system",
      "Graduated with Honours",
    ],
    type: "education",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
