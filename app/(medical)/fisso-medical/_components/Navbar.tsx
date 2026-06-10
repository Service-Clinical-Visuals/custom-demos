"use client";

import Link from "next/link";
import { Menu, X, Search, Globe, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState<number>(80);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Applications", href: "#applications" },
    { name: "Products", href: "#products" },
    { name: "Company", href: "#company" },
    { name: "IFU", href: "#ifu" },
    { name: "Downloads", href: "#downloads" },
    { name: "News", href: "#news" },
    { name: "Trade Fairs", href: "#trade-fairs" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const companySection = document.getElementById("company");
      const threshold = companySection ? companySection.offsetTop - 80 : 600;

      if (currentScrollY < 120) {
        setScrolled(false);
        setVisible(true);
      } else if (currentScrollY >= 120 && currentScrollY < threshold) {
        setScrolled(true);
        setVisible(false);
      } else {
        setScrolled(true);
        setVisible(true);
      }
    };

    const updateHeight = () => {
      if (headerRef.current && window.scrollY < 120) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    handleScroll();
    updateHeight();

    const handleResize = () => {
      handleScroll();
      updateHeight();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <div
      className="w-full relative my-4"
      style={{ height: scrolled ? `${headerHeight}px` : "auto" }}
    >
      <header
        ref={headerRef}
        className={`
          w-full flex justify-center z-[100] transition-all duration-300 transform
          ${
            scrolled
              ? `fixed left-0 right-0 ${visible ? "translate-y-0 opacity-100 top-0" : "-translate-y-full opacity-0 top-0"}`
              : "relative translate-y-0 opacity-100"
          }
        `}
      >
        <div
          className={`
          bg-white
          border border-gray-200
          shadow-sm
          transition-all duration-300
          px-3 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10
          py-2 sm:py-2.5 2xl:py-3
          ${
            scrolled
              ? "w-full max-w-none rounded-none"
              : "w-[95%] max-w-[1760px] rounded-full"
          }
        `}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-3 lg:gap-4 2xl:gap-6 h-11 sm:h-12 md:h-13 lg:h-14 2xl:h-16">
            <Link href="#" className="flex items-center gap-2 shrink-0">
              <img
                src="/medical/fisso-medical/fisso-logo 1.png"
                alt="FISSO Swiss Made"
                className="w-auto object-contain h-8 sm:h-9 md:h-10 lg:h-11 xl:h-10 2xl:h-12"
              />
            </Link>

            <nav className="hidden xl:flex items-center flex-1 justify-center gap-0 2xl:gap-1 font-medium text-[#333333] text-[12px] xl:text-[12.5px] 2xl:text-[14px]">
              {navLinks.map((link, idx) => {
                const isActive = idx === 0;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative whitespace-nowrap transition-colors
                      px-2 xl:px-2.5 2xl:px-3.5 py-2 2xl:py-2.5
                      hover:text-[#9C0B38]
                      ${isActive ? "text-[#9C0B38] font-bold" : ""}
                    `}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 xl:left-2.5 2xl:left-3.5 right-2 xl:right-2.5 2xl:right-3.5 h-[2px] bg-[#9C0B38] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2 2xl:gap-3 shrink-0">
              <div className="relative flex items-center bg-[#F3F4F6] rounded-full px-3 2xl:px-4 py-1.5 2xl:py-2 border border-transparent focus-within:border-gray-300 transition-all duration-300 w-36 lg:w-40 xl:w-44 2xl:w-60 focus-within:w-44 lg:focus-within:w-48 xl:focus-within:w-52 2xl:focus-within:w-68">
                <input
                  type="text"
                  placeholder="Search...."
                  className="bg-transparent outline-none w-full pr-5 text-[11px] xl:text-[12px] 2xl:text-[13px] text-[#333333] placeholder:text-gray-400"
                />
                <Search
                  className="absolute right-3 text-gray-500 pointer-events-none"
                  size={14}
                  style={{
                    width: "clamp(13px, 1vw, 16px)",
                    height: "clamp(13px, 1vw, 16px)",
                  }}
                />
              </div>

              <button
                aria-label="Language selector"
                className="flex items-center justify-center rounded-lg bg-[#9C0B38] text-white hover:bg-[#7d0930] transition-colors duration-200 w-8 h-8 sm:w-9 sm:h-9 2xl:w-10 2xl:h-10"
              >
                <Globe
                  style={{
                    width: "clamp(14px, 1.1vw, 18px)",
                    height: "clamp(14px, 1.1vw, 18px)",
                  }}
                />
              </button>

              <button
                aria-label="User account"
                className="flex items-center justify-center rounded-lg bg-[#9C0B38] text-white hover:bg-[#7d0930] transition-colors duration-200 w-8 h-8 sm:w-9 sm:h-9 2xl:w-10 2xl:h-10"
              >
                <User
                  style={{
                    width: "clamp(14px, 1.1vw, 18px)",
                    height: "clamp(14px, 1.1vw, 18px)",
                  }}
                />
              </button>
            </div>

            <div className="xl:hidden flex items-center gap-2">
              <button
                aria-label="Search"
                className="lg:hidden p-1.5 text-gray-500 hover:text-[#9C0B38] transition-colors"
              >
                <Search size={19} />
              </button>
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="text-[#9C0B38] hover:text-[#7d0930] transition-colors p-1"
              >
                {open ? <X size={23} /> : <Menu size={23} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="xl:hidden mt-3 pt-4 border-t border-gray-100 flex flex-col gap-0.5 pb-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    text-sm py-2 px-3 rounded-lg transition-colors
                    ${
                      idx === 0
                        ? "bg-[#9C0B38]/[0.07] text-[#9C0B38] font-semibold"
                        : "text-[#333333] hover:bg-gray-50 hover:text-[#9C0B38]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 px-1">
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Language"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#9C0B38] text-white hover:bg-[#7d0930] transition-colors"
                  >
                    <Globe size={16} />
                  </button>
                  <button
                    aria-label="Account"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#9C0B38] text-white hover:bg-[#7d0930] transition-colors"
                  >
                    <User size={16} />
                  </button>
                </div>

                <div className="relative flex items-center bg-[#F3F4F6] rounded-full px-3 py-1.5 w-40">
                  <input
                    type="text"
                    placeholder="Search...."
                    className="bg-transparent text-xs text-[#333333] outline-none w-full pr-5 placeholder:text-gray-400"
                  />
                  <Search
                    size={13}
                    className="absolute right-3 text-gray-500 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
