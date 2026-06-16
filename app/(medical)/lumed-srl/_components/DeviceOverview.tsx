"use client";

import React from "react";
import { ArrowRight, Box } from "lucide-react";
import Button from "./Button";

export default function DeviceOverview() {
    return (
        <section className="w-full py-16 md:py-24 bg-primary text-white" id="device-overview">
            <div className="custom-container mx-auto px-6 md:px-8">
                
                {/* 3-Column Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Device Description (col-span 4) */}
                    <div className="lg:col-span-4 space-y-6 md:space-y-8" data-aos="fade-right">
                        <div className="space-y-3">
                            {/* White Accent Label */}
                            <span className="text-white/80 font-bold text-[14px] md:text-[15px] uppercase tracking-wider block">
                                03 / Device Overview
                            </span>
                            {/* Bold White Heading */}
                            <h2 className="text-3xl md:text-[38px] font-bold text-white leading-tight tracking-tight">
                                Engineered for Accuracy
                            </h2>
                        </div>

                        {/* Description paragraphs */}
                        <div className="space-y-4 text-white/90 text-[14px] md:text-[15px] leading-relaxed font-normal">
                            <p>
                                Thus began LUMED's adventure in the world of medical devices. A boundless world in which LUMED has carved out a unique niche in Italy and around the world, becoming the go-to provider for consumables, equipment, and accessories used daily in electrocardiogram and pulmonary function tests.
                            </p>
                            <p>
                                Accurately detects and evaluates pacemaker activity for reliable cardiac monitoring. Provides detailed insights to support effective patient assessment.
                            </p>
                            <p>
                                Monitors ST segment changes to help identify potential cardiac abnormalities. Enables early detection and assessment of ischemic events.
                            </p>
                        </div>

                        {/* White Button (View Product) */}
                        <div className="inline-flex pt-2">
                            <Button 
                                text="View Product" 
                                variant="white" 
                                href="#products" 
                                className="rounded!" 
                            />
                        </div>
                    </div>

                    {/* Middle Column: Circular Image Placeholder (col-span 4) */}
                    <div className="lg:col-span-4 flex justify-center" data-aos="fade-up" data-aos-delay="100">
                        {/* Perfect Circle Placeholder */}
                        <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full border-4 border-dashed border-white/40 bg-white/5 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden transition-all duration-300 hover:border-white hover:bg-white/10 group shadow-lg aspect-square">
                            {/* Graphic elements inside */}
                            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                <Box size={28} />
                            </div>
                            <div className="space-y-2 relative z-10">
                                <h4 className="text-white font-bold text-lg">
                                    Circular Image Area
                                </h4>
                                <p className="text-white/70 text-xs max-w-[200px] mx-auto leading-relaxed">
                                    Circular device illustration & graphics will be updated here in the future
                                </p>
                            </div>
                            <span className="inline-block text-[9px] font-bold text-white uppercase bg-white/20 px-2.5 py-1 rounded-full tracking-wider mt-4">
                                Future Image Space
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Advantages Cards (col-span 4) */}
                    <div className="lg:col-span-4 space-y-6" data-aos="fade-left" data-aos-delay="200">
                        {/* Advantages Header Title */}
                        <h3 className="text-2xl font-bold text-white tracking-wide border-b border-white/20 pb-4 mb-2">
                            Advantages
                        </h3>

                        <div className="space-y-5">
                            {/* Advantage Card 1 */}
                            <div className="bg-white rounded-xl p-5 text-gray-800 shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <h4 className="text-primary font-bold text-base md:text-[17px] mb-2 leading-snug">
                                    Complete and scalable
                                </h4>
                                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                                    All the tools included, also pacemaker and Atrial Fibrillation analysis. Records 3 or 12 channels. USB and SD card. GDT and PDF. Can use two monitors.
                                </p>
                            </div>

                            {/* Advantage Card 2 */}
                            <div className="bg-white rounded-xl p-5 text-gray-800 shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <h4 className="text-primary font-bold text-base md:text-[17px] mb-2 leading-snug">
                                    Advanced diagnostics
                                </h4>
                                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                                    Advanced algorithms: QT/QTc and Dispersion, HRV, HRT, TWA, SAECG, Vectorcardiography, Sleep Apnea, DCA Deceleration Capacity.
                                </p>
                            </div>

                            {/* Advantage Card 3 */}
                            <div className="bg-white rounded-xl p-5 text-gray-800 shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <h4 className="text-primary font-bold text-base md:text-[17px] mb-2 leading-snug">
                                    Compactness and portability
                                </h4>
                                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                                    As wide as a credit card and as light as Bluetooth earphones. 5 or 10-wire patient cables, light and robust. LCD display, keys and LED.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
