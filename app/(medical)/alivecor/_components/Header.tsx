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
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Our Technology", href: "#" },
    { name: "Our Solutions", href: "#" },
  ];

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)] h-[90px]"
        >
          <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-12">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex flex-col justify-center">
              <Link href="/alivecor" className="flex flex-col">
                <img src="/alivecor/images/alivecor-logo.png" alt="alivecor-logo" className="h-5 xl:h-7 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold text-[15px] transition-all duration-300 flex items-center h-[40px] px-6 rounded-xl ${
                    link.active 
                      ? "text-white bg-[#004B87] shadow-md shadow-[#004B87]/20" 
                      : "text-gray-700 hover:text-[#004B87] hover:bg-[#004B87]/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center">
              <Button variant="outline" size="sm">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="text-[#004B87] p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black z-50 lg:hidden"
                />
                
                {/* Drawer */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed right-0 top-0 bottom-0 w-[80%] max-w-[360px] bg-white z-[60] flex flex-col p-8 lg:hidden shadow-2xl"
                >
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex flex-col">
                      <img src="/alivecor/images/alivecor-logo.png" alt="alivecor-logo" className="h-4 w-auto" />
                    </div>
                    <button 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="text-gray-500 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-semibold text-md pb-3 border-b border-gray-200 ${
                          link.active ? "text-[#004B87]" : "text-gray-700 hover:text-[#004B87]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    
                    <div className="mt-8">
                      <Button variant="outline" size="sm" className="w-full justify-between">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
