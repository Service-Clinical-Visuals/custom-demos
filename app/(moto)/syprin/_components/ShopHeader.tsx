"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, ChevronDown, Menu, X } from "lucide-react";
import { useSitePathname } from "@/app/_hooks/useSitePathname";

// Shared header for the Syprin pages that use the Montserrat design (/syprin/home-2, /syprin/products, /syprin/product-details)
const navLinks = [
  { label: "Home", href: "/syprin", matches: ["/"] },
  { label: "Home-2", href: "/syprin/home-2", matches: ["/home-2"] },
  { label: "About Us", href: "" },
  { label: "Product", href: "/syprin/products", matches: ["/products", "/product-details"] },
  { label: "Dealer Section", href: "#", hasDropdown: true },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

const iconClass = "w-5 h-5 md:w-[22px] md:h-[22px] min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12";

interface ShopHeaderProps {
  // Overlay mode for pages that open with a full-screen banner: the header is hidden at the
  // top and slides in once the user has scrolled past this fraction of the viewport height.
  revealAfterViewport?: number;
}

export default function ShopHeader({ revealAfterViewport }: ShopHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState(revealAfterViewport === undefined);

  useEffect(() => {
    if (revealAfterViewport === undefined) return;
    const onScroll = () => setRevealed(window.scrollY > window.innerHeight * revealAfterViewport);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [revealAfterViewport]);

  const overlay = revealAfterViewport !== undefined;
  const visible = revealed || mobileMenuOpen;
  // Pathname without the "/syprin" prefix, e.g. /syprin/products -> /products
  const pathname = useSitePathname();
  const isActive = (link: (typeof navLinks)[number]) =>
    "matches" in link &&
    !!link.matches?.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  return (
    <header
      className={`${overlay ? "fixed" : "sticky"} top-0 left-0 w-full z-50 bg-header border-b border-white/5 shadow-lg transition-all duration-500 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="custom-container relative h-[64px] md:h-[72px] min-[2500px]:h-[120px] min-[3800px]:h-[160px] flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/syprin" className="flex items-center flex-shrink-0 z-10">
          <img
            src="/moto/syprin-allproducts/logo.webp"
            alt="Original Syprin"
            className="h-[40px] md:h-[48px] min-[2500px]:h-[80px] min-[3800px]:h-[110px] w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden desk:flex items-center gap-6 xl:gap-7 2xl:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-20 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`navbar whitespace-nowrap inline-flex items-center gap-1.5 transition-colors duration-150 ${
                isActive(link)
                  ? "font-semibold text-[#F6F6F6] underline underline-offset-[6px] decoration-[1.5px]"
                  : "text-[#F6F6F6] hover:text-accent"
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" fill="currentColor" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 md:gap-6 min-[2500px]:gap-10 z-10">
          <div className="flex items-center gap-3 md:gap-5 min-[2500px]:gap-8">
            <button type="button" aria-label="Search" className="text-[#F6F6F6] hover:text-accent transition-colors p-1">
              <Search className={iconClass} strokeWidth={2.5} />
            </button>
            <button type="button" aria-label="Favorites" className="text-[#F6F6F6] hover:text-accent transition-colors p-1">
              <Heart className={iconClass} strokeWidth={2.5} />
            </button>
            <button type="button" aria-label="Cart" className="text-[#F6F6F6] hover:text-accent transition-colors p-1">
              <ShoppingCart className={iconClass} strokeWidth={2.5} fill="currentColor" />
            </button>
          </div>

          {/* Language Selector */}
          <button type="button" className="hidden sm:flex items-center gap-2.5 min-[2500px]:gap-4 text-[#F6F6F6] hover:text-accent transition-colors select-none">
            <img
              src="/moto/syprin-allproducts/Minimal Union Jack on White 1.webp"
              alt="English"
              className="w-[30px] h-[18px] md:w-[36px] md:h-[21px] min-[2500px]:w-[54px] min-[2500px]:h-[32px] min-[3800px]:w-[72px] min-[3800px]:h-[42px] object-cover"
            />
            <span className="navbar font-semibold">EN</span>
            <ChevronDown className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" fill="currentColor" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="desk:hidden text-[#F6F6F6] p-1 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="desk:hidden bg-header border-t border-white/10 px-6 py-5 flex flex-col items-center text-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`navbar w-full py-2.5 border-b border-white/5 ${
                isActive(link) ? "font-semibold text-[#F6F6F6] underline underline-offset-4 decoration-accent" : "text-[#CACACA] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="sm:hidden pt-3 flex items-center gap-2.5 text-[#F6F6F6]">
            <img
              src="/moto/syprin-allproducts/Minimal Union Jack on White 1.webp"
              alt="English"
              className="w-[30px] h-[18px] object-cover"
            />
            <span className="navbar font-semibold">EN</span>
            <ChevronDown className="w-4 h-4" fill="currentColor" />
          </div>
        </div>
      )}
    </header>
  );
}
