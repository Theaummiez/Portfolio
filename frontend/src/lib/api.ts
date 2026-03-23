import {
  personalInfo as staticPersonalInfo,
  projects as staticProjects,
  skills as staticSkills,
  experiences as staticExperiences,
  type Project,
  type Skill,
  type Experience,
} from "./data";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

async function fetchAPI<T>(path: string): Promise<T | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

interface APIPersonalInfo {
  id: number;
  name: string;
  title: string;
  subtitle: string | null;
  bio: string | null;
  email: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  location: string | null;
  resume_url: string | null;
  avatar_url: string | null;
}

interface APIProject {
  id: number;
  title: string;
  description: string;
  long_description: string | null;
  image_url: string | null;
  tags: string[];
  github_url: string | null;
  live_url: string | null;
  featured: boolean;
  sort_order: number;
}

interface APISkill {
  id: number;
  name: string;
  icon: string | null;
  level: number;
  category: string;
  sort_order: number;
}

interface APIExperience {
  id: number;
  title: string;
  company: string;
  location: string | null;
  period: string;
  description: string[];
  type: string;
  sort_order: number;
}

function mapPersonalInfo(api: APIPersonalInfo) {
  return {
    name: api.name,
    title: api.title,
    subtitle: api.subtitle || "",
    bio: api.bio || "",
    email: api.email || "",
    github: api.github_url || "",
    linkedin: api.linkedin_url || "",
    location: api.location || "",
    resumeUrl: api.resume_url || "#",
    avatarUrl: api.avatar_url || "/images/avatar.svg",
  };
}

function mapProject(api: APIProject, index: number): Project {
  return {
    id: api.id,
    title: api.title,
    description: api.description,
    longDescription: api.long_description || api.description,
    image: api.image_url || `/images/project-${index + 1}.svg`,
    tags: api.tags || [],
    github: api.github_url || "#",
    live: api.live_url || "#",
    featured: api.featured,
  };
}

function mapSkill(api: APISkill): Skill {
  return {
    name: api.name,
    icon: api.icon || "💻",
    level: api.level,
    category: api.category,
  };
}

function mapExperience(api: APIExperience): Experience {
  return {
    id: api.id,
    title: api.title,
    company: api.company,
    location: api.location || "",
    period: api.period,
    description: api.description || [],
    type: api.type as "work" | "education",
  };
}

export async function getPersonalInfo() {
  const data = await fetchAPI<APIPersonalInfo>("/api/personal");
  return data ? mapPersonalInfo(data) : staticPersonalInfo;
}

export async function getProjects() {
  const data = await fetchAPI<APIProject[]>("/api/projects");
  return data ? data.map((p, i) => mapProject(p, i)) : staticProjects;
}

export async function getSkills() {
  const data = await fetchAPI<APISkill[]>("/api/skills");
  return data ? data.map(mapSkill) : staticSkills;
}

export async function getExperiences() {
  const data = await fetchAPI<APIExperience[]>("/api/experiences");
  return data ? data.map(mapExperience) : staticExperiences;
}
