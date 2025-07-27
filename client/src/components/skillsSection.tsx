import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Monitor, Server, Wrench } from 'lucide-react';

export default function SkillsSection() {
    const skills = [
        { id: 1, name: "Unity", category: "Game Engine", level: 5 },
        { id: 2, name: "C#", category: "Game Engine", level: 5 },
        { id: 3, name: "Unreal Engine", category: "Game Engine", level: 4 },
        { id: 4, name: "C++", category: "Game Engine", level: 4 },
        { id: 5, name: "React", category: "Frontend", level: 4 },
        { id: 6, name: "TypeScript", category: "Frontend", level: 4 },
        { id: 7, name: "Node.js", category: "Backend", level: 3 },
        { id: 8, name: "Python", category: "Backend", level: 3 },
        { id: 9, name: "Git", category: "Tools", level: 4 },
        { id: 10, name: "Blender", category: "Tools", level: 3 }
    ];

    const categories = [
        { name: "Game Engine", icon: Gamepad2, color: "#13FF00" },
        { name: "Frontend", icon: Monitor, color: "#13FF00" },
        { name: "Backend", icon: Server, color: "#13FF00" },
        { name: "Tools", icon: Wrench, color: "#13FF00" }
    ];

    const getSkillsByCategory = (category: string) => {
        return skills
            .filter(skill => skill.category === category)
            .sort((a, b) => b.level - a.level);
    };

    return (
        <section id="skills" className="py-20 relative overflow-hidden" style={{backgroundColor: '#1D1D1D'}}>
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[15rem] font-bold text-gray-800/5 select-none leading-none">
                    SKILLS
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">SKILLS</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const categorySkills = getSkillsByCategory(category.name);

                        return (
                            <Card key={category.name} className="border-0 rounded-2xl p-8 text-center" style={{backgroundColor: '#161616'}}>
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#13FF00'}}>
                                    <Icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-6">{category.name}</h3>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {categorySkills.map((skill) => (
                                        <Badge
                                            key={skill.id}
                                            variant="secondary"
                                            className="bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
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