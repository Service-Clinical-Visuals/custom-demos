"use client";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { label: "Home", bold: true },
    { label: "Our Services" },
    { label: "Brands" },
    { label: "Sectors" },
    { label: "News and Events" },
  ];

  return (
    <header className={`w-full bg-white border-b border-gray-100 z-50 fixed top-0 left-0 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/moove" className="flex items-center">
          <img
            src="/moto/moove/logo.png"
            alt="Moove"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[16px]">
          <Link href="#" className="font-bold text-[var(--moove-text-dark)] hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="#" className="font-medium text-gray-600 hover:text-[var(--moove-text-dark)] transition-colors">
            Our Services
          </Link>
          <Link href="#" className="font-medium text-gray-600 hover:text-[var(--moove-text-dark)] transition-colors">
            Brands
          </Link>
          <Link href="#" className="font-medium text-gray-600 hover:text-[var(--moove-text-dark)] transition-colors">
            Sectors
          </Link>
          <Link href="#" className="font-medium text-gray-600 hover:text-[var(--moove-text-dark)] transition-colors">
            News and Events
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            href="#"
            className="flex items-center bg-[#2B4C7E] hover:bg-[#1A365D] text-white transition-colors"
          >
            <span className="px-6 py-2.5 text-sm font-bold">Contact Us</span>
            <div className="bg-white text-[#2B4C7E] px-3 py-2.5 border border-[#2B4C7E]">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger */}
        <button
          className="lg:hidden p-2 text-[var(--moove-text-dark)] hover:text-blue-600 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 md:px-8 py-4 gap-1">
          {navLinks.map(({ label, bold }) => (
            <Link
              key={label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`py-3 border-b border-gray-100 text-[16px] transition-colors hover:text-blue-600 ${
                bold ? "font-bold text-[var(--moove-text-dark)]" : "font-medium text-gray-600"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center self-start bg-[#2B4C7E] hover:bg-[#1A365D] text-white transition-colors"
          >
            <span className="px-6 py-2.5 text-sm font-bold">Contact Us</span>
            <div className="bg-white text-[#2B4C7E] px-3 py-2.5 border border-[#2B4C7E]">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
