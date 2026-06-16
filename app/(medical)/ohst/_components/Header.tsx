"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";

export default function Header() {
  const menu = [
    "Home",
    "Services",
    "Products",
    "Patients",
    "User",
    "About OHST",
    "Career",
    "Contact",
  ];

  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-out
        ${scrolled
          ? "translate-y-0 opacity-100 bg-white shadow-md"
          : "-translate-y-full opacity-0"
        }
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/medical/ohst/ohst_logo.png"
              alt="OHST Logo"
              width={180}
              height={55}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menu.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setActiveItem(item)}
                className="relative py-2"
              >
                <Typography
                  variant="h6"
                  as="span"
                  weight={activeItem === item ? "semibold" : "medium"}
                  className={`transition-colors duration-300 ${activeItem === item
                    ? "text-[#099F94]"
                    : "text-[#333333] hover:text-[#099F94]"
                    }`}
                >
                  {item}
                </Typography>

                {activeItem === item && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-[#099F94]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Button
            variant="primary"
            size="md"
            className="h-[42px] px-7 text-[14px] rounded-full"
          >
            Get Support
          </Button>
        </div>
      </div>
    </header>
  );
}