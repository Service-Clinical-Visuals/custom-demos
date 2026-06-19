"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Start hidden so it gracefully animates in on mount without AOS
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "scrolled">("hidden");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 50) {
        // At the very top
        setHeaderState("top");
      } else if (scrollY < window.innerHeight / 2) {
        // Scrolling down but haven't reached half the banner
        setHeaderState("hidden");
      } else {
        // Scrolled past half the banner
        setHeaderState("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check (use timeout to allow initial fade-in animation)
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/omni" },
    { name: "ABOUT", href: "#" },
    { name: "PRODUCTS", href: "#" },
    { name: "SERVICES", href: "#" },
    { name: "VIDEOS", href: "#" },
    { name: "OMNI COMPANIES", href: "#" },
    { name: "CONTACT US", href: "#" },
  ];

  return (
    <>
      {/* Spacer to push the banner down while the header is fixed */}
      <div className={`w-full transition-all duration-700 ${headerState === "scrolled" ? "h-20 md:h-24" : "h-[88px] md:h-[104px]"}`}></div>
      
      <header 
        className={`w-full z-50 transition-all duration-700 ease-in-out fixed left-0 ${
          headerState === "hidden" ? "-translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"
        } ${headerState === "scrolled" ? "top-0" : "top-2"}`}
      >
        <div className={`mx-auto w-full transition-all duration-700 ease-in-out ${
          headerState === "scrolled" ? "max-w-full px-0" : "max-w-[95%] mx-auto "
        }`}>
          <div className={`bg-white shadow-sm flex items-center justify-between transition-all duration-700 ease-in-out ${
            headerState === "scrolled" 
              ? "rounded-none border-b border-gray-200 px-6 md:px-10 h-20 md:h-24" 
              : "rounded-full border border-gray-200 px-6 md:px-10 h-20 md:h-24"
          }`}>
          {/* Logo Area */}
          <Link href="/omni" className="flex items-center">
            {/* Leave space for image */}
            <div className="w-48 h-16 flex items-center justify-center ">
              <img src="/moto/omni/omnilogo.png"  alt="OMNI Logo" className="object-contain w-full h-full" />
             
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg md:text-xl !font-[family-name:var(--font-bebas-neue)] font-normal tracking-wide transition-colors ${
                  link.name === "HOME"
                    ? "text-primary underline underline-offset-4 decoration-primary decoration-2"
                    : "text-gray-600 hover:text-primary hover:underline hover:underline-offset-4 hover:decoration-primary hover:decoration-2"
                }`}
              >
             
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative group flex items-center">
              <input
                type="text"
                placeholder="SEARCH HERE..."
                className="bg-primary text-white text-sm font-medium rounded-full pl-6 pr-12 py-2.5 w-64 outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 transition-colors">
                <Search size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50">
            <button className="text-primary p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full px-4 sm:px-6 md:px-8 z-40">
            <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 flex flex-col gap-4">
              <div className="relative group flex items-center w-full mb-2">
                <input
                  type="text"
                  placeholder="SEARCH HERE..."
                  className="bg-primary text-white text-sm font-medium rounded-full pl-6 pr-12 py-2.5 w-full outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 transition-colors">
                  <Search size={16} strokeWidth={3} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-xl !font-[family-name:var(--font-bebas-neue)] font-normal tracking-wide transition-colors pb-2 border-b border-gray-100 last:border-b-0 ${
                      link.name === "HOME"
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
