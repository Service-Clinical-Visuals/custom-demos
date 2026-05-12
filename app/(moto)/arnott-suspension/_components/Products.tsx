"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

const categories = [
    {
        id: 1,
        title: "Air Struts & Shocks",
        path: "/arnott/images/product-1.png",
        description: "Arnott Air Struts and Shocks deliver superior performance, comfort, and reliability, engineered in the USA and trusted worldwide.",
    },
    {
        id: 2,
        title: "Air Springs",
        path: "/arnott/images/product-2.png",
        description: "Arnott Air Springs deliver a smooth, tunable ride with durable, high-performance designs engineered for load capacity, comfort, and reliability.",
    },
    {
        id: 3,
        title: "Air Helper Springs",
        path: "/arnott/images/product-3.png",
        description: "Arnott air helper springs provide an adjustable solution for increased gross vehicle weight or axle load in LCVs and motorhomes.",
    }
];

export default function Products() {
    return (
        <section className="pt-24 pb-45 text-white relative overflow-hidden bg-[url('/arnott/images/dark-bg.png')]">

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16" data-aos="fade-up">
                    <div className=" text-left">
                        <span className="text-primary font-semibold text-base tracking-wider mb-1 block">Our Product Categories</span>
                        <h2 className="text-[28px] md:text-[32px] font-bold text-white! mb-3">#1 in Replacement Air &  Adaptive Suspension</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="hidden md:block w-[1px] h-16 bg-white"></div>
                        <p className="max-w-lg text-white! text-base lg:text-[17px] leading-relaxed">
                            Arnott products are built to perform, tested to last, and trusted worldwide—so every drive feels uncompromisingly smooth.
                        </p>
                        <Button variant="primary" size="default" className="font-bold px-8 rounded-none uppercase">View All Products</Button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[100px] md:gap-8 lg:gap-10 ">
                    {categories.map((cat, index) => (
                        <div
                            key={cat.id}
                            className="group relative h-[420px] cursor-pointer overflow-visible"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Card Border - Displayed only on hover */}
                            <div className="absolute -inset-2 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                            {/* Main Image Container */}
                            <div className="relative h-full w-full bg-[#ffffff] overflow-hidden z-10 shadow-xl">
                                <img 
                                    src={cat.path} 
                                    alt={cat.title} 
                                    className="w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-110" 
                                />
                            </div>

                            {/* Content Box Overlay */}
                            <div className="absolute -bottom-20 left-6 right-6 bg-[#ffffff] p-6 z-20 shadow-2xl border-l-4 border-primary transform transition-transform duration-300 group-hover:-translate-y-2 text-[#171717]">
                                <h3 className="text-xl lg:text-[24px] font-bold mb-2">{cat.title}</h3>
                                <p className="text-sm lg:text-base leading-relaxed line-clamp-2">
                                    {cat.description}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary text-[16px] font-semibold">
                                    <span>Learn More</span>
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
