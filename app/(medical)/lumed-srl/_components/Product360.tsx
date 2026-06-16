"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
    { num: "01", text: "Atrial fibrillation and flutter analysis" },
    { num: "02", text: "QT / QTc analysis and dispersion" },
    { num: "03", text: "Family analysis / template" },
    { num: "04", text: "5 or 10-wire patient cable" },
    { num: "05", text: "Recordings up to 7 days" },
    { num: "06", text: "Pacemaker detection" },
    { num: "07", text: "Graphic LCD display" },
    { num: "08", text: "Event marking button" },
];

export default function Product360() {
    return (
        <section className="w-full py-16 md:py-24 bg-white" id="products">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-16">
                
                {/* Top Section: Video Player & Description Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: 360-degree Video Player (col-span 6) */}
                    <div className="lg:col-span-6" data-aos="fade-right">
                        <div className="w-full aspect-video bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative min-h-[300px] md:min-h-[400px]">
                            <DynamicVideoPlayer
                                type="360"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            {/* Subtle Floating Badge indicating interactive content */}
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase z-10 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                360° View
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text Details (col-span 6) */}
                    <div className="lg:col-span-6 space-y-6" data-aos="fade-left">
                        <div className="space-y-3">
                            <span className="text-primary font-bold text-[14px] md:text-[15px] uppercase tracking-wider block">
                                02 / Product
                            </span>
                            <h2 className="text-3xl md:text-[38px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                                3/12-channel holter ECG systems
                            </h2>
                        </div>

                        {/* Description paragraphs from screenshot */}
                        <div className="space-y-4 text-gray-500 text-[15px] md:text-[16px] leading-relaxed font-normal">
                            <p>
                                EUROHOLTER complete solution for recording and analyzing Holter exams. Lightweight and compact recorders combined with EUROHOLTER SW3/12 software for reporting and EUORHOLTER HOOKUP software for programming and downloading the recorders. It is one of the main devices for cardiopulmonary diagnostics.
                            </p>
                            <p>
                                The EUROHOLTER SW3/12 software has all the recording analysis and validation functions, from Compact to atrial fibrillation and pacemaker analysis. A package of additional advanced algorithms is also available. A package of additional advanced algorithms is also available. The commands are given via mouse or keyboard, so that reporting is extremely rapid.
                            </p>
                            <p>
                                A package of additional advanced algorithms is also available. The commands are given via mouse or keyboard, so that reporting is extremely rapid. Verification of the positioning of Holter electrodes. EUROHOLTER recorders use standard disposable ECG electrodes.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: 8-pill feature matrix grid */}
                <div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {features.map((feat) => (
                        <div 
                            key={feat.num}
                            className="flex items-center gap-3.5 bg-primary hover:bg-primary-hover text-white rounded-full p-2.5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                        >
                            {/* Round circle containing blue number */}
                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-inner">
                                <span className="text-primary font-bold text-[14px] leading-none">
                                    {feat.num}
                                </span>
                            </div>
                            {/* Descriptive text */}
                            <span className="text-[13px] md:text-[14px] font-semibold tracking-wide pr-3 leading-snug">
                                {feat.text}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
