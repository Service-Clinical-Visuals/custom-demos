"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X } from "lucide-react";
import PulmoTopbar from "./PulmoTopbar";

const navLinks = ["Home", "Products", "About Us", "Contact Us"];

export default function PulmoNavbar() {
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
    <main className="">
      {/* ================================================= */}
      {/* FLOATING SCROLL NAVBAR */}
      {/* ================================================= */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="border-b border-black/5 bg-white/95 backdrop-blur-md">
          <PulmoTopbar />

          {/* MAIN NAVBAR ROW */}
          <div className="mx-auto flex h-[72px] lg:h-[86px] max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-16">
            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <div className="flex items-center gap-4">
              <img
                src="/pulmo/pulmo-logo.png"
                alt="logo"
                className="h-auto w-36 md:w-44 lg:w-52"
              />
            </div>

            {/* ================================================= */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================================= */}

            <nav className="hidden items-center gap-12 lg:flex">
              {navLinks.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className={`relative text-[16px] font-medium transition-all duration-300 ${
                    index === 0
                      ? "text-[#1f1f1f]"
                      : "text-[#555555] hover:text-[#0068A8]"
                  }`}
                >
                  {item}

                  {index === 0 && (
                    <span className="absolute -bottom-[10px] left-0 h-[2px] w-full bg-[#1f1f1f]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ================================================= */}
            {/* DESKTOP CTA */}
            {/* ================================================= */}

            <button className="hidden cursor-pointer items-center justify-center rounded-[4px] bg-[#0068A8] px-8 h-[48px] text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(0,104,168,0.16)] transition-all duration-300 hover:bg-[#005A92] lg:flex">
              Training Resources
            </button>

            {/* ================================================= */}
            {/* HAMBURGER BUTTON (mobile / tablet) */}
            {/* ================================================= */}

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-[4px] text-[#1f1f1f] transition-colors duration-200 hover:bg-gray-100 lg:hidden"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ================================================= */}
          {/* MOBILE MENU */}
          {/* ================================================= */}

          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 border-t border-black/5 px-5 py-4 md:px-8">
              {navLinks.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-[4px] px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                    index === 0
                      ? "bg-[#0068A8]/10 text-[#0068A8]"
                      : "text-[#555555] hover:bg-gray-50 hover:text-[#0068A8]"
                  }`}
                >
                  {item}
                </Link>
              ))}

              <div className="mt-3 border-t border-black/5 pt-3">
                <button className="flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[4px] bg-[#0068A8] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(0,104,168,0.16)] transition-all duration-300 hover:bg-[#005A92]">
                  Training Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
