"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const navItems = [
    "Home",
    "Company",
    "Products",
    "Quality",
    "Patients",
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="h-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/">
            <img
              src="/x-nov/x-nov_logo.png"
              alt="X-NOV"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-14">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href="#"
                className={`
                  text-[16px]
                  font-medium
                  transition-all
                  ${
                    index === 0
                      ? "text-pink-500 underline underline-offset-4"
                      : "text-gray-900 hover:text-pink-500"
                  }
                `}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-8">
            
            {/* Languages */}
            <div className="hidden md:flex items-center gap-4 text-xl">
              🇩🇪 🇫🇷 🇬🇧
            </div>

            {/* CTA */}
            <button
              className="
                flex items-center
                gap-3
                bg-[#EB4A94]
                text-white
                h-[52px]
                px-8
                rounded-full
                font-semibold
                transition-all
                hover:scale-105
              "
            >
              Contact Us

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}