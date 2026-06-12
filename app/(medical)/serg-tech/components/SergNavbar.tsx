"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

import "aos/dist/aos.css";

const navLinks = [
  "Home",
  "About",
  "Products",
  "Part Search",
  "News",
  "Contact",
];

export default function SergNavbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-5" data-aos="fade-down">
      <header className="max-w-[1750px] mx-auto bg-[#1A237E] rounded-full h-[62px] px-6 sm:px-10 py-10 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/sergtech/serg-logo.png"
            alt="SergTech Logo"
            className="h-[50px] sm:h-[58px] w-auto p-2"
          />
        </div>

        {/* Nav — desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative cursor-pointer text-[16px] font-medium tracking-wide transition-all duration-300 ${
                active === item ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white" />
              )}
            </button>
          ))}
        </nav>

        {/* Search — desktop */}
        <div className="hidden lg:flex items-center bg-white/10 border border-white/10 rounded-full h-[40px] w-[280px] px-5">
          <input
            type="text"
            placeholder="Search Here..."
            className="bg-transparent outline-none border-none text-white placeholder:text-white/50 text-[16px] w-full"
          />
          <button className="p-2 cursor-pointer rounded-full bg-white/20 flex items-center justify-center">
            <Search size={14} className="text-white" />
          </button>
        </div>

        {/* Hamburger — mobile/tablet */}
        <button
          className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="max-w-[1750px] mx-auto mt-2 bg-[#1A237E] rounded-2xl px-6 py-5 flex flex-col gap-4 lg:hidden">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => { setActive(item); setMenuOpen(false); }}
              className={`text-left text-[16px] font-medium tracking-wide transition-all duration-300 ${
                active === item ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

          {/* Search — mobile */}
          <div className="flex items-center bg-white/10 border border-white/10 rounded-full h-[40px] px-5 mt-2">
            <input
              type="text"
              placeholder="Search Here..."
              className="bg-transparent outline-none border-none text-white placeholder:text-white/50 text-[15px] w-full"
            />
            <button className="p-2 cursor-pointer rounded-full bg-white/20 flex items-center justify-center">
              <Search size={14} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}