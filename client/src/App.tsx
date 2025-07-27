import React from 'react';
import Navigation from './components/navigation.tsx';
import HeroSection from './components/heroSection.tsx';
import AboutSection from './components/aboutSection.tsx';
import SkillsSection from './components/skillsSection.tsx';
import ProjectsSection from './components/projectsSection.tsx';
import Footer from './components/footer.tsx';
import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <Footer />
        </div>
    );
}

export default App;