// src/types/project.ts
export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    image: string;
    techStack: string[];
    category: string;
    duration: string;
    role: string;
    team: string;
    features: string[];
    challenges: string;
    achievements?: string[];
    githubUrl: string;
    liveUrl?: string;
}
