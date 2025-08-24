// components/ProjectDetailPage.tsx (수정된 버전)
import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { useRouter } from '../contexts/RouterContext';
import { projectsData } from '../data/projectsData.tsx';

export default function ProjectDetailPage() {
    const { params, goBack } = useRouter();
    const idStr = params.id ?? "";                // id가 없으면 빈 문자열
    const projectId = Number.parseInt(idStr, 10);
    const project = projectsData.find(p => p.id === projectId);

    // 컴포넌트 마운트 시 최상단으로 스크롤
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    // 프로젝트가 없는 경우
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#161616'}}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">프로젝트를 찾을 수 없습니다</h1>
                    <p className="text-gray-300 mb-6">요청하신 프로젝트가 존재하지 않습니다.</p>
                    <Button onClick={goBack} className="text-black" style={{backgroundColor: '#13FF00'}}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        돌아가기
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{backgroundColor: '#161616'}}>
            {/* Header with Back Button */}
            <div className="pt-20 pb-8" style={{backgroundColor: '#161616'}}>
                <div className="max-w-6xl mx-auto px-6">
                    <Button
                        onClick={goBack}
                        variant="outline"
                        className="mb-6 text-white border-white hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        프로젝트 목록으로 돌아가기
                    </Button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400';
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-8 left-0 right-0">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex items-center mb-4">
                            <Badge className="text-black mr-4" style={{backgroundColor: '#13FF00'}}>
                                {project.category}
                            </Badge>
                            <span className="text-gray-200 text-sm">{project.duration}</span>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
                        <p className="text-xl text-gray-200">{project.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="space-y-8">
                                {/* 프로젝트 개요 */}
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-6">프로젝트 개요</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {project.longDescription}
                                    </p>
                                </div>

                                {/* 주요 기능 */}
                                {project.features && project.features.length > 0 && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6">주요 기능</h3>
                                        <div className="space-y-4">
                                            {project.features.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-4">
                                                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#13FF00'}} />
                                                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* 기술적 도전 */}
                                {project.challenges && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6">기술적 도전</h3>
                                        <div className="bg-gray-800/50 rounded-2xl p-6 border-l-4" style={{borderColor: '#13FF00'}}>
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                {project.challenges}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* 성과 */}
                                {project.achievements && project.achievements.length > 0 && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6">주요 성과</h3>
                                        <div className="space-y-4">
                                            {project.achievements.map((achievement, index) => (
                                                <div key={index} className="flex items-start space-x-4 bg-green-900/20 rounded-lg p-4">
                                                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{backgroundColor: '#13FF00'}} />
                                                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* 프로젝트 정보 */}
                            <Card className="border-0 rounded-2xl p-6" style={{backgroundColor: '#1D1D1D'}}>
                                <h3 className="text-xl font-bold text-white mb-6">프로젝트 정보</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">개발 기간</h4>
                                        <p className="text-white">{project.duration}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">담당 역할</h4>
                                        <p className="text-white">{project.role}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">팀 구성</h4>
                                        <p className="text-white">{project.team}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 mb-1">프로젝트 유형</h4>
                                        <Badge className="text-black" style={{backgroundColor: '#13FF00'}}>
                                            {project.category}
                                        </Badge>
                                    </div>
                                </div>
                            </Card>

                            {/* 기술 스택 */}
                            <Card className="border-0 rounded-2xl p-6" style={{backgroundColor: '#1D1D1D'}}>
                                <h3 className="text-xl font-bold text-white mb-6">사용 기술</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.techStack.map((tech, index) => (
                                        <Badge key={index} className="text-black px-3 py-1 text-sm" style={{backgroundColor: '#13FF00'}}>
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>

                            {/* 액션 버튼 */}
                            <div className="space-y-4">
                                {project.liveUrl && (
                                    <Button
                                        asChild
                                        className="w-full text-black font-semibold py-3"
                                        style={{backgroundColor: '#13FF00'}}
                                    >
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            라이브 데모 보기
                                        </a>
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="w-full text-white border-white hover:bg-green-400 hover:text-black hover:border-green-400 py-3"
                                    >
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            소스 코드 보기
                                        </a>
                                    </Button>
                                )}

                                {/* 추가 뒤로가기 버튼 */}
                                <Button
                                    onClick={goBack}
                                    variant="outline"
                                    className="w-full text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white py-3"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    다른 프로젝트 보기
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <div className="fixed bottom-8 right-8">
                <Button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-12 h-12 rounded-full text-black shadow-lg"
                    style={{backgroundColor: '#13FF00'}}
                    title="맨 위로"
                >
                    ↑
                </Button>
            </div>
        </div>
    );
}