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
  { name: "Company", id: "about" },
  { name: "Products", id: "products" },
  { name: "Service", id: "news" },
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
      // Show sticky header after scrolling past 80% of the viewport
      const threshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 800;

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
  const isHidden = scrollState === "hidden";
  const isSticky = scrollState === "sticky";

  return (
    <header
      className={`w-full z-50 transition-all duration-500 flex justify-center ${isTop
        ? "relative my-4 md:my-8 opacity-100 translate-y-0"
        : isHidden && !mobileMenuOpen
          ? "fixed top-0 left-0 -translate-y-full opacity-0 pointer-events-none"
          : "fixed top-0 left-0 translate-y-0 opacity-100 z-60 bg-black shadow-md border-b border-gray-900"
        }`}
    >
      <Container>
        {/* Main Navigation Bar */}
        <div className="h-[70px] sm:h-[80px] md:h-[80px] flex items-center relative z-10 bg-black pl-4 lg:pl-8 overflow-hidden rounded-t-[30px] rounded-b-none">


          <div className="flex items-center justify-between gap-4 lg:gap-8 w-full relative z-10 pr-4 lg:pr-0">
            {/* Left Desktop Navbar Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, idx) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className="relative group flex justify-center transition-colors duration-200 cursor-pointer"
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {isActive ? (
                      <div className="py-2 px-2  lg:px-3 xl:px-3 flex items-center border-b-2 border-primary">
                        <Typography
                          as="span"
                          variant="h5"
                          color="primary"
                          weight="normal"
                          className="relative tracking-wider z-10 font-exo  "
                        >
                          {link.name}
                        </Typography>
                      </div>
                    ) : (
                      <div className="py-2 px-2 lg:px-3 xl:px-4 flex items-center border-b-2 border-transparent  transition-colors">
                        <Typography
                          as="span"
                          variant="h5"
                          color="white"
                          weight="normal"
                          className="tracking-wider  transition-colors font-exo"
                        >
                          {link.name}
                        </Typography>
                      </div>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Logo Section (Centered) */}
            <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center shrink-0">
              <img
                src="/german-gold/footerlogo.png"
                alt="German Gold Logo"
                className="h-6 sm:h-8 md:h-10 lg:h-16  w-auto object-contain"
              />
            </Link>

            {/* Right Action: Button */}
            <div className="hidden lg:flex items-center mr-12 lg:mr-20">
              <Button
                text="About"
                href="#about"
                variant="primary"
                showIcon={true}
                className="py-1 px-8 text-sm"
              />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden  text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute z-90 top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`border-b border-gray-50 pb-3 block font-teko text-lg tracking-widest cursor-pointer ${isActive ? "text-primary" : "text-dark hover:text-primary"
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
