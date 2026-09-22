"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/syprin", active: true },
    { label: "Dealer Section", href: "#", hasDropdown: true },
    { label: "Shop", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 transition-all duration-500 ease-in-out ${
        isScrolled || mobileMenuOpen
          ? "opacity-100 translate-y-0 shadow-xl pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none shadow-none"
      }`}
    >
      <div className="custom-container relative h-[68px] sm:h-[78px] md:h-[86px] lg:h-[94px] xl:h-[104px] min-[2500px]:h-[148px] min-[3800px]:h-[195px] flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/syprin" className="flex items-center flex-shrink-0 z-10">
          <img
            src="/moto/syprin/logo.png"
            alt="Original Syprin"
            className="h-[42px] sm:h-[50px] md:h-[58px] lg:h-[66px] xl:h-[76px] min-[2500px]:h-[110px] min-[3800px]:h-[155px] w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Nav - Horizontally centered */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 absolute left-1/2 -translate-x-1/2 z-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`navbar transition-colors duration-150 inline-flex items-center gap-1.5 ${
                link.active
                  ? "!font-bold font-bold text-[#F6F6F6] underline underline-offset-8 decoration-2 decoration-[#F6F6F6]"
                  : "text-[#F6F6F6] hover:text-[#A12624]"
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown size={16} className="text-[#F6F6F6] mt-0.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-6 min-[2500px]:gap-10 z-10">
          {/* Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 min-[2500px]:gap-8">
            <button
              type="button"
              aria-label="Search"
              className="text-[#F6F6F6] hover:text-[#A12624] transition-colors p-1"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="text-[#F6F6F6] hover:text-[#A12624] transition-colors p-1"
            >
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Favorites"
              className="text-[#F6F6F6] hover:text-[#A12624] transition-colors p-1"
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" strokeWidth={2} />
            </button>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-[1.5px] h-[36px] md:h-[45px] min-[2500px]:h-[70px] min-[3800px]:h-[95px] bg-[#F6F6F6]/25 rounded-[10px]" />

          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-2.5 h-[38px] sm:h-[42px] md:h-[46px] min-[2500px]:h-[68px] min-[3800px]:h-[88px] px-3.5 min-[2500px]:px-6 min-[3800px]:px-8 border border-[#F6F6F6] rounded-[8px] min-[3800px]:rounded-[16px] cursor-pointer hover:border-[#A12624] transition-colors select-none">
            <img
              src="/moto/syprin/flag-en.png"
              alt="EN"
              className="w-[22px] h-[15px] sm:w-[26px] sm:h-[18px] min-[2500px]:w-[38px] min-[2500px]:h-[26px] min-[3800px]:w-[48px] min-[3800px]:h-[32px] object-cover rounded-[3px]"
            />
            <span className="navbar !font-bold font-bold text-[#F6F6F6]">
              language
            </span>
            <ChevronDown size={15} className="text-[#F6F6F6] min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#F6F6F6] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D0D0D] border-t border-white/10 px-6 py-6 flex flex-col items-center text-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`navbar w-full py-2.5 text-center border-b border-white/5 ${
                link.active
                  ? "!font-bold font-bold text-[#F6F6F6] underline decoration-[#A12624]"
                  : "text-[#CACACA] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center justify-center w-full">
            <div className="flex items-center justify-center gap-2.5 h-[44px] px-4 border border-[#F6F6F6] rounded-[8px]">
              <img
                src="/moto/syprin/flag-en.png"
                alt="EN"
                className="w-[24px] h-[16px] object-cover rounded-[3px]"
              />
              <span className="navbar !font-bold font-bold text-[#F6F6F6]">
                language
              </span>
              <ChevronDown size={15} className="text-[#F6F6F6]" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
