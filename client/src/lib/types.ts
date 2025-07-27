export interface DeveloperInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  image: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const developerInfo: DeveloperInfo = {
  name: "김게임개발자",
  title: "Game Client Programmer",
  bio: "Unity와 Unreal Engine을 활용한 게임 클라이언트 개발 전문가입니다. 몰입감 있는 게임 경험과 최적화된 성능을 구현하는 것에 열정을 가지고 있습니다.",
  email: "game.developer@example.com",
  phone: "+82 10-1234-5678",
  location: "Seoul, Korea",
  experience: "5+",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  socialLinks: {
    github: "https://github.com/gamedeveloper",
    linkedin: "https://linkedin.com/in/gamedeveloper",
    twitter: "https://twitter.com/gamedeveloper"
  }
};
