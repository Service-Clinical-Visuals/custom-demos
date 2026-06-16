import React from "react";
import Link from "next/link";
import Typography from "./Typography";

const newsList = [
    {
        id: "miami-expo",
        imgSrc: "/medical/lumed-srl/new2.png",
        title: "World Health Expo 2026 Miami",
        desc: "Dal 17 al 19 giugno 2026, al Miami Beach Convention Center di Miami, torna WHX...",
    },
    {
        id: "exposanita",
        imgSrc: "/medical/lumed-srl/nes3.png",
        title: "EXPOSANITA' 2026",
        desc: "Dal 22 al 24 aprile 2026, a BolognaFiere, torna Exposanità 2026, l'appuntamento di riferimento per...",
    },
    {
        id: "bofap-filter",
        imgSrc: "/medical/lumed-srl/news1.png",
        title: "BOFAP: Innovative Spirometry Filter",
        desc: "BOFAP combines the paper mouthpiece and the VB filter into a single, lightweight device...",
    },
];

export default function NewsSection() {
    return (
        <section className="lumed-root w-full py-16 md:py-24 bg-white" id="news">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-12 max-w-[1440px]">

                {/* Header Grid: Split Title & Description */}
                <div className="space-y-4 pb-8 border-b border-gray-100">
                    <Typography
                        variant="h5"
                        color="secondary"
                        weight="bold"
                        className="tracking-wider font-space-grotesk font-bold block"
                    >
                        06 / Our News
                    </Typography>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
                        <div data-aos="fade-right">
                            <Typography variant="h2" color="dark" className="leading-tight tracking-tight font-bold">
                                Latest News, Insights & Trade Shows
                            </Typography>
                        </div>
                        <div
                            className="max-w-5xl ml-auto"
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <Typography variant="body" color="muted" className="leading-relaxed font-heading">
                                Stay up to date with the latest news from the Lumed world: trade show appearances, industry events, product launches, and company updates. Follow our activities and discover how we are driving innovation in the medical sector.
                            </Typography>
                        </div>
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
                            {/* Card Top: Visual Image (with hover zoom effect) */}
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative shrink-0">
                                <img
                                    src={news.imgSrc}
                                    alt={news.title}
                                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Bottom: Text Metadata */}
                            <div className="space-y-2 px-1">
                                <Link
                                    href={`#news-${news.id}`}
                                    className="block transition-colors duration-200"
                                >
                                    <Typography variant="h4" color="primary" className="font-bold tracking-tight hover:text-primary-hover font-heading">
                                        {news.title}
                                    </Typography>
                                </Link>
                                <Typography variant="body" color="muted" className="leading-relaxed block font-heading">
                                    {news.desc}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
