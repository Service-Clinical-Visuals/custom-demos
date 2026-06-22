"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("petrovoll-banner");
      const threshold = banner ? banner.offsetHeight / 2 : 300;
      if (window.scrollY >= threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Set initial state on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/petrovoll" },
    { name: "About Us", href: "#", hasDropdown: true },
    { name: "Products", href: "#", hasDropdown: true },
    { name: "Distributors", href: "#" },
    { name: "News", href: "#" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 select-none petrovoll-header-font bg-white transition-all duration-500 ease-in-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
    }`}>
      {/* Desktop Header: Three-segment Layout */}
      <div className="hidden lg:flex items-stretch h-[88px] w-full bg-white">
        {/* Left Segment: Dark Logo Wing */}
        <div className="bg-dark text-white rounded-tr-[60px] px-10 xl:px-12 flex items-center justify-center min-w-[220px] xl:min-w-[280px] shrink-0 shadow-md">
          <Link href="/petrovoll" className="flex items-center">
            <img
              src="/moto/petrovoll/icon.png"
              alt="Petrovöll Logo"
              className="h-16 xl:h-16 object-contain filter brightness-110"
            />
          </Link>
        </div>

        {/* Center Segment: White Nav Bar */}
        <div className="flex-grow bg-white flex items-center justify-center px-8 ">
          <nav className="flex items-center gap-8 xl:gap-12 font-sans font-medium text-gray-800 text-base xl:text-lg">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center gap-1 cursor-pointer py-2">
                <Link
                  href={link.href}
                  className="hover:text-secondary transition-colors duration-200 font-semibold tracking-wide"
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                 <img src="/moto/petrovoll/arrow1.png" className="ml-2"/>
                )}            
              </div>
            ))}
          </nav>
        </div>

        {/* Right Segment: Dark Contact Wing */}
        <div className="bg-dark px-10 xl:px-12 flex items-center justify-center min-w-[200px] xl:min-w-[260px] shrink-0 shadow-md rounded-tl-[60px]">
          <Link
            href="#contact"
            className="bg-[#FDE509]  px-6 py-2.5  font-semibold text-sm xl:text-base transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow group"
          >
            <span>Contact Us</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Mobile/Tablet Header */}
      <div className="lg:hidden flex items-center justify-between h-[70px] bg-dark text-white px-6 shadow-md w-full">
        {/* Logo */}
        <Link href="/petrovoll" className="flex items-center">
          <img
            src="/moto/petrovoll/icon.png"
            alt="Petrovöll Logo"
            className="h-10 object-contain"
          />
        </Link>

        {/* Mobile Actions & Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="bg-[#FDE509] text-dark px-4 py-1.5 rounded font-bold text-xs transition-colors"
          >
            Contact
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-primary transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-[70px] left-0 w-full bg-dark/95 backdrop-blur-md border-t border-white/10 flex flex-col transition-all duration-300 ease-in-out origin-top z-40 ${
          isMobileMenuOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-6 px-6 gap-5">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-2 border-b border-white/10">
              <Link
                href={link.href}
                className="text-lg text-white font-semibold hover:text-primary transition-colors py-1 "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
             
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
