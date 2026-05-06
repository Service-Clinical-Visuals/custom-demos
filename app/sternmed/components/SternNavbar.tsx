"use client";

import { ArrowRight, ChevronDown, Earth } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SternNavbar() {

      const [showNav, setShowNav] = useState(false);

  useEffect(() => {
 
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showNav
            ? "translate-y-0 bg-white shadow-md"
            : "-translate-y-full"
        }`}
      >
        <div className="max-w-380 mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}


          <div>
            <Image src="/stern-med/sternmed-logo.png" alt="SternMed Logo" width={190} height={120} />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700">
            <a href="#" className="hover:text-[#1E6FB6]">
              Home
            </a>
            <a href="#" className="hover:text-[#1E6FB6] flex items-center gap-1">
              Products <span><ChevronDown size={20} className="mt-1"/></span>
            </a>
            <a href="#" className="hover:text-[#1E6FB6] flex items-center gap-1">
              About SternMed <span><ChevronDown size={20} className="mt-1"/></span>
            </a>
            <a href="#" className="hover:text-[#1E6FB6] flex items-center gap-1">
              Be Our Dealer 
            </a>
            <a href="#" className="hover:text-[#1E6FB6] flex items-center gap-1">
              Contact Us
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="bg-[#1E6FB6] text-white flex gap-1 text-base px-4 py-2 rounded-md hover:bg-[#1E6FB6]/90 cursor-pointer transition">
              Search <span><ArrowRight/></span>
            </button>
            <button className="border p-2 rounded-md bg-[#1E6FB6]">
              <Earth className="text-white"/>
            </button>
          </div>
        </div>
      </header>
    
  )
}
