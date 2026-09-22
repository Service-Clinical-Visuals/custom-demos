"use client";

import React from "react";
import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail } from "lucide-react";
import Typography from "./Typography";

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about-us" },
  { name: "Products", id: "products" },
  { name: "News", id: "news" },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col relative -mt-16 md:-mt-24 z-20 overflow-hidden">
      {/* Top Decorative Section */}
      <div className="w-full relative pointer-events-none h-[150px] md:h-[200px] lg:h-[25vw] xl:h-[22vw] 2xl:h-[20vw]" data-aos="fade-in">
        {/* Dark Red Base Shape */}
        <div 
          className="absolute inset-0 bg-[#6E0000]" 
          style={{ clipPath: "polygon(0% 60%, 50% 60%, 65% 48%, 71.5% 82%, 81.5% 55%, 85.5% 33%, 92% 33%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        
        {/* Pink Geometric Shapes */}
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(56.5% 58%, 64.5% 50%, 70.5% 79%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(72.5% 82%, 81% 58%, 80% 93%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(82.5% 52%, 86% 35%, 91% 41%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(87% 35%, 91.5% 35%, 92% 38%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(93% 31%, 100% 4%, 100% 40%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(93.5% 42%, 100% 42%, 97% 74%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(92.5% 44%, 96% 75%, 90.5% 69%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(82.5% 56%, 91% 44%, 89.5% 68%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(81.5% 60%, 81% 91%, 89% 71%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(90.5% 72%, 97% 77%, 100% 99%)" }} />
        <div className="absolute inset-0 bg-[#FFA1A1]" style={{ clipPath: "polygon(98% 78%, 100% 44%, 100% 88%)" }} />
      </div>

      {/* Main Content Section */}
      <div className="w-full bg-[#6E0000] text-white pb-12 lg:pb-16 relative z-10 -mt-1">
        <div className="custom-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 2xl:gap-8 items-start lg:pr-[5%]">

          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start pr-4" data-aos="fade-up">
            <img
              src="/moto/vessel/footer-logo.png"
              alt="VESSEL"
              className="h-10 lg:h-15 w-auto object-contain object-left brightness-0 invert mb-6"
            />
            <Typography variant="footer-body" color="white" className="text-white/90 mb-6">
              We develop innovative medical technology and high-quality electrosurgical solutions designed to support precision, efficiency, and reliability in modern healthcare. Our products combine advanced technology with intuitive operation to meet the evolving needs of medical professionals.
            </Typography>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 text-white transition-colors">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-200 text-white transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Youtube" className="hover:text-gray-200 text-white transition-colors">
                <Youtube className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-200 text-white transition-colors">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col lg:pl-4" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="footer-heading" color="white" className="mb-6">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <a key={link.name} href={`#${link.id}`} className="hover:text-white text-white/90 transition-colors w-fit">
                  <Typography variant="footer-body" color="none" className="!m-0">{link.name}</Typography>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-3 flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="footer-heading" color="white" className="mb-6">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <a href="tel:+330169191742" className="flex items-center gap-3 hover:text-white text-white/90 transition-colors w-fit">
                <Phone className="w-4 h-4 shrink-0" strokeWidth={2} />
                <Typography variant="footer-body" color="none" className="!m-0">+33 (0)1 69 19 17 42</Typography>
              </a>
              <a href="mailto:contact@vessel-europe.com" className="flex items-center gap-3 hover:text-white text-white/90 transition-colors w-fit">
                <Mail className="w-4 h-4 shrink-0" strokeWidth={2} />
                <Typography variant="footer-body" color="none" className="!m-0">contact@vessel-europe.com</Typography>
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 flex flex-col" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="footer-heading" color="white" className="mb-6">
              Subscribe to Newsletter :
            </Typography>
            <Typography variant="footer-body" color="white" className="text-white/90 mb-4">
              Stay informed with the latest product launches, industry news, technical updates, and innovations
            </Typography>
            <form
              className="flex items-center w-full bg-white rounded-[4px] p-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Your E-Mail Id"
                className="flex-1 min-w-0 bg-transparent text-gray-800 px-3 py-2 focus:outline-none placeholder:text-gray-400 text-[13px]"
              />
              <button
                type="submit"
                className="bg-[#bd1a22] hover:bg-[#9a151b] text-white px-5 py-2 rounded-[3px] transition-colors text-[13px] font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white py-4 border-t border-gray-100">
        <div className="custom-container flex flex-col sm:flex-row gap-4 justify-between items-center" data-aos="fade-up" data-aos-offset="0">
          <Typography variant="footer-body" color="none" className="text-gray-500 !m-0">
            Copyright © All rights reserved by VESSEL-EUROPE - 2026
          </Typography>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-primary transition-colors text-gray-500">
              <Typography variant="footer-body" color="none" className="!m-0">Privacy Policy</Typography>
            </a>
            <a href="#" className="hover:text-primary transition-colors text-gray-500">
              <Typography variant="footer-body" color="none" className="!m-0">GTC</Typography>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
