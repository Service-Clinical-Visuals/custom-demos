"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";

export default function SharkNavbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setVisible(true);
      } else {
        setVisible(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-12 left-0 z-50 w-full bg-white transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="h-[78px] max-w-380 mx-auto px-4 sm:px-6 border-b border-black/5 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-12">
          {/* LOGO */}
          <div className="flex items-center">
            <img src="/moto/shark/shark-logo.png" alt="logo" className="w-auto h-16" />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-[16px] text-[#444] font-medium font-body">
            <li className="text-black font-semibold cursor-pointer">Home</li>

            <li className="flex items-center gap-1 cursor-pointer">
              Wheel Aligners
              <ChevronDown size={12} />
            </li>

            <li className="flex items-center gap-1 cursor-pointer">
              Accessories & Spares
              <ChevronDown size={12} />
            </li>

            <li className="flex items-center gap-1 cursor-pointer">
              About Us
              <ChevronDown size={12} />
            </li>

            <li className="cursor-pointer">News & Events</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <ShoppingBag
            size={24}
            className="text-neutral-500 hidden md:block cursor-pointer"
            strokeWidth={1.7}
          />

          <button className="hidden lg:block cursor-pointer bg-[#1d1719] hover:bg-black transition-all duration-300 text-white h-[40px] px-8 text-[16px] font-semibold">
            Contact Us
          </button>

          {/* HAMBURGER */}
          <button
            className="lg:hidden p-1 text-[#1d1719] cursor-pointer"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} strokeWidth={1.8} /> : <Menu size={26} strokeWidth={1.8} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-black/5 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 text-[16px] text-[#444] font-medium font-body">
          <li className="py-3 text-black font-semibold cursor-pointer border-b border-black/5">
            Home
          </li>

          <li className="py-3 flex items-center justify-between cursor-pointer border-b border-black/5">
            Wheel Aligners
            <ChevronDown size={14} />
          </li>

          <li className="py-3 flex items-center justify-between cursor-pointer border-b border-black/5">
            Accessories & Spares
            <ChevronDown size={14} />
          </li>

          <li className="py-3 flex items-center justify-between cursor-pointer border-b border-black/5">
            About Us
            <ChevronDown size={14} />
          </li>

          <li className="py-3 cursor-pointer border-b border-black/5">News & Events</li>

          <li className="pt-4">
            <button className="w-full cursor-pointer bg-[#1d1719] hover:bg-black transition-all duration-300 text-white h-[44px] text-[16px] font-semibold">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}