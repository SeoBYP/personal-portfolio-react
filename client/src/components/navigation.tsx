// components/navigation.tsx (기존 파일 수정)
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useRouter } from '../contexts/RouterContext'; // 추가

export default function Navigation() {
    const { currentPage, navigate } = useRouter(); // 라우터 훅 사용
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            // 홈 페이지에서만 스크롤 기반 섹션 감지
            if (currentPage === 'home') {
                const sections = ['home', 'about', 'services', 'skills', 'experience', 'projects'];
                const scrollPosition = window.scrollY + 200;

                for (const sectionId of sections) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const offsetTop = element.offsetTop;
                        const height = element.offsetHeight;

                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                            setActiveSection(sectionId);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentPage]);

    const scrollToSection = (target: string) => {
        if (currentPage !== 'home') {
            // 홈이 아닌 페이지에서는 홈으로 이동 후 스크롤
            navigate('home');
            setTimeout(() => {
                const element = document.querySelector(target);
                if (element) {
                    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            // 홈 페이지에서는 바로 스크롤
            const element = document.querySelector(target);
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-700/50 ${
                isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
            }`}
                 style={{
                     backgroundColor: isScrolled ? '#161616ee' : 'transparent'
                 }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-center py-4">
                        <div
                            className="text-2xl font-bold text-white cursor-pointer"
                            onClick={() => navigate('home')} // 라우터 navigate 사용
                        >
                            서범필
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`transition-colors duration-200 relative group ${
                                        currentPage === 'home' && activeSection === item.href.slice(1)
                                            ? 'text-white'
                                            : 'text-white hover:text-white'
                                    }`}
                                    style={{
                                        color: currentPage === 'home' && activeSection === item.href.slice(1) ? '#13FF00' : 'white'
                                    }}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                            currentPage === 'home' && activeSection === item.href.slice(1) ? 'w-full' : ''
                                        }`}
                                        style={{backgroundColor: '#13FF00'}}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-white hover:bg-gray-700"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-700 py-4" style={{backgroundColor: '#161616'}}>
                            <div className="flex flex-col space-y-3">
                                {navItems.map((item) => (
                                    <button
                                        key={item.href}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-left text-gray-300 hover:text-white transition-colors duration-200"
                                        style={{
                                            color: currentPage === 'home' && activeSection === item.href.slice(1) ? '#13FF00' : '#d1d5db'
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Pagination dots - 홈 페이지에서만 표시 */}
            {currentPage === 'home' && (
                <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20 hidden lg:flex">
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
                            style={{
                                backgroundColor: activeSection === item.href.slice(1) ? '#13FF00' : '#666'
                            }}
                            title={item.label}
                        />
                    ))}
                </div>
            )}
        </>
    );
}