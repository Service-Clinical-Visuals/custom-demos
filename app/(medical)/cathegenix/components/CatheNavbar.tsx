"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
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
              {/* LOGO ICON */}
              <img src="/cathegenix/cathe-logo.png" alt="logo" className="w-60"/>
            </div>

            {/* ================================================= */}
            {/* NAV LINKS */}
            {/* ================================================= */}

            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className={`relative text-[14px] font-medium transition-all duration-300 ${
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
            {/* CTA */}
            {/* ================================================= */}

             <button className="cursor-pointer relative group flex h-[46px] items-center bg-[#05429B] overflow-hidden">
                <span className="px-6 text-base font-semibold text-white transition-all duration-300 group-hover:pr-12">
                    Service Portal
                </span>

                <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                    <div className="bg-[#9DCA3A] p-2.5">
                    <ArrowRight size={18} strokeWidth={2.8} />
                    </div>
                </span>
            </button>
          </div>
        </div>
      </header>


    </main>
  );
}