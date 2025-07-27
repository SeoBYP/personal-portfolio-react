import React from 'react';
import Navigation from './components/navigation';
import HeroSection from './components/heroSection';
import { AboutMeSection } from './components/aboutSection';
import { ServicesSection } from './components/servicesSection';
import { SkillsSection } from './components/skillSection';
import { ExperienceSection } from './components/experienceSection';
import ProjectsSection from './components/projectsSection';
import Footer from './components/footer';
import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
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

export default App;