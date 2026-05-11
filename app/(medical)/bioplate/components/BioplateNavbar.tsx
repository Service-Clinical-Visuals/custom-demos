"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CornerUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BioplateNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full overflow-hidden bg-black text-white">
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="border-b border-white/10 bg-[#f6f6f4]/95 backdrop-blur-md">
          <div className="mx-auto flex h-[84px] max-w-[1600px] items-center justify-between px-10">
            {/* LEFT */}
            <div className="flex items-center gap-14">
              {/* LOGO */}
              <div className="flex items-center gap-3">
                    <img src="/bioplate/bioplate-logo.png" alt="Logo" className="w-64 h-12 shrink-0" />
              </div>
            </div>
            <div>
                              {/* NAV LINKS */}
              <nav className="hidden items-center gap-12 lg:flex">
                {["Home", "Products", "Technology", "Resource"].map(
                  (item, index) => (
                    <Link
                      key={item}
                      href="#"
                      className={`relative text-base font-medium tracking-wide transition-all duration-300 ${
                        index === 0
                          ? "text-[#0B7A63]"
                          : "text-black hover:text-[#0B7A63]"
                      }`}
                    >
                      {item}

                      {index === 0 && (
                        <span className="absolute -bottom-[10px] left-1/2 h-[2px] w-[26px] -translate-x-1/2 rounded-full bg-[#0B7A63]" />
                      )}
                    </Link>
                  )
                )}
              </nav>
            </div>

            {/* CTA */}
            <button className="group flex h-[46px] items-center gap-5 rounded-[10px] bg-[#0B7A63] px-7 text-base cursor-pointer font-medium text-white transition-all duration-300 hover:bg-[#08624f]">
              Contact Us

              <span className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                <CornerUpRight size={16} strokeWidth={2.2} />
              </span>
            </button>
          </div>
        </div>
      </header>
    </main>
  );
}