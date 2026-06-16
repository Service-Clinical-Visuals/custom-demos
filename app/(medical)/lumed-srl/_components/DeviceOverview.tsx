"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function DeviceOverview() {
    return (
        <section className="lumed-root w-full py-20 md:py-24 bg-primary text-white" id="device-overview">
            <div className="custom-container mx-auto px-6 md:px-8 max-w-[1440px]">

                {/* 3-Column Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">

                    {/* Left Column: Device Description (col-span 4) */}
                    <div className="lg:col-span-4 flex flex-col justify-center space-y-6 md:space-y-8" data-aos="fade-right">
                        <div className="space-y-3">
                            {/* White Accent Label */}
                            <Typography
                                variant="h5"
                                color="white"
                                weight="bold"
                                className="tracking-wider font-space-grotesk font-bold block "
                            >
                                03 / Device Overview
                            </Typography>
                            {/* Bold White Heading */}
                            <Typography
                                variant="h2"
                                color="white"
                                className="leading-tight tracking-tight font-bold"
                            >
                                Engineered for Accuracy
                            </Typography>
                        </div>

                        {/* Description paragraphs */}
                        <div className="space-y-4">
                            <Typography
                                variant="body"
                                color="white"
                                className="leading-relaxed font-normal "
                            >
                                Thus began LUMED's adventure in the world of medical devices. A boundless world in which LUMED has carved out a unique niche in Italy and around the world, becoming the go-to provider for consumables, equipment, and accessories used daily in electrocardiogram and pulmonary function tests.
                            </Typography>
                            <Typography
                                variant="body"
                                color="white"
                                className="leading-relaxed font-normal "
                            >
                                Accurately detects and evaluates pacemaker activity for reliable cardiac monitoring. Provides detailed insights to support effective patient assessment.
                            </Typography>
                            <Typography
                                variant="body"
                                color="white"
                                className="leading-relaxed font-normal "
                            >
                                Monitors ST segment changes to help identify potential cardiac abnormalities. Enables early detection and assessment of ischemic events.
                            </Typography>
                        </div>

                        {/* White Button (View Product) */}
                        <div className="inline-flex pt-2">
                            <Button
                                text="View Product"
                                variant="composite-white"
                                href="#products"
                                className="rounded"
                            />
                        </div>
                    </div>

                    {/* Middle Column: Circular Image (col-span 4) */}
                    <div className="lg:col-span-4 flex justify-center items-center" data-aos="zoom-in" data-aos-delay="100">
                        {/* Perfect Circle Frame with Lumed accuracy device image */}
                        <div className="w-full max-w-sm sm:max-w-sm xl:max-w-md aspect-[4/5] rounded-full z-30 overflow-hidden relative ">
                            <img
                                src="/medical/lumed-srl/accuracy.png"
                                alt="LUMED Cardiopulmonary Diagnostics Accuracy"
                                className="w-full h-full object-cover aspect-[4/5]"
                            />
                        </div>
                    </div>

                    {/* Right Column: Advantages Cards (col-span 4) */}
                    <div className="lg:col-span-4 space-y-6" data-aos="fade-left" data-aos-delay="200">
                        {/* Advantages Header Title */}
                        <Typography
                            variant="h3"
                            color="white"
                            className="font-bold tracking-wide pb-4 mb-2 block"
                        >
                            Advantages
                        </Typography>

                        <div className="space-y-5">
                            {/* Advantage Card 1 */}
                            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <Typography
                                    variant="h4"
                                    color="primary"
                                    className="font-bold mb-2 leading-snug block"
                                >
                                    Complete and scalable
                                </Typography>
                                <Typography
                                    variant="body"
                                    color="muted"
                                    className="leading-relaxed"
                                >
                                    All the tools included, also pacemaker and Atrial Fibrillation analysis. Records 3 or 12 channels. USB and SD card. GDT and PDF. Can use two monitors.
                                </Typography>
                            </div>

                            {/* Advantage Card 2 */}
                            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <Typography
                                    variant="h4"
                                    color="primary"
                                    className="font-bold mb-2 leading-snug block"
                                >
                                    Advanced diagnostics
                                </Typography>
                                <Typography
                                    variant="body"
                                    color="muted"
                                    className="leading-relaxed"
                                >
                                    Advanced algorithms: QT/QTc and Dispersion, HRV, HRT, TWA, SAECG, Vectorcardiography, Sleep Apnea, DCA Deceleration Capacity.
                                </Typography>
                            </div>

                            {/* Advantage Card 3 */}
                            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                <Typography
                                    variant="h4"
                                    color="primary"
                                    className="font-bold mb-2 leading-snug block"
                                >
                                    Compactness and portability
                                </Typography>
                                <Typography
                                    variant="body"
                                    color="muted"
                                    className="leading-relaxed"
                                >
                                    As wide as a credit card and as light as Bluetooth earphones. 5 or 10-wire patient cables, light and robust. LCD display, keys and LED.
                                </Typography>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
