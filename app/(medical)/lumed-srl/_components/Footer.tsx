"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#f8fbfe] pt-16 border-t border-gray-100/50" id="footer">
            <div className="custom-container mx-auto px-6 md:px-8 space-y-12">
                
                {/* 🗺️ TOP TIER: Logo on Left, Corporate Statement on Right */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-gray-200/60" data-aos="fade-up">
                    {/* Logo Area */}
                    <Link href="/lumed-srl" className="flex items-center gap-3">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary"
                        >
                            <circle cx="50" cy="50" r="45" fill="currentColor" />
                            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
                            <rect x="42" y="30" width="16" height="40" rx="3" fill="white" />
                            <circle cx="50" cy="38" r="4" fill="#3c82c6" />
                            <path
                                d="M20,50 L38,50 L42,32 L47,68 L53,18 L58,82 L62,50 L80,50"
                                stroke="white"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-[24px] font-bold text-primary tracking-tight leading-none">
                                LUMED
                            </span>
                            <span className="text-[9px] font-semibold text-gray-400 tracking-[0.14em] leading-normal uppercase mt-0.5">
                                Solutions in Cardiopulmonary
                            </span>
                        </div>
                    </Link>
                    
                    {/* Right Aligned Mission Statement */}
                    <div className="lg:text-right text-gray-400 text-xs md:text-sm italic font-medium max-w-xl leading-relaxed">
                        We don't intend to stop. We've initiated design, regulatory, and manufacturing transitions that will lead to new medical devices that increasingly meet the needs of our existing customers and will allow us to expand into new target markets.
                    </div>
                </div>

                {/* 🗺️ BOTTOM TIER: Four Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 pb-12">
                    
                    {/* Column 1: Newsletter and Statement (col-span 4) */}
                    <div className="lg:col-span-4 space-y-6" data-aos="fade-up" data-aos-delay="50">
                        <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                            We don't intend to stop. We've initiated design, regulatory, and manufacturing transitions that will lead to new medical devices that increasingly meet the needs of our existing customers and will allow us to expand into new target markets.
                        </p>
                        
                        {/* Custom Subscription Newsletter Box */}
                        <div className="flex items-center w-full max-w-sm rounded bg-primary overflow-hidden shadow-sm border border-primary/20">
                            <input 
                                type="email" 
                                placeholder="Please enter your email" 
                                className="bg-transparent text-white placeholder-white/60 text-xs md:text-sm px-4 py-3 focus:outline-none flex-grow"
                                aria-label="Email address for newsletter signup"
                            />
                            {/* Blue send icon in white square */}
                            <button 
                                className="bg-white p-3 flex items-center justify-center text-primary hover:bg-gray-50 active:scale-95 transition-all shrink-0 cursor-pointer"
                                aria-label="Subscribe"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Quicks Links (col-span 2) */}
                    <div className="lg:col-span-2 lg:pl-4" data-aos="fade-up" data-aos-delay="100">
                        <h4 className="text-[#1a1a1a] font-bold text-sm md:text-base uppercase tracking-wider mb-5">
                            Quicks Links
                        </h4>
                        <ul className="space-y-3 text-xs md:text-sm font-medium">
                            {["Home", "About Us", "Products", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal Information (col-span 2) */}
                    <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="150">
                        <h4 className="text-[#1a1a1a] font-bold text-sm md:text-base uppercase tracking-wider mb-5">
                            Legal Information
                        </h4>
                        <ul className="space-y-3 text-xs md:text-sm font-medium">
                            {["Privacy Policy", "Cookie Policy", "Support"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-500 hover:text-primary transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Join the Conversation (col-span 4) */}
                    <div className="lg:col-span-4 space-y-5" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-[#1a1a1a] font-bold text-sm md:text-base uppercase tracking-wider mb-5">
                            Let's Join the Conversation
                        </h4>
                        <div className="space-y-4">
                            {/* Phone Call */}
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href="tel:+390257606750" className="text-xs md:text-sm text-gray-500 hover:text-primary font-medium transition-colors">
                                    +39 02 57 606 750
                                </a>
                            </div>
                            {/* Email Mail */}
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:info@lumed.com" className="text-xs md:text-sm text-gray-500 hover:text-primary font-medium transition-colors">
                                    info@lumed.com
                                </a>
                            </div>
                        </div>

                        {/* Social Media Rounded Square Boxes */}
                        <div className="flex items-center gap-3 pt-2">
                            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded bg-primary hover:bg-primary-hover flex items-center justify-center text-white transition-all shadow-sm active:scale-95"
                                    aria-label="Social Link"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            {/* Copyright Bottom Bar */}
            <div className="bg-[#f0f5fa] border-t border-gray-200/50 py-5 flex items-center justify-center">
                <p className="text-gray-400 text-xs tracking-wider text-center font-medium">
                    Copyright © 2025 LUMED. All rights reserved
                </p>
            </div>
        </footer>
    );
}
