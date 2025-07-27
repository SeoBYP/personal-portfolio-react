import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
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
  features?: string[];
  challenges?: string;
  achievements?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full" style={{backgroundColor: '#1D1D1D'}}>
          <div className="relative">
            {/* Close Button */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 rounded-full text-black hover:bg-green-500"
                style={{backgroundColor: '#13FF00'}}
                onClick={onClose}
            >
              <X className="w-6 h-6 text-black" />
            </Button>

            {/* Header Image */}
            <div className="h-64 relative overflow-hidden rounded-t-2xl">
              <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-lg opacity-90">{project.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-semibold text-white mb-4">프로젝트 개요</h3>
                  <p className="text-gray-300 mb-6">
                    {project.longDescription}
                  </p>

                  {project.features && project.features.length > 0 && (
                      <>
                        <h4 className="text-xl font-semibold text-white mb-3">주요 기능</h4>
                        <ul className="space-y-2 text-gray-300 mb-6">
                          {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#13FF00'}} />
                                <span>{feature}</span>
                              </li>
                          ))}
                        </ul>
                      </>
                  )}

                  {project.challenges && (
                      <>
                        <h4 className="text-xl font-semibold text-white mb-3">기술적 도전</h4>
                        <p className="text-gray-300 mb-6">{project.challenges}</p>
                      </>
                  )}

                  {project.achievements && project.achievements.length > 0 && (
                      <>
                        <h4 className="text-xl font-semibold text-white mb-3">성과</h4>
                        <ul className="space-y-2 text-gray-300">
                          {project.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#13FF00'}} />
                                <span>{achievement}</span>
                              </li>
                          ))}
                        </ul>
                      </>
                  )}
                </div>

                <div>
                  {/* Project Info */}
                  <div className="rounded-xl p-6 mb-6" style={{backgroundColor: '#161616'}}>
                    <h4 className="text-lg font-semibold text-white mb-4">프로젝트 정보</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-400">기간</span>
                        <p className="font-medium text-gray-300">{project.duration}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">역할</span>
                        <p className="font-medium text-gray-300">{project.role}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">팀</span>
                        <p className="font-medium text-gray-300">{project.team}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="rounded-xl p-6" style={{backgroundColor: '#161616'}}>
                    <h4 className="text-lg font-semibold text-white mb-4">기술 스택</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                          <Badge key={index} className="text-black" style={{backgroundColor: '#13FF00'}}>
                            {tech}
                          </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t" style={{borderColor: '#333'}}>
                {project.liveUrl && (
                    <Button
                        asChild
                        className="flex-1 text-black"
                        style={{backgroundColor: '#13FF00'}}
                    >
                      <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        라이브 데모 보기
                      </a>
                    </Button>
                )}
                {project.githubUrl && (
                    <Button
                        variant="outline"
                        asChild
                        className="flex-1 text-white border-white hover:text-black"
                        style={{'--hover-bg': '#13FF00'}}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#13FF00'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        소스 코드 보기
                      </a>
                    </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}