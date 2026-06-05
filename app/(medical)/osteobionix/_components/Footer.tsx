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
    <footer className="w-full relative overflow-hidden flex flex-col">
      {/* Main Footer Background */}
      <div className="bg-primary pt-16 pb-12 w-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

            {/* Brand Col */}
            <div className="col-span-1 md:col-span-12 lg:col-span-5 flex flex-col">
              <div className="flex-shrink-0 flex flex-col justify-center mb-6">
                <Link href="/osteobionix" className="flex flex-col">
                  <img src="/osteobionix/footerlogo.png" alt="logo" className="w-[300px] md:w-[412px] max-w-full h-auto" />
                </Link>
              </div>
              {/* <p className="text-white text-sm md:text-[15px] leading-relaxed max-w-md mb-6"> */}
              <p className="text-white mb-4 leading-relaxed text-md max-w-md md:text-base">
                At osteobionix, we believe that personalized medicine should mean exactly that: solutions tailored to your unique anatomy and clinical condition.
              </p>
              {/* Email Input */}
              <div className="flex items-center w-full max-w-sm bg-white p-1">
                <input type="email" placeholder="Please enter email" className="flex-1 bg-transparent px-3 py-2 text-md text-gray-700 outline-none placeholder-gray-400" />
                <button className="bg-primary text-white p-2.5 flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </div>

            {/* Right Side Links */}
            <div className="col-span-1 md:col-span-12 lg:col-start-7 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links Col */}
              <div className="flex flex-col gap-5">
                <h4 className="text-white font-heading font-semibold text-lg min-[2560px]:text-3xl ">Quick Links</h4>
                <ul className="flex flex-col gap-4">
                  {['Home', 'Products', 'Technology', 'Patients', 'News'].map((link) => (
                    <li key={link}>
                      <Link href={`#${link.toLowerCase()}`} className="text-white text-[16px] hover:text-gray-200 transition-colors font-small min-[2560px]:text-2xl">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Col */}
              <div className="flex flex-col gap-5">
                <h4 className="text-white font-heading font-semibold text-lg min-[2560px]:text-3xl">Contact</h4>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="text-white w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-white text-[15px] leading-relaxed min-[2560px]:text-2xl">
                      ICT Facilities,<br />
                      La Punta, s/n Pozo Izquierdo<br />
                      35119 Santa Lucia de Tirajana Spain
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="text-white w-5 h-5 shrink-0" />
                    <a href="tel:+34928652347" className="text-white text-[15px] hover:text-gray-200 transition-colors min-[2560px]:text-2xl">
                      +34 928 652 347
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="text-white w-5 h-5 shrink-0" />
                    <a href="mailto:info@osteobionix.com" className="text-white text-[15px] hover:text-gray-200 transition-colors min-[2560px]:text-2xl">
                      info@osteobionix.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links Col */}
              <div className="flex flex-col gap-5 justify-self-end">
                <h4 className="text-white font-heading font-semibold text-lg min-[2560px]:text-3xl">Social Links</h4>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                    <img src="/osteobionix/insta.png" alt="Instagram" className="h-[22px] w-auto object-contain min-[2560px]:h-[40px]" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="X (Twitter)">
                    <img src="/osteobionix/twitter.png" alt="X" className="h-[22px] w-auto object-contain min-[2560px]:h-[40px]" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar (White Background) */}
      <div className="bg-white py-5 border-t border-gray-200 w-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="100">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[16px] font-small text-primary">
          <span className="text-primary min-[2560px]:text-xl">Copyrights @ 2026 Osteobionix . All Rights Reserved</span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="hover:text-black transition-colors min-[2560px]:text-xl">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors min-[2560px]:text-xl">Cookies</Link>
            <Link href="#" className="hover:text-black transition-colors min-[2560px]:text-xl">Transparency</Link>
          </div>
        </div>
      </div>
    </footer >
  );
}
