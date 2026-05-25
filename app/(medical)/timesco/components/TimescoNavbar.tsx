"use client";

import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  "Home",
  "About Us",
  "Speciality areas",
  "Downloads",
];

export default function TimescoNavbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on resize to lg+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-500
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div className="bg-[#EDFFF1] backdrop-blur-md border-b border-[#d7e8da]">
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <div>
            <img src="/timesco/timesco-logo.png" alt="logo" className="h-8 w-auto" />
          </div>

          {/* Nav (desktop) */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item, index) => (
              <button
                key={item}
                className={`
                  relative text-[16px] font-medium transition-all cursor-pointer
                  ${
                    index === 0
                      ? "rounded-full border border-[#0c9444] px-6 py-2 text-black font-semibold"
                      : "text-black/80 hover:text-black"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <div className="hidden h-[42px] w-[240px] relative items-center rounded-full border border-[#008b45] bg-white px-3.5 lg:flex">
              <input
                type="text"
                placeholder="Search product"
                className="flex-1 bg-transparent text-base outline-none text-black"
              />
              <button className="absolute right-0 cursor-pointer shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#008b45] p-5 text-white">
                <Search size={24} className="shrink-0" />
              </button>
            </div>

            <button className="cursor-pointer rounded-lg bg-[#008b45] px-7 py-2.5 text-base font-medium text-white shadow-md transition hover:scale-105">
              Login
            </button>

            {/* Hamburger (mobile) */}
            <button
              className="flex items-center justify-center rounded-md p-2 text-[#008b45] transition hover:bg-[#008b45]/10 lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          overflow-hidden bg-[#EDFFF1] border-b border-[#d7e8da] lg:hidden
          transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => setMenuOpen(false)}
              className={`
                w-full text-left py-3 px-4 rounded-lg text-[16px] font-medium transition-all cursor-pointer
                ${
                  index === 0
                    ? "border border-[#0c9444] text-black font-bold"
                    : "text-black/80 hover:bg-[#008b45]/10 hover:text-black"
                }
              `}
            >
              {item}
            </button>
          ))}

          {/* Search (mobile) */}
          <div className="relative mt-3 flex h-[42px] items-center rounded-full border border-[#008b45] bg-white px-3.5">
            <input
              type="text"
              placeholder="Search product"
              className="flex-1 bg-transparent text-base outline-none text-black"
            />
            <button className="absolute right-0 cursor-pointer shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#008b45] p-5 text-white">
              <Search size={24} className="shrink-0" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}