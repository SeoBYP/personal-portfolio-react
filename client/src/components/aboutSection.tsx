import React from 'react';
import { Gamepad2, Monitor, Phone, Server } from 'lucide-react';

export default function AboutSection() {
  const developerInfo = {
    name: "김게임개발자",
    experience: "5+"
  };

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

          <div className="max-w-4xl mx-auto text-center">
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

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* My Services */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">My Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Game Development", icon: Gamepad2 },
                  { name: "UI Design", icon: Monitor },
                  { name: "Mobile Development", icon: Phone },
                  { name: "System Design", icon: Server }
                ].map((service, index) => {
                  const Icon = service.icon;
                  return (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{backgroundColor: '#13FF00'}}>
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                        <h4 className="text-white font-semibold text-sm">{service.name}</h4>
                      </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm">January 2020 - December 2023</p>
                  <h4 className="text-white font-semibold">컴퓨터공학</h4>
                  <p className="text-gray-300">서울대학교</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">August 2018 - December 2019</p>
                  <h4 className="text-white font-semibold">게임 개발</h4>
                  <p className="text-gray-300">게임 아카데미</p>
                </div>
              </div>
            </div>

            {/* Jobs */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Jobs</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm">October 2021 - January 2022</p>
                  <h4 className="text-white font-semibold">게임 프로그래머</h4>
                  <p className="text-gray-300">넥슨 코리아</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">August 2020 - August 2021</p>
                  <h4 className="text-white font-semibold">Unity 개발자 (인턴)</h4>
                  <p className="text-gray-300">NHN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}