"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

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
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Our Team", href: "#team" },
    { name: "Our Services", href: "#services" },
    { name: "Our Technologies", href: "#technologies" },
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
          <div className="container mx-auto px-4 lg:px-2 flex items-center justify-between w-full">
            {/* Logo Area */}
            <div className="flex-shrink-0">
              <Link href="#" className="inline-block select-none">
                <div className="rounded-sm inline-flex items-center font-sans">
                  <img src="/vascular-flow/vascular-logo.png" alt="" className="lg:h-16 h-12" />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold text-[16px] xl:text-[16px] transition-colors duration-200 px-3 xl:px-4 py-2 hover:text-[#004A87] ${
                    link.active ? "text-[#004A87]" : "text-[#1e293b]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center">
              <Button variant="split" href="#contact">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#1e293b] p-2 hover:bg-slate-100 rounded-full transition-colors"
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
                  <Link href="#" className="inline-block select-none" onClick={() => setMobileMenuOpen(false)}>
                    <div className="bg-[#004A87] px-4 py-2 rounded-sm inline-flex items-center font-sans">
                      <span className="text-white font-extrabold text-lg tracking-tight">Vascular</span>
                      <span className="text-[#00A0E0] font-extrabold text-lg tracking-tight">Flow</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#1e293b] p-2 hover:bg-slate-100 rounded-full transition-colors"
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
                      className={`font-bold text-lg pb-3 border-b border-slate-100 ${
                        link.active ? "text-[#004A87]" : "text-[#1e293b]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="mt-6">
                    <Button variant="split" href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                      Contact Us
                    </Button>
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
