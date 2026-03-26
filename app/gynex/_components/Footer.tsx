"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className="bg-[#F7F7F7] pt-16 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6 lg:col-span-4" data-aos="fade-right">
                        <Link href="/gynex" className="text-2xl font-bold tracking-widest">
                            <img src="/gynex/images/g-logo.png" alt="Gynex" className="w-50 object-contain" />
                        </Link>
                        <p className="text-gray-500  leading-relaxed text-justify">
                            Gynex is dedicated to providing customers with high-quality OB/GYN instruments, gynecologist equipment, and practice solutions at a fair price to all customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6 lg:col-span-2 lg:ml-7" data-aos="fade-up" data-aos-delay="100">
                        <h4 className="text-[20px] font-bold text-[#1a1a1a]">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-[#333333] text-[16px]">
                            <li><Link href="/gynex" className={`transition-colors ${pathname === '/gynex' ? 'text-[#7C2B83] font-bold' : 'hover:text-[#7C2B83]'}`}>Home</Link></li>
                            <li><Link href="/gynex/about" className={`transition-colors ${pathname?.startsWith('/gynex/about') ? 'text-[#7C2B83] font-bold' : 'hover:text-[#7C2B83]'}`}>About</Link></li>
                            <li><Link href="/gynex/shop" className={`transition-colors ${pathname?.startsWith('/gynex/shop') ? 'text-[#7C2B83] font-bold' : 'hover:text-[#7C2B83]'}`}>Shop</Link></li>
                            <li><Link href="/gynex/info" className={`transition-colors ${pathname?.startsWith('/gynex/info') ? 'text-[#7C2B83] font-bold' : 'hover:text-[#7C2B83]'}`}>Info</Link></li>
                            <li><Link href="/gynex/contact" className={`transition-colors ${pathname?.startsWith('/gynex/contact') ? 'text-[#7C2B83] font-bold' : 'hover:text-[#7C2B83]'}`}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-6 lg:col-span-3 lg:ml-7" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-[20px] font-bold text-[#1a1a1a]">Company</h4>
                        <ul className="flex flex-col gap-3 text-[#333333] text-[16px]">
                            <li><Link href="/gynex/catalog" className={`transition-colors ${pathname?.startsWith('/gynex/catalog') ? 'text-[#7C2B83] font-bold' : 'hover:text-[#7C2B83]'}`}>Catalog</Link></li>
                            <li><Link href="/gynex/privacy" className={`transition-colors ${pathname?.startsWith('/gynex/privacy') ? 'text-[#7C2B83] font-bold' : 'hover:text-[#7C2B83]'}`}>Privacy Policy</Link></li>
                            <li><Link href="/gynex/credits" className={`transition-colors ${pathname?.startsWith('/gynex/credits') ? 'text-[#7C2B83] font-bold' : 'hover:text-[#7C2B83]'}`}>Site Credits</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-[20px] font-bold text-[#1a1a1a]">Contact Us</h4>
                        <ul className="flex flex-col gap-4 text-[#333333] text-[16px]">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-[#333333] shrink-0 mt-1" />
                                <span>4621 Browning Drive, North<br />Richland Hills, TX 76180</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={18} className="text-[#333333] shrink-0" />
                                <span>888-485-4644</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={18} className="text-[#333333] shrink-0" />
                                <span>services@gynex.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Purple Copyright Bar */}
            <div className="bg-[#7C2B83] py-3 text-center text-[14px] font-medium tracking-wide">
                <div className="container mx-auto px-6">
                    <p className="!text-white">Copyright © {new Date().getFullYear()} Gynex Corporation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
