"use client";

import React from "react";

const advantages = [
    {
        title: "Relentless Innovation",
        description: "Arnott Air Struts and Shocks deliver superior performance, comfort, and reliability, engineered in the USA and trusted worldwide."
    },
    {
        title: "Built to Last",
        description: "Premium components and rigorous testing ensure safety and durability."
    },
    {
        title: "Right Part. Right Time.",
        description: "93% market coverage and global distribution guarantee part availability when and where you need it."
    },
    {
        title: "Serviced for Success",
        description: "World-class training, access to technical experts, and a hassle-free warranty process."
    }
];

export default function Advantage() {
    return (
        <section className="py-16 lg:py-20 bg-[#171717]">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-white! mb-3 uppercase tracking-tight flex flex-wrap items-center justify-center gap-x-4">
                        <span>The</span> 
                        <span>
                            <img src="/arnott/images/arnott-logo.png" alt="" className="w-35" />
                        </span> 
                        <span>Advantage</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((adv, index) => (
                        <div
                            key={index}
                            className="bg-[#545454] p-10 rounded-sm flex flex-col items-center text-center gap-4 hover:bg-[#2a2a2a] transition-colors border border-white/5 h-full"
                        >
                            <h3 className="text-[24px] font-semibold text-white!">{adv.title}</h3>
                            <p className="text-white! text-base leading-relaxed">
                                {adv.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
