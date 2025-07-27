import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const developerInfo = {
    name: "김게임개발자",
    email: "game.developer@example.com",
    phone: "+82 10-1234-5678",
    location: "Seoul, Korea",
    socialLinks: {
      github: "https://github.com/gamedeveloper",
      linkedin: "https://linkedin.com/in/gamedeveloper",
      twitter: "https://twitter.com/gamedeveloper"
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: developerInfo.socialLinks.github,
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: developerInfo.socialLinks.linkedin,
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: developerInfo.socialLinks.twitter,
      label: "Twitter"
    }
  ];

  const mainTechnologies = [
    "Unity & Unreal Engine",
    "C# & C++",
    "React & Next.js",
    "Node.js & Java Spring"
  ];

  return (
      <footer className="text-white py-12" style={{backgroundColor: '#0D0D0D'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{developerInfo.name}</h3>
              <p className="text-gray-300 mb-4">
                몰입감 있는 게임 경험을 위한 혁신적인 게임 솔루션을 개발합니다.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index}
                       href={social.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-300 hover:text-white transition-colors duration-200"
                       title={social.label}>
                      <Icon className="w-5 h-5" />
                      </a>
                );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">주요 기술</h4>
              <ul className="space-y-2 text-gray-300">
                {mainTechnologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <div className="space-y-2 text-gray-300">
                <p>{developerInfo.email}</p>
                <p>{developerInfo.phone}</p>
                <p>{developerInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {currentYear} {developerInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}