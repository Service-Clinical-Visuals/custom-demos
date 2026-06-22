"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone, ChevronDown } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/petrovoll" },
    { name: "About Us", href: "#", hasDropdown: true },
    { name: "Products", href: "#", hasDropdown: true },
    { name: "Distributors", href: "#" },
    { name: "News", href: "#" },
  ];

  const productLinks = [
    { name: "Gasoline Oils", href: "#gasoline" },
    { name: "Diesel Oils", href: "#diesel" },
    { name: "Motorcycle Oils", href: "#motorcycle" },
    { name: "Marine Oils", href: "#marine" },
    { name: "Automatic Transmissions", href: "#transmissions" },
  ];

  return (
    <footer className="w-full pt-8">
      {/* Dark Footer Wrapper with Rounded Top Corners */}
      <div className="w-full bg-dark rounded-t-[150px] md:rounded-t-[150px] px-6 pt-16 pb-8 text-white relative overflow-hidden">
        
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="custom-container relative z-10">
          <div className="footer-grid gap-10 pb-12">
            
            {/* Column 1: Logo, Description & Socials */}
            <div className="footer-col-1 flex flex-col items-start gap-6">
              <Link href="/petrovoll" className="flex items-center">
                <img
                  src="/moto/petrovoll/icon.png"
                  alt="Petrovöll Logo"
                  className="h-16 xl:h-18 object-contain filter brightness-110"
                />
              </Link>
              <p className="text-[#ffffff] !font-heading text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed "> 
                Petrovöll GmbH is specialized in advanced high performance lubricants for automotive, industrial and marine applications.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300" aria-label="Facebook">
                  <Facebook size={20} strokeWidth={2} />
                </a>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300" aria-label="Twitter">
                  <Twitter size={20} strokeWidth={2} />
                </a>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin size={20} strokeWidth={2} />
                </a>
                <a href="#" className="text-secondary hover:text-white transition-colors duration-300" aria-label="Instagram">
                  <Instagram size={20} strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col-2 flex flex-col items-start gap-4">
              {/* <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider"> */}
<h3 className="text-md sm:text-md md:text-lg lg:text-xl font-heading font-medium text-white  ">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2.5  text-sm sm:text-base text-white">
                {quickLinks.map((link, idx) => (
                  <li key={idx} className="flex items-center gap-1 group">
                    <p className="text-[#ffffff] !font-heading text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed ">                      {link.name}
</p>
                    {link.hasDropdown && (
                     
                      <img src="/moto/petrovoll/arrow.png" className="ml-2"/>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Products */}
            <div className="footer-col-3 flex flex-col items-start gap-4">
              <h3 className="text-md sm:text-md md:text-lg lg:text-xl font-sans font-medium text-white  ">
                Our Products
              </h3>
              <ul className="flex flex-col gap-2.5 font-sans text-sm sm:text-base text-white">
                {productLinks.map((link, idx) => (
                  <li key={idx}>
                    <p className="text-[#ffffff] !font-heading text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed "> 
                      {link.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="footer-col-4 flex flex-col items-start gap-4">
              <h3 className="text-md sm:text-md md:text-lg lg:text-xl font-sans font-medium text-white  ">
                Contact Info
              </h3>
              <ul className="flex flex-col gap-4 font-sans text-sm sm:text-base text-white">
                {/* Address */}
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-secondary shrink-0 mt-1" />
                 <p className="text-[#ffffff] !font-heading text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed "> 
                    Handelsgesellschaft Für Mineralölprodukte mbH Huttropstraße 60, 45138, Essen, Germany
                  </p>
                </li>
                {/* Email */}
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-secondary shrink-0" />
                <p className="text-[#ffffff] !font-heading text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed "> 
                    info@petrovoll.com
                  </p>
                </li>
                {/* Phone */}
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-secondary shrink-0" />
                  <a href="tel:+49201319377074" className="hover:text-primary transition-colors">
                    +49 201 319377074
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-white/60 my-6" />

          {/* Copyright */}
          <div className="w-full text-center">
           <p className="text-[#ffffff] !font-sans text-[14px] sm:text-xs md:text-sm lg:text-base leading-relaxed "> 
              © {currentYear} Petrovoll | All Rights Reserved
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
