import React from 'react';
import {Card} from '@/components/ui/card';
import {Gamepad2,  Award,  Target} from 'lucide-react';

// Experience Section
export function ExperienceSection() {
    const experiences = [
        {
            period: "2024.02 - Now",
            company: "개인 프로젝트",
            role: "게임 클라이언트 개발자",
            description: "Unity와 Unreal Engine을 활용한 다양한 장르의 게임 개발 프로젝트 진행"
        },
        {
            period: "2022 - 2024",
            company: "게임 개발 학습",
            role: "학습자",
            description: "게임 엔진 기초부터 고급 기능까지 체계적 학습 및 포트폴리오 프로젝트 제작"
        }
    ];

    const achievements = [
        {
            title: "Google Play Store 출시",
            description: "Nuclear-Zero 게임 상용 출시",
            icon: Award
        },
        {
            title: "게임 공모전 우수상",
            description: "Nuclear-Zero 프로젝트로 수상",
            icon: Target
        },
        {
            title: "5개 이상 완성작",
            description: "다양한 장르의 게임 프로젝트 완료",
            icon: Gamepad2
        }
    ];

    return (
        <section id="experience" className="py-20 relative" style={{backgroundColor: '#161616'}}>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Experience */}
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-4xl font-bold text-white mb-4">개발 경험</h3>
                            <div className="w-20 h-1 mx-auto" style={{backgroundColor: '#13FF00'}}></div>
                        </div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 mb-8">
                                <div className="absolute left-0 top-0 w-0.5 h-full"
                                     style={{backgroundColor: '#13FF00'}}></div>
                                <div
                                    className="absolute left-0 top-2 w-3 h-3 rounded-full transform -translate-x-1.5"
                                    style={{backgroundColor: '#13FF00'}}></div>

                                <div>
                                    <p className="text-sm mb-2" style={{color: '#13FF00'}}>{exp.period}</p>
                                    <h4 className="text-xl font-bold text-white mb-2">{exp.company}</h4>
                                    <p className="text-md text-gray-400 mb-3">{exp.role}</p>
                                    <p className="text-gray-300 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Achievements */}
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-4xl font-bold text-white mb-4">주요 성과</h3>
                            <div className="w-20 h-1 mx-auto" style={{backgroundColor: '#13FF00'}}></div>
                        </div>

                        <div className="space-y-6">
                            {achievements.map((achievement, index) => {
                                const Icon = achievement.icon;
                                return (
                                    <Card key={index} className="border-0 rounded-2xl p-6" style={{backgroundColor: '#1D1D1D'}}>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                                 style={{backgroundColor: '#13FF00'}}>
                                                <Icon className="w-6 h-6 text-black"/>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                                                <p className="text-gray-300">{achievement.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Years Visual */}
                        <div className="text-center mt-12">
                            <div
                                className="w-48 h-48 mx-auto mb-6 rounded-full border-4 flex items-center justify-center relative overflow-hidden group"
                                style={{borderColor: '#13FF00'}}>
                                <div
                                    className="absolute inset-2 rounded-full border border-green-500/20 animate-spin"
                                    style={{animationDuration: '20s'}}></div>
                                <div
                                    className="w-36 h-36 rounded-full flex items-center justify-center relative z-10"
                                    style={{backgroundColor: 'rgba(19, 255, 0, 0.1)'}}>
                                    <span className="text-4xl font-bold" style={{color: '#13FF00'}}>3+</span>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Years</h4>
                            <p className="text-gray-300">게임 개발 경험</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}