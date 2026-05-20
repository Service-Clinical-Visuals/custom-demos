"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import BexenButton from "./BexenButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const topNavLinks = [
    { name: "We are Bexen", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Talent", href: "#" },
    { name: "Documentation", href: "#" },
  ];

  const bottomNavLinks = [
    { name: "Home", href: "#", color: "text-gray-500" },
    { name: "Services", href: "#", color: "text-gray-500" },
    { name: "Product", href: "#", color: "text-gray-500" },
    { name: "Contact", href: "#", color: "text-gray-500" },
    { name: "Bexen Medical", href: "#", color: "text-[#14387F] font-semibold" },
    { name: "Bexen Bioservices", href: "#", color: "text-[#14387F] font-semibold" },
    { name: "Bexen Medical", href: "#", color: "text-[#14387F] font-semibold" },
  ];

  return (
    <header className={`w-full px-10 mx-auto z-50 font-heading transition-all duration-300 ${isScrolled
      ? "fixed top-2 left-0 right-0 animate-slide-down"
      : "relative mt-6"
      }`}>
      <div className={`border shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 lg:px-12 py-2 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md border-gray-200/50 rounded-[20px] lg:rounded-[50px] lg:py-1"
        : "bg-white border-gray-200/80 rounded-[32px] lg:rounded-[100px] lg:py-0"
        }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`flex-shrink-0 transition-all duration-300 ${isScrolled ? "lg:py-2" : "lg:py-4"}`}>
            <Link href="/bexen-medical" className="flex items-center">
              <img src="/medical/bexen-medical/logo.svg" alt="Bexen Medical" className={`object-contain transition-all duration-300 ${isScrolled ? "h-8 lg:h-9" : "h-10 lg:h-12"}`} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-col flex-1 pl-8">
            {/* Top Tier */}
            {!isScrolled && (
              <div className="flex justify-end items-center gap-6 py-2 transition-all duration-300">
                <nav className="flex items-center gap-6">
                  {topNavLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-[14px] text-gray-500 hover:text-primary transition-colors font-medium">
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200/60">
                  <BexenButton size="sm">
                    Contract Manufacturing
                  </BexenButton>
                  <div
                    className="w-8 h-8 flex items-center justify-center bg-[#14387F] text-white cursor-pointer hover:bg-primary transition-colors shadow-sm"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    <Globe size={14} />
                  </div>
                </div>
              </div>
            )}

            {/* Divider Line */}
            {!isScrolled && <div className="border-t border-gray-200/50 w-full" />}

            {/* Bottom Tier */}
            <div className={`flex justify-end items-center gap-6 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
              <nav className="flex items-center gap-6">
                {bottomNavLinks.map((link, index) => (
                  <Link key={index} href={link.href} className={`text-[16px] hover:text-primary transition-colors ${link.color}`}>
                    {link.name}
                  </Link>
                ))}
              </nav>
              {isScrolled && (
                <BexenButton size="sm">
                  Contract Manufacturing
                </BexenButton>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4 rounded-b-[20px]">
          <div className="flex flex-col gap-1">
            {bottomNavLinks.map((link, index) => (
              <Link key={index} href={link.href} className={`text-[15px] py-2 font-medium ${link.color}`}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 my-1" />
          <div className="flex flex-col gap-1">
            {topNavLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-[14px] py-2 text-gray-500 hover:text-primary transition-colors font-medium">
                {link.name}
              </Link>
            ))}
          </div>
          <BexenButton className="w-full">
            Contract Manufacturing
          </BexenButton>
        </div>
      )}
    </header>
  );
}
