"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import "aos/dist/aos.css";

const navLinks = [
  "Home",
  "About",
  "Sleep",
  "Oxygen",
  "Ventilation",
  "Resources",
];

export default function CatheNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-hidden bg-[#f6f6f4]">
      {/* ================================================= */}
      {/* FLOATING NAVBAR */}
      {/* ================================================= */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="border-b border-black/5 bg-white/92 backdrop-blur-md">
          <div className="mx-auto flex h-[86px] max-w-[1600px] items-center justify-between px-8 lg:px-14">

            <div className="flex items-center gap-4">
              {/* LOGO */}
              <img src="/cathegenix/cathe-logo.png" alt="logo" className="w-44 sm:w-52 lg:w-60" />
            </div>

            {/* ================================================= */}
            {/* NAV LINKS — desktop */}
            {/* ================================================= */}

            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className={`relative text-base font-medium transition-all duration-300 ${
                    index === 0
                      ? "text-[#1d1d1d]"
                      : "text-[#5b5b5b] hover:text-[#004AA5]"
                  }`}
                >
                  {item}
                  {index === 0 && (
                    <span className="absolute -bottom-[10px] left-0 h-[2px] w-full bg-[#1d1d1d]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ================================================= */}
            {/* CTA — desktop */}
            {/* ================================================= */}

            <button className="hidden lg:flex cursor-pointer relative group h-[46px] items-center bg-[#05429B] overflow-hidden">
              <span className="px-6 text-base font-semibold text-white transition-all duration-300 group-hover:pr-12">
                Service Portal
              </span>
              <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                <div className="bg-[#9DCA3A] p-2.5">
                  <ArrowRight size={18} strokeWidth={2.8} />
                </div>
              </span>
            </button>

            {/* ================================================= */}
            {/* HAMBURGER — mobile & tablet */}
            {/* ================================================= */}

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#1d1d1d]"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE MENU DRAWER */}
        {/* ================================================= */}

        <div
          className={`lg:hidden overflow-hidden bg-white/96 backdrop-blur-md border-b border-black/5 transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-8 py-4 gap-1">
            {navLinks.map((item, index) => (
              <Link
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-base font-medium border-b border-black/5 last:border-0 transition-colors duration-200 ${
                  index === 0
                    ? "text-[#1d1d1d]"
                    : "text-[#5b5b5b] hover:text-[#004AA5]"
                }`}
              >
                {item}
              </Link>
            ))}

            <button className="mt-4 mb-2 cursor-pointer relative group flex h-[46px] items-center bg-[#05429B] overflow-hidden w-full">
              <span className="px-6 text-base font-semibold text-white transition-all duration-300 group-hover:pr-12">
                Service Portal
              </span>
              <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                <div className="bg-[#9DCA3A] p-2.5">
                  <ArrowRight size={18} strokeWidth={2.8} />
                </div>
              </span>
            </button>
          </nav>
        </div>
      </header>
    </main>
  );
}