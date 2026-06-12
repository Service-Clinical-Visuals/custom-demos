"use client";

import React from "react";
import Link from "next/link";
import { ChevronUp } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#1A1C1E] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1760px] mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/10">
          <div
            className="lg:col-span-4 flex flex-col gap-6 text-left"
            data-aos="fade-up"
          >
            <Link href="#" className="inline-block">
              <img
                src="/medical/fisso-medical/fisso-logo-footer.png"
                alt="FISSO Swiss Made Logo"
                className="h-[100px] lg:h-[90px] xl:h-[100px] xl:w-[250px] 2xl:h-[100px] 2xl:w-[300px] object-contain "
              />
            </Link>
            <Typography
              variant="body"
              color="none"
              className="text-wh leading-relaxed max-w-md"
            >
              FISSO is a global leader in articulated arm systems, delivering
              precision holding solutions for medical and industrial
              applications worldwide.
            </Typography>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#9C0B38] hover:bg-gray-100 transition-all duration-300 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-[#9C0B38]"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#9C0B38] hover:bg-gray-100 transition-all duration-300 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z"
                    fill="#9C0B38"
                  />
                  <polygon
                    points="9.545 8.432 15.818 12 9.545 15.568"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-2 flex flex-col gap-5 text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Typography
              variant="h4"
              color="none"
              weight="semibold"
              className="text-white"
            >
              Products
            </Typography>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#products" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Medical Solutions
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Industrial Solutions
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Patient Positioning
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Articulated Arms
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#products" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Accessories
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-2 flex flex-col gap-5 text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Typography
              variant="h4"
              color="none"
              weight="semibold"
              className="text-white"
            >
              Company
            </Typography>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#company" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    About Us
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#company" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Team
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#company" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Careers
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#news" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    News & Events
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-2 flex flex-col gap-5 text-left"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Typography
              variant="h4"
              color="none"
              weight="semibold"
              className="text-white"
            >
              Legal
            </Typography>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Legal Notice
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Terms of Use
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Privacy Settings
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-2 flex flex-col gap-5 text-left"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Typography
              variant="h4"
              color="none"
              weight="semibold"
              className="text-white"
            >
              Support
            </Typography>
            <ul className="flex flex-col gap-3 footer-menu">
              <li>
                <Link href="#company" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Contact
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Trade Fairs
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    Downloads
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="#" className="group">
                  <Typography
                    variant="body"
                    color="none"
                    className="text-white group-hover:text-white transition-colors"
                  >
                    FAQ
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 xl:gap-30  w-full isolate">
          {/* Left Side: Swiss Safety Center logo */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16  xl:h-25 xl:w-25 select-none shrink-0 flex items-center justify-center mix-blend-screen">
              <img
                src="/medical/fisso-medical/footer-logo.png"
                alt="Swiss Safety Center Logo"
                className="w-full h-full object-contain "
              />
            </div>
          </div>

          {/* Divider Left */}
          <div className="w-px h-12 bg-white/60 hidden md:block" />

          {/* Center: Copyright */}
          <div className="flex items-center justify-center">
            <Typography
              variant="h5"
              color="none"
              className="text-white leading-relaxed text-center"
            >
              © 2026 OHST Orthopedic Solutions. All
              <br />
              rights reserved worldwide.
            </Typography>
          </div>

          {/* Divider Right */}
          <div className="w-px h-12 bg-white/60 hidden md:block" />

          {/* Right Side: Back to Top */}
          <div className="flex items-center justify-center">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 group text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-12 h-12  rounded-full border border-white border-[3px] xl:h-22 xl:w-22 flex items-center justify-center text-white group-hover:border-gray-300 transition-all duration-300">
                <ChevronUp size={18} className="stroke-[1.5] mb-2  xl:h-18 xl:w-18 " />
              </div>
              <Typography
                variant="h4"
                color="none"
                className="font-medium tracking-wide text-white group-hover:text-gray-300 transition-colors"
              >
                Back to Top
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
