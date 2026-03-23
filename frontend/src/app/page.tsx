import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  getPersonalInfo,
  getProjects,
  getSkills,
  getExperiences,
} from "@/lib/api";

export const revalidate = 60;

export default async function Home() {
  const [personalInfo, projects, skills, experiences] = await Promise.all([
    getPersonalInfo(),
    getProjects(),
    getSkills(),
    getExperiences(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer personalInfo={personalInfo} />
    </>
  );
}
