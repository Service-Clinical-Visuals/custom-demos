"use client";

import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Ambassadors", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50" data-aos="fade-down">
      <div className="custom-container px-4 md:px-6 xl:px-35">
        <div className="flex items-center justify-between py-3">
          {/* Logo Area */}
          <div className="flex-shrink-0">
                      <img src="/moto/lucas-oil/lucaslogo.png" className="w-[140px] lg:w-[150px] xl:w-[180px] h-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 lg:gap-3 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm md:text-[14px] xl:text-[16px] font-sans font-semibold transition-colors px-3 lg:px-4 xl:px-6 py-2 whitespace-nowrap ${
                  link.active
                    ? "bg-[#0c2c65] text-white [clip-path:polygon(15px_0,calc(100%-15px)_0,100%_50%,calc(100%-15px)_100%,15px_100%,0_50%)]"
                    : "text-gray-800 hover:text-[#081b37]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block ml-2 xl:ml-0">
            <Link
              href="#"
              className="bg-[#0c2c65] text-white px-6 lg:px-8 xl:px-10 py-3 lg:py-3.5 font-sans font-semibold text-sm md:text-[14px] xl:text-[16px] hover:bg-[#0c2342] transition-colors [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)] whitespace-nowrap inline-block"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button className="text-gray-800 focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
