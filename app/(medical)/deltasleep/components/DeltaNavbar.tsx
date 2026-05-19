"use client";

import { useEffect, useState } from "react";

export default function DeltaNavbar() {
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
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 pt-5">
        <div className="bg-[#dfe7e3]/95 backdrop-blur-md rounded-full px-5 py-3 flex items-center justify-between shadow-sm border border-[#d0d8d4]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/delta/delta-logo.png"
              alt="logo"
              className=" w-[200px] h-auto"
            />
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-base">
            <a
              href="#"
              className="font-medium text-[#00695f]"
            >
              Home
            </a>

            <a
              href="#"
              className="text-[#2c2c2c] hover:text-black transition"
            >
              Our Company
            </a>

            <a
              href="#"
              className="text-[#2c2c2c] hover:text-black transition"
            >
              Products
            </a>

            <button className="bg-[#00695f] text-white px-6 py-3 rounded-xl  font-medium hover:scale-105 transition">
              Let’s Talk
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}