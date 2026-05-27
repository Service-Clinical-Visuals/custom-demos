"use client";

import { Search } from "lucide-react";
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

  return (
    <header
      data-aos="fade-down"
      className="max-w-[1800px] mx-auto bg-[#1A237E] rounded-full h-[62px] px-12   flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/sergtech/serg-logo.png"
          alt="SergTech Logo"
          className="h-[58px] w-auto"
        />
      </div>

      {/* Nav */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`relative cursor-pointer text-[16px] font-medium tracking-wide transition-all duration-300 ${
              active === item
                ? "text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item}

            {active === item && (
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white" />
            )}
          </button>
        ))}
      </nav>

      {/* Search */}
      <div className="hidden md:flex items-center bg-white/10 border border-white/10 rounded-full h-[40px] w-[220px] px-5">
        <input
          type="text"
          placeholder="Search Here..."
          className="bg-transparent outline-none border-none text-white placeholder:text-white/50 text-[16px] w-full"
        />

        <button className="p-2 cursor-pointer rounded-full bg-white/20 flex items-center justify-center">
          <Search size={14} className="text-white" />
        </button>
      </div>
    </header>
  );
}