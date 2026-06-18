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
  const [scrollState, setScrollState] = useState("top");
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
      const y = window.scrollY;
      // Show sticky header after scrolling past the full height of the Hero section (100vh)
      const threshold = typeof window !== "undefined" ? window.innerHeight : 820;

      if (y < 150) {
        setScrollState("top");
      } else if (y < threshold) {
        setScrollState("hidden");
      } else {
        setScrollState("sticky");
      }
    };

    handleScroll(); // Initial check
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

  const isTop = scrollState === "top";
  const isSticky = scrollState === "sticky";

  return (
    <>
      {/* Spacer to push content down so header doesn't overlay the hero section initially */}
      <div className="h-[110px] sm:h-[118px] md:h-[118px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full z-50 transition-all duration-500 transform ${isTop || mobileMenuOpen
          ? "absolute translate-y-0 opacity-100"
          : isSticky
            ? "fixed translate-y-0 opacity-100 shadow-md border-b border-gray-100"
            : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* 1. Black Top Bar */}
        <div
          className={`bg-dark text-white transition-all duration-300 overflow-hidden ${isTop || mobileMenuOpen ? "h-10 opacity-100" : "h-0 opacity-0"
            }`}
        >
          <Container className="flex font-bigshoulder items-center justify-between leading-relaxed tracking-wide h-full text-[10px] sm:text-xs md:text-sm lg:text-base">
            {/* Contact Details */}
            <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
              <a
                href="tel:+4401709890089"
                className="flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors text-white"
              >
                <Phone className="w-3 h-3 md:h-4 md:w-4 text-white shrink-0" />
                <span className="whitespace-nowrap">+44 (0) 1709 890089</span>
              </a>
              <a
                href="mailto:info@veedol.co.uk"
                className="hidden min-[380px]:flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors text-white"
              >
                <Mail className="w-3 h-3 md:h-4 md:w-4 text-white shrink-0" />
                <span className="whitespace-nowrap">info@veedol.co.uk</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1 sm:gap-2 pr-0 sm:pr-2 shrink-0">
              <a href="#" className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center group">
                <span className="absolute inset-0 bg-white transform -skew-x-[20deg] group-hover:bg-primary transition-colors" />
                <Facebook className="relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center group">
                <span className="absolute inset-0 bg-white transform -skew-x-[20deg] group-hover:bg-primary transition-colors" />
                <Instagram className="relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center group">
                <span className="absolute inset-0 bg-white transform -skew-x-[20deg] group-hover:bg-primary transition-colors" />
                <Youtube className="relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-primary group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center group">
                <span className="absolute inset-0 bg-white transform -skew-x-[20deg] group-hover:bg-primary transition-colors" />
                <Linkedin className="relative z-10 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </Container>
        </div>

        {/* 2. Main Navigation Bar */}
        <div className="h-[70px] sm:h-[80px] md:h-[80px] flex items-center relative z-10 bg-white">
          <Container className="flex items-center justify-between gap-4 lg:gap-8 w-full">
            {/* Logo Section */}
            <Link href="/veedol" className="flex items-center shrink-0">
              <img
                src="/moto/veedol-moto/logo 1.png"
                alt="Veedol Logo"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4 shrink-0">
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
                      <div className="relative py-2 px-5 lg:px-6 xl:px-8 z-10 flex items-center justify-center overflow-visible">
                        {/* Slanted red background shape */}
                        <span className="absolute inset-0 bg-primary transform -skew-x-[20deg]" />
                        <Typography
                          as="span"
                          variant="h6"
                          color="white"
                          weight="bold"
                          className="relative z-10 tracking-wider font-bigshoulder"
                        >
                          {link.name.toUpperCase()}
                        </Typography>
                      </div>
                    ) : (
                      <div className="py-2 px-2 lg:px-3 xl:px-4 flex items-center justify-center">
                        <Typography
                          as="span"
                          variant="h6"
                          color="dark"
                          weight="bold"
                          className="tracking-wider hover:text-primary transition-colors font-bigshoulder "
                        >
                          {link.name.toUpperCase()}
                        </Typography>
                      </div>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Search Box */}
            <div className="hidden lg:flex items-center w-[200px] lg:w-[240px] xl:w-[350px] shrink">
              <div className="flex items-center  bg-[#F5F5F5] shadow-xl border border-gray-200 pl-4 xl:pl-7 pr-0 overflow-hidden h-10 xl:h-12 w-full">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-0  font-bigshoulder outline-none text-base xl:text-lg text-dark placeholder-gray-400 w-full h-[90%]"
                />
                <div className="">
                  <Button
                    text=""
                    variant="search"
                    className="shrink-0  rounded-none h-full px-3  "
                  />
                </div></div>
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
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto">
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
    </>
  );
};

export default Header;
