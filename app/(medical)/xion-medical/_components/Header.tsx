"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { theme } from "./theme";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past the hero (e.g., 40% of viewport height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Products", href: "#" },
    { name: "System Solutions", href: "#" },
    { name: "Service", href: "#" },
    { name: "Company", href: "#" },
    { name: "Events", href: "#" },
  ];

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-20"
        >
          <div className="container mx-auto h-full flex items-center justify-between px-4 relative">
            {/* Logo */}
            <div className="flex-shrink-0 z-10">
              <Link href="/" className="flex items-center gap-2">
                <img src="/xion/images/logo.png" alt="XION Medical" className="w-30" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 ml-auto mr-[30%] z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[16px] font-semibold tracking-wider transition-colors hover:text-primary ${
                    link.active ? "text-[#00AFAF]" : "text-[#484848]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800">
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
               </button>
            </div>
          </div>
              {/* Right Section with Clip Path */}
            <div className="hidden lg:flex items-center h-full absolute right-0 top-0 w-[32%] z-0">
               {/* The Clip Path Background */}
               <div 
                 className="absolute inset-0 -z-10"
                 style={{ 
                   background: "linear-gradient(270deg, #00AFAF 0%, #008787 100%)",
                   clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                 }}
               />
               
               <div className="flex items-center gap-8 text-white relative z-10 w-full justify-center pl-10">
                  <button className="hover:text-primary transition-colors">
                    <Globe size={22} className="text-white" />
                  </button>
                  <button className="hover:text-primary transition-colors">
                    <Search size={22} />
                  </button>
                  
                  <Button href="#contact">
                    Contact Us
                  </Button>
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
                  <img src="/xion/images/logo.png" alt="XION Medical" className="w-20" />
                  <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold text-gray-800 border-b pb-4"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button href="#contact" className="w-full h-[30px] justify-between px-0">
                    Contact Us
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
