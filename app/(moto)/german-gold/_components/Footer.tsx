"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#181715] text-[#d1d5db] pt-16 pb-8 border-t border-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">

          {/* Logo & Socials */}
          <div className="lg:col-span-2 flex flex-col items-start pr-4">
            <div className="mb-4">
              {/* Keeping logo bigger in size just like the image */}
              <img src="/moto/german-gold/footerlogo.png" alt="German Gold Logo" className="h-20 sm:h-24 md:h-28 object-contain" />
            </div>

            <div className="flex  gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-[#333333]   flex items-center justify-center text-[#c68906] hover:bg-[#c68906] hover:text-[#181715] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full  bg-[#333333] flex items-center justify-center text-[#c68906] hover:bg-[#c68906] hover:text-[#181715] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#333333]  flex items-center justify-center text-[#c68906] hover:bg-[#c68906] hover:text-[#181715] transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h5" className="font-teko  font-bold text-white uppercase text-base tracking-wide mb-4 border-b border-white inline-block pb-1">
              Quick Links
            </Typography>
            <ul className="space-y-2 font-exo text-md">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Company</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Oilfinder</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Product Range</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact us */}
          <div>
            <Typography variant="h5" className="font-teko font-bold text-white uppercase text-base tracking-wider mb-4 border-b border-white  inline-block pb-1">
              Contact us
            </Typography>
            <ul className="space-y-3 font-exo text-md">
              <li><span className="font-bold text-white">Phone:</span> +49 (0) 421 - 22 300 950</li>
              <li><span className="font-bold text-white">Fax:</span> +49 (0) 421 - 22 300 925</li>
              <li><span className="font-bold text-white">E-Mail:</span> info@German-Gold.com</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <Typography variant="h5" className="font-teko font-bold text-white uppercase text-base tracking-wider mb-4 border-b border-white  inline-block pb-1">
              Resources
            </Typography>
            <ul className="space-y-3 font-exo text-md">
              <li><a href="#" className="hover:text-primary transition-colors">Catalog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Media Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Become A Partner</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <Typography variant="h5" className="font-teko font-bold text-white uppercase text-base tracking-wider mb-4 border-b border-white inline-block pb-1">
              Legal
            </Typography>
            <ul className="space-y-3 font-exo text-md">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprint</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trademark Notice</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/50 pt-6 flex justify-center text-center">
          <Typography variant="body" className="font-exo text-xs text-whitesssssssss">
            © 2026 GERMAN GOLD Handelsgesellschaft mbH. All Rights Reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
