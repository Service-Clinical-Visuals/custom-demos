"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ShoppingBag } from "lucide-react";

export default function SharkNavbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-[34px] left-0 z-50 w-full bg-[#ffff] transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="h-[78px] max-w-380 mx-auto border-b border-black/5 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-12">
          {/* LOGO */}
          <div className="flex items-center">
            <img src="/moto/shark/shark-logo.png" alt="logo" className="w-auto h-16" />
          </div>

          {/* MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-[16px] text-[#444] font-medium font-body">
            <li className="text-black font-semibold">Home</li>

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
        <div className="flex items-center gap-5">
          <ShoppingBag
            size={24}
            className="text-neutral-500 hidden md:block cursor-pointer"
            strokeWidth={1.7}
          />

          <button className="cursor-pointer bg-[#1d1719] hover:bg-black transition-all duration-300 text-white h-[40px] px-8 text-[16px] font-semibold">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}