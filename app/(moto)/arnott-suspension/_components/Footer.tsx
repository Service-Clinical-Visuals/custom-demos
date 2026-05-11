"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[url('/arnott/images/dark-bg.png')] bg-cover bg-center pt-20 pb-6">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3.5fr_2.5fr_2.5fr_2.5fr] gap-12 mb-16">
                    
                    {/* Logo and Newsletter */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col">
                            <img src="/arnott/images/arnott-logo.png" alt="arnott logo" className="w-35" />
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <div className="flex bg-white rounded-sm overflow-hidden p-1">
                                <input 
                                    type="email" 
                                    placeholder="Please find your email" 
                                    className="flex-1 px-4 py-2 text-gray-800 text-sm outline-none"
                                />
                                <button className="bg-primary text-white font-bold px-4 py-2 text-xs uppercase hover:bg-[#008f36] transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Customer Info */}
                    <div className="flex flex-col items-start lg:pl-14">
                        <h4 className="text-[24px] font-bold mb-4 text-white!">Customer Info</h4>
                        <ul className="flex flex-col gap-3">
                            {["About Us", "Terms & Conditions", "Quality Policy", "Privacy Policy", "Cookie Policy", "We Buy Cores", "News"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white text-base lg:text-[17px] hover:text-primary transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Support */}
                    <div className="flex flex-col items-start lg:pl-14">
                        <h4 className="text-[24px] font-bold mb-4 text-white!">Tech Support</h4>
                        <ul className="flex flex-col gap-3">
                            {["Air Suspension Academy", "Warranty", "Dealers and Installers", "FAQ", "Contact Us", "Manuals", "Careers"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white text-base lg:text-[17px] hover:text-primary transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-start lg:pl-14">
                        <h4 className="text-[24px] font-bold mb-4 text-white!">Contact Info</h4>
                        <div className="flex flex-col gap-6 ">
                            <div>
                                <p className="font-bold text-white! mb-2 text-base lg:text-[17px]">E-Mail</p>
                                <p className="hover:text-primary text-white! transition-colors cursor-pointer text-base lg:text-[17px]">info@arnotteurope.com</p>
                            </div>
                            <div>
                                <p className="font-bold text-white! mb-2 text-base lg:text-[17px]">Phone</p>
                                <p className="hover:text-primary text-white! transition-colors cursor-pointer text-base lg:text-[17px]">NL: +31 73 7850 580</p>
                                <p className="hover:text-primary text-white! transition-colors cursor-pointer text-base lg:text-[17px]">UK: +44 203 3186124</p>
                            </div>
                            <div>
                                <p className="font-bold text-white! mb-2 text-base lg:text-[17px]">Address</p>
                                <p className="hover:text-primary text-white! transition-colors cursor-pointer text-base lg:text-[17px]">Industrieweg 19, 5145 PD</p>
                                <p className="hover:text-primary text-white! transition-colors cursor-pointer text-base lg:text-[17px]">Waalwijk, The Netherlands</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="pt-6 border-t border-white/40 text-center">
                    <p className="text-white! text-[14px] font-semibold tracking-widest">
                        ©2026 Arnott Suspension Products. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
