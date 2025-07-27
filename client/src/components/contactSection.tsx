import React, {useState} from 'react';
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {Mail, Phone, MapPin, Github, Linkedin, Twitter} from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // 개발자 정보를 컴포넌트 내부에 직접 정의
    const developerInfo = {
        email: "game.developer@example.com",
        phone: "+82 10-1234-5678",
        location: "Seoul, Korea",
        socialLinks: {
            github: "https://github.com/gamedeveloper",
            linkedin: "https://linkedin.com/in/gamedeveloper",
            twitter: "https://twitter.com/gamedeveloper"
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 간단한 폼 제출 처리 (실제 API 없이)
        console.log('Form submitted:', formData);
        alert('메시지가 전송되었습니다!');
        // 폼 초기화
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            label: "Phone",
            value: developerInfo.phone,
            href: `tel:${developerInfo.phone}`
        },
        {
            icon: Mail,
            label: "Email",
            value: developerInfo.email,
            href: `mailto:${developerInfo.email}`
        },
        {
            icon: MapPin,
            label: "Location",
            value: developerInfo.location,
            href: null
        }
    ];

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

    return (
        <section id="contact" className="py-20" style={{backgroundColor: '#161616'}}>
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CONTACT</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        게임 개발 프로젝트나 협업 기회가 있으신가요?
                        언제든지 연락주시면 함께 논의해보겠습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="border-0 rounded-2xl p-8" style={{backgroundColor: '#1D1D1D'}}>
                        <h3 className="text-2xl font-semibold text-white mb-6">메시지 보내기</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="name" className="text-gray-300 font-semibold">Your name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="김게임개발자"
                                    required
                                    className="mt-2 bg-gray-700 border-gray-600 text-white"
                                />
                            </div>

                            <div>
                                <Label htmlFor="email" className="text-gray-300 font-semibold">Your Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="game@example.com"
                                    required
                                    className="mt-2 bg-gray-700 border-gray-600 text-white"
                                />
                            </div>

                            <div>
                                <Label htmlFor="subject" className="text-gray-300 font-semibold">Your subject</Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="게임 개발 문의"
                                    required
                                    className="mt-2 bg-gray-700 border-gray-600 text-white"
                                />
                            </div>

                            <div>
                                <Label htmlFor="message" className="text-gray-300 font-semibold">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="프로젝트나 아이디어에 대해 알려주세요..."
                                    rows={4}
                                    required
                                    className="mt-2 bg-gray-700 border-gray-600 text-white"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full text-black py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                                style={{backgroundColor: '#13FF00'}}
                            >
                                Send
                            </Button>
                        </form>
                    </Card>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Card className="border-0 rounded-2xl p-8" style={{backgroundColor: '#1D1D1D'}}>
                            <h3 className="text-2xl font-semibold text-white mb-6">연락처 정보</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    const content = (
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center"
                                                 style={{backgroundColor: '#13FF00'}}>
                                                <Icon className="w-6 h-6 text-black"/>
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">{info.label}</p>
                                                <p className="text-white font-semibold">{info.value}</p>
                                            </div>
                                        </div>
                                    );

                                    return info.href ? (
                                        <a key={index} href={info.href}
                                           className="block hover:bg-gray-700 rounded-lg p-2 -m-2 transition-colors">
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={index}>{content}</div>
                                    );
                                })}
                            </div>
                        </Card>

                        {/* Social Links */}
                        <Card className="border-0 rounded-2xl p-8" style={{backgroundColor: '#1D1D1D'}}>
                            <h3 className="text-2xl font-semibold text-white mb-6">소셜 미디어</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-black transition-colors duration-300"
                                            title={social.label}
                                        >
                                            <Icon className="w-6 h-6"/>
                                        </a>
                                    );
                                })}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}