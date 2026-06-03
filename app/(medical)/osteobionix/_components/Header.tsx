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
                <img src="/osteobionix/osteobionix-logo.png" alt="logo" className="w-32 h-auto" />
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
              <Button variant="secondary" href="#contact">
                Get in Touch
              </Button>
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
                    <Link href="/osteobionix" className="flex flex-col">
                      <img src="/osteobionix/osteobionix-logo.png" alt="logo" className="w-32 h-auto" />
                    </Link>
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
                  <div className="mt-4 flex justify-center">
                    <Button variant="secondary" href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      Get in Touch
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
