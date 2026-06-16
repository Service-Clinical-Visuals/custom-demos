"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${scrolled || mobileMenuOpen
                ? "translate-y-0 opacity-100 bg-white shadow-md border-b border-gray-100"
                : "-translate-y-full opacity-0 pointer-events-none"
                } ${mobileMenuOpen ? "h-auto py-6" : "h-[85px] py-4"}`}
        >
            <div className="custom-container mx-auto px-6 lg:px-8 flex items-center justify-between h-full max-w-[1440px]">
                {/* Logo Section */}
                <Link href="/lumed-srl" className="flex items-center gap-3">
                    <img
                        src="/medical/lumed-srl/logolumed 1.png"
                        alt="LUMED Logo"
                        className="h-11 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navbar Links */}
                <nav className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors duration-200 ${isActive
                                    ? "text-primary border-b-2 border-primary pb-1"
                                    : "text-gray-600 hover:text-primary"
                                    }`}
                            >
                                <Typography
                                    as="span"
                                    variant="h6"
                                    color="none"
                                    weight={isActive ? "semibold" : "semibold"}
                                >
                                    {link.name}
                                </Typography>
                            </Link>
                        );
                    })}
                </nav>

                {/* Contact Us Action Button */}
                <div className="hidden lg:block">
                    <Button text="Contact Us" variant="primary" href="#contact" showIcon={false} className="rounded" />
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
                                className={`border-b border-gray-50 pb-3 block ${isActive ? "text-primary" : "text-gray-800 hover:text-primary"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Typography
                                    as="span"
                                    variant="lead"
                                    color="none"
                                    weight="bold"
                                >
                                    {link.name}
                                </Typography>
                            </Link>
                        );
                    })}
                    <div className="pt-4">
                        <Button
                            text="Contact Us"
                            variant="primary"
                            href="#contact"
                            showIcon={false}
                            className="w-full rounded justify-center"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
