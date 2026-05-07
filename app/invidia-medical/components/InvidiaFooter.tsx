"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const quickLinksLeft = [
  "Home",
  "Company",
  "Products",
  "News",
];

const quickLinksRight = [
  "IFU",
  "Career",
  "Service",
  "Contact",
];

const legalLinks = [
  "Imprint",
  "Privacy policy",
  "General Terms",
];

export default function InvidiaFooter() {
  return (
    <footer className="overflow-hidden bg-[#F5F5F5] pt-[64px]">
      <div className="mx-auto max-w-380 px-8">
        {/* ======================================
            TOP GRID
        ======================================= */}
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-[1.2fr_0.8fr_0.7fr_0.9fr_0.5fr]">
          {/* ======================================
              BRAND
          ======================================= */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="max-w-[310px]"
          >
            {/* LOGO */}
          <div className="flex flex-col leading-none">
             <Image src="/invidia/invidia-logo.svg" alt="Invidia Medical Logo" width={100} height={20} />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 text-base leading-[1.95] text-[#666666]">
              Medicine is art. The art to advocate life
              and well-being with high standard
              precision. You only work as precisely as
              your instruments allow, therefore our aim
              is to deliver You perfect, flawless
              products.
            </p>
          </div>

          {/* ======================================
              QUICK LINKS
          ======================================= */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <h3 className="text-lg font-semibold tracking-[-0.4px] text-[#3A3A3A]">
              Quick Links
            </h3>

            <div className="mt-3 h-px w-full max-w-[140px] bg-[#D9D9D9]" />

            <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5">
              {/* LEFT */}
              <div className="space-y-5">
                {quickLinksLeft.map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="block text-base text-[#555555] transition-colors duration-300 hover:text-[#D3A700]"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* RIGHT */}
              <div className="space-y-5">
                {quickLinksRight.map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="block text-base text-[#555555] transition-colors duration-300 hover:text-[#D3A700]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================
              AVAILABILITY
          ======================================= */}
          <div
            data-aos="fade-up"
            data-aos-delay="220"
          >
            <h3 className="text-lg font-semibold tracking-[-0.4px] text-[#3A3A3A]">
              Availability
            </h3>

            <div className="mt-6 space-y-4">
              <p className="text-base text-[#555555]">
                Mon.-Thu.: 8:00 – 17:00
              </p>

              <p className="text-base text-[#555555]">
                Fri.: 8:00 – 15:00
              </p>
            </div>
          </div>

          {/* ======================================
              CONTACT
          ======================================= */}
          <div
            data-aos="fade-up"
            data-aos-delay="320"
          >
            <h3 className="text-lg font-semibold tracking-[-0.4px] text-[#3A3A3A]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="space-y-3">
                <p className="text-base text-[#555555]">
                  Carl-Benz-Straße 28
                </p>

                <p className="text-base text-[#555555]">
                  78576 Emmingen-Liptingen
                </p>
              </div>

              <div className="space-y-4">
                {/* PHONE */}
                <div className="flex items-center gap-3">
                  <Phone
                    size={15}
                    className="text-[#D3A700]"
                  />

                  <span className="text-base text-[#555555]">
                    07465 - 929 830 0
                  </span>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-3">
                  <Mail
                    size={15}
                    className="text-[#D3A700]"
                  />

                  <span className="text-base text-[#555555]">
                    info@invidia-medical.de
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================
              LEGAL
          ======================================= */}
          <div
            data-aos="fade-up"
            data-aos-delay="420"
          >
            <h3 className="text-lg font-semibold tracking-[-0.4px] text-[#3A3A3A]">
              Legal
            </h3>

            <div className="mt-6 space-y-5">
              {legalLinks.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="block text-base text-[#555555] transition-colors duration-300 hover:text-[#D3A700]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================
            BOTTOM COPYRIGHT
        ======================================= */}
        <div
          data-aos="fade-up"
          data-aos-delay="520"
          className="mt-[52px] border-t border-[#DDDDDD] py-6"
        >
          <p className="text-center text-base text-[#777777]">
            Copyright © 2026 invidia-medical.de. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}