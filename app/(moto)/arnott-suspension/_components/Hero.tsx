"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <DynamicVideoPlayer type='banner'/>
            </div>

            {/* Hero Content */}
            <div 
                className="container mx-auto flex flex-col justify-end pb-40 h-full px-4 md:px-12 w-full text-left text-white relative z-20"
                data-aos="fade-up"
            >
                <div className="max-w-3xl">
                    <h1
                        className="text-xl md:text-3xl lg:text-5xl font-bold leading-[1.4] mb-8 text-white! whitespace-pre-line"
                    >
                        Revive the drive of the Drive
                    </h1>

                    <div>
                        <Button 
                            href="/products" 
                            variant="primary" 
                            size="lg" 
                            radius="none" 
                            className="font-bold px-8 py-4 group flex items-center gap-3"
                        >
                            Explore Our Products
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
