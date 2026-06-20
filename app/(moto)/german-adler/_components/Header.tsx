"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down approx half a viewport height
      const showThreshold = window.innerHeight / 2;
      if (window.scrollY > showThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Auto-close menu if scrolling back to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#", active: false },
    { name: "Products", href: "#", active: false },
    { name: "News", href: "#", active: false },
    { name: "Catalog", href: "#", active: false },
  ];

  return (
    <header 
      className={`w-full bg-[#fcc415] fixed top-0 left-0 z-[100] transition-transform duration-500 ease-in-out shadow-lg ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="custom-container relative">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link href="/german-adler" className="flex items-center">
            <img src="/moto/german-adler/icon.png" alt="German Adler Logo" className="h-[60px] md:h-[65px] object-contain drop-shadow-sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-10 font-semibold text-md md:text-[20px] !font-oxanium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`${link.active ? "text-white" : "text-[#1a1a1a] hover:text-white"} transition-colors !font-oxanium`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
{/* <h4 className="text-[#fcc415] font-semibold text-md md:text-[20px] leading-[1.8] mb-8 tracking-wide"></h4> */}
          {/* Desktop Buttons */}
          <div className="hidden xl:flex items-center gap-6 pr-4">
            <Link href="#" className="relative group">
              <div className="bg-white px-8 py-[10px] -skew-x-[20deg] group-hover:bg-gray-50 transition-colors shadow-sm">
                <span className="block skew-x-[20deg] text-[#1a1a1a] font-semibold text-sm md:text-[16px] !font-oxanium">Register</span>
              </div>
            </Link>
            
            <Link href="#" className="relative group">
              <div className="bg-white px-8 py-[10px] -skew-x-[20deg] group-hover:bg-gray-50 transition-colors shadow-sm">
                <span className="block skew-x-[20deg] text-[#fcc415] font-semibold text-sm md:text-[16px]  uppercase !font-oxanium">JOIN NOW</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="xl:hidden">
            <button 
              className="text-black p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`xl:hidden absolute top-[90px] left-0 w-full bg-[#fcc415] border-t border-black/10 flex flex-col transition-all duration-300 ease-in-out origin-top shadow-xl ${
          isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}>
          <div className="flex flex-col py-6 px-6 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[16px] font-bold ${link.active ? "text-white" : "text-[#1a1a1a]"} hover:text-white transition-colors !font-oxanium`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="w-full h-[1px] bg-black/10 my-2"></div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link href="#" className="w-full sm:w-auto group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="bg-white px-8 py-3 -skew-x-[15deg] w-full text-center group-hover:bg-gray-50 transition-colors shadow-sm">
                  <span className="block skew-x-[15deg] text-[#1a1a1a] font-extrabold text-[14.5px] !font-oxanium">Register</span>
                </div>
              </Link>
              
              <Link href="#" className="w-full sm:w-auto group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="bg-white px-8 py-3 -skew-x-[15deg] w-full text-center group-hover:bg-gray-50 transition-colors shadow-sm">
                  <span className="block skew-x-[15deg] text-[#fcc415] font-extrabold text-[14.5px] uppercase !font-oxanium">JOIN NOW</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
