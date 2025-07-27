import Navigation from "@/components/navigation.tsx";
import HeroSection from "@/components/heroSection.tsx";
import AboutSection from "@/components/aboutSection.tsx";
import ProjectsSection from "@/components/projectsSection.tsx";
import SkillsSection from "@/components/skillsSection.tsx";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}
