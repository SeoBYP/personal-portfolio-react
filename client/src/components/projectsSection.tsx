// components/projectsSection.tsx (스크롤 개선 버전)
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from '../contexts/RouterContext';
import { projectsData } from '../data/projectsData.tsx';

export default function ProjectsSection() {
    const { navigate, currentPage } = useRouter();
    const [activeTab, setActiveTab] = useState("All");
    const [currentPage_pagination, setCurrentPage_pagination] = useState(1);
    const projectsPerPage = 6;

    // 홈 페이지로 돌아왔을 때 프로젝트 섹션으로 스크롤하지 않도록 설정
    useEffect(() => {
        // 페이지가 project에서 home으로 변경되었을 때는 라우터에서 처리
        // 여기서는 추가적인 스크롤 처리를 하지 않음
    }, [currentPage]);

    // Filter projects by category
    const filterProjects = (category: string) => {
        if (category === "All") return projectsData;
        return projectsData.filter(project =>
            project.techStack.some(tech => {
                const techLower = tech.toLowerCase();
                if (category === "Unity") return techLower.includes("unity") || techLower.includes("c#");
                if (category === "Unreal") return techLower.includes("unreal") || techLower.includes("c++");
                if (category === "Mobile") return techLower.includes("mobile") || techLower.includes("android") || techLower.includes("ios") || techLower.includes("arcore") || techLower.includes("arkit");
                if (category === "Web") return techLower.includes("web") || techLower.includes("react") || techLower.includes("javascript");
                return false;
            })
        );
    };

    const tabs = [
        {id: "All", label: "All"},
        {id: "Unity", label: "Unity"},
        {id: "Unreal", label: "Unreal Engine"},
        {id: "Mobile", label: "Mobile"},
        {id: "Web", label: "Web"}
    ];

    const filteredProjects = filterProjects(activeTab);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const startIndex = (currentPage_pagination - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // 탭 변경 시 페이지를 1로 리셋
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        setCurrentPage_pagination(1);
    };

    // 페이지 변경
    const handlePageChange = (page: number) => {
        setCurrentPage_pagination(page);
        // 프로젝트 섹션 상단으로 스크롤
        const element = document.getElementById('projects');
        if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // 프로젝트 클릭 핸들러
    const handleProjectClick = (project: any) => {
        // 현재 스크롤 위치를 저장하고 프로젝트 상세 페이지로 이동
        navigate('project', { id: project.id });
    };

    return (
        <section id="projects" className="py-20 relative overflow-hidden" style={{backgroundColor: '#0F0F0F'}}>
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[15rem] font-bold text-gray-800/5 select-none leading-none">
                    PROJECTS
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">PROJECTS</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        지금까지 개발한 다양한 게임 프로젝트들을 소개합니다. 각 프로젝트를 클릭하여 자세한 내용을 확인해보세요.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="flex gap-2 p-2 rounded-xl" style={{backgroundColor: '#1D1D1D'}}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'text-black'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                style={{
                                    backgroundColor: activeTab === tab.id ? '#13FF00' : 'transparent'
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {currentProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="group cursor-pointer transition-all duration-300 transform hover:scale-105 border-0 relative overflow-hidden"
                            style={{backgroundColor: '#1D1D1D'}}
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400';
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <Button className="text-black mb-4" style={{backgroundColor: '#13FF00'}}>
                                            자세히 보기
                                        </Button>
                                        <div className="flex gap-2 justify-center">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="text-white border-white hover:bg-white hover:text-black"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (project.githubUrl) window.open(project.githubUrl, '_blank');
                                                }}
                                            >
                                                코드 보기 →
                                            </Button>
                                            {project.liveUrl && (
                                                <Button
                                                    size="sm"
                                                    className="text-black"
                                                    style={{backgroundColor: '#13FF00'}}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (project.liveUrl) window.open(project.liveUrl, '_blank');
                                                    }}
                                                >
                                                    라이브 데모 →
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-white text-xl font-semibold mb-2 line-clamp-1">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.subtitle}</p>
                                    <Badge className="text-black text-xs" style={{backgroundColor: '#13FF00'}}>
                                        {project.category}
                                    </Badge>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech, index) => (
                                        <Badge key={index} variant="secondary"
                                               className="text-gray-300 bg-gray-700 text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <Badge variant="secondary" className="text-gray-300 bg-gray-700 text-xs">
                                            +{project.techStack.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage_pagination - 1)}
                            disabled={currentPage_pagination === 1}
                            className="text-white border-gray-600 hover:bg-gray-700 disabled:opacity-50"
                        >
                            <ChevronLeft className="w-4 h-4"/>
                        </Button>

                        {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage_pagination === page ? "default" : "outline"}
                                size="icon"
                                onClick={() => handlePageChange(page)}
                                className={`${
                                    currentPage_pagination === page
                                        ? 'text-black'
                                        : 'text-white border-gray-600 hover:bg-gray-700'
                                }`}
                                style={{
                                    backgroundColor: currentPage_pagination === page ? '#13FF00' : 'transparent'
                                }}
                            >
                                {page}
                            </Button>
                        ))}

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage_pagination + 1)}
                            disabled={currentPage_pagination === totalPages}
                            className="text-white border-gray-600 hover:bg-gray-700 disabled:opacity-50"
                        >
                            <ChevronRight className="w-4 h-4"/>
                        </Button>
                    </div>
                )}

                {/* Page Info */}
                {filteredProjects.length > 0 && (
                    <div className="text-center mt-8">
                        <p className="text-gray-400">
                            {filteredProjects.length}개 프로젝트 중 {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)}번째 표시
                        </p>
                    </div>
                )}

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg mb-4">선택한 카테고리에 프로젝트가 없습니다.</p>
                        <Button
                            onClick={() => setActiveTab("All")}
                            className="text-black"
                            style={{backgroundColor: '#13FF00'}}
                        >
                            모든 프로젝트 보기
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}