"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ScalableSolutions() {
    return (
        <section className="w-full py-16 md:py-24 bg-[#eef7fc]" id="solutions">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-12 md:space-y-16">
                
                {/* 🎥 TOP ROW: Text checklist and Dynamic Video Player */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Side: Holter Solutions Text Checklist (col-span 6) */}
                    <div className="lg:col-span-6 space-y-8" data-aos="fade-right">
                        <div className="space-y-3">
                            <span className="text-primary font-bold text-[14px] md:text-[15px] uppercase tracking-wider block">
                                05 / Types
                            </span>
                            <h2 className="text-3xl md:text-[38px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                                Scalable Solutions for Holter Analysis
                            </h2>
                        </div>

                        {/* Checklist Items */}
                        <div className="space-y-8">
                            {/* Item 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
                                    <Check size={20} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-2">
                                        <h4 className="text-[#1a1a1a] font-bold text-lg leading-none">
                                            EUROHOLTER SW3/12
                                        </h4>
                                        <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                                            VER. PROFESSIONAL
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                                        <strong className="text-gray-800">Rapidity and precision:</strong> Euroholter SW3 / 12 Professional is the fast and reliable companion for your Holter Analysis, fulfilling all your needs. 3 – or up to 12-channel recordings, lasting from 24 hours to 7 days.
                                    </p>
                                </div>
                            </div>

                            <hr className="border-gray-200/60" />

                            {/* Item 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
                                    <Check size={20} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-2">
                                        <h4 className="text-[#1a1a1a] font-bold text-lg leading-none">
                                            EUROHOLTER SW3/12
                                        </h4>
                                        <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                                            VER. CLINICAL
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                                        <strong className="text-gray-800">Rapidity and precision:</strong> EUROHOLTER SW3/12 CLINICAL solves complex cases with advanced features including dual PC monitor support, Heart-Rate Turbulence (HRT), T-wave Alternans (TWA), and DC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Checkerboard Video Player Placeholder (col-span 6) */}
                    <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
                        <div className="w-full aspect-video bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative min-h-[300px] md:min-h-[400px]">
                            <DynamicVideoPlayer
                                type="short-1"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            {/* Interactive Floating Badge */}
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase z-10 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Video Clip 01
                            </div>
                        </div>
                    </div>

                </div>

                {/* 🎥 BOTTOM ROW: Image Space and Advantages Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Image Space (col-span 6) */}
                    <div className="lg:col-span-6" data-aos="fade-right" data-aos-delay="200">
                        <div className="w-full rounded-2xl border-2 border-dashed border-[#c3d1df] bg-white flex flex-col items-center justify-center p-8 text-center relative overflow-hidden transition-all duration-300 hover:border-primary group shadow-sm min-h-[250px] md:min-h-[300px]">
                            <div className="relative z-10 space-y-4">
                                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mx-auto border border-gray-100 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300 shadow-sm">
                                    <svg 
                                        width="28" 
                                        height="28" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                                        <circle cx="9" cy="9" r="2"/>
                                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-gray-700 font-bold text-base">
                                        Clinical Procedure Image Space
                                    </h4>
                                    <p className="text-gray-400 text-xs max-w-[220px] mx-auto leading-relaxed">
                                        ECG Holter patient placement or device photos can be updated here later
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 2 Blue Info Cards + View Product Button (col-span 6) */}
                    <div className="lg:col-span-6 space-y-8" data-aos="fade-left" data-aos-delay="300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            
                            {/* Blue Info Card 1 */}
                            <div className="bg-primary text-white rounded-2xl p-6 shadow-md border border-white/10 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-base leading-snug">
                                        Complete and scalable
                                    </h4>
                                    <p className="text-white/80 text-[13px] leading-relaxed">
                                        All the tools included, also pacemaker and Atrial Fibrillation analysis. Records 3 or 12 channels. USB and SD card. GDT and PDF. Can use two monitors.
                                    </p>
                                </div>
                            </div>

                            {/* Blue Info Card 2 */}
                            <div className="bg-primary text-white rounded-2xl p-6 shadow-md border border-white/10 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-base leading-snug">
                                        Advanced diagnostics
                                    </h4>
                                    <p className="text-white/80 text-[13px] leading-relaxed">
                                        Advanced algorithms: QT/QTc and Dispersion, HRV, HRT, TWA, SAECG, Vectorcardiography, Sleep Apnea, DCA Deceleration Capacity.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* View Product Button (positioned underneath the cards) */}
                        <div className="inline-flex">
                            <Button 
                                text="View Product" 
                                variant="primary" 
                                href="#products" 
                                className="rounded!" 
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
