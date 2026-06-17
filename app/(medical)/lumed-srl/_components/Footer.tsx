import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send, Mail, Phone } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
    return (
        <footer className="lumed-root bg-[#f8fbfe] pt-16 " id="footer">
            <div className="custom-container mx-auto px-6 md:px-8  space-y-12 max-w-[1440px]">

                {/* 🗺️ TOP TIER: Logo on Left, Corporate Statement on Right */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#4277C2]/60 border-t-px " data-aos="fade-up">
                    {/* Logo Area */}
                    <Link href="/lumed-srl" className="flex items-center gap-3">
                        <img
                            src="/medical/lumed-srl/logo.png"
                            alt="LUMED Logo"
                            className="h-11 xl:h-15 w-auto object-contain"
                        />
                    </Link>

                    {/* Right Aligned Mission Statement */}
                    <div className="max-w-3xl" data-aos="fade-up">
                        <Typography variant="body" color="muted" className="lg:text-right font-normal leading-relaxed block font-heading text-gray-500">
                            We don't intend to stop. We've initiated design, regulatory, and manufacturing transitions that will lead to new medical devices that increasingly meet the needs of our existing customers and will allow us to expand into new target markets.
                        </Typography>
                    </div>
                </div>

                {/* 🗺️ BOTTOM TIER: Four Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 xl:gap-12 xl:gap-x-12 pb-12">

                    {/* Column 1: Newsletter and Statement (col-span 4) */}
                    <div className="lg:col-span-6 space-y-6 max-w-5xl" data-aos="fade-up" data-aos-delay="50">
                        <Typography variant="body" color="muted" className=" max-w-xl leading-relaxed font-heading">
                            For over 30 years, LUMED has been a leader in the production of cardiopulmonary diagnostic equipment. Our mission is to provide innovative, high-quality solutions for healthcare professionals.</Typography>

                        {/* Custom Subscription Newsletter Box */}
                        <div className="flex items-stretch w-full max-w-md md:max-w-[320px] rounded  overflow-hidden bg-primary">
                            <input
                                type="email"
                                placeholder="Please enter your email"
                                className="bg-primary text-white placeholder-white/60 text-xs md:text-sm px-4 py-2.5 focus:outline-none flex-grow"
                                aria-label="Email address for newsletter signup"
                            />
                            <button
                                className="bg-white px-3 flex items-center justify-center text-primary border-l border-primary hover:bg-gray-50 active:scale-95 transition-all shrink-0 cursor-pointer"
                                aria-label="Subscribe"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Quicks Links (col-span 2) */}
                    <div className="lg:col-span-2 lg:pl-4" data-aos="fade-up" data-aos-delay="100">
                        <Typography variant="h5" color="dark" weight="medium" className=" text-base mb-5 block font-heading">
                            Quicks Links
                        </Typography>
                        <ul className="space-y-3">
                            {["Home", "About Us", "Products", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="block">
                                        <Typography variant="body" color="muted" className="font-heading  hover:text-primary transition-colors">
                                            {link}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal Information (col-span 2) */}
                    <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="150">
                        <Typography variant="h5" color="dark" weight="medium" className=" text-base mb-5 block font-heading">
                            Legal Information
                        </Typography>
                        <ul className="space-y-3">
                            {["Privacy Policy", "Cookie Policy", "Support"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="block">
                                        <Typography variant="body" color="muted" className="font-heading  hover:text-primary transition-colors">
                                            {link}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Join the Conversation (col-span 4) */}
                    <div className="lg:col-span-2 space-y-5" data-aos="fade-up" data-aos-delay="200">
                        <Typography variant="h5" color="dark" weight="medium" className="text-base  mb-5 block font-heading">
                            Let's Join the Conversation
                        </Typography>
                        <div className="space-y-4">
                            {/* Phone Call */}
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href="tel:+390257606750" className="block">
                                    <Typography variant="body" color="muted" className="font-heading hover:text-primary transition-colors">
                                        +39 02 57 606 750
                                    </Typography>
                                </a>
                            </div>
                            {/* Email Mail */}
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:info@lumed.com" className="block">
                                    <Typography variant="body" color="muted" className="font-heading hover:text-primary transition-colors">
                                        info@lumed.com
                                    </Typography>
                                </a>
                            </div>
                        </div>

                        {/* Social Media Square Boxes */}
                        <div className="flex items-center gap-3 pt-2">
                            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-8 h-8  bg-primary hover:bg-primary-hover flex items-center justify-center text-white transition-all active:scale-95"
                                    aria-label="Social Link"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* Copyright Bottom Bar */}
            <div className="bg-white border-t border-gray-100 py-6 flex items-center justify-center">
                <Typography variant="small" color="muted" className="text-center font-normal font-heading block">
                    Copyright © 2026 LUMED. All rights reserved
                </Typography>
            </div>
        </footer>
    );
}
