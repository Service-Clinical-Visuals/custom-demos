"use client";

import React, { useState } from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
    const [activeTab, setActiveTab] = useState("new");

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Column */}
                    <div className="flex flex-col gap-8" data-aos="fade-right">
                        <div>
                            <span className="text-primary font-semibold text-base tracking-wider mb-1 block">Features</span>
                            <h2 className="text-[28px] md:text-[32px] font-bold text-[#171717] mb-6 tracking-tight leading-tight">
                                The Smarter Choice for Superior Suspension
                            </h2>
                            <p className="text-[#484848] text-base lg:text-[17px] leading-relaxed mb-6 text-justify">
                                Arnott air struts and shocks deliver exceptional performance, comfort, and reliability. 
                                Custom-tuned shocks adapt to your driving style, while precision-crafted CNC aluminum or 
                                stamped steel components ensure strength and longevity. Enhanced seals prevent leaks, 
                                maintaining consistent performance, and every unit is engineered and assembled in the USA, 
                                backed by decades of suspension expertise. Trusted worldwide, Arnott air suspension 
                                products set the standard for quality and innovation.
                            </p>

                            {/* Tabs */}
                            <div className="flex flex-col md:flex-row mb-0 font-header tracking-wider">
                                <button 
                                    onClick={() => setActiveTab("new")}
                                    className={`px-6 py-4 font-bold text-[15px] transition-all rounded-none border-none outline-none flex-1 md:flex-none ${activeTab === 'new' ? 'bg-[#00B341] text-white' : 'bg-[#F2F2F2] text-[#171717] hover:bg-gray-200'}`}
                                >
                                    New Air Struts and Shocks
                                </button>
                                <button 
                                    onClick={() => setActiveTab("reman")}
                                    className={`px-12 py-4 font-bold text-[15px] transition-all rounded-none border-none outline-none flex-1 md:flex-none ${activeTab === 'reman' ? 'bg-[#00B341] text-white' : 'bg-[#F2F2F2] text-[#171717] hover:bg-gray-200'}`}
                                >
                                    Remanufactured
                                </button>
                            </div>

                            {/* Feature Box */}
                            <div className="bg-white p-8 md:p-10 border border-[#e8e8e8] relative z-10">
                                <h4 className="font-black text-[#171717] text-[22px] mb-6 font-header">Designed. Tested. Proven to Last.</h4>
                                <div className="min-h-[140px]">
                                    <AnimatePresence mode="wait">
                                        {activeTab === 'new' ? (
                                            <motion.p 
                                                key="new"
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-[#666666] text-[16px] leading-relaxed"
                                            >
                                                Struts cycle millions of times over their lifespan, and while remanufactured units offer OE functionality at a lower cost, even the best eventually wear out. Arnott's engineers use their deep understanding of reused components to design new struts that deliver exceptional durability, performance, and value.
                                            </motion.p>
                                        ) : (
                                            <motion.p 
                                                key="reman"
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-[#666666] text-[16px] leading-relaxed text-justify"
                                            >
                                                Our engineers enhance OE designs with meticulous care, creating products that look, fit, and perform like new. Each unit is tested, cleaned, and recharged with premium components for lasting reliability and performance. Designed for plug-and-play installation, Arnott struts and shocks restore comfort and control while integrating seamlessly with original systems.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8" data-aos="fade-left">
                        <div className="w-full aspect-video  relative rounded-sm overflow-hidden ">
                            <DynamicVideoPlayer type="360"/>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-8 pt-8 border-t border-gray-100">
                            <p className="text-[#484848] text-[17px] leading-relaxed italic font-semibold! text-center">
                                "Arnott Air Struts and Shocks deliver superior performance, comfort, and reliability, engineered in the USA and trusted worldwide."
                            </p>
                            <Button variant="primary" size="lg" className="shrink-0">Search Air Struts & Shocks</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
