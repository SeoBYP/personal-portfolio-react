// data/projects.ts
import { Project } from '../types/project';

export const projectsData: Project[] = [
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
    }
];