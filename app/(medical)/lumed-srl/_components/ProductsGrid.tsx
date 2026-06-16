"use client";

import React from "react";
import { MonitorPlay, Heart, Activity, Radio, Cpu, Tablet } from "lucide-react";

const productsList = [
    {
        id: "ecg-1",
        title: "12-Channel ECG Recorder (Standard)",
        category: "Electrocardiograph",
        icon: MonitorPlay,
        placeholderDesc: "ECG Recorder with integrated thermal printer & screen",
    },
    {
        id: "ecg-2",
        title: "12-Channel ECG Recorder (Compact)",
        category: "Electrocardiograph",
        icon: MonitorPlay,
        placeholderDesc: "ECG Recorder with compact design & numeric keypad",
    },
    {
        id: "ecg-3",
        title: "3/12-Channel Professional ECG System",
        category: "Electrocardiograph",
        icon: MonitorPlay,
        placeholderDesc: "Professional diagnostics system with wide LCD keyboard",
    },
    {
        id: "wireless-holter",
        title: "Wireless ECG Holter Transceiver",
        category: "Holter System",
        icon: Radio,
        placeholderDesc: "LUMED compact wireless digital telemetry unit",
    },
    {
        id: "selector-module",
        title: "Lead Selector & Calibration Module",
        category: "Diagnostic Tool",
        icon: Cpu,
        placeholderDesc: "Color-coded lead wire interface & routing box",
    },
    {
        id: "spirometer",
        title: "Handheld Digital Spirometer",
        category: "Pulmonary testing",
        icon: Tablet,
        placeholderDesc: "Handheld lung function testing & analysis unit",
    },
];

export default function ProductsGrid() {
    return (
        <section className="w-full py-16 md:py-24 bg-white" id="all-products">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-12">
                
                {/* Header Grid: Split Title & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end pb-8 border-b border-gray-100">
                    <div className="space-y-3" data-aos="fade-right">
                        <span className="text-primary font-bold text-[14px] md:text-[15px] uppercase tracking-wider block">
                            04 / Products
                        </span>
                        <h2 className="text-3xl md:text-[38px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                            Innovation in Every Product
                        </h2>
                    </div>
                    <div 
                        className="lg:text-right text-gray-500 text-sm md:text-base max-w-md lg:ml-auto leading-relaxed" 
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        A complete range of cardiopulmonary diagnostic equipment designed to meet the needs of healthcare professionals.
                    </div>
                </div>

                {/* 6-Card Product Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsList.map((prod, index) => {
                        const IconComponent = prod.icon;
                        return (
                            <div 
                                key={prod.id}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                {/* Image Placeholder container (light blue-cyan gradient) */}
                                <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#ebf5fc] to-[#d4e9f7] flex flex-col items-center justify-center p-6 text-center border-b border-gray-50 relative overflow-hidden">
                                    {/* Design patterns */}
                                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                                    
                                    <div className="relative z-10 space-y-3">
                                        <div className="w-12 h-12 rounded-full bg-white/80 border border-white flex items-center justify-center text-primary/80 group-hover:text-primary transition-colors shadow-sm mx-auto">
                                            <IconComponent size={22} />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                                                {prod.category}
                                            </span>
                                            <p className="text-gray-500 text-xs max-w-[200px] mx-auto leading-normal">
                                                {prod.placeholderDesc}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Placeholder indicator label */}
                                    <span className="absolute bottom-3 text-[9px] font-semibold text-gray-400 uppercase tracking-widest">
                                        Image Space
                                    </span>
                                </div>

                                {/* Text Details */}
                                <div className="p-6 space-y-2">
                                    <h4 className="text-[#1a1a1a] font-bold text-base md:text-lg group-hover:text-primary transition-colors duration-200">
                                        {prod.title}
                                    </h4>
                                    <div className="flex items-center justify-between pt-2">
                                        <span className="text-[12px] font-bold text-primary uppercase tracking-wide">
                                            View Details
                                        </span>
                                        <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <svg 
                                                width="12" 
                                                height="12" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2.5" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
