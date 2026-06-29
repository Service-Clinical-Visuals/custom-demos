"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Products", href: "#", hasDropdown: true },
  { name: "How to Order", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("myco-hero");
      const threshold = banner ? banner.offsetHeight / 2 : 300;
      setIsVisible(window.scrollY >= threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-primary shadow-md transition-all duration-500 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Desktop Header */}
        <Container>
            <div className="hidden lg:flex items-center h-[116px] w-full gap-8">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="#">
                  <img
                    src="/medical/myco-medical/logo.png"
                    alt="Myco Medical"
                    className="h-full w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Nav — centered */}
              <nav className="flex-1 flex items-center justify-center gap-8 xl:gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-1 content text-white! text-[16px]! text-normal"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown size={15} strokeWidth={2.5} className="mt-px" />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Search bar */}
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center  bg-white border border-white/25 rounded overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white px-4 py-2 text-md outline-none w-[200px] xl:w-[350px] placeholder:font-bold"
                  />
                  <button
                    className="bg-primary rounded-sm hover:bg-[#003d63] transition-colors px-3 py-2 flex items-center justify-center m-1"
                    aria-label="Search"
                  >
                    <Search size={17} strokeWidth={2.2} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
        </Container>
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between h-[100px]">
          {/* Logo */}
          <Link href="#">
            <img
              src="/medical/myco-medical/logo.png"
              alt="Myco Medical"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden absolute top-[100px] left-0 w-full bg-primary border-t border-white/15 flex flex-col transition-all duration-300 ease-in-out origin-top z-40 ${
            isMobileMenuOpen
              ? "scale-y-100 opacity-100 visible"
              : "scale-y-0 opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col py-5 px-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-white/85 hover:text-white font-medium py-3 border-b border-white/10 transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} strokeWidth={2.5} className="mt-px" />
                )}
              </Link>
            ))}
            {/* Mobile search */}
            <div className="mt-4 flex items-center bg-white/10 border border-white/20 rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder-white/60 outline-none"
              />
              <button
                className="px-3 py-2.5 flex items-center"
                aria-label="Search"
              >
                <Search size={16} strokeWidth={2.2} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

  );
}
