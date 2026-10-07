"use client";

import React from "react";
import Link from "next/link";
import { LuPhone, LuMapPin } from "react-icons/lu";
import Typography from "./Typography";

const linkGroups = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "Products", href: "#products" },
      { label: "About Us", href: "#about" },
      { label: "Privacy Policy", href: "#" },
    ],
    more: { label: "See More >>", href: "#" },
  },
  {
    heading: "Products",
    links: [
      { label: "Portable Headlights", href: "#products" },
      { label: "Cordless Headlights", href: "#products" },
      { label: "Tethered Headlights", href: "#products" },
      { label: "Fiber Optic Headlights", href: "#products" },
    ],
    more: { label: "See More >>", href: "#products" },
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#news" },
      { label: "Lighting Guide", href: "#" },
      { label: "Operation Manuals", href: "#" },
      { label: "Product Spec Sheets", href: "#" },
      { label: "Videos", href: "#" },
    ],
  },
];

const iconClass = "w-[1.1em] h-[1.1em] shrink-0 text-[#2A2A2A] mt-[0.2em]";

const Footer = () => {
  return (
    <footer className="relative w-full mt-auto overflow-hidden bg-[#F5F5FF] text-[#4A4A4A]">
      <div className="custom-container pt-12 lg:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.9fr_1fr_1.1fr_1.1fr_1fr] gap-x-6 gap-y-10 lg:gap-x-8 min-[2500px]:gap-x-14 min-[3800px]:gap-x-20 min-[3800px]:gap-y-16 items-start pb-8 min-[2500px]:pb-12 min-[3800px]:pb-16 border-b border-gray-300">

          {/* Logo & About */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10 lg:pr-16 xl:pr-24 min-[3800px]:pr-40" data-aos="fade-right">
            <Link href="/" className="inline-block w-fit">
              <img
                src="/medical/bfw/logo.webp"
                alt="BFW"
                className="w-[190px] lg:w-[210px] xl:w-[235px] min-[2500px]:w-[340px] min-[3800px]:w-[480px] h-auto object-contain"
              />
            </Link>
            <Typography variant="footer-body" color="muted" className="leading-relaxed max-w-md lg:max-w-none">
              BFW, Inc. is the technological leader in medical and surgical headlight illumination and headlight video imaging equipment backed by customer service that is second-to-none.
            </Typography>
          </div>

          {/* Link Columns */}
          {linkGroups.map((group, i) => (
            <div key={group.heading} className="col-span-1 flex flex-col gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
              <Typography variant="footer-heading" color="dark">
                {group.heading}
              </Typography>
              <ul className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="w-fit inline-block hover:text-[var(--color-primary)] transition-colors">
                      <Typography variant="footer-body" color="none">{link.label}</Typography>
                    </Link>
                  </li>
                ))}
                {group.more && (
                  <li>
                    <Link href={group.more.href} className="w-fit inline-block underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors">
                      <Typography variant="footer-body" color="none">{group.more.label}</Typography>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-1 flex flex-col gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10" data-aos="fade-left" data-aos-delay="400">
            <Typography variant="footer-heading" color="dark">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8">
              <li>
                <Link href="tel:+18007174673" className="flex items-start gap-3 min-[3800px]:gap-5 w-fit hover:text-[var(--color-primary)] transition-colors">
                  <LuPhone className={iconClass} aria-hidden="true" />
                  <Typography variant="footer-body" color="none">1 (800) 717-4673</Typography>
                </Link>
              </li>
              <li className="flex items-start gap-3 min-[3800px]:gap-5">
                <LuMapPin className={iconClass} aria-hidden="true" />
                <Typography variant="footer-body" color="none" className="leading-relaxed">
                  445 Baxter Ave, 175,<br />
                  Louisville, Kentucky<br />
                  40204, US
                </Typography>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 min-[2500px]:py-10 min-[3800px]:py-14 flex justify-center">
          <Typography variant="footer-body" color="muted" className="text-center">
            © 2024 BFW Inc. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
