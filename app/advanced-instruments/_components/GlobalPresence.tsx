"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

const GlobalPresence = () => {
    return (
        <section className="py-16 md:py-20 bg-[url('/advanced-instruments/images/global-bg.png')] bg-cover bg-center relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div
                    className="z-10"
                >
                    <SectionHeader
                        label="Global Presence"
                        title="Carrying a Full Range of Advanced Medical Supplies"
                        light={true}
                    />

                    <div className="space-y-4 mb-8">
                        <p className="text-base leading-relaxed text-white!">
                            No matter what type of medical facility you run, chances are you use a wide variety of advanced medical supplies, patient monitoring instruments, surgical supplies, and more. When you're looking for high-quality supplies and equipment, our company carries a full stock of everything you need to maintain a cost-effective clinic that serves its patients reliably. Check out our products page to view our full selection of supplies including:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-12 mt-10 mb-12">
                        {[
                            "Anesthesia Machines",
                            "Neonatal Incubators",
                            "Phototherapy Lamps",
                            "Defibrillators",
                            "Electrocardiograph Machines",
                            "Universal Operating Tables and Lamps",
                            "Fetal Monitors",
                            "Ultrasonic Table Top Dopplers",
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <img src="advanced-instruments/images/Turbine_fill-white.png" alt="Turbine_fill" className="w-6 h-6" />
                                <span className="text-white text-base font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4 mb-10">
                        <p className="text-base leading-relaxed text-white!">
                            As a medical professional or clinic administrator or supplier, it's important for you to serve your patients as well as possible, and strive to run your facility cost effectively.
                        </p>
                    </div>

                    <Button
                        text="Learn More Our Global Presence"
                        variant="white"
                        className="!text-[#00aeef]"
                        href="#"
                    />
                </div>

                <div
                    className="relative w-full max-w-2xl mx-auto"
                    data-aos="fade-left"
                >
                    {/* Decorative Background Blocks */}
                    <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute lg:-top-10 lg:-right-10 -top-3 -right-3 w-full h-[50%] rounded-2xl"
                        style={{ background: "linear-gradient(93.62deg, #0DB8FF 0%, #0089C2 103.72%)" }}
                    />
                    <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute lg:-bottom-10 lg:-left-10 -bottom-3 -left-3 w-full h-[50%] rounded-2xl"
                        style={{ background: "linear-gradient(93.62deg, #0089C2 0%, #0DB8FF 103.72%)" }}
                    />

                    <div className="aspect-[16/9] p-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl relative overflow-hidden flex items-center justify-center z-10">
                        <video
                            src="https://cdn.clinicalvisuals.com/medical/soniquence/landing_page/sequence_1.webm"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;
