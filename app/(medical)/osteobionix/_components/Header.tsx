"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past the hero (e.g., 20% of viewport height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Product", href: "#product" },
    { name: "Technology", href: "#technology" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  const Logo = () => (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="3" fill="#237B64" />
        <circle cx="16" cy="8" r="2" fill="#237B64" opacity="0.8" />
        <circle cx="16" cy="24" r="2" fill="#237B64" opacity="0.8" />
        <circle cx="8" cy="16" r="2" fill="#237B64" opacity="0.8" />
        <circle cx="24" cy="16" r="2" fill="#237B64" opacity="0.8" />
        <circle cx="10.5" cy="10.5" r="1.5" fill="#237B64" opacity="0.6" />
        <circle cx="21.5" cy="21.5" r="1.5" fill="#237B64" opacity="0.6" />
        <circle cx="10.5" cy="21.5" r="1.5" fill="#237B64" opacity="0.6" />
        <circle cx="21.5" cy="10.5" r="1.5" fill="#237B64" opacity="0.6" />
        <path d="M16 12V4" stroke="#237B64" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M16 28V20" stroke="#237B64" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M4 16H12" stroke="#237B64" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M20 16H28" stroke="#237B64" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
      <span className="font-heading text-2xl tracking-wide text-[#237B64]">
        osteobionix
      </span>
    </div>
  );

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm h-[90px]"
        >
          <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-8">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex flex-col justify-center">
              <Link href="/osteobionix" className="flex flex-col">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 ml-auto xl:mr-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-gray-800 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden xl:flex items-center gap-6">
              <Link
                href="#contact"
                className="group flex items-center gap-2 bg-[#237B64] text-white px-5 py-2.5 rounded hover:bg-[#1f5c53] transition-colors font-medium text-sm"
              >
                Get in Touch
                <span className="bg-white/20 p-0.5 rounded group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#111111]">
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
                className="fixed inset-0 bg-white z-[60] flex flex-col p-8 lg:hidden"
              >
                <div className="flex justify-between items-center mb-12">
                  <div className="flex flex-col">
                    <Logo />
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-[#111111]"><X size={32} /></button>
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-bold text-gray-800 uppercase tracking-wider border-b pb-4"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 bg-[#237B64] text-white px-5 py-3 rounded mt-4"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
