"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top", hasDropdown: false },
    { name: "Products", href: "#products", hasDropdown: true },
    { name: "Education", href: "#education", hasDropdown: false },
    { name: "Company", href: "#about", hasDropdown: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-500 transform ${
          isScrolled
            ? "translate-y-0 opacity-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="#top" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1.5">
              <img src="/7s-medical/7s-medical-logo.png" alt="7s Medical" className="h-12" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`flex items-center gap-1 transition-colors duration-200 text-[16px] lg:text-[17px] ${
                  link.name === "Home"
                    ? " font-bold text-[#CE112D]"
                    : " font-medium text-[#333333] hover:text-[#CE112D]"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg
                    className="w-3.5 h-3.5 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button href="#contact" className="hidden! lg:inline-flex!">
              Contact Us
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-[#CE112D] transition-colors"
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
          className={`md:hidden fixed top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2 transition-colors duration-200 ${
                  link.name === "Home"
                    ? "text-base font-semibold text-[#CE112D]"
                    : "text-base font-medium text-gray-600 hover:text-[#CE112D]"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
            
            <Button
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              fullWidth
              className="mt-4"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
