"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function About() {
    return (
        <section className="w-full py-20 md:py-24 bg-[#F0FAFD]" id="about-us">
            <div className="custom-container mx-auto px-6 md:px-8 max-w-[1440px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-6 space-y-6 md:space-y-8" data-aos="fade-right">
                        <div className="space-y-3">
                            {/* Blue Accent Label */}
                            <Typography
                                variant="h5"
                                color="secondary"
                                weight="bold"
                                className="tracking-wider block font-space-grotesk font-bold"
                            >
                                01 / About Us
                            </Typography>
                            {/* Bold Heading */}
                            <Typography
                                variant="h2"
                                color="dark"
                                className="leading-tight tracking-tight font-bold"
                            >
                                Advancing the Future of Healthcare
                            </Typography>
                        </div>

                        {/* Description Paragraphs from the Screenshot */}
                        <div className="space-y-5">
                            <Typography
                                variant="body"
                                color="muted"
                                className=" leading-relaxed font-normal"
                            >
                                For over 30 years, LUMED has been a leading manufacturer of cardiopulmonary diagnostic equipment. Our mission is to provide innovative, high-quality solutions for healthcare professionals, helping improve the diagnosis and monitoring of cardiac diseases.
                            </Typography>
                            <Typography
                                variant="body"
                                color="muted"
                                className=" leading-relaxed font-normal"
                            >
                                We acquired LUMED in 2000 and, drawing on our over twenty years of experience in the medical device sector, set ourselves the goal of leveraging their expertise and expanding our business to include other industrial and medical uses of thermal paper.
                            </Typography>
                            <Typography
                                variant="body"
                                color="muted"
                                className=" leading-relaxed font-normal"
                            >
                                LUMED srl is a manufacturing company that has been operating in the field of medical devices for the cardiopulmonary diagnostics for over 25 years. Our company started its activity in the field of thermal papers for medical and industrial applications and has constantly increased its products portfolio: from consumable and disposable accessories to equipment for basic cardiological and pulmonary diagnostics.
                            </Typography>
                        </div>

                        {/* Action Button: Get in touch (Blue background, white arrow box) */}
                        <div className="inline-flex pt-2">
                            <Button
                                text="Get in touch"
                                variant="composite-blue"
                                href="#contact"
                                className="rounded"
                            />
                        </div>
                    </div>

                    {/* Right Column: Collaborative Office Scene Image */}
                    <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="200">
                        <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100 aspect-[4/3] lg:aspect-auto">
                            <img
                                src="/medical/lumed-srl/healthcare.png"
                                alt="Collaborating and discussing medical diagnostics"
                                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
