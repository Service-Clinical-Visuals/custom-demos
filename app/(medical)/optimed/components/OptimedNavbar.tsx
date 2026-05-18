"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = ["Home", "About Us", "Product", "Career", "News", "Language", "Contact"];

export default function OptimedNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#005766]/95 backdrop-blur-md border-b border-white/10" ref={menuRef}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="/optimed/optimed-logo.png"
              alt="OptiMed Logo"
              className="w-36 sm:w-44 lg:w-48 h-auto"
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-white text-[15px] xl:text-[16px]">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="whitespace-nowrap hover:text-[#F59B52] transition">
                {link}
              </a>
            ))}
          </nav>

          {/* Right side: search (desktop/tablet) + hamburger */}
          <div className="flex items-center gap-3">

            {/* Search — visible on md+ */}
            <div className="hidden md:flex items-center relative bg-white rounded-full ">
              <input
                type="text"
                placeholder="Search Product"
                className="w-[180px] lg:w-[220px] h-[34px] rounded-full px-4 pr-10 text-[16px] text-black outline-none placeholder:text-gray-500"
              />
              <button className="absolute right-0 w-[42px] h-[42px] rounded-full bg-[#F59B52] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>

            {/* Hamburger — visible below lg */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md hover:bg-white/10 transition"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 sm:px-6 pb-5 pt-2 border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-[15px] py-3 border-b border-white/10 last:border-none hover:text-[#F59B52] transition"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}

            {/* Search — mobile only */}
            <div className="md:hidden flex items-center relative mt-4">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full h-[38px] rounded-full px-4 pr-12 text-[13px] outline-none"
              />
              <button className="absolute right-0 w-[42px] h-[42px] rounded-full bg-[#F59B52] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
