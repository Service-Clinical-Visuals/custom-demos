"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height (half banner)
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Ambassadors", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  return (
    <header className={`w-full bg-white shadow-sm fixed top-0 left-0 z-[100] transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
      <div className="custom-container ">
        <div className="flex items-center justify-between py-3">
          {/* Logo Area */}
          <div className="flex-shrink-0">
                      <img src="/moto/lucas-oil/lucaslogo.png" className="w-[140px] lg:w-[150px] xl:w-[180px] h-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 lg:gap-2 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm md:text-[14px] xl:text-[16px] font-sans font-semibold transition-colors px-3 lg:px-4 xl:px-6 py-2 whitespace-nowrap ${
                  link.active
                    ? "bg-[#0c2c65] text-white [clip-path:polygon(15px_0,calc(100%-15px)_0,100%_50%,calc(100%-15px)_100%,15px_100%,0_50%)]"
                    : "text-gray-800 hover:text-[#081b37]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block ml-2 xl:ml-0">
            <Link
              href="#"
              className="bg-[#0c2c65] text-white px-6 lg:px-8 xl:px-10 py-3 lg:py-3.5 !font-(family-name:--font-orbitron) font-semibold text-sm md:text-[14px] xl:text-[16px] hover:bg-[#0c2342] transition-colors [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)] whitespace-nowrap inline-block"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col z-50">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 text-base font-semibold border-b border-gray-50 last:border-0 ${
                  link.active
                    ? "bg-[#0c2c65] text-white [clip-path:polygon(15px_0,calc(100%-15px)_0,100%_50%,calc(100%-15px)_100%,15px_100%,0_50%)]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-5">
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#0c2c65] text-white px-6 py-3.5 font-sans font-semibold text-base hover:bg-[#0c2342] transition-colors [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)] inline-block w-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
