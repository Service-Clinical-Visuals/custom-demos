"use client";

import React from "react";
import Link from "next/link";

const newsList = [
    {
        id: "miami-expo",
        type: "poster-green",
        title: "World Health Expo 2026 Miami",
        desc: "Dal 17 al 19 giugno 2026, al Miami Beach Convention Center di Miami, torna WHX...",
    },
    {
        id: "exposanita",
        type: "poster-red",
        title: "EXPOSANITA' 2026",
        desc: "Dal 22 al 24 aprile 2026, a BolognaFiere, torna Exposanità 2026, l'appuntamento di riferimento per...",
    },
    {
        id: "bofap-filter",
        type: "image",
        imgSrc: "/medical/lumed-srl/news3.png",
        title: "BOFAP: Innovative Spirometry Filter",
        desc: "BOFAP combines the paper mouthpiece and the VB filter into a single, lightweight device...",
    },
];

export default function NewsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white" id="news">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-12">
                
                {/* Header Grid: Split Title & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end pb-8 border-b border-gray-100">
                    <div className="space-y-3" data-aos="fade-right">
                        <span className="text-primary font-bold text-[14px] md:text-[15px] uppercase tracking-wider block">
                            01 / Our News
                        </span>
                        <h2 className="text-3xl md:text-[38px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                            Latest News, Insights & Trade Shows
                        </h2>
                    </div>
                    <div 
                        className="lg:text-right text-gray-500 text-sm md:text-base max-w-lg lg:ml-auto leading-relaxed" 
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        Stay up to date with the latest news from the Lumed world: trade show appearances, industry events, product launches, and company updates. Follow our activities and discover how we are driving innovation in the medical sector.
                    </div>
                </div>

                {/* 3-Column News Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsList.map((news, index) => (
                        <div 
                            key={news.id}
                            className="group flex flex-col space-y-4"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Card Top: Visual Poster / Image (with hover zoom effect) */}
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm relative border border-gray-100 shrink-0">
                                
                                {/* Render Green Poster using CSS layout matching screenshot */}
                                {news.type === "poster-green" && (
                                    <div className="w-full h-full bg-[#051f15] p-6 flex flex-col justify-between text-white transition-transform duration-500 group-hover:scale-105">
                                        <div className="space-y-1">
                                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#10b981]">
                                                WHX<span className="text-white">Miami</span>
                                            </h3>
                                            <p className="text-[12px] font-semibold text-gray-300">
                                                Formerly <span className="text-[#a7f3d0]">FIME</span>
                                            </p>
                                        </div>
                                        <div className="space-y-1 border-t border-white/10 pt-4">
                                            <p className="text-base font-bold text-white">
                                                June 17 - 19, 2026
                                            </p>
                                            <p className="text-xs text-gray-400 font-medium">
                                                Miami Beach Convention Center
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Render Red Sticker Poster using CSS layout matching screenshot */}
                                {news.type === "poster-red" && (
                                    <div className="w-full h-full bg-[#f8fafc] p-6 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:scale-105 relative">
                                        {/* Stylized rounded sticker outline */}
                                        <div className="w-[85%] h-[85%] border-2 border-dashed border-[#e2e8f0] rounded-2xl bg-[#cf2a2a] p-4 text-white flex flex-col justify-between shadow-md transform -rotate-2">
                                            <div>
                                                <p className="text-[11px] font-semibold tracking-wider uppercase text-white/90">
                                                    Partecipiamo a
                                                </p>
                                                <h3 className="text-2xl font-black tracking-tight mt-1 border-y border-white/20 py-1 uppercase">
                                                    Exposanita'
                                                </h3>
                                                <p className="text-[8px] font-bold tracking-[0.2em] text-[#fca5a5] uppercase mt-1">
                                                    Health • Care • Innovation
                                                </p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-bold text-white leading-none">
                                                    22 • 24 aprile 2026
                                                </p>
                                                <p className="text-[10px] font-bold text-[#fca5a5] uppercase tracking-wide leading-none">
                                                    BolognaFiere
                                                </p>
                                                <p className="text-[8px] font-semibold text-white/80 leading-none mt-1">
                                                    Pad. 22 Corsia C Stand 45
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Render Product/Standard Image */}
                                {news.type === "image" && news.imgSrc && (
                                    <img 
                                        src={news.imgSrc} 
                                        alt={news.title} 
                                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}

                            </div>

                            {/* Card Bottom: Text Metadata */}
                            <div className="space-y-2 px-1">
                                <Link 
                                    href={`#news-${news.id}`}
                                    className="text-primary hover:text-primary-hover font-bold text-base md:text-lg tracking-tight block transition-colors duration-200"
                                >
                                    {news.title}
                                </Link>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {news.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
