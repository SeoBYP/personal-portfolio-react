import React from 'react';

// Services Section
export function ServicesSection() {
    const services = [
        {
            title: "Unity Game Development",
            description: "Unity 엔진을 활용한 모바일 및 PC 게임 개발, C# 기반 게임 로직 구현 및 최적화",
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                </svg>
            )
        },
        {
            title: "Unreal Engine Development",
            description: "Unreal Engine 기반 3D 게임 개발, Blueprint 및 C++ 활용한 고품질 게임 제작",
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            )
        },
        {
            title: "Game System Design",
            description: "인벤토리, 전투, AI 시스템 등 게임 핵심 시스템 설계 및 구현",
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
            )
        },
        {
            title: "Performance Optimization",
            description: "게임 성능 분석 및 최적화, 메모리 관리 및 프레임레이트 개선",
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="py-20 relative" style={{backgroundColor: '#161616'}}>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-white mb-4">주요 기술 분야</h3>
                    <div className="w-20 h-1 mx-auto" style={{backgroundColor: '#13FF00'}}></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="text-center group">
                            <div
                                className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                                style={{borderColor: '#13FF00', color: '#13FF00'}}>
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                            <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}