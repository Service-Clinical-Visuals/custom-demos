"use client";

import { useEffect, useState } from "react";

export default function OptimedNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#005766]/95 backdrop-blur-md h-[46px] border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-8 h-full flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/optimed/optimed-logo.png"
              alt="Logo"
              className="w-40 h-auto"
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-white text-[16px]">
            <a href="#" className="hover:text-[#F59B52] transition">
              Home
            </a>
            <a href="#" className="hover:text-[#F59B52] transition">
              About Us
            </a>
            <a href="#" className="hover:text-[#F59B52] transition">
              Product
            </a>
            <a href="#" className="hover:text-[#F59B52] transition">
              Career
            </a>
            <a href="#" className="hover:text-[#F59B52] transition">
              News
            </a>
            <a href="#" className="hover:text-[#F59B52] transition">
              Language
            </a>
            <a href="#" className="hover:text-[#F59B52] transition">
              Contact
            </a>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search Product"
              className="w-[220px] h-[34px] rounded-full px-5 text-[12px] outline-none"
            />

            <button className="absolute right-0 w-[42px] h-[42px] rounded-full bg-[#F59B52] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}