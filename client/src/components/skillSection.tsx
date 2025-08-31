import React from 'react';
import {Card} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Gamepad2, Code, Wrench, Layers,} from 'lucide-react';

export function SkillsSection() {
    const skills = [
        // Game Engines
        {id: 1, name: "Unity", category: "Game Engine", level: 5},
        {id: 2, name: "Unreal Engine", category: "Game Engine", level: 4},
        {id: 3, name: "DirectX", category: "Game Engine", level: 4},

        // Programming
        {id: 5, name: "C#", category: "Programming", level: 5},
        {id: 6, name: "C++", category: "Programming", level: 4},
        {id: 7, name: "Java", category: "Programming", level: 3},
        {id: 8, name: "Java Spring", category: "Programming", level: 3},
        {id: 9, name: "JavaScript", category: "Programming", level: 3},
        {id: 10, name: "Node.js", category: "Programming", level: 3},
        {id: 11, name: "HTML", category: "Programming", level: 3},
        {id: 12, name: "CSS", category: "Programming", level: 2},
        {id: 13, name: "React", category: "Programming", level: 2},

        // Game Development
        {id: 15, name: "Game Design", category: "Game Development", level: 4},
        {id: 16, name: "DOTS", category: "Game Development", level: 3},
        {id: 17, name: "Optimization", category: "Game Development", level: 3},

        // Tools
        {id: 20, name: "Git", category: "Tools", level: 4},
        {id: 21, name: "GitLab", category: "Tools", level: 4},
        {id: 22, name: "UniTask", category: "Tools", level: 4},
        {id: 23, name: "R3", category: "Tools", level: 4},
        {id: 24, name: "UniRx", category: "Tools", level: 4},
        {id: 25, name: "VContainer", category: "Tools", level: 4},
        {id: 26, name: "MessagePipe", category: "Tools", level: 4},
        {id: 27, name: "DoTween", category: "Tools", level: 4},
        {id: 28, name: "LitMotion", category: "Tools", level: 4},
    ];

    const categories = [
        {
            name: "Game Engine",
            icon: Gamepad2,
            color: "#13FF00",
            description: "게임 엔진 및 관련 기술"
        },
        {
            name: "Programming",
            icon: Code,
            color: "#13FF00",
            description: "프로그래밍 언어 및 개발"
        },
        {
            name: "Game Development",
            icon: Layers,
            color: "#13FF00",
            description: "게임 개발 전문 분야"
        },
        {
            name: "Tools",
            icon: Wrench,
            color: "#13FF00",
            description: "개발 도구 및 소프트웨어"
        }
    ];

    const getSkillsByCategory = (category) => {
        return skills
            .filter(skill => skill.category === category)
            .sort((a, b) => b.level - a.level);
    };

    const getSkillLevelColor = (level) => {
        if (level >= 5) return '#13FF00';
        if (level >= 4) return '#00FF88';
        if (level >= 3) return '#88FF00';
        return '#FFFF00';
    };

    return (
        <section id="skills" className="py-20 relative" style={{backgroundColor: '#0F0F0F'}}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[15rem] font-bold text-gray-800/5 select-none leading-none">
                    SKILLS
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-white mb-6">기술 스택</h3>
                    <div className="w-20 h-1 mx-auto mb-6" style={{backgroundColor: '#13FF00'}}></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        게임 개발에 필요한 다양한 기술들을 학습하고 프로젝트에 적용해왔습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const categorySkills = getSkillsByCategory(category.name);

                        return (
                            <Card key={category.name}
                                  className="border-0 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                                  style={{backgroundColor: '#161616'}}>
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{backgroundColor: '#13FF00'}}>
                                    <Icon className="w-8 h-8 text-black"/>
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">{category.name}</h4>
                                <p className="text-sm text-gray-400 mb-4">{category.description}</p>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {categorySkills.map((skill) => (
                                        <Badge
                                            key={skill.id}
                                            variant="secondary"
                                            className="text-xs px-2 py-1 transition-colors duration-200"
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                color: getSkillLevelColor(skill.level),
                                                border: `1px solid ${getSkillLevelColor(skill.level)}40`
                                            }}
                                        >
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
