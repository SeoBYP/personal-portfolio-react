import React from "react";
import UnityLogo from "@/resources/unityLogo.svg";
import UnrealLogo from "@/resources/unrealLogo.svg";

export const services = [
    {
        title: "Unity Game Development",
        description: "Unity 엔진을 활용한 모바일 및 PC 게임 개발, C# 기반 게임 로직 구현",
        icon: <UnityLogo/>,
    },
    {
        title: "Unreal Engine Development",
        description: "Unreal Engine 기반 3D 게임 개발, Blueprint 및 C++ 활용한 고품질 구현",
        icon: <UnrealLogo/>,
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
