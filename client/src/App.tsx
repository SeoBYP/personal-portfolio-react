// App.tsx (기존 파일 수정)
import React from 'react';
import { RouterProvider, useRouter } from './contexts/RouterContext'; // 추가
import Navigation from './components/navigation';
import {HeroSection} from './components/heroSection';
import { AboutMeSection } from './components/aboutSection';
import { ServicesSection } from './components/servicesSection';
import { SkillsSection } from './components/skillSection';
import { ExperienceSection } from './components/experienceSection';
import ProjectsSection from '@/components/projectsSection';
import ProjectDetailPage from "@/components/ProjectDetailPage.tsx";
import Footer from './components/footer';
import './App.css';

// Home Page Component
function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutMeSection />
            <ServicesSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <Footer />
        </>
    );
}

// Main App Component with Router Logic
function AppContent() {
    const { currentPage } = useRouter();

    const renderPage = () => {
        switch (currentPage) {
            case 'project':
                return <ProjectDetailPage />;
            case 'home':
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navigation />
            {renderPage()}
        </div>
    );
}

// Root App Component
function App() {
    return (
        <RouterProvider>
            <AppContent />
        </RouterProvider>
    );
}

export default App;