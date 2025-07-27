import React from 'react';
import {Card} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Gamepad2, Code, Wrench, Layers, Award, Calendar, User, Target} from 'lucide-react';

// About Me Section
export function AboutMeSection() {
    const developerInfo = {
        name: "서범필",
        experience: "3+"
    };

    return (
        <section id="about" className="relative overflow-hidden">
            <div className="py-20 relative" style={{backgroundColor: '#1D1D1D'}}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-[15rem] font-bold text-gray-800/5 select-none leading-none">
                        ABOUT
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">ABOUT ME</h2>
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-gray-300 mb-8">
                            안녕하세요! <span style={{color: '#13FF00'}}>{developerInfo.name}</span>입니다.
                            게임 개발에 열정을 가진 학부생으로, <span style={{color: '#13FF00'}}>Unity</span>와 <span
                            style={{color: '#13FF00'}}>Unreal Engine</span>을
                            주력으로 게임을 만들고 있습니다.
                        </p>

                        <p className="text-xl text-gray-300 mb-8">
                            <span style={{color: '#13FF00'}}>실제 게임 문제를 해결하는 것</span>을 좋아하며,
                            사용자에게 재미있는 경험을 제공하는 게임을 만드는 것이 목표입니다.
                            새로운 기술과 도전을 두려워하지 않습니다.
                        </p>

                        <p className="text-xl text-gray-300">
                            지금까지 <span style={{color: '#13FF00'}}>RPG, FPS, 2D 플랫포머</span> 등
                            다양한 장르의 게임을 개발해왔으며, 앞으로도 계속 성장하는 개발자가 되겠습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}