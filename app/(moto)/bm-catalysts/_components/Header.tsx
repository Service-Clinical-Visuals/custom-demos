"use client";

import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/bm-catalysts" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Part Search", href: "#search" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex justify-center transition-all duration-500 z-[100] ${
        scrolled ? "fixed top-0 left-0 animate-in fade-in slide-in-from-top-4 duration-300" : "relative my-6"
      }`}
    >
      <div
        className={`bg-[#1B1537] border border-white/10 transition-all duration-500 flex items-center justify-between shadow-2xl ${
          scrolled
            ? "w-full rounded-none py-3 px-8 lg:px-16"
            : "w-[95%] px-8 lg:px-12 py-4 rounded-[2rem]"
        }`}
      >
        {/* Stylized Logo to match 1 to 1 */}
        <Link href="/bm-catalysts" className="flex items-center group">
          <img src="/bm-catalysts/images/bm-main-logo.png" alt="Header Logo" className="h-12 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 lg:gap-10 text-[15px] lg:text-[17px] font-medium items-center ml-auto mr-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("#") && typeof window !== "undefined" && window.location.hash === link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-white hover:text-white transition-all font-semibold font-exo2 tracking-wide group ${
                  isActive ? "text-white" : "text-white/70"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2.5px] bg-white rounded-full transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Search Bar (1:1 with photo pill design) */}
        <div className="hidden lg:flex items-center bg-white rounded-full pl-5 pr-1.5 py-1.5 w-[260px] border border-white/10 focus-within:ring-2 focus-within:ring-[#00e5ff] focus-within:ring-offset-2 focus-within:ring-offset-[#1B1537] transition-all shadow-inner">
          <input
            type="text"
            placeholder="Search Here..."
            className="bg-transparent border-none outline-none text-[16px] w-full text-[#1B1537] placeholder:text-[#999999] font-medium font-exo2"
          />
          <button className="bg-[#1B1537] p-2 rounded-full text-white hover:bg-[#261e4d] transition-all ml-2 flex items-center justify-center cursor-pointer">
            <Search size={18} strokeWidth={3} />
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="lg:hidden text-white cursor-pointer hover:text-[#00e5ff] transition-colors">
          {open ? (
            <X size={26} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={26} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-[2.5%] w-[95%] bg-[#1B1537] border border-white/10 rounded-3xl mt-2.5 flex flex-col gap-4 text-white text-[16px] p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-1.5 font-semibold font-exo2 tracking-wide ${
                  isActive ? "text-[#00e5ff] border-l-2 border-[#00e5ff] pl-3" : "text-white/80 hover:text-[#00e5ff]"
                } transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex items-center bg-white rounded-full pl-4 pr-1 py-1.5 mt-2 shadow-inner">
            <input
              type="text"
              placeholder="Search Here..."
              className="bg-transparent border-none outline-none text-sm w-full text-[#1B1537] placeholder:text-[#999999] font-medium font-exo2"
            />
            <button className="bg-[#1B1537] p-2 rounded-full text-white cursor-pointer flex items-center justify-center mr-1">
              <Search size={15} strokeWidth={3} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
