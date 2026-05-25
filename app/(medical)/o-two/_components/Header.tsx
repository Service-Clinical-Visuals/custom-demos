"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Company", href: "#company" },
    { name: "Resources", href: "#resources" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex justify-center transition-all duration-500 z-[100] ${scrolled ? "fixed top-0 left-0 animate-in fade-in slide-in-from-top-4 duration-300" : "relative my-6"
        }`}
    >
      <div
        className={`bg-[#0091d5] border border-white/10 transition-all duration-500 flex items-center justify-between shadow-2xl ${scrolled
          ? "w-full rounded-none py-3 px-8 lg:px-16 bg-[#0091d5]/95 backdrop-blur-md"
          : "w-[95%] px-8 lg:px-12 py-4 rounded-full"
          }`}
      >
        {/* O-Two Logo */}
        <Link href="#" className="flex items-center group">
          <img
            src="/medical/o-two/logo.png"
            alt="O-Two Medical Technologies"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu - Modeled after bm-catalysts line animations */}
        <nav className="hidden lg:flex gap-8 lg:gap-10 text-[15px] lg:text-[17px] font-medium items-center ml-auto mr-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("#") && typeof window !== "undefined" && window.location.hash === link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-white hover:text-white transition-all font-semibold font-sans tracking-wide group ${isActive ? "text-white" : "text-white/85"
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-white rounded-full transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </Link>
            );
          })}
        </nav>

        {/* Search Bar (1:1 with bm-catalysts pill design) */}
        <div className="hidden lg:flex items-center bg-white rounded-full pl-5 pr-10 py-2.5 w-[260px] relative shadow-inner focus-within:ring-2 focus-within:ring-[#00e5ff] focus-within:ring-offset-2 focus-within:ring-offset-[#0091d5] transition-all group">
          <input
            type="text"
            placeholder="Search Here..."
            className="bg-transparent border-none outline-none text-[15px] w-full text-gray-800 placeholder:text-gray-400 font-medium font-sans"
          />
          <button className="absolute right-0.5 flex items-center justify-center rounded-r-full w-10 h-[calc(100%-4px)] bg-[#0091d5] text-white hover:bg-[#007bb8] transition-all cursor-pointer">
            <Search size={16} strokeWidth={3} />
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="lg:hidden text-white cursor-pointer hover:text-[#00e5ff] transition-colors">
          {open ? (
            <X size={26} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={26} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu - Modeled after bm-catalysts absolute drop design */}
      {open && (
        <div className="lg:hidden absolute top-full left-[2.5%] w-[95%] bg-[#0091d5] border border-white/10 rounded-3xl mt-2.5 flex flex-col gap-4 text-white text-[17px] p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-1.5 font-semibold font-sans tracking-wide ${isActive ? "text-[#00e5ff] border-l-2 border-[#00e5ff] pl-3" : "text-white/90 hover:text-[#00e5ff]"
                  } transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex items-center bg-white rounded-full pl-4 pr-10 py-2.5 mt-2 shadow-inner relative">
            <input
              type="text"
              placeholder="Search Here..."
              className="bg-transparent border-none outline-none text-sm w-full text-gray-800 placeholder:text-gray-400 font-medium font-sans"
            />
            <button className="absolute -right-1 flex items-center justify-center rounded-r-full w-10 h-full bg-[#0091d5] text-white cursor-pointer hover:bg-[#007bb8] transition-all">
              <Search size={15} strokeWidth={3} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
