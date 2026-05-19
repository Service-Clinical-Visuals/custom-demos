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



  const bottomNavLinks = [
    { name: "Home", href: "#", color: "text-gray-500 text-[#14387F] font-semibold" },
    { name: "Services", href: "#", color: "text-gray-500" },
    { name: "Product", href: "#", color: "text-gray-500" },
    { name: "Contact", href: "#", color: "text-gray-500" },
    { name: "Bexen Medical", href: "#", color: "text-gray-500" },
    { name: "Bexen Bioservices", href: "#", color: "text-gray-500" },
    { name: "Bexen Medical", href: "#", color: "text-gray-500" },
  ];

  return (
    <header className={`w-full px-10 mx-auto z-50 font-heading transition-all duration-300 ${isScrolled
      ? "fixed top-2 left-0 right-0 animate-slide-down"
      : "relative mt-6"
      }`}>
      <div className={`border shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 lg:px-12 py-2 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md border-gray-200/50 rounded-[20px] lg:rounded-[50px] lg:py-1"
        : "bg-white border-gray-200/80 rounded-[32px] lg:rounded-[100px] lg:py-0"
        }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 lg:py-4">
            <Link href="/bexen-medical" className="flex items-center">
              <img src="/medical/bexen-medical/logo.svg" alt="Bexen Medical" className="h-10 lg:h-12 object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-col flex-1 pl-8">

            {/* Bottom Tier */}
            <div className="flex justify-end items-center py-4">
              <nav className="flex items-center gap-6">
                {bottomNavLinks.map((link, index) => (
                  <Link key={index} href={link.href} className={`text-[16px] hover:text-primary transition-colors ${link.color}`}>
                    {link.name}
                  </Link>
                ))}
              </nav>
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2 pb-4">
            {bottomNavLinks.map((link, index) => (
              <Link key={index} href={link.href} className={`text-[15px] py-2 ${link.color}`}>
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
