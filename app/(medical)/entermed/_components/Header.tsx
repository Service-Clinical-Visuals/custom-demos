"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past the hero (e.g., 15% of viewport height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.15);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-[90px] flex items-center"
        >
          <div className="container mx-auto px-4 md:px-8 flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/entermed" className="flex items-center gap-2.5 flex-shrink-0">
              <img src="/entermed/entermed-logo.png" alt="Entermed" className="h-8 lg:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-10 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative pb-1 font-semibold text-[17px] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-300 ${link.active
                    ? "text-primary after:scale-x-100"
                    : "text-[#555555] hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center">
              <div className="relative flex items-center h-[42px] w-[260px] bg-[#f5f5f5] rounded-full overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)]">
                <input
                  type="text"
                  placeholder="Search Product..."
                  className="w-full h-full bg-transparent border-none outline-none pl-5 pr-14 text-[16px] text-gray-700 placeholder-gray-500"
                />
                <button className="absolute right-0 top-0 bottom-0 aspect-square rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors shadow-sm">
                  <Search size={18} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-800 p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-0 bg-white z-[60] flex flex-col p-6 lg:hidden"
              >
                <div className="flex justify-between items-center mb-10">
                  <Link href="/entermed" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/entermed/entermed-logo.png" alt="Entermed" className="h-8" />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-800 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="flex flex-col gap-5 overflow-y-auto pb-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-bold text-lg pb-3 border-b border-gray-100 ${link.active ? "text-primary" : "text-gray-800"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="mt-6 relative">
                    <input
                      type="text"
                      placeholder="Search Product..."
                      className="w-full pl-1 pr-12 py-3 px-4 rounded-full bg-gray-100 border-none outline-none text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <button className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square rounded-full bg-primary flex items-center justify-center text-white">
                      <Search size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
