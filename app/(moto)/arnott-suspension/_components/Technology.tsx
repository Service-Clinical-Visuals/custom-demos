"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Technology() {
    const [activeTab, setActiveTab] = useState("better");

    const content = {
        better: {
            title: "A Better Driving Experience",
            description: "Adaptive suspension capabilities benefit the customer by delivering enhanced vehicle control and superior ride quality across diverse scenarios. Drivers experience improved stability, reduced body roll, and better traction during aggressive maneuvers or in sport modes, while comfort settings soften the ride over rough surfaces for a smoother, more refined experience. This versatility ensures the vehicle feels tailored to individual preferences and conditions, boosting confidence, minimizing fatigue on long drives, and elevating overall driving satisfaction without compromising safety or performance."
        },
        adaptive: {
            title: "Adaptive Ride Control",
            description: "The damping system in an electronic strut adjusts the compression and rebound rates of the shock absorber to match driving conditions and user preferences. Using sensors that monitor vehicle speed, road surface, and driver input, the system dynamically stiffens or softens the suspension. This provides a precise balance between comfort and performance, ensuring optimal stability and control whether cruising on a highway or navigating challenging terrain."
        },
        eride: {
            title: "eRide Technology",
            description: "Arnott eRide technology is a cutting-edge electronic suspension solution designed to provide a high-performance alternative to original equipment. By integrating advanced valving and electronic controls, eRide struts offer real-time damping adjustments that maintain original ride quality while improving longevity. This technology ensures seamless communication with the vehicle's onboard computers, delivering a smooth, responsive, and reliable driving experience for modern luxury vehicles."
        }
    };

    return (
        <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-12 text-center mb-10">
                <span className="text-primary font-semibold text-base tracking-wider mb-1 block">Our Product Categories</span>
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#171717] mb-3">Adaptive Struts & Shocks</h2>
            </div>

            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Video */}
                    <div className="aspect-video relative overflow-hidden cursor-pointer border border-gray-100">
                      <DynamicVideoPlayer type="short-1"/>   
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-8">
                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2">
                            {["A Better Driving Experience", "Adaptive Ride Control", "eRide Technology"].map((tab, i) => {
                                const id = ["better", "adaptive", "eride"][i];
                                return (
                                    <button 
                                        key={id}
                                        onClick={() => setActiveTab(id)}
                                        className={`px-6 py-3 text-[15px] font-medium transition-all rounded-none border-none outline-none ${activeTab === id ? 'bg-[#00B341] text-white font-bold!' : 'bg-[#F2F2F2] text-[#171717] hover:bg-gray-200'}`}
                                    >
                                        {tab}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Logo Placeholder */}
                        <div className="h-12 flex items-center">
                            <img src="/arnott/images/category-1.png" alt="Technology Logo" className="h-full w-auto object-contain" />
                        </div>

                        <div className="min-h-[180px]">
                            <p className="text-[#666666] text-base lg:text-[17px] leading-relaxed">
                                {content[activeTab as keyof typeof content].description}
                            </p>
                        </div>

                        {/* <Button variant="primary" size="lg" className="w-fit">
                            Explore Our Products
                        </Button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
