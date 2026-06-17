"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Search } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products" },
  { name: "News", id: "news" },
  { name: "Contact", id: "footer" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();

  // Scroll spy or click handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${scrolled || mobileMenuOpen
        ? "translate-y-0 opacity-100 bg-white shadow-md border-b border-gray-100"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      {/* 1. Black Top Bar */}
      <div
        className={`bg-dark text-white transition-all duration-300 overflow-hidden ${scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
          }`}
      >
        <Container className="flex items-center justify-between h-full text-xs">
          {/* Contact Details */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+4401709890089"
              className="flex items-center gap-1.5 hover:text-primary transition-colors text-white"
            >
              <Phone size={12} className="text-white" />
              <span>+44 (0) 1709 890089</span>
            </a>
            <a
              href="mailto:info@veedol.co.uk"
              className="flex items-center gap-1.5 hover:text-primary transition-colors text-white"
            >
              <Mail size={12} className="text-white" />
              <span>info@veedol.co.uk</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a href="#" className="w-6 h-6 flex items-center justify-center bg-[#2b2b2b] hover:bg-primary rounded transition-colors text-white">
              <Facebook size={12} />
            </a>
            <a href="#" className="w-6 h-6 flex items-center justify-center bg-[#2b2b2b] hover:bg-primary rounded transition-colors text-white">
              <Instagram size={12} />
            </a>
            <a href="#" className="w-6 h-6 flex items-center justify-center bg-[#2b2b2b] hover:bg-primary rounded transition-colors text-white">
              <Youtube size={12} />
            </a>
            <a href="#" className="w-6 h-6 flex items-center justify-center bg-[#2b2b2b] hover:bg-primary rounded transition-colors text-white">
              <Linkedin size={12} />
            </a>
          </div>
        </Container>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="h-[80px] md:h-[90px] flex items-center relative z-10 bg-white">
        <Container className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <Link href="/veedol" className="flex items-center gap-3 shrink-0">
            <img
              src="/moto/veedol-moto/logo 1.png"
              alt="Veedol Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navbar Links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((link, idx) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className="relative group transition-colors duration-200 cursor-pointer"
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {isActive ? (
                    <div className="relative py-2 px-8 z-10 flex items-center justify-center overflow-visible">
                      {/* Slanted red background shape */}
                      <span className="absolute inset-0 bg-primary transform -skew-x-[20deg]" />
                      <Typography
                        as="span"
                        variant="h5"
                        color="white"
                        weight="bold"
                        className="relative z-10 tracking-wider font-bigshoulder"
                      >
                        {link.name}
                      </Typography>
                    </div>
                  ) : (
                    <div className="py-2 px-3 md:px-4 flex items-center justify-center">
                      <Typography
                        as="span"
                        variant="h5"
                        color="dark"
                        weight="bold"
                        className="tracking-wider hover:text-primary transition-colors font-bigshoulder"
                      >
                        {link.name}
                      </Typography>
                    </div>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Search Box */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center px-10 bg-[#F5F5F5] shadow-xl border border-gray-200 pl-6 pr-0 overflow-hidden h-12 md:h-14 w-[260px] xl:w-[400px]">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-0 font-bigshoulder outline-none text-lg text-dark placeholder-gray-400 w-full h-[90%]"
              />
              <Button
                text=""
                variant="search"
                className="shrink-0 rounded-none h-full px-6"
              />
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-dark p-2 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Container>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`border-b border-gray-50 pb-3 block font-bigshoulder text-lg font-bold tracking-wider cursor-pointer ${isActive ? "text-primary" : "text-dark hover:text-primary"
                  }`}
                onClick={(e) => handleScrollTo(e, link.id)}
              >
                {link.name.toUpperCase()}
              </a>
            );
          })}
          {/* Mobile Search Input */}
          <div className="pt-2">
            <div className="flex items-center bg-[#F5F5F5] border border-gray-200 pl-4 h-11 w-full rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-0 outline-none text-sm text-dark placeholder-gray-400 w-full"
              />
              <button
                type="button"
                className="h-full px-5 bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
