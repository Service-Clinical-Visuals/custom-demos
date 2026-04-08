"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Twitter, Instagram, Facebook, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    quickLinks: [
        { name: "Home", href: "/advanced-instruments" },
        { name: "Company", href: "#" },
        { name: "Products", href: "#" },
        { name: "News", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Anesthesia Machines v.2", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Our Approach", href: "#" },
        { name: "Our Commitment", href: "#" },
        { name: "Our Commitment to Quality", href: "#" },
    ],
    category: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms and Conditions", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News", href: "#" },
    ],
};

const Footer = () => {
    const pathname = usePathname();

    const renderLinks = (links: { name: string, href: string }[]) => (
        <ul className="space-y-4">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <li key={link.name}>
                        <Link href={link.href} className={`transition-colors font-semibold text-sm md:text-base ${isActive ? "text-[#00aeef]" : "text-gray-600 hover:text-[#00aeef]"}`}>
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <>
            <footer className="bg-white border-t border-gray-100 py-10 md:py-15 overflow-hidden" id="footer">
                <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/advanced-instruments" className="flex items-center group">
                            <img src="/advanced-instruments/images/advanced-logo.png" alt="logo" className="w-24 md:w-55" />
                        </Link>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-[#1a1a1a] font-semibold! text-lg mb-2 tracking-wider relative pb-2">
                            Quick Links
                        </h4>
                        {renderLinks(footerLinks.quickLinks)}
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-[#1a1a1a] font-semibold! text-lg mb-2 tracking-wider relative pb-2">
                            Company
                        </h4>
                        {renderLinks(footerLinks.company)}
                    </div>

                    {/* Category Column */}
                    <div>
                        <h4 className="text-[#1a1a1a] font-semibold! text-lg mb-2 tracking-wider relative pb-2">
                            Category
                        </h4>
                        {renderLinks(footerLinks.category)}
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[#1a1a1a] font-semibold! text-lg mb-2 tracking-wider relative pb-2">
                            Contact Info
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[#00aeef] mt-1 shrink-0" size={18} />
                                <p className="text-sm md:text-base font-semibold leading-relaxed">
                                    6805 NW 77th Ct, Miami, FL 33166 USA
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                {[Twitter, Instagram, Facebook, Linkedin].map((Icon, index) => (
                                    <Link key={index} href="#" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#00aeef] hover:text-white transition-all shadow-sm">
                                        <Icon size={18} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container mx-auto px-4 md:px-0 py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center">
                <p className="text-[#1a1a1a] text-sm tracking-wider text-center md:text-left">
                    © 2026 Advanced Instrumentations. All rights reserved.
                </p>
            </div>
        </>
    );
};

export default Footer;
