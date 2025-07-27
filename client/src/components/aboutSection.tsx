import React from 'react';

export default function AboutSection() {
  const developerInfo = {
    name: "김게임개발자",
    experience: "5+"
  };

  const services = [
    {
      title: "Unity Developer",
      description: "Unity를 기반으로 게임 시스템을 설계하고 최적화하여 서버 연동과 클라이언트 통합을 구현했습니다.",
      icon: (
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
      )
    },
    {
      title: "Unreal Developer",
      description: "Unreal Engine을 활용해 3D 게임에서 다양한 시스템을 설계하고, 팀 기반 전투와 네트워크 통신을 구현했습니다.",
      icon: (
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <polygon points="10,8 16,12 10,16" fill="currentColor" strokeWidth={0} />
          </svg>
      )
    },
    {
      title: "Mobile Game Developer",
      description: "모바일 게임을 다양한 기기와 OS에 최적화하고, 터치 UI 보완을 통해 게임 밸런스를 조정했습니다.",
      icon: (
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth={2} />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2} />
          </svg>
      )
    },
    {
      title: "Game Client Programmer",
      description: "Unity와 Unreal Engine을 활용해 클라이언트 성능을 최적화하고 안정적인 서버 연동을 구현했습니다.",
      icon: (
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <polyline points="16,18 22,12 16,6" strokeWidth={2} />
            <polyline points="8,6 2,12 8,18" strokeWidth={2} />
          </svg>
      )
    }
  ];

  const experiences = [
    {
      period: "2024.02 - Now",
      company: "엘리스 가우리 (Idle Elitis)",
      description: "엘리스 가우리는 Unity3D 엔진을 기반으로 개발된 방치형 3D RPG로, 새롭게 게임의 상상력을 높이는 콘텐츠를 제작하는 시스템이 특징입니다. 플레이어는 캐릭터의 성장, 전투, 장비 수집, 스킬 강화 등을 통해 게임에 자동적인 성장이 가능합니다. 다양한 이벤트와 길드 시스템을 통해 지속적인 성장을 위하는 위치적으로 연결이 유지적으로 늘어나는 게임입니다."
    }
  ];

  return (
      <section id="about" className="py-20 relative overflow-hidden" style={{backgroundColor: '#1D1D1D'}}>
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[15rem] font-bold text-gray-800/5 select-none leading-none">
            ABOUT
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">ABOUT ME</h2>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-xl text-gray-300 mb-8">
              I'm <span style={{color: '#13FF00'}}>{developerInfo.name}</span>, 게임 개발 경력 {developerInfo.experience}년의 개발자이며 <span style={{color: '#13FF00'}}>서울 -KR</span>에 거주하고 있습니다.
            </p>

            <p className="text-xl text-gray-300 mb-8">
              <span style={{color: '#13FF00'}}>게임 클라이언트 프로그래머</span> and UI Designer로서 인터페이스 창조부터 개발까지 모든 과정에 열정을 가지고 있습니다.
              편안한 영역을 벗어나는 도전이 가장 좋습니다.
            </p>

            <p className="text-xl text-gray-300">
              <span style={{color: '#13FF00'}}>Unity 게임</span>, <span style={{color: '#13FF00'}}>Unreal Engine 프로젝트</span>, <span style={{color: '#13FF00'}}>
            모바일 앱</span>, <span style={{color: '#13FF00'}}>웹 애플리케이션</span>을 프로토타입부터 개발까지 완성했습니다.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Services</h3>
              <div className="w-20 h-1 mx-auto" style={{backgroundColor: '#13FF00'}}></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
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

          {/* Experience Section */}
          <div>
            <div className="grid md:grid-cols-2 gap-16">
              {/* Education 제거하고 Experience만 표시 */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-white mb-4">Experience</h3>
                  <div className="w-20 h-1 mx-auto" style={{backgroundColor: '#13FF00'}}></div>
                </div>

                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8">
                      {/* Timeline line */}
                      <div className="absolute left-0 top-0 w-0.5 h-full" style={{backgroundColor: '#13FF00'}}></div>

                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 w-3 h-3 rounded-full transform -translate-x-1.5" style={{backgroundColor: '#13FF00'}}></div>

                      <div className="mb-8">
                        <p className="text-sm mb-2" style={{color: '#13FF00'}}>{exp.period}</p>
                        <h4 className="text-xl font-bold text-white mb-4">{exp.company}</h4>
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                ))}
              </div>

              {/* 빈 공간에 추가 콘텐츠나 이미지 등을 넣을 수 있습니다 */}
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-6 rounded-full border-4 flex items-center justify-center"
                       style={{borderColor: '#13FF00'}}>
                    <div className="w-48 h-48 rounded-full flex items-center justify-center"
                         style={{backgroundColor: 'rgba(19, 255, 0, 0.1)'}}>
                      <span className="text-6xl font-bold" style={{color: '#13FF00'}}>5+</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Years of Experience</h4>
                  <p className="text-gray-300">게임 개발 전문 경력</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}