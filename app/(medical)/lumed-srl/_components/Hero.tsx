"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

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
            <div className="relative z-10 w-full custom-container mx-auto px-6 md:px-8 max-w-[1440px]">
                <div className="max-w-3xl text-left pb-4 md:pb-0" data-aos="fade-up" data-aos-delay="200">
                    {/* Header Title from Screenshot */}
                    <Typography
                        variant="h1"
                        color="white"
                        weight="semibold"
                        className="text-[32px] sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.2] md:leading-tight tracking-tight mb-6 md:mb-8 shadow-text text-white! max-w-3xl"
                    >
                        Innovation, quality, and safety in cardiopulmonary diagnostics.
                    </Typography>

                    {/* Styled "Get in touch" Button from Screenshot */}
                    <div className="inline-flex">
                        <Button
                            text="Get in touch"
                            variant="composite-white"
                            href="#contact"
                            className="rounded"
                        />
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Hero;
