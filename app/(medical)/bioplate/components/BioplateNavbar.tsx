"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CornerUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "Products", "Technology", "Resource"];

export default function BioplateNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <main className="w-full overflow-hidden bg-black text-white">
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="border-b border-white/10 bg-[#f6f6f4]/95 backdrop-blur-md">
          <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-10">
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <img
                src="/bioplate/bioplate-logo.png"
                alt="Logo"
                className="h-9 w-auto shrink-0 sm:h-11 lg:h-12"
              />
            </div>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden items-center gap-12 lg:flex">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className={`relative text-base font-medium tracking-wide transition-all duration-300 ${
                    index === 0
                      ? "text-[#0B7A63]"
                      : "text-black hover:text-[#0B7A63]"
                  }`}
                >
                  {item}
                  {index === 0 && (
                    <span className="absolute -bottom-[10px] left-1/2 h-[2px] w-[26px] -translate-x-1/2 rounded-full bg-[#0B7A63]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <button className="group hidden h-[46px] cursor-pointer items-center gap-5 rounded-[10px] bg-[#0B7A63] px-7 text-base font-bold text-white transition-all duration-300 hover:bg-[#08624f] lg:flex">
              Contact Us
              <span className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                <CornerUpRight size={16} strokeWidth={2.2} />
              </span>
            </button>

            {/* HAMBURGER BUTTON (mobile + tablet) */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-black transition-colors hover:bg-black/10 lg:hidden"
            >
              {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* MOBILE / TABLET DRAWER */}
        <div
          className={`absolute left-0 top-full w-full bg-[#f6f6f4]/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
            menuOpen
              ? "pointer-events-auto max-h-screen opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="flex flex-col border-t border-black/10 px-5 pb-6 pt-4 sm:px-8">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className={`border-b border-black/8 py-4 text-lg font-medium tracking-wide transition-colors duration-200 ${
                  index === 0
                    ? "text-[#0B7A63]"
                    : "text-black hover:text-[#0B7A63]"
                }`}
              >
                {item}
              </Link>
            ))}

            {/* CTA inside drawer */}
            <button className="group mt-5 flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] bg-[#0B7A63] px-7 text-base font-bold text-white transition-all duration-300 hover:bg-[#08624f]">
              Contact Us
              <span className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                <CornerUpRight size={16} strokeWidth={2.2} />
              </span>
            </button>
          </nav>
        </div>
      </header>
    </main>
  );
}