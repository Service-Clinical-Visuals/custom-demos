"use client";

import React from "react";
import Link from "next/link";

const quickLinksLeft = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Profit Building", href: "#profit" },
  { name: "Best-in-Class Manufacturing", href: "#manufacturing" },
  { name: "Performance and Compliance", href: "#performance" },
  { name: "Education and Leadership", href: "#education" },
  { name: "BM Garage Pro", href: "#garage" }
];

const quickLinksRight = [
  { name: "Brexit", href: "#brexit" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
  { name: "Newsletter Sign Up", href: "#newsletter" },
  { name: "GPSR", href: "#gpsr" },
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Quality Policy Statement", href: "#quality" },
  { name: "Terms & Conditions", href: "#terms" }
];

export default function Footer() {
  return (
    <footer className="pt-16 lg:pt-18 pb-8 lg:pb-8 bg-[#1B1537] text-white flex justify-center w-full relative">
      
      {/* Schematic HUD backdrop mask */}
      <div 
        className="absolute inset-0 bg-[url('/bm-catalysts/images/footer-backdrop.jpg')] pointer-events-none bg-cover bg-center"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* 4-Columns Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Logo & Brand Description (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <span className="text-2xl lg:text-3xl font-black tracking-tighter text-white font-oxanium uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-xl shadow-lg select-none">
                <img src="/bm-catalysts/images/bm-main-logo.png" alt="bm catalysts" className="w-28 h-auto" />
              </span>
            </div>
            
            <p className="text-white/90 text-[16px] leading-relaxed font-exo2 font-medium max-w-md">
              As Europe's leading manufacturer of aftermarket hot end emissions products, you would expect us to deliver a wide range of quality focused products, you would expect us to deliver a wide range of quality focused parts that are easy to order.
            </p>
          </div>

          {/* Column 2: Quick Links split dual grid (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg lg:text-[19px] font-extrabold text-white font-oxanium uppercase tracking-wider">
              Quick Links
            </h3>
            <hr className="w-12 border-t-2 border-white/90 my-3" />
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-exo2 text-[16px] font-semibold text-white/90">
              {/* Left Column Links */}
              <ul className="space-y-3">
                {quickLinksLeft.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors duration-200 block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right Column Links */}
              <ul className="space-y-3">
                {quickLinksRight.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-white transition-colors duration-200 block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact details (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg lg:text-[19px] font-extrabold text-white font-oxanium uppercase tracking-wider">
              Contact
            </h3>
            <hr className="w-12 border-t-2 border-white/90 my-3" />
            
            <div className="space-y-4 font-exo2 text-sm font-semibold text-white/90 leading-relaxed">
              <p>
                Telephone: <span className="text-white block mt-0.5">+44 (0)1623 663 800</span>
              </p>
              <p>
                Email: <span className="text-white block mt-0.5 hover:underline cursor-pointer">enquiries@bmcatalysts.com</span>
              </p>
              <p>
                Web: <span className="text-white block mt-0.5 hover:underline cursor-pointer">bmcats.com</span>
              </p>
            </div>
          </div>

          {/* Column 4: Address details (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg lg:text-[19px] font-extrabold text-white font-oxanium uppercase tracking-wider">
              Company Address
            </h3>
            <hr className="w-12 border-t-2 border-white/90 my-3" />
            
            <address className="not-italic space-y-2.5 font-exo2 text-sm font-semibold text-white/90 leading-relaxed">
              <p className="text-white font-bold">Reed Mill</p>
              <p>Sheepbridge Lane</p>
              <p>Mansfield</p>
              <p>Nottinghamshire</p>
              <p className="text-white font-bold tracking-wide">NG18 5DL</p>
            </address>
          </div>

        </div>

        {/* Bottom Bar: copyright stamp */}
        <div>
          <hr className="border-t border-white/60 my-8" />
          
          <div className="text-center font-exo2 text-xs lg:text-sm font-semibold text-white/70 tracking-wider">
            © {new Date().getFullYear()} BM Catalysts Limited. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
