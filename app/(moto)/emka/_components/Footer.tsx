"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import { Facebook, Mail, Phone, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerColumns = [
    {
      title: "COMPANY",
      links: [
        { text: "We Are EMKA", bold: false },
        { text: "News", bold: false },
        { text: "Jobs", bold: false },
        { text: "Sponsoring Partner", bold: false }
      ]
    },
    {
      title: "PRODUCTS",
      links: [
        { text: "Automotive", bold: false },
        { text: "BFL Heavy Duty", bold: false },
        { text: "Industry", bold: false },
        { text: "Bikes & Quads", bold: false },
        { text: "See All", bold: true, underline: true }
      ]
    },
    {
      title: "SERVICE",
      links: [
        { text: "Private Label", bold: false },
        { text: "Green concept", bold: false },
        { text: "Downloads", bold: false },
        { text: "Base Dealer", bold: false },
        { text: "See All", bold: true, underline: true }
      ]
    },
    {
      title: "CONTACT",
      links: [
        { text: "Our team", bold: false },
        { text: "Representatives", bold: false }
      ]
    },
    {
      title: "CONTACT",
      links: [
        { text: "EMKA Schmiertechnik GmbH", bold: false },
        { text: "Schmalbachstrasse 19", bold: false },
        { text: "74626 Bretzfeld", bold: false },
        { text: "Telefon: +49 (0) 7946944700", bold: false },
        { text: "See All", bold: true, underline: true }
      ]
    }
  ];

  return (
    <footer id="footer" className="relative w-full bg-black text-white pt-20 pb-8 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 mb-16">

          {/* Company Info Column (Leftmost) */}
          <div className="flex flex-col space-y-6 lg:pr-8">
            <Link href="/emka">
              <img src="/moto/emka/logo 1 (1).png" alt="EMKA Logo" className="h-8 md:h-12 w-auto object-contain mb-2" />
            </Link>

            <Typography variant="body" color="white" className="font-exo text-sm leading-relaxed opacity-90 block">
              A Company Providing Collection, Transportation, And Recycling Services For Used Cooking Oil (UCO).
            </Typography>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-[#222222] flex items-center justify-center hover:bg-primary transition-colors group">
                <Linkedin size={16} className="text-primary group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#222222] flex items-center justify-center hover:bg-primary transition-colors group">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#222222] flex items-center justify-center hover:bg-primary transition-colors group">
                <Facebook size={16} className="text-primary group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#222222] flex items-center justify-center hover:bg-primary transition-colors group">
                {/* Xing Logo approximate via SVG or text, using text X as placeholder */}
                <span className="text-primary group-hover:text-white font-bold font-exo text-sm italic">X</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerColumns.map((column, idx) => (
            <div key={idx} className="flex flex-col space-y-6">
              <Typography variant="body" color="white" weight="bold" className="font-bebas tracking-widest uppercase font-bold text-lg">
                {column.title}
              </Typography>
              <ul className="flex flex-col space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className={`font-exo text-white text-md hover:text-primary transition-colors ${link.bold ? 'font-bold' : 'opacity-90'} ${link.underline ? 'underline underline-offset-4' : ''}`}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-t border-[#444] w-full mb-6" />

        <div className="flex flex-col justify-center items-center text-center">
          <Typography variant="body" color="white" className="font-exo text-xs ">
            Cookies help us provide our services. By using our services, you agree to our use of cookies
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
