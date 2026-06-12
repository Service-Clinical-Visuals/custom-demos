"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Products & Technology", href: "#" },
    { name: "Pipeline", href: "#" },
    { name: "News & Events", href: "#" },
    { name: "Investors", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <header className={`w-full bg-white shadow-sm z-[100] fixed top-0 left-0 transition-all duration-300 ${isScrolled ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container h-[70px] lg:h-[90px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <img src="/vero-biotech/logo.png" alt="Vero Logo" className="w-24 lg:w-32" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[17px] font-medium text-[#444]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${link.active ? "text-[#111] font-semibold border-b-2 border-primary pb-1" : "hover:text-primary transition-colors border-b-2 border-transparent pb-1"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center">
            <Link href="#" className="bg-[#122b34] text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-sm text-[14px] lg:text-[17px] font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 rounded-tl-2xl rounded-br-2xl">
              Explore Solutions <ArrowRight className="w-3 h-3 -rotate-45" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#111]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[70px] bg-white z-[90] transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <nav className="container py-8 flex flex-col gap-6 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium ${link.active ? "text-primary" : "text-[#444]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="#"
              className="bg-[#122b34] text-white px-6 py-3 rounded-sm text-[17px] font-medium flex items-center justify-between rounded-tl-2xl rounded-br-2xl w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Solutions <ArrowRight className="w-4 h-4 -rotate-45" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
