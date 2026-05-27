"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react"
import "aos/dist/aos.css";

export default function SergFooter() {

  const quickLinks = [
    "Home",
    "About",
    "StimSense",
    "Team",
    "Insights",
    "Contact Us",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#252f8d] px-6 pt-16 pb-10">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1700px] mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">
          {/* LEFT BRAND */}
          <div data-aos="fade-right">
            {/* LOGO */}
            <div className="relative w-[190px] h-[70px]">
              {/* Replace with actual logo later */}

              <Image
                src="/medical/sergtech/serg-logo.png"
                alt="SERG Technologies"
                fill
                className="object-contain"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 text-white/90 text-[16px] leading-[2] font-medium max-w-[300px]">
              SERG Technologies is a digital health and care solutions provider
              for people living with neurodegenerative movement disorders.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">
              {/* INSTAGRAM */}
              <button className="cursor-pointer w-[42px] h-[42px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#252f8d] transition-all duration-300">
                <Instagram size={18} />
              </button>

              {/* LINKEDIN */}
              <button className="cursor-pointer w-[42px] h-[42px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#252f8d] transition-all duration-300">
                <Linkedin size={18} />
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-white text-[28px] font-bold tracking-[-0.5px]">
              Quick Links
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-white/90 text-[16px] font-medium hover:text-white transition-colors duration-300 w-fit"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* VISIT US */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-white text-[28px] font-bold tracking-[-0.5px]">
              Visit us
            </h3>

            <div className="mt-8 space-y-4">
              <p className="text-white/90 text-[16px] leading-[2] font-medium">
                0203 105 0903
              </p>

              <p className="text-white/90 text-[16px] leading-[2] font-medium">
                124 Barby Road, North Kensington,
                <br />
                London, W10 6BL
              </p>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="text-white text-[28px] font-bold tracking-[-0.5px]">
              Get in touch
            </h3>

            <div className="mt-8 space-y-5">
              <Link
                href="mailto:info@sergtechnologies.com"
                className="block text-white/90 text-[16px] font-medium underline underline-offset-4 hover:text-white transition-colors duration-300"
              >
                info@sergtechnologies.com
              </Link>

              <p className="text-white/90 text-[16px] leading-[2] font-medium max-w-[330px]">
                SERG Technologies Ltd is a company registered in England &
                Wales with company number 11844476.
              </p>

              <div className="flex flex-col gap-4 pt-2">
                <Link
                  href="#"
                  className="text-white/90 text-[16px] underline underline-offset-4 hover:text-white transition-colors duration-300 w-fit"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="#"
                  className="text-white/90 text-[16px] underline underline-offset-4 hover:text-white transition-colors duration-300 w-fit"
                >
                  Terms and Conditions
                </Link>

                <Link
                  href="#"
                  className="text-white/90 text-[16px] underline underline-offset-4 hover:text-white transition-colors duration-300 w-fit"
                >
                  Website Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-7 h-[1px] bg-white/30" />

        {/* COPYRIGHT */}
        <div
          className="pt-8 text-center"
        >
          <p className="text-white/90 text-[16px] font-medium tracking-wide">
            Copyright 2026 SERG Technologies Ltd - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}