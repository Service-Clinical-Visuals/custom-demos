"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";



const Hero = () => {

    return (
        <section 
            className="w-full h-screen relative overflow-hidden flex items-end pb-24 md:pb-32 bg-black" 
            data-aos="fade-in"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <DynamicVideoPlayer
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    type="banner"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full custom-container mx-auto px-6 md:px-8">
                <div className="max-w-2xl text-left" data-aos="fade-up" data-aos-delay="200">
                    {/* Header Title from Screenshot */}
                    <h1 className="text-white! text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold leading-tight tracking-tight mb-8 shadow-text font-sans max-w-xl">
                        Innovation, quality, and safety in cardiopulmonary diagnostics.
                    </h1>

                    {/* Styled "Get in touch" Button from Screenshot */}
                    <div className="inline-flex">
                        <Button 
                            text="Get in touch" 
                            variant="white" 
                            href="#contact" 
                            className="rounded!" 
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator (micro-animation) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 z-10 animate-bounce">
                <span className="text-[10px] text-white tracking-widest uppercase font-semibold">Scroll</span>
                <div className="w-1 h-3 bg-white rounded-full" />
            </div>
        </section>
    );
};

export default Hero;
