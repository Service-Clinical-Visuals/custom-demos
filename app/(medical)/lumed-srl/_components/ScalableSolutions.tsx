import React from "react";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

export default function ScalableSolutions() {
    return (
        <section
            className="w-full py-16 md:py-24 bg-[#F0FAFD]"
            id="solutions"
        >
            <div className="custom-container mx-auto px-6 md:px-8 space-y-10 md:space-y-12 max-w-[1440px]">

                {/* TOP ROW: Text checklist and Dynamic Video Player */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

                    {/* Left Side: Holter Solutions Text Checklist (col-span 6) */}
                    <div className="lg:col-span-6 space-y-8" data-aos="fade-right">
                        <div className="space-y-3">
                            <Typography
                                variant="body"
                                color="secondary"
                                className="tracking-wider block font-space-grotesk font-bold text-sm"
                            >
                                05 / Types
                            </Typography>
                            <Typography variant="h2" color="dark" className="text-[28px] md:text-[38px] leading-tight tracking-tight font-bold">
                                Scalable Solutions for Holter Analysis
                            </Typography>
                        </div>

                        {/* Checklist Items */}
                        <div className="space-y-8">
                            {/* Item 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
                                    <Check size={20} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-col space-y-0.5">
                                        <Typography variant="h4" color="dark" className="font-bold text-lg leading-tight block">
                                            EUROHOLTER SW3/12
                                        </Typography>
                                        <Typography variant="small" color="muted" className="font-bold tracking-wider uppercase block">
                                            VER. PROFESSIONAL
                                        </Typography>
                                    </div>
                                    <Typography variant="body" color="muted" className="leading-relaxed font-heading">
                                        <strong className="text-gray-800">Rapidity and precision:</strong> Euroholter SW3 / 12 Professional is the fast and reliable companion for your Holter Analysis, fulfilling all your needs. 3 – or up to 12-channel recordings, lasting from 24 hours to 7 days.
                                    </Typography>
                                </div>
                            </div>

                            <hr className="border-gray-300/90 " />

                            {/* Item 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm mt-1">
                                    <Check size={20} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-col space-y-0.5">
                                        <Typography variant="h4" color="dark" className="font-bold text-lg leading-tight block">
                                            EUROHOLTER SW3/12
                                        </Typography>
                                        <Typography variant="small" color="muted" className=" font-bold tracking-wider uppercase block">
                                            VER. CLINICAL
                                        </Typography>
                                    </div>
                                    <Typography variant="body" color="muted" className=" leading-relaxed font-heading">
                                        <strong className="text-gray-800">Rapidity and precision:</strong> EUROHOLTER SW3/12 CLINICAL solves complex cases with advanced features including dual PC monitor support, Heart-Rate Turbulence (HRT), T-wave Alternans (TWA), and DC .
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Video Player (col-span 6) */}
                    <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
                        <div className="w-full aspect-video bg-gray-50 overflow-hidden shadow-lg border border-gray-100 relative min-h-[300px] md:min-h-[400px]">
                            <DynamicVideoPlayer
                                type="short-1"
                                className="w-full h-full object-cover"
                            />


                        </div>
                    </div>

                </div>

                {/* BOTTOM ROW: Image Space and Advantages Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">

                    {/* Left Column: Image (col-span 6) */}
                    <div className="lg:col-span-6 flex items-start" data-aos="fade-right" data-aos-delay="200">
                        <div className="w-full max-w-[791px] aspect-[4/3] sm:aspect-[791/358] lg:h-[358px] overflow-hidden rounded-xl md:rounded-none shadow-md border border-gray-100 bg-white">
                            <img
                                src="/medical/lumed-srl/scalable.png"
                                alt="LUMED Holter Analysis Procedure"
                                className="w-full h-full object-cover  hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    {/* Right Column: 2 Blue Info Cards + View Product Button (col-span 6) */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-8" data-aos="fade-left" data-aos-delay="300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* Blue Info Card 1 */}
                            <div className="bg-primary text-white  p-6 shadow-md border border-white/10 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <div className="space-y-2">
                                    <Typography variant="h4" color="white" weight="bold" className="text-base leading-snug font-heading">
                                        Complete and scalable
                                    </Typography>
                                    <Typography variant="body" color="white" className="text-white/85 leading-relaxed font-heading">
                                        All the tools included, also pacemaker and Atrial Fibrillation analysis. Records 3 or 12 channels. USB and SD card. GDT and PDF. Can use two monitors.
                                    </Typography>
                                </div>
                            </div>

                            {/* Blue Info Card 2 */}
                            <div className="bg-primary text-white  p-6 shadow-md border border-white/10 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                                <div className="space-y-2">
                                    <Typography variant="h4" color="white" weight="bold" className="text-base leading-snug font-heading">
                                        Advanced diagnostics
                                    </Typography>
                                    <Typography variant="body" color="white" className="text-white/85 leading-relaxed font-heading">
                                        Advanced algorithms: QT/QTc and Dispersion, HRV, HRT, TWA, SAECG, Vectorcardiography, Sleep Apnea, DCA Deceleration Capacity.
                                    </Typography>
                                </div>
                            </div>

                        </div>

                        {/* View Product Button */}
                        <div className="inline-flex mb-5 xl:mb-10 ">
                            <Button
                                text="View Product"
                                variant="composite-blue"
                                href="#products"
                                className="rounded"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}