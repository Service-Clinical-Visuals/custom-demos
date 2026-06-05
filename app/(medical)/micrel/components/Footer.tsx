"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { footerContent } from "../data/content";
import { FooterData } from "../types";

interface FooterProps {
  data?: FooterData;
}

export default function Footer({ data = footerContent }: FooterProps) {
  return (
    <footer className="bg-[#3363AC] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-15 pb-12 border-b border-white/20">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6 flex flex-col items-start w-full">
            <Link href="#home" className="relative block h-60 w-full lg:w-[420px] lg:h-[200px] max-w-full ">
              <Image
                src={data.logoUrl}
                alt={data.logoAlt}
                fill
                className="object-contain object-left"
                priority
                unoptimized
              />
            </Link>
            <p className="text-sm text-white max-w-[360px] -mt-[70px] text-slate-100/90 leading-relaxed font-normal">
              {data.description}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-15 h-15 rounded-xl bg-white flex items-center justify-center text-[#2E5B9B] hover:bg-slate-100 transition-colors shadow-sm"
                aria-label="LinkedIn"
                style={{ minHeight: "40px" }}
              >
                <Linkedin size={20} className="stroke-[1.75]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-15 h-15 rounded-xl bg-white flex items-center justify-center text-[#2E5B9B] hover:bg-slate-100 transition-colors shadow-sm"
                aria-label="Twitter"
                style={{ minHeight: "40px" }}
              >
                <Twitter size={20} className="stroke-[1.75]" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-body text-white tracking-wider  pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {data.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm  hover:text-white transition-colors duration-200 font-body py-1"
                    style={{ minHeight: "36px" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Therapies */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-body text-white tracking-wider  pb-2">
              Therapies
            </h3>
            <ul className="space-y-2">
              {data.therapies.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm  hover:text-white transition-colors duration-200 font-body py-1"
                    style={{ minHeight: "36px" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Products */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-body text-white tracking-wider  pb-2">
              Products
            </h3>
            <ul className="space-y-2">
              {data.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-sm  hover:text-white transition-colors duration-200 font-body py-1"
                    style={{ minHeight: "36px" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-body text-white tracking-wider  pb-2">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <div className="text-sm font-medium  leading-relaxed">
                  <div className="text-white">{data.contact.companyName}</div>
                  <div className="text-xs uppercase tracking-wider text-white mb-1">{data.contact.title}</div>
                  {data.contact.address.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-white mt-1 flex-shrink-0" />
                <div className="text-sm font-medium text-white flex flex-col gap-1">
                  {data.contact.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-white mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${data.contact.email}`}
                  className="text-sm font-medium text-white hover:text-white hover:underline transition-colors"
                >
                  {data.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & credits bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white font-medium">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>{data.bottom.revision}</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <Link href="#privacy" className="hover:text-white hover:underline transition-colors py-1">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-right">
            <span>{data.bottom.copyright}</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>{data.bottom.credits}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
