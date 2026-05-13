"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function Course() {
    return (
        <section className="bg-white relative overflow-hidden">
            {/* Desktop Background Image (Bleeds to right edge) */}
            <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2 z-0" data-aos="fade-left">
                <img 
                    src="/arnott/images/course.png" 
                    alt="Course Overview" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                    
                    {/* Content Column */}
                    <div className="py-16 lg:py-20 pr-0 lg:pr-16 order-2 lg:order-1" data-aos="fade-right">
                        <div className="flex flex-col gap-5">
                            <div>
                                <span className="text-[#00B341] font-bold text-lg mb-2 block">Course Overview</span>
                                <h2 className="text-[28px] md:text-[32px] font-black text-[#171717] mb-6 tracking-tight leading-tight uppercase">
                                    What ASA Certification Unlocks
                                </h2>
                                
                                <p className="text-[#484848] text-base md:text-[17px] leading-relaxed mb-8">
                                    There are over 15 million vehicles with air suspension in operation today – 
                                    about 5% of total car parc. That number is expected to grow to over 15% by 
                                    2030. Nearly 70% of air suspension repair jobs currently go back to the dealer, 
                                    as many independent repair shops have reservations about taking on these 
                                    jobs due to:
                                </p>

                                {/* Checklist */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                                    {[
                                        "Perceived Complexity",
                                        "Fear of Comebacks",
                                        "Lack of Training",
                                        "Special Tools Needed"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2.5">
                                            <div className="text-[#00B341] shrink-0">
                                                <CheckCircle2 size={22} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-[#171717] font-medium text-[16px]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[#484848] text-base md:text-[17px] italic mb-8 font-medium">
                                    This is your chance to tap into one of the fastest-growing segments in today's automotive service industry.
                                </p>

                                <Button variant="primary" size="default">
                                    View Course Details
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Image (Only visible on small screens) */}
                    <div className="lg:hidden w-full min-h-[300px] order-1">
                        <img 
                            src="/arnott/images/course.png" 
                            alt="Course Overview" 
                            className="w-full h-full object-cover rounded-sm"
                        />
                    </div>

                    {/* Desktop Spacer (To maintain the 50/50 grid structure) */}
                    <div className="hidden lg:block lg:order-2" />

                </div>
            </div>
        </section>
    );
}
