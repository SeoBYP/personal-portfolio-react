import React from 'react';
import {Button} from '@/components/ui/button';
import {Download, Github, Linkedin, Twitter, Mail} from 'lucide-react';

export default function HeroSection() {
    const developerInfo = {
        name: "김게임개발자",
        title: "Game Client Programmer & UI Designer",
        bio: "Unity와 Unreal Engine을 활용한 게임 개발에 전념하고 있습니다. 실제 문제를 해결하는 다양한 프로젝트를 좋아합니다.",
        email: "game.developer@example.com",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        socialLinks: {
            github: "https://github.com/gamedeveloper",
            linkedin: "https://linkedin.com/in/gamedeveloper",
            twitter: "https://twitter.com/gamedeveloper"
        }
    };

    const scrollToProjects = () => {
        const element = document.querySelector('#projects'); // 또는 '#skills'로 변경 가능
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden"
                 style={{backgroundColor: '#161616'}}>
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[20rem] font-bold text-gray-800/10 select-none leading-none">
                    HOME
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                        <span style={{color: '#13FF00'}}>{developerInfo.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-normal text-white">
                        게임 클라이언트 프로그래머 &<br/>
                        UI 디자이너
                    </h2>
                    <p className="text-lg text-gray-300 max-w-lg">
                        {developerInfo.bio}
                    </p>

                    <div className="flex gap-4">
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
                            Portfolio
                        </Button>
                    </div>

                    {/* Social Links with Email */}
                    <div className="flex gap-4 pt-4">
                        {[
                            {icon: Mail, href: `mailto:${developerInfo.email}`, label: "Email"},
                            {icon: Github, href: developerInfo.socialLinks.github, label: "GitHub"},
                            {icon: Linkedin, href: developerInfo.socialLinks.linkedin, label: "LinkedIn"},
                            {icon: Twitter, href: developerInfo.socialLinks.twitter, label: "Twitter"}
                        ].map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 text-gray-400 hover:text-white"
                                    title={social.label}
                                >
                                    <Icon className="w-5 h-5"/>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Content - Profile Image */}
                <div className="relative flex justify-center items-center">
                    {/* Green glow circle */}
                    <div className="absolute w-80 h-80 rounded-full opacity-50" style={{
                        background: `radial-gradient(circle, rgba(19, 255, 0, 0.3) 0%, rgba(19, 255, 0, 0.1) 50%, transparent 70%)`
                    }}/>

                    {/* Profile image */}
                    <div className="relative w-64 h-64 rounded-full overflow-hidden z-10">
                        <img
                            src={developerInfo.image}
                            alt={developerInfo.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute w-72 h-72 rounded-full border-2 opacity-30"
                         style={{borderColor: '#13FF00'}}/>
                </div>
            </div>
        </section>
    );
}