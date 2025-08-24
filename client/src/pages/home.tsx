import Navigation from "@/components/navigation.tsx";
import {HeroSection} from "@/components/heroSection.tsx";
import {AboutMeSection} from "@/components/aboutSection.tsx";
import {ServicesSection} from "@/components/servicesSection.tsx";
import {SkillsSection} from "@/components/skillSection.tsx";
import {ExperienceSection} from "@/components/experienceSection.tsx";
import ProjectsSection from "@/components/projectsSection.tsx";
import Footer from "@/components/footer.tsx";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutMeSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
    </div>
  );
}
