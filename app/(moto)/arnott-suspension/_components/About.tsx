"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Zap, Car } from "lucide-react";
import Button from "./Button";

function Counter({ value, duration = 2000 }: { value: number, duration?: number }) {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isInView, value, duration]);

    return <span ref={countRef}>{count}</span>;
}

export default function About() {
    return (
        <section className="lg:py-20 py-16 overflow-hidden">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Side: Stats and Image */}
                    <div className="lg:col-span-6 relative flex items-center min-h-[700px]" data-aos="fade-right">
                        {/* Dark Background Bar (Behind the image) */}
                        <div className="absolute left-0 top-0 bottom-0 w-[45%] z-0 overflow-hidden bg-[url('/arnott/images/dark-bg.png')]">
                            
                            {/* Stats Content on the Dark Bar */}
                            <div className="relative z-20 h-full flex flex-col justify-center pl-7">
                                <div className="mb-16">
                                    <h3 className="text-5xl font-bold mb-2 text-white!">
                                        <Counter value={1000} />
                                    </h3>
                                    <p className="text-[12px] uppercase tracking-widest font-bold text-white!">Vehicle <br /> Applications</p>
                                    <div className="w-20 h-[1.5px] bg-white/20 mt-6"></div>
                                </div>
                                <div>
                                    <h3 className="text-5xl font-bold mb-2 text-white!">
                                        <Counter value={800} />
                                    </h3>
                                    <p className="text-[12px] uppercase tracking-widest font-bold text-white!">Vehicle <br /> Applications</p>
                                    <div className="w-20 h-[1.5px] bg-white/20 mt-6"></div>
                                </div>
                            </div>
                        </div>

                        {/* Image (Overlapping the dark bar) */}
                        <div className="relative z-10 ml-[25%] w-[85%] h-[480px] md:h-[550px] shadow-2xl overflow-hidden rounded-sm">
                            <img src="/arnott/images/about.png" alt="Arnott Technician" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-6 flex flex-col gap-6 pl-0 lg:pl-10" data-aos="fade-left">
                        <div>
                            <span className="text-primary font-semibold text-base tracking-wider mb-1 block">About Us</span>
                            <h2 className="text-[28px] md:text-[32px] font-bold text-[#171717] mb-3">Arnott's History</h2>
                            
                            <h4 className="text-lg font-bold text-[#171717] mb-4">Over 35 Years of Innovation & Quality</h4>
                            
                            <div className="space-y-4 mb-6 leading-relaxed">
                                <p className="text-base md:text-[17px]">
                                    Starting in the family garage out of Punta Gorda, Florida, Adam Arnott discovered his passion for working on and building cars. 
                                    His father, Donald Arnott, recognized and encouraged Adam's automotive aptitude and interest. 
                                    The pair began traveling throughout Florida with the goal of repairing air suspension problems along the way.
                                    This was often done for little to no fee.
                                </p>
                                <p className="text-base md:text-[17px]">
                                    In 1989, this dedication for cars and helping others laid the foundation for Arnott Industries. 
                                    Now, Arnott has become the most successful, advanced and innovative automotive air suspension manufacturer in the world.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex flex-col gap-8 mb-6">
                                <div className="flex items-start gap-4">
                                    <img src="/arnott/images/damper.png" alt="Zap Icon" className="w-10 h-10 object-contain" />
                                    <div>
                                        <h5 className="font-semibold text-[24px] text-[#171717] mb-1">Relentless Innovation</h5>
                                        <p className="text-base md:text-[17px] leading-relaxed">
                                            As leaders in proprietary adaptive technologies, we deliver smarter, more efficient designs that provide superior performance and ride comfort.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <img src="/arnott/images/car.png" alt="Zap Icon" className="w-10 h-10 object-contain" />
                                    <div>
                                        <h5 className="font-bold text-[24px] text-[#171717] mb-1">Built to Last</h5>
                                        <p className="text-base md:text-[17px] leading-relaxed">
                                            Assembled in America and Europe using premium Tier 1 components, our products undergo rigorous durability testing to ensure uncompromising quality.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Button 
                                href="#" 
                                variant="primary" 
                                size="default" 
                                className="group flex items-center gap-2 px-8 py-3 rounded-none font-bold text-sm uppercase tracking-wider"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
