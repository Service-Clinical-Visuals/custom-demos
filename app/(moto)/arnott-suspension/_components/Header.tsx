"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, Facebook, Instagram, Youtube, Linkedin, Twitter, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full relative z-50">
            {/* Top Bar - Height set to h-[35px] md:h-10 to match reference */}
            <div className={`h-[35px] md:h-10 w-full relative overflow-hidden transition-all duration-300 ${isScrolled ? 'absolute -top-10' : 'relative'}`}>
                {/* Backgrounds */}
                <div className="absolute inset-0 z-0">
                    {/* Right Color #171717 (Base Layer) */}
                    <div className="absolute inset-0 bg-[#171717]"></div>
                    
                    {/* White Divider Line */}
                    <div className="absolute top-0 left-0 h-full bg-white z-10" 
                         style={{ width: 'calc(50% + 205px)', clipPath: 'polygon(0 0, 98.2% 0, 100.2% 100%, 0 100%)' }}></div>
                    
                    {/* Left Color #545454 */}
                    <div className="absolute top-0 left-0 h-full bg-[#545454] z-20" 
                         style={{ width: 'calc(50% + 210px)', clipPath: 'polygon(0 0, 98% 0, 100% 100%, 0 100%)' }}></div>
                </div>

                <div className="container mx-auto h-full px-4 md:px-12 relative z-30 flex justify-between items-center lg:text-[16px] text-xs md:text-sm text-white">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-white" />
                            <span className="font-medium tracking-tight">info@arnotteurope.com</span>
                        </div>
                        <div className="w-[1px] h-4 bg-white/80"></div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-white" />
                            <span className="font-medium tracking-tight">+31 73 7850 580</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-5">
                        <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="hover:text-primary transition-colors"><Youtube size={20} /></Link>
                        <Link href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                        <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar - Height set to h-[75px] md:h-[80px] to match reference */}
            <div className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 shadow-lg' : 'relative'}`}>
                {/* Backgrounds */}
                <div className="absolute inset-0 z-0">
                    {/* Right Menu Area #FFFFFF (Base Layer) */}
                    <div className="absolute inset-0 bg-white"></div>
                    
                    {/* White Divider Line */}
                    <div className="absolute top-0 left-0 h-full bg-white z-10 [--logo-width:60%] lg:[--logo-width:35%]" 
                         style={{ width: 'calc(var(--logo-width) - 76px)', clipPath: 'polygon(0 0, 100% 0, 88.2% 100%, 0 100%)' }}></div>
                    
                    {/* Left Logo Area #171717 */}
                    <div className="absolute top-0 left-0 h-full z-20 [--logo-width:60%] lg:[--logo-width:35%]" 
                         style={{ 
                            width: 'calc(var(--logo-width) - 80px)', 
                            clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)',
                            background: "url('/arnott/images/dark-bg.png')"
                         }}>
                        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
                    </div>
                </div>

                <div className="container mx-auto h-[75px] md:h-[80px] relative z-30 flex items-center justify-between">
                    {/* Logo Area */}
                    <div className="h-full flex items-center px-4 md:px-12 pr-16 md:pr-24">
                        <Link href="/arnott" className="flex items-center gap-3">
                            <div className="">
                                <img src="/arnott/images/arnott-logo.png" alt="arnott logo" className="w-25 lg:w-35" />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 pr-4">
                        {["Home", "Products", "Air Suspension Academy", "Dealer and Installer Locator", "Info"].map((item) => (
                            <Link key={item} href="#" className="text-[#171717] font-medium text-[17px] hover:text-primary whitespace-nowrap">
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="flex items-center gap-4 px-4">
                        <Button href="#" variant="primary" size="default" className="hidden! md:flex rounded-none px-8 py-3.5 font-black text-xs">
                            Contact Us
                        </Button>
                        
                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden p-2 text-[#171717]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 z-50">
                        {["Home", "Products", "Air Suspension Academy", "Dealer and Installer Locator", "Info"].map((item) => (
                            <Link key={item} href="#" className="text-md font-semibold text-[#171717]">{item}</Link>
                        ))}
                        <Button href="#" variant="primary" className="w-full mt-4 rounded-none">Contact Us</Button>
                    </div>
                )}
            </div>
        </header>
    );
}
