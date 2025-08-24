import React from 'react';
import {services} from "@/data/serviceInfo.tsx";

// Services Section
export function ServicesSection() {

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