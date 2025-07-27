import React, {useState} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {ExternalLink, Github, ChevronLeft, ChevronRight} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    // 실제 MD 파일 기반 프로젝트 데이터
    const projects = [
        {
            id: 1,
            title: "Nuclear-Zero",
            subtitle: "SF 아포칼립스 2D 러닝 게임",
            description: "SF 아포칼립스 세계관을 배경으로 한 2D 도트 플랫포머 러닝 게임",
            longDescription: "플레이어는 다양한 블록과 장애물을 활용해 스테이지를 탈출하고, 알파벳을 수집해 스토리를 해금하며, 추격자 몬스터로부터 탈출해야 합니다. 총 8명의 팀원과 함께 개발하여 Google Play Store에 성공적으로 출시했습니다.",
            image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            techStack: ["Unity", "C#", "Google AdMob", "Unity IAP", "GPGS"],
            category: "Unity",
            duration: "2022년 7월 ~ 2022년 9월 (3개월)",
            role: "프로그래머 1인 전담 (전체 시스템 및 구조 구현)",
            team: "8명 (프로그래머 1, 기획 2, 사업 PM 2, 개발 PM 1, QA 1, 마케팅 1)",
            features: [
                "다양한 블록 기반 스테이지 구성 (LifeBlock, ShieldBlock, MoveBlock 등)",
                "FSM 기반 몬스터 AI 시스템",
                "Dialogue/스토리 시스템과 멀티 엔딩",
                "Unity IAP 및 Google AdMob 수익 모델",
                "Google Play Games Services 연동",
                "오브젝트 풀링 시스템"
            ],
            challenges: "팀 내 유일한 프로그래머로서 전체 시스템 설계부터 구현, 최적화, 수익 모델 연동까지 모든 기술적 구현을 담당했습니다.",
            achievements: ["Google Play Store 배포 완료", "게임 공모전 우수상 수상"],
            githubUrl: "https://github.com/example/nuclear-zero",
            liveUrl: "https://play.google.com/store/apps/details?id=com.nuclear.zero"
        },
        {
            id: 2,
            title: "Unreal Engine Counter-Strike Style FPS",
            subtitle: "멀티플레이어 FPS 게임",
            description: "Counter-Strike 스타일의 멀티플레이어 FPS 게임",
            longDescription: "팀 기반 전투 메커니즘과 네트워크 동기화 시스템을 Blueprint 기반으로 구현했습니다. 캐릭터 이동, 무기 시스템, 전투 메커니즘 및 팀 기반 점수 시스템을 포함하여 멀티플레이어 환경에서 실시간 상호작용을 최적화했습니다.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            techStack: ["Unreal Engine 5", "Blueprint", "Multiplayer Networking", "CharacterMovementComponent"],
            category: "Unreal",
            duration: "2024년 2월 ~ 2024년 4월 (2개월)",
            role: "게임플레이 프로그래머",
            team: "개인 프로젝트",
            features: [
                "CharacterMovementComponent 기반 서버 중심 이동 및 클라이언트 리플리케이션",
                "Server/Multicast RPC 기반 무기 시스템",
                "Animation Blueprint와 Blendspace를 통한 애니메이션 동기화",
                "팀 점수 및 게임 상태 관리 시스템",
                "리스폰 및 사망 상태 처리"
            ],
            challenges: "Unreal Engine의 네트워크 구조를 구조적으로 이해하고 실시간 멀티플레이어 게임의 핵심인 예측, 보정, 동기화를 구현했습니다.",
            githubUrl: "https://github.com/example/unreal-fps"
        },
        {
            id: 3,
            title: "Unreal Engine TPS Shooter Game",
            subtitle: "3인칭 슈팅 게임",
            description: "몰입감 있는 전투 경험을 제공하는 TPS 게임",
            longDescription: "Unreal Engine 5를 사용하여 개발한 3인칭 슈팅 게임입니다. TPS 장르의 몰입감 있는 전투 경험을 제공하기 위해, 캐릭터 애니메이션, 무기 시스템, 몬스터 AI, 인벤토리 및 HUD 시스템 등을 직접 구현했습니다.",
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            techStack: ["Unreal Engine 5", "C++", "Enhanced Input", "Behavior Tree", "FABRIK"],
            category: "Unreal",
            duration: "2023년 6월 ~ 2023년 8월 (3개월)",
            role: "게임플레이 프로그래머",
            team: "개인 프로젝트",
            features: [
                "Blendspace, AimOffset, FABRIK, Turn In Place 등 고급 애니메이션 시스템",
                "ECombatState 기반 무기 상태 전환 제어",
                "Behavior Tree와 Blackboard를 통한 AI 상태 분기",
                "IBulletHitInterface 구현을 통한 다형성 구조",
                "UMG 기반 HUD 및 UI 시스템"
            ],
            challenges: "TPS 장르의 핵심인 몰입감 있는 전투 연출을 위해 시스템별로 세부 튜닝을 반복하며 애니메이션 시스템과 전투 상태 머신 간의 자연스러운 연결을 구현했습니다.",
            githubUrl: "https://github.com/example/unreal-tps"
        },
        {
            id: 4,
            title: "Unity3D Beat-em-up Game",
            subtitle: "3D 격투 게임",
            description: "격투 게임 특유의 타격감과 다양한 게임 시스템 구현",
            longDescription: "Unity 기반으로 제작한 3D Beat-em-up 게임으로, 격투 게임 특유의 타격감과 다양한 게임 시스템 구현에 집중한 프로젝트입니다. 콤보 공격, 캐릭터 이동/점프, 인벤토리, 캐릭터 선택, 상점, 스테이지 진행 등 실제 상용 게임에서 사용되는 다양한 기능들을 직접 구현했습니다.",
            image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            techStack: ["Unity", "C#", "CharacterController", "Blend Tree", "FSM"],
            category: "Unity",
            duration: "2022년 4월 ~ 2022년 6월 (2개월)",
            role: "게임플레이 프로그래머",
            team: "개인 프로젝트",
            features: [
                "키 입력 큐 기반 콤보 시스템",
                "파워 차징 시스템 (입력 유지 시간에 따른 공격력 증가)",
                "FSM 기반 캐릭터 상태 제어",
                "인벤토리 시스템과 상점 시스템",
                "오브젝트 풀링을 통한 최적화",
                "SceneManager.LoadSceneAsync() 기반 비동기 로딩"
            ],
            challenges: "FSM, 상태 기반 애니메이션, 데이터-UI 연동 등 실무에서 자주 쓰이는 구조 설계를 경험하며 Queue와 Coroutine을 활용한 비동기 입력/이벤트 흐름 제어를 구현했습니다.",
            githubUrl: "https://github.com/example/unity-beatup"
        },
        {
            id: 5,
            title: "Unity3D-RPG",
            subtitle: "3D RPG 게임",
            description: "다양한 상용 RPG 게임에서 영감을 받은 종합적인 RPG 시스템",
            longDescription: "Unity 엔진 학습을 위한 첫 RPG 게임 프로젝트로, 다양한 상용 RPG 게임(WOW, 리니지, 로스트아크)에서 영감을 받아 기획 및 개발한 작품입니다. 실제 게임에서 사용되는 시스템을 직접 구현하고, Unity 엔진의 핵심 기능들을 활용하여 학습했습니다.",
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            techStack: ["Unity", "C#", "Rigidbody", "FSM AI", "UGUI", "Singleton Pattern"],
            category: "Unity",
            duration: "2021년 9월 ~ 2022년 3월 (6개월)",
            role: "게임플레이 프로그래머",
            team: "개인 프로젝트",
            features: [
                "인벤토리 시스템 (장비/회복 아이템 분류, 퀵슬롯 연동)",
                "전투 시스템 (3단 콤보, 5개 스킬 슬롯, 스킬 강화)",
                "FSM 기반 적 AI (Idle → MoveToTarget → Attack → Dead)",
                "던전 및 보스 콘텐츠",
                "퀘스트 시스템",
                "상점 시스템"
            ],
            challenges: "Unity의 기본적인 구조부터 복잡한 RPG 시스템까지 단계별로 학습하며, 실제 상용 게임 수준의 시스템 설계 방법론을 익혔습니다.",
            githubUrl: "https://github.com/example/unity-rpg"
        },
        {
            id: 6,
            title: "Mobile Strategy Game",
            subtitle: "실시간 전략 모바일 게임",
            description: "Unity 기반 모바일 전략 게임",
            longDescription: "모바일 플랫폼에 최적화된 실시간 전략 게임입니다. 터치 인터페이스와 직관적인 UI/UX를 제공합니다.",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            techStack: ["Unity", "C#", "Firebase", "Unity Analytics"],
            category: "Mobile",
            duration: "4개월",
            role: "UI/UX Programmer",
            team: "4명",
            features: [
                "터치 최적화 인터페이스",
                "실시간 전투 시스템",
                "클라우드 세이브",
                "인앱 결제 시스템"
            ],
            challenges: "다양한 모바일 디바이스에서의 성능 최적화와 터치 반응성을 개선했습니다.",
            githubUrl: "https://github.com/example/mobile-strategy",
            liveUrl: "https://play.google.com/store/apps/details?id=com.example.strategy"
        },
        {
            id: 7,
            title: "VR Adventure Game",
            subtitle: "가상현실 어드벤처 게임",
            description: "Unity XR을 활용한 VR 게임",
            longDescription: "Virtual Reality 환경에서 플레이하는 어드벤처 게임입니다.",
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            techStack: ["Unity", "Unity XR", "Oculus SDK"],
            category: "Unity",
            duration: "5개월",
            role: "VR Developer",
            team: "3명",
            features: ["VR 인터랙션", "공간 트래킹", "손동작 인식"],
            challenges: "VR 환경에서의 사용자 경험 최적화",
            githubUrl: "https://github.com/example/vr-adventure"
        },
        {
            id: 8,
            title: "AR Educational App",
            subtitle: "증강현실 교육 앱",
            description: "AR 기술을 활용한 교육용 모바일 앱",
            longDescription: "증강현실 기술을 활용하여 교육 콘텐츠를 제공하는 모바일 애플리케이션입니다.",
            image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
            techStack: ["Unity", "ARCore", "ARKit"],
            category: "Mobile",
            duration: "3개월",
            role: "AR Developer",
            team: "5명",
            features: ["AR 객체 인식", "교육 콘텐츠", "실시간 렌더링"],
            challenges: "다양한 디바이스에서의 AR 안정성 확보",
            githubUrl: "https://github.com/example/ar-education"
        }
    ];

    // Filter projects by category
    const filterProjects = (category) => {
        if (category === "All") return projects;
        return projects.filter(project =>
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

    // 페이지네이션 계산
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // 탭 변경 시 페이지를 1로 리셋
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setCurrentPage(1);
    };

    // 페이지 변경
    const handlePageChange = (page) => {
        setCurrentPage(page);
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
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <Button className="text-black mb-4" style={{backgroundColor: '#13FF00'}}>
                                            View Preview
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
                                                View Code →
                                            </Button>
                                            {project.liveUrl && (
                                                <Button
                                                    size="sm"
                                                    className="text-black"
                                                    style={{backgroundColor: '#13FF00'}}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.liveUrl, '_blank');
                                                    }}
                                                >
                                                    Live Preview →
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-2">{project.subtitle}</p>
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
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="text-white border-gray-600 hover:bg-gray-700 disabled:opacity-50"
                        >
                            <ChevronLeft className="w-4 h-4"/>
                        </Button>

                        {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                size="icon"
                                onClick={() => handlePageChange(page)}
                                className={`${
                                    currentPage === page
                                        ? 'text-black'
                                        : 'text-white border-gray-600 hover:bg-gray-700'
                                }`}
                                style={{
                                    backgroundColor: currentPage === page ? '#13FF00' : 'transparent'
                                }}
                            >
                                {page}
                            </Button>
                        ))}

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
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
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
                        </p>
                    </div>
                )}

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}