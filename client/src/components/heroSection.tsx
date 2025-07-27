import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Instagram, Globe } from 'lucide-react';

export default function HeroSection() {
    const developerInfo = {
        name: "서범필",
        title: "Game Client Developer",
        bio: "언리얼과 유니티를 좋아하는 학부생 게임 개발자. 실제 게임 문제를 해결하는 아이디어 개발하는 것을 좋아합니다.",
        email: "seobp1020@naver.com",
        socialLinks: {
            instagram: "https://instagram.com",
            github: "https://github.com/gamedeveloper",
            linkedin: "https://linkedin.com/in/gamedeveloper",
            blog: "https://blog.naver.com",
            email: "seobp1020@naver.com"
        }
    };

    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Unity 로고 SVG
    const UnityLogo = () => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon fill="#13FF00" points="40,20 60,20 70,35 50,35"/>
            <polygon fill="#13FF00" points="30,45 50,45 40,60 20,60"/>
            <polygon fill="#13FF00" points="50,55 70,55 80,70 60,70"/>
            <polygon fill="#13FF00" points="45,25 55,25 50,35"/>
        </svg>
    );

    // Unreal Engine 로고 SVG
    const UnrealLogo = () => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle fill="none" stroke="#13FF00" strokeWidth="3" cx="50" cy="50" r="45"/>
            <path fill="#13FF00" d="M30,35 Q50,25 70,35 Q75,50 70,65 Q50,75 30,65 Q25,50 30,35 Z"/>
            <path fill="#161616" d="M40,40 Q50,35 60,40 Q62,50 60,60 Q50,65 40,60 Q38,50 40,40 Z"/>
        </svg>
    );

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden"
                 style={{backgroundColor: '#161616'}}>
            <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="text-lg font-medium" style={{color: '#13FF00'}}>
                            안녕하세요! 👋
                        </div>
                        <div className="h-1 w-20 bg-gray-600 rounded"/>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        {developerInfo.name}<br/>
                        <span style={{color: '#13FF00'}}>Game Developer</span>
                    </h1>

                    <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                        {developerInfo.bio}
                    </p>

                    <div className="flex gap-4 pt-4">
                        <Button
                            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                        >
                            <Download className="w-5 h-5 mr-2"/>
                            Download CV
                        </Button>
                        <Button
                            onClick={scrollToProjects}
                            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-black"
                            style={{backgroundColor: '#13FF00'}}
                        >
                            View Portfolio
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 pt-4">
                        {[
                            {icon: Instagram, href: developerInfo.socialLinks.instagram, label: "Instagram"},
                            {icon: Github, href: developerInfo.socialLinks.github, label: "GitHub"},
                            {icon: Linkedin, href: developerInfo.socialLinks.linkedin, label: "LinkedIn"},
                            {icon: Globe, href: developerInfo.socialLinks.blog, label: "Blog"},
                            {icon: Mail, href: `mailto:${developerInfo.email}`, label: "Email"}
                        ].map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 text-gray-400 hover:text-white border border-gray-600 hover:border-green-400"
                                    title={social.label}
                                >
                                    <Icon className="w-5 h-5"/>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Content - Profile with Game Engine Logos */}
                <div className="relative flex justify-center items-center">
                    <div className="relative">
                        {/* Green glow circle */}
                        <div className="absolute inset-0 w-80 h-80 mx-auto rounded-full opacity-50" style={{
                            background: `radial-gradient(circle, rgba(19, 255, 0, 0.2) 0%, rgba(19, 255, 0, 0.1) 50%, transparent 70%)`
                        }}/>

                        {/* Profile placeholder */}
                        <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden z-10 border-4 flex items-center justify-center"
                             style={{borderColor: 'rgba(19, 255, 0, 0.2)', backgroundColor: '#1D1D1D'}}>
                            <div className="text-6xl">🎮</div>
                        </div>

                        {/* Unity Logo */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center border-4"
                             style={{backgroundColor: '#161616', borderColor: '#13FF00', boxShadow: '0 0 20px rgba(19, 255, 0, 0.3)'}}>
                            <div className="w-12 h-12">
                                <UnityLogo />
                            </div>
                        </div>

                        {/* Unreal Engine Logo */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full flex items-center justify-center border-4"
                             style={{backgroundColor: '#161616', borderColor: '#13FF00', boxShadow: '0 0 20px rgba(19, 255, 0, 0.3)'}}>
                            <div className="w-12 h-12">
                                <UnrealLogo />
                            </div>
                        </div>

                        {/* Decorative ring */}
                        <div className="absolute inset-0 w-72 h-72 mx-auto rounded-full border-2 opacity-30"
                             style={{borderColor: '#13FF00', top: '-1rem', left: '-1rem'}}/>
                    </div>

                    {/* Floating animation elements */}
                    <div className="absolute top-20 right-10 w-3 h-3 rounded-full animate-bounce"
                         style={{backgroundColor: '#13FF00', opacity: 0.6}}/>
                    <div className="absolute bottom-32 left-8 w-2 h-2 rounded-full animate-pulse"
                         style={{backgroundColor: '#13FF00', opacity: 0.4}}/>
                    <div className="absolute top-1/3 left-12 w-1 h-1 rounded-full animate-ping"
                         style={{backgroundColor: '#13FF00'}}/>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <span>Scroll to explore</span>
                    <div className="w-0.5 h-8 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}