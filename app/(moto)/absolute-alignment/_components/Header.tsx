"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Wheel Aligners", href: "#" },
    { name: "OEM Graphics", href: "#" },
    { name: "ADAS", href: "#" },
    { name: "2-Post Alignment", href: "#" },
    { name: "Motorsport", href: "#" },
    { name: "Extras", href: "#" },
    { name: "About", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  const topLinks = [
    { name: "Contact", href: "#" },
    { name: "Catalogue", href: "#" },
    { name: "News", href: "#" },
  ];

  return (
    <header className="w-full relative z-50">
      <div className="relative w-full flex flex-col">
        {/* Top Bar - Design match from image */}
        <div className="w-full bg-white border-b border-gray-200 hidden lg:block">
          <div className="container mx-auto flex items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center px-6 h-full border-l border-gray-200">
              <Link href="/" className="relative w-[180px] block transition-transform hover:scale-105">
                <img src="/absolute-alignment/logo.png" className="w-full h-auto" alt="Absolute Alignment" />
              </Link>
            </div>

            {/* Left Links */}
            <div className="flex items-center gap-6 px-8 h-full border-l border-gray-200">
              {topLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-600 text-sm font-bold hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Spacer */}
            <div className="flex-1 h-full"></div>

            {/* Phone Section */}
            <div className="flex items-center gap-4 px-8 h-full border-l border-gray-200">
              <div className="w-11 h-11">
                <img src="/absolute-alignment/home/call.svg" className="w-full h-full" alt="Call Icon" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">Book Your Free Demo:</span>
                <span className="text-[26px] font-black text-black font-heading leading-none">01252 549340</span>
              </div>
            </div>

            {/* Button Section */}
            <div className="flex items-center px-8 h-full border-l border-gray-200">
              <Link
                href="#"
                className="bg-primary hover:bg-black text-white text-sm font-black uppercase tracking-wider py-4 px-10 rounded-tl-2xl rounded-br-2xl transition-all shadow-md"
              >
                GET A QUOTE
              </Link>
            </div>

            {/* Search Section */}
            <div className="flex items-center px-8 border-l border-r border-gray-200 h-full">
              <button className="w-12 h-12 bg-primary hover:bg-black rounded-full flex items-center justify-center text-white transition-all shadow-lg">
                <Search size={22} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Header (Sticky on mobile) */}
        <div className={`w-full bg-white border-b border-gray-100 lg:hidden transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 z-50 py-2 shadow-md" : "relative py-4"
          }`}>
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="w-[140px]">
              <img src="/absolute-alignment/logo.png" className="w-full h-auto" alt="Logo" />
            </Link>
            <div className="flex items-center gap-4">
              <a href="tel:01252549340" className="p-2 text-primary bg-gray-50 rounded-full">
                <Phone size={20} />
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-primary">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Orange (Fixed on Scroll for Desktop) */}
        <div className={`w-full bg-primary text-white transition-all duration-300 ${isScrolled
          ? "fixed top-0 left-0 z-50 py-2 lg:py-6 shadow-2xl animate-in slide-in-from-top duration-500"
          : "relative py-3 lg:py-4"
          }`}>
          <div className="container mx-auto px-4 flex items-center justify-between lg:justify-center relative">

            {/* Mini Logo on Scroll */}
            <div className={`hidden lg:block absolute left-4 transition-all duration-500 ${isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}>
              <Link href="/">
                <img src="/absolute-alignment/logo.png" className="h-10" alt="Logo" />
              </Link>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 xl:gap-x-10 gap-y-2 text-[12px] xl:text-[13px] font-bold uppercase tracking-wide">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-black transition-colors relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>


          </div>
        </div>
      </div>



      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[400px] bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <img src="/absolute-alignment/logo.png" className="w-[150px]" alt="Logo" />
                <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500">
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Main Menu</span>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 text-gray-800 font-bold border-b border-gray-50 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {link.name}
                      <ChevronRight size={18} className="text-primary" />
                    </Link>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Information</span>
                  {topLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center p-4 text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold">Book Your Free Demo:</p>
                      <p className="text-xl font-bold text-black">01252 549340</p>
                    </div>
                  </div>
                  <Link
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-primary text-white text-center font-bold py-4 rounded-lg shadow-lg uppercase tracking-wider"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

