"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function About() {
    return (
        <section className="w-full py-16 md:py-24 bg-[#eef7fc]" id="about-us">
            <div className="custom-container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8" data-aos="fade-right">
                        <div className="space-y-3">
                            {/* Blue Accent Label */}
                            <span className="text-primary font-bold text-[14px] md:text-[15px] uppercase tracking-wider block">
                                01 / About Us
                            </span>
                            {/* Bold Heading */}
                            <h2 className="text-3xl md:text-[40px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                                Advancing the Future of Healthcare
                            </h2>
                        </div>

                        {/* Description Paragraphs from the Screenshot */}
                        <div className="space-y-5 text-gray-600 text-[15px] md:text-[16px] leading-relaxed font-normal">
                            <p>
                                For over 30 years, LUMED has been a leading manufacturer of cardiopulmonary diagnostic equipment. Our mission is to provide innovative, high-quality solutions for healthcare professionals, helping improve the diagnosis and monitoring of cardiac diseases.
                            </p>
                            <p>
                                We acquired LUMED in 2000 and, drawing on our over twenty years of experience in the medical device sector, set ourselves the goal of leveraging their expertise and expanding our business to include other industrial and medical uses of thermal paper.
                            </p>
                            <p>
                                LUMED srl is a manufacturing company that has been operating in the field of medical devices for the cardiopulmonary diagnostics for over 25 years. Our company started its activity in the field of thermal papers for medical and industrial applications and has constantly increased its products portfolio: from consumable and disposable accessories to equipment for basic cardiological and pulmonary diagnostics.
                            </p>
                        </div>

                        {/* Action Button: Get in touch (Blue background, white arrow box) */}
                        <div className="inline-flex pt-2">
                            <Button 
                                text="Get in touch" 
                                variant="primary" 
                                href="#contact" 
                                className="rounded!" 
                            />
                        </div>
                    </div>

                    {/* Right Column: Collaborative Office Scene Image */}
                    <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="200">
                        <div className="w-full overflow-hidden rounded-3xl shadow-2xl border border-white/20 aspect-square lg:aspect-auto">
                            <img 
                                src="/medical/lumed-srl/about.png" 
                                alt="Collaborating and discussing medical diagnostics" 
                                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
