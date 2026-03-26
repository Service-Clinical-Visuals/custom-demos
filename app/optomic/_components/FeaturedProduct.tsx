"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturedProduct() {
    return (
        <section className="relative w-full" data-aos="fade-up">
            {/* Top White Background */}
            <div className="bg-white pt-24 pb-48 lg:pb-64" />

            {/* Bottom Blue Background (Waves) */}
            <div className="bg-[#243783] bg-[url('/optomic/bg-why.png')] bg-cover bg-center h-[400px] lg:h-[500px] w-full" />

            {/* Content Overlay */}
            <div className="absolute inset-0 pt-24 lg:pt-32">
                <div className="container mx-auto px-6 md:px-12 flex flex-col h-full">

                    {/* Top Text Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-12 lg:mb-16 items-start">
                        {/* Left Title */}
                        <div>
                            <span className="text-[#333] text-[15px] font-bold tracking-tight mb-3 block">
                                OP-30 fiberscope
                            </span>
                            <h3 className="text-3xl md:text-[32px] font-extrabold !text-[#243783] leading-[1.3] max-w-lg tracking-tight">
                                Flexible endoscope designed for clear visualization and comfortable ENT examinations.
                            </h3>
                        </div>

                        {/* Right Description */}
                        <div className="flex flex-col items-start md:mt-8">
                            <p className="text-[16px] leading-relaxed mb-6">
                                OPTOMIC&apos;s fiberscope or flexible endoscope provides excellent optical characteristics
                                for the inspection of nasal passages, the pharynx and the larynx. Both fiberscopes
                                have been designed to facilitate examination efficiency and enhance patient comfort.
                            </p>
                            <a
                                href="/optomic/products/op-30"
                                className="inline-flex items-center gap-1.5 text-[#0096D6] font-semibold text-[16px] hover:gap-2.5 transition-all"
                            >
                                Read More <ArrowRight size={16} strokeWidth={2.5} />
                            </a>
                        </div>
                    </div>

                    {/* 360 Degree Viewer Placeholder */}
                    <div className="w-full relative mx-auto shadow-2xl rounded-2xl md:rounded-[32px] overflow-hidden bg-[#F0F0F0] flex-1 max-h-[600px]">
                        <video src="https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm" autoPlay loop muted></video>
                    </div>
                </div>
            </div>
        </section>
    );
}
