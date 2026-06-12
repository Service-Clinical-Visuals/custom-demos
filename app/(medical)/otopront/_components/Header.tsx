"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
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
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Service Request", href: "#" },
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
              <Link href="/" className="flex flex-col">
              <img src="/otopront/images/otopront-logo.png" alt="otopront-logo" className="w-55 lg:w-75 xl:w-90" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 ml-auto xl:mr-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-[#BD0A27] flex items-center h-[40px] px-4 rounded-md ${
                    link.active 
                      ? "text-[#111111] border border-[#BD0A27] bg-white" 
                      : "text-[#333333]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden xl:flex items-center gap-6">
              <button className="flex items-center gap-2 hover:text-[#BD0A27] transition-colors text-[#333333] font-medium">
                <Globe size={20} />
                <span>EN</span>
              </button>
              
              <Link href="#" className="hover:text-[#BD0A27] transition-colors text-[#333333] font-medium">
                Help
              </Link>
              
              <Button variant="red" size="md" className="rounded-md px-6">
                Get a Quote
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
                    <img src="/otopront/images/otopront-logo.png" alt="otopront-logo" className="w-55" />
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-[#111111]"><X size={32} /></button>
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-semibold border-b pb-4 ${
                        link.active ? "text-[#BD0A27]" : "text-[#111111]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex items-center gap-4 border-b pb-4">
                    <Globe size={20} className="text-[#111111]" />
                    <span className="font-semibold text-[#111111]">EN</span>
                  </div>
                  <Link 
                    href="#" 
                    className="font-semibold text-[#111111] border-b pb-4"
                  >
                    Help
                  </Link>
                  <Button variant="red" className="w-full justify-center mt-4">
                    Get a Quote
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
