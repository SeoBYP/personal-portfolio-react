import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Globe } from 'lucide-react';
import {developerInfo} from '../data/developerInfo.tsx';

export function HeroSection() {

    const UnityLogo: React.FC = () => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 50 50">
            <path fill="currentColor" d="M 40.449219 3 C 40.359375 2.996094 40.265625 3.007813 40.175781 3.03125 L 23.765625 7.03125 C 23.449219 7.105469 23.191406 7.328125 23.074219 7.628906 L 21.324219 12 L 16 12 C 15.722656 12 15.453125 12.117188 15.265625 12.324219 L 3.265625 25.324219 C 2.894531 25.722656 2.914063 26.347656 3.3125 26.722656 L 15.890625 38.722656 C 16.078125 38.902344 16.324219 39 16.582031 39 L 22.324219 39 L 24.074219 43.371094 C 24.199219 43.695313 24.488281 43.925781 24.828125 43.984375 L 42.289063 46.984375 C 42.816406 47.078125 43.320313 46.734375 43.4375 46.214844 L 46.976563 29.984375 C 47.03125 29.734375 46.988281 29.46875 46.855469 29.25 L 44.527344 25.429688 L 46.902344 20.429688 C 47.015625 20.191406 47.03125 19.917969 46.941406 19.671875 L 41.359375 3.671875 C 41.222656 3.28125 40.859375 3.015625 40.449219 3 Z M 39.769531 5.1875 L 44.921875 19.941406 L 43.445313 23.046875 L 39.953125 11.703125 C 39.824219 11.277344 39.421875 10.988281 38.972656 11 C 38.605469 11.011719 38.269531 11.222656 38.105469 11.550781 L 31.105469 25.550781 C 30.945313 25.871094 30.96875 26.25 31.164063 26.546875 L 39.164063 38.757813 C 39.382813 39.09375 39.785156 39.261719 40.179688 39.191406 C 40.570313 39.121094 40.886719 38.820313 40.972656 38.429688 L 43.453125 27.515625 L 44.9375 29.949219 L 41.6875 44.851563 L 25.71875 42.109375 L 24.601563 39.3125 L 36.183594 41.464844 C 36.578125 41.535156 36.980469 41.367188 37.199219 41.03125 C 37.421875 40.691406 37.421875 40.257813 37.195313 39.921875 L 28.828125 27.441406 C 28.644531 27.167969 28.332031 27 28 27 L 12 27 C 11.585938 27 11.214844 27.253906 11.066406 27.640625 C 10.917969 28.023438 11.023438 28.460938 11.328125 28.738281 L 20.414063 37 L 16.984375 37 L 5.402344 25.953125 L 16.4375 14 L 19.738281 14 L 11.261719 23.328125 C 10.992188 23.621094 10.925781 24.042969 11.085938 24.40625 C 11.246094 24.765625 11.605469 25 12 25 L 28 25 C 28.378906 25 28.726563 24.785156 28.894531 24.449219 L 35.894531 10.449219 C 36.046875 10.140625 36.035156 9.78125 35.859375 9.488281 C 35.683594 9.195313 35.375 9.011719 35.03125 9 C 34.945313 8.996094 34.859375 9.003906 34.777344 9.023438 L 23.640625 11.59375 L 24.734375 8.851563 Z M 33.15625 11.453125 L 27.382813 23 L 14.261719 23 L 22.53125 13.90625 Z M 38.78125 14.679688 L 41.964844 25.039063 L 39.546875 35.691406 L 33.152344 25.933594 Z M 14.585938 29 L 27.46875 29 L 34.210938 39.0625 L 23.464844 37.066406 Z"></path>
        </svg>
    );

    const UnrealLogo: React.FC = () => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 50 50">
            <path fill="currentColor" d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 23.640625 10.449219 C 23.566406 10.449219 23.492188 10.460938 23.421875 10.476563 C 19.46875 11.417969 15.394531 14.1875 12.332031 17.609375 C 9.273438 21.035156 7.164063 25.140625 7.632813 28.980469 C 7.6875 29.40625 8.007813 29.753906 8.433594 29.839844 C 8.855469 29.921875 9.285156 29.726563 9.5 29.347656 C 11.453125 25.894531 13.070313 23.984375 14.222656 22.96875 C 15.375 21.949219 16.117188 21.859375 16.058594 21.859375 C 16.132813 21.859375 16.152344 21.863281 16.171875 21.863281 C 16.148438 21.839844 16.1875 21.859375 16.1875 22.109375 L 16.1875 32.59375 C 16.1875 32.714844 16.1875 32.683594 16.191406 32.671875 C 16.0625 32.703125 15.640625 32.6875 15.238281 32.625 C 14.847656 32.570313 14.457031 32.746094 14.246094 33.082031 C 14.035156 33.417969 14.039063 33.84375 14.261719 34.171875 C 17.746094 39.367188 25.367188 39.546875 25.367188 39.546875 C 25.660156 39.5625 25.945313 39.445313 26.144531 39.226563 L 28.726563 36.421875 L 31.109375 38.460938 C 31.449219 38.75 31.933594 38.78125 32.304688 38.539063 C 34.808594 36.917969 36.84375 34.773438 38.273438 32.917969 C 38.988281 31.992188 39.550781 31.136719 39.949219 30.441406 C 40.144531 30.09375 40.300781 29.785156 40.417969 29.511719 C 40.535156 29.234375 40.640625 29.058594 40.640625 28.628906 C 40.644531 28.214844 40.386719 27.84375 40.003906 27.695313 C 39.617188 27.546875 39.179688 27.648438 38.902344 27.957031 C 37.800781 29.167969 36.808594 29.859375 36.0625 30.246094 C 35.316406 30.628906 34.703125 30.691406 34.824219 30.691406 C 34.734375 30.691406 34.707031 30.679688 34.632813 30.671875 L 34.632813 18.570313 C 34.632813 18.761719 34.710938 18.328125 34.972656 17.878906 C 35.238281 17.429688 35.621094 16.867188 36.042969 16.296875 C 36.878906 15.160156 37.839844 13.996094 38.328125 13.371094 C 38.59375 13.035156 38.613281 12.566406 38.378906 12.207031 C 38.144531 11.847656 37.707031 11.679688 37.292969 11.785156 C 34.078125 12.628906 31.824219 13.859375 30.363281 14.902344 C 29.332031 15.636719 29.121094 15.953125 28.824219 16.28125 C 28.746094 16.246094 28.761719 16.238281 28.671875 16.207031 C 28.132813 16.015625 27.347656 15.835938 26.316406 15.835938 C 25.898438 15.835938 25.527344 16.097656 25.378906 16.488281 C 25.234375 16.882813 25.351563 17.324219 25.667969 17.59375 C 26.253906 18.097656 26.964844 18.996094 26.964844 19.730469 L 26.964844 30.574219 C 26.769531 30.703125 26.675781 30.78125 26.304688 30.988281 C 25.703125 31.324219 24.914063 31.597656 24.730469 31.597656 C 24.277344 31.597656 23.953125 31.488281 23.816406 31.398438 C 23.683594 31.308594 23.6875 31.324219 23.6875 31.183594 L 23.6875 17.574219 C 23.691406 17.214844 23.496094 16.882813 23.183594 16.703125 C 22.871094 16.527344 22.488281 16.53125 22.175781 16.714844 C 22.097656 16.519531 21.988281 16.046875 21.988281 15.25 C 21.988281 14.875 22.460938 14.019531 23.058594 13.363281 C 23.65625 12.710938 24.261719 12.246094 24.261719 12.246094 C 24.605469 11.980469 24.742188 11.53125 24.601563 11.121094 C 24.457031 10.714844 24.070313 10.441406 23.640625 10.449219 Z M 20.332031 14.035156 C 20.179688 14.421875 19.988281 14.789063 19.988281 15.25 C 19.988281 16.207031 20.09375 16.910156 20.328125 17.480469 C 20.566406 18.050781 21.015625 18.511719 21.523438 18.679688 C 21.589844 18.703125 21.625 18.664063 21.6875 18.675781 L 21.6875 31.183594 C 21.6875 31.949219 22.121094 32.671875 22.707031 33.0625 C 23.296875 33.453125 23.992188 33.597656 24.730469 33.597656 C 25.738281 33.597656 26.566406 33.132813 27.28125 32.734375 C 27.996094 32.335938 28.546875 31.9375 28.546875 31.9375 C 28.808594 31.746094 28.964844 31.445313 28.964844 31.125 L 28.964844 19.730469 C 28.964844 19.1875 28.710938 18.789063 28.53125 18.347656 C 28.957031 18.566406 29.480469 18.449219 29.777344 18.070313 C 29.777344 18.070313 30.25 17.4375 31.527344 16.53125 C 32.265625 16.003906 33.347656 15.421875 34.628906 14.859375 C 34.550781 14.960938 34.503906 15.011719 34.429688 15.113281 C 33.988281 15.714844 33.570313 16.316406 33.25 16.871094 C 32.925781 17.425781 32.632813 17.839844 32.632813 18.570313 L 32.632813 31.011719 C 32.632813 31.363281 32.761719 31.746094 32.980469 32.015625 C 33.199219 32.28125 33.46875 32.429688 33.703125 32.519531 C 34.167969 32.699219 34.554688 32.691406 34.824219 32.691406 C 35.183594 32.691406 35.707031 32.445313 36.179688 32.269531 C 35.019531 33.683594 33.527344 35.167969 31.78125 36.40625 L 29.292969 34.277344 C 28.882813 33.925781 28.269531 33.960938 27.90625 34.359375 L 25.046875 37.46875 C 24.460938 37.421875 20.171875 36.878906 17.246094 34.269531 C 17.425781 34.160156 17.621094 34.125 17.765625 33.941406 C 18.058594 33.570313 18.1875 33.082031 18.1875 32.59375 L 18.1875 22.109375 C 18.1875 21.527344 18.046875 20.929688 17.628906 20.484375 C 17.214844 20.035156 16.605469 19.859375 16.058594 19.859375 C 16.054688 19.859375 16.054688 19.859375 16.054688 19.859375 C 15.257813 19.859375 14.28125 20.25 12.902344 21.46875 C 12.171875 22.109375 11.335938 23.039063 10.425781 24.25 C 11.160156 22.460938 12.320313 20.625 13.824219 18.945313 C 15.691406 16.859375 18 15.265625 20.332031 14.035156 Z"></path>
        </svg>
    );

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

    return (
        <>
            <style>{`
                @keyframes orbitClockwise {
                    from {
                        transform: rotate(0deg) translateX(140px) rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg) translateX(140px) rotate(-360deg);
                    }
                }

                @keyframes orbitClockwiseOpposite {
                    from {
                        transform: rotate(180deg) translateX(140px) rotate(-180deg);
                    }
                    to {
                        transform: rotate(540deg) translateX(140px) rotate(-540deg);
                    }
                }

                .orbit-clockwise {
                    animation: orbitClockwise 12s linear infinite;
                }

                .orbit-clockwise-opposite {
                    animation: orbitClockwiseOpposite 12s linear infinite;
                }
            `}</style>

            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden"
                     style={{backgroundColor: '#161616'}}>
                <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="text-lg font-medium" style={{color: '#13FF00'}}>
                                안녕하세요!
                            </div>
                            <div className="h-1 w-20 bg-gray-600 rounded"/>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            {developerInfo.name}<br/>
                            <span style={{color: '#13FF00'}}>{developerInfo.title}</span>
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
                                // {icon: Instagram, href: developerInfo.socialLinks.instagram, label: "Instagram"},
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
                            <div
                                className="relative w-64 h-64 mx-auto rounded-full overflow-hidden z-10 border-4 flex items-center justify-center"
                                style={{borderColor: 'rgba(19, 255, 0, 0.2)'}}>
                                <div className="text-6xl"></div>
                            </div>

                            {/* Unity Logo - 궤도 공전 (0도에서 시작) */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="orbit-clockwise">
                                    <div
                                        className="w-32 h-32 rounded-full flex items-center justify-center border-4"
                                        style={{
                                            backgroundColor: '#161616',
                                            borderColor: '#13FF00',
                                            boxShadow: '0 0 20px rgba(19, 255, 0, 1)',
                                        }}
                                    >
                                        <div className="w-16 h-16 -translate-x-1" style={{ color: '#13FF00' }}>
                                            <UnityLogo />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Unreal Engine Logo - 궤도 공전 (180도 반대편에서 시작) */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="orbit-clockwise-opposite">
                                    <div className="w-32 h-32 rounded-full flex items-center justify-center border-4"
                                         style={{
                                             backgroundColor: '#161616',
                                             borderColor: '#13FF00',
                                             boxShadow: '0 0 20px rgba(19, 255, 0, 1)'
                                         }}>
                                        <div className="w-16 h-16" style={{color: '#13FF00'}}>
                                            <UnrealLogo />
                                        </div>
                                    </div>
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
                {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce">*/}
                {/*    <div className="flex flex-col items-center gap-2">*/}
                {/*        <span>Scroll to explore</span>*/}
                {/*        <div className="w-0.5 h-8 bg-gray-400 rounded-full"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </>
    );
}