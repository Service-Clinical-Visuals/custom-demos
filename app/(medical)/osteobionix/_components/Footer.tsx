"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const Logo = () => (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="3" fill="white" />
        <circle cx="16" cy="8" r="2" fill="white" opacity="0.9" />
        <circle cx="16" cy="24" r="2" fill="white" opacity="0.9" />
        <circle cx="8" cy="16" r="2" fill="white" opacity="0.9" />
        <circle cx="24" cy="16" r="2" fill="white" opacity="0.9" />
        <circle cx="10.5" cy="10.5" r="1.5" fill="white" opacity="0.7" />
        <circle cx="21.5" cy="21.5" r="1.5" fill="white" opacity="0.7" />
        <circle cx="10.5" cy="21.5" r="1.5" fill="white" opacity="0.7" />
        <circle cx="21.5" cy="10.5" r="1.5" fill="white" opacity="0.7" />
        <path d="M16 12V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.8" />
        <path d="M16 28V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.8" />
        <path d="M4 16H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.8" />
        <path d="M20 16H28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.8" />
      </svg>
      <span className="font-heading text-3xl tracking-wide text-white font-light">
        osteobionix
      </span>
    </div>
  );

  return (
    <footer className="w-full pt-16 pb-6 bg-[#103A31] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 24px)' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-12 lg:col-span-6 flex flex-col">
            <Link href="/osteobionix" className="mb-6 inline-block w-fit">
              <Logo />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm mb-8 font-medium">
              At osteobionix, we believe that personalized medicine should mean exactly that: solutions tailored to your unique anatomy and clinical condition.
            </p>
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-sm">Socials</span>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" />
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="X (Twitter)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-heading font-bold text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Products', 'Technology', 'Patients', 'News'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-white/80 text-sm hover:text-white transition-colors font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-1 md:col-span-8 lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-white font-heading font-bold text-lg">Contact</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <MapPin className="text-white w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">
                  ICT Facilities,<br />
                  La Punta, s/n Pozo Izquierdo<br />
                  35119 Santa Lucía de Tirajana Spain
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-white w-5 h-5 shrink-0" />
                <a href="tel:+34928652347" className="text-white/80 text-sm hover:text-white transition-colors">
                  +34 928 652 347
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-white w-5 h-5 shrink-0" />
                <a href="mailto:info@osteobionix.com" className="text-white/80 text-sm hover:text-white transition-colors">
                  info@osteobionix.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-white/20 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/60">
          <p>Copyrights © 2026 Osteobionix . All Rights Reserved</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-white transition-colors">Transparency</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
