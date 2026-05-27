"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show header only after scrolling down
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-white/10 transition-all duration-500 transform ${
          isScrolled
            ? "translate-y-0 opacity-100 shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Tailwind standard container - no max-width hardcoded */}
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="#top" className="flex items-center gap-3 group">
            <div className="flex flex-col items-start leading-none">
              <div className="flex items-center gap-1.5">
                <span className="text-[25px] font-semibold tracking-tight text-white">
                  7s<span className="font-light text-gray-400">medical</span>
                </span>
                {/* Precision Crafted SVG Logo matching the screenshot */}
                <div className="flex items-center ml-0.5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform duration-300 group-hover:scale-105"
                  >
                    {/* Top stylized red 7 ribbon */}
                    <path
                      d="M10 8H35L22 36H15L25 14H10V8Z"
                      fill="#C10230"
                    />
                    {/* Stylized dark grey s curve */}
                    <path
                      d="M32 14L28 22.5C31.5 24 33.5 27 33.5 31C33.5 37 28.5 40 21 40C15 40 11.5 37 9.5 34.5L14 30.5C15.5 32 18 34.5 21 34.5C25.5 34.5 27.5 32.5 27.5 31C27.5 29 25 27.5 21.5 26L23 23C27 21 28 17.5 28 15.5C28 14.5 27.8 13.5 27.5 12.5L32 14Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-[8.5px] uppercase tracking-[0.18em] text-gray-500 font-semibold mt-1">
                Swiss Experts in Orthopedics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#top"
              className="text-sm font-semibold text-[#C10230] transition-colors duration-200"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-[#C10230] transition-colors duration-200">
                Products
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "products" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#111111] border border-white/10 rounded-lg shadow-2xl py-2 transition-all duration-300 ${
                  activeDropdown === "products"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <Link href="#osteosynthesis" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#C10230]">
                  Osteosynthesis Systems
                </Link>
                <Link href="#arthroplasty" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#C10230]">
                  Arthroplasty
                </Link>
                <Link href="#instruments" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#C10230]">
                  Surgical Instruments
                </Link>
              </div>
            </div>

            <Link
              href="#education"
              className="text-sm font-medium text-gray-200 hover:text-[#C10230] transition-colors duration-200"
            >
              Education
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-[#C10230] transition-colors duration-200">
                Company
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "company" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-[#111111] border border-white/10 rounded-lg shadow-2xl py-2 transition-all duration-300 ${
                  activeDropdown === "company"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <Link href="#about" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#C10230]">
                  About Us
                </Link>
                <Link href="#team" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#C10230]">
                  Our Team
                </Link>
                <Link href="#partners" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#C10230]">
                  Global Partners
                </Link>
              </div>
            </div>
          </nav>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-6 h-[44px] bg-[#C10230] hover:bg-[#9B0124] text-white text-[13px] font-semibold tracking-wider rounded-[3px] uppercase transition-colors duration-300 shadow-[0_2px_10px_rgba(193,2,48,0.3)]"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-200 hover:text-[#C10230] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden fixed top-20 left-0 right-0 bg-[#111111] border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#C10230]"
            >
              Home
            </Link>
            <div className="border-t border-white/10 pt-3">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-2">Products</span>
              <div className="flex flex-col gap-3 pl-4">
                <Link href="#osteosynthesis" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#C10230]">
                  Osteosynthesis Systems
                </Link>
                <Link href="#arthroplasty" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#C10230]">
                  Arthroplasty
                </Link>
                <Link href="#instruments" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#C10230]">
                  Surgical Instruments
                </Link>
              </div>
            </div>
            <Link
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-200 hover:text-[#C10230] pt-2"
            >
              Education
            </Link>
            <div className="border-t border-white/10 pt-3">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-2">Company</span>
              <div className="flex flex-col gap-3 pl-4">
                <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#C10230]">
                  About Us
                </Link>
                <Link href="#team" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#C10230]">
                  Our Team
                </Link>
                <Link href="#partners" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#C10230]">
                  Global Partners
                </Link>
              </div>
            </div>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full inline-flex items-center justify-center px-6 h-[44px] bg-[#C10230] hover:bg-[#9B0124] text-white text-[13px] font-semibold tracking-wider rounded-[3px] uppercase transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
