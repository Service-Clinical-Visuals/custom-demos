"use client";

import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
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
    <header className="w-full sticky top-2 z-50">
      <div className="custom-container">
        <div className="bg-white border border-gray-200 shadow-sm rounded-full px-6 md:px-10 flex items-center justify-between h-20 md:h-24 transition-all">
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
          <div className="lg:hidden flex items-center">
            <button className="text-primary p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
