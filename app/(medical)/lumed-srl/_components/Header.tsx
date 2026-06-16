"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
    { name: "Home", href: "/lumed-srl" },
    { name: "Products", href: "#" },
    { name: "Discover BOFAP", href: "#" },
    { name: "About Us", href: "#" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${
                scrolled || mobileMenuOpen
                    ? "translate-y-0 opacity-100 bg-white shadow-lg border-b border-gray-100"
                    : "-translate-y-full opacity-0 pointer-events-none"
            } ${mobileMenuOpen ? "h-auto py-6" : "h-[85px] py-4"}`}
        >
            <div className="custom-container mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
                {/* Logo Section */}
                <Link href="/lumed-srl" className="flex items-center gap-3">
                    <div className="flex items-center shrink-0">
                        {/* Beautiful custom inline SVG Lumed Logo */}
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary"
                        >
                            <circle cx="50" cy="50" r="45" fill="currentColor" />
                            {/* Inner white circle */}
                            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
                            {/* Cardiopulmonary device/transducer shape */}
                            <rect x="42" y="30" width="16" height="40" rx="3" fill="white" />
                            <circle cx="50" cy="38" r="4" fill="#3c82c6" />
                            {/* Lung & Heart Beat (ECG) waveform crossing through the center */}
                            <path
                                d="M20,50 L38,50 L42,32 L47,68 L53,18 L58,82 L62,50 L80,50"
                                stroke="white"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[25px] font-bold text-primary tracking-tight leading-none">
                            LUMED
                        </span>
                        <span className="text-[9px] font-semibold text-gray-500 tracking-[0.14em] leading-normal uppercase mt-0.5">
                            Solutions in Cardiopulmonary
                        </span>
                    </div>
                </Link>

                {/* Desktop Navbar Links */}
                <nav className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[16px] font-semibold transition-colors duration-200 tracking-wide ${
                                    isActive
                                        ? "text-primary border-b-2 border-primary pb-1"
                                        : "text-gray-600 hover:text-primary"
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Contact Us Action Button */}
                <div className="hidden lg:block">
                    <Button text="Contact Us" variant="primary" href="#contact" showIcon={false} className="rounded-md!" />
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="lg:hidden text-[#1a1a1a] p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-8 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-lg font-bold border-b border-gray-50 pb-3 block ${
                                    isActive ? "text-primary" : "text-gray-800 hover:text-primary"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <div className="pt-4">
                        <Button
                            text="Contact Us"
                            variant="primary"
                            href="#contact"
                            showIcon={false}
                            className="w-full rounded-md! justify-center"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
