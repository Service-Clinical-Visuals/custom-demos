"use client";

import React from "react";
import { Check, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
    {
        title: "OE Fitment",
        description: "Arnott Air Struts are precisely engineered to match OE dimensions and mounting points, ensuring an exact fit with no modifications required to the vehicle or system."
    },
    {
        title: "Electronic Compatibility",
        description: "Arnott Air Struts are precisely engineered to match OE dimensions and mounting points, ensuring an exact fit with no modifications required to the vehicle or system."
    },
    {
        title: "Premium Damping Technology",
        description: "Utilizes twin-tube and monotube damper designs from trusted, long-established suppliers to deliver consistent comfort, control, and stability."
    },
    {
        title: "Durable Multi-Ply Sleeves",
        description: "Features multi-layer, bias-ply air sleeves from leading suppliers, providing exceptional strength, flexibility, and long-term durability in every application."
    }
];

export default function Benefits() {
    return (
        <section className="py-10 lg:py-20 bg-[#F9F9F9]">
            <div className="container mx-auto px-4 md:px-12">
                {/* Top Row: Content and Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="text-primary font-semibold text-base tracking-wider mb-1 block">Benefits</span>
                            <h2 className="text-[28px] md:text-[32px] font-bold text-[#171717] mb-3 tracking-tight">Suspension: Features & Benefits</h2>
                        </div>
                        <p className="text-[#484848] text-base lg:text-[17px] leading-relaxed">
                            Arnott air struts and shocks restore original ride comfort and handling with adaptive damping 
                            and self-leveling air spring technology. Multi-layer, bias-ply air sleeves provide exceptional 
                            strength and flexibility for long-term durability, while premium dampers absorb road impacts 
                            to maintain stability and control. Designed to match Original Equipment fitment and mounting points, 
                            Arnott assemblies deliver reliable installation, refined ride quality, and confident performance 
                            in all driving conditions.
                        </p>
                        <Button variant="primary" size="default" className="font-bold px-8 w-fit mt-2">
                            Explore Our Product
                        </Button>
                    </div>

                    <div className="aspect-video relative rounded-sm overflow-hidden">
                        <DynamicVideoPlayer type="short-2"/>
                    </div>
                </div>

                {/* Bottom Row: Image and Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Bottom Left: Large Image Placeholder */}
                    <div className="bg-[#F2F2F2] overflow-hidden rounded-sm max-h-[400px] lg:max-h-[450px] flex items-center justify-center">
                        <img src="/arnott/images/suspention.png" alt="" className="w-full h-full object-contain" />
                    </div>

                    {/* Bottom Right: Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row gap-4 items-start"
                            >
                                <div className="w-10 h-10 bg-[#00B341] rounded-full flex items-center justify-center text-white shrink-0">
                                    <Check size={20} strokeWidth={3.5} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-[#171717] text-[20px] lg:text-[22px] mb-1">{item.title}</h4>
                                    <p className="text-[#666666] text-[14px] lg:text-[15px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
