// app/components/Footer.tsx

"use client";

import { ArrowRight, Linkedin, ShoppingCart } from "lucide-react";

const quickLinks = [
  "Home",
  "OEM Fluid Technology Division",
  "Compressed Air & Gas Division",
  "Technology Solutions For Industries",
  "About AEG",
  "News",
  "Contact Us",
];

const usefulLinks = [
  "AEG Brochure",
  "Corporate Responsibility",
  "Careers",
  "Our Location",
  "Feedback Form",
  "Quality",
];

export default function AirFooter() {
  return (
    <footer className="w-full bg-[#F9F9F9]">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-[1600px] px-6 py-[70px]">
        <div
          className="
            grid
            grid-cols-1
            gap-14
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* =================================================
              LEFT BRAND SECTION
          ================================================== */}

          <div data-aos="fade-right">
            {/* LOGO */}
            <div className="relative h-[56px] w-[250px]">
              <img
                src="/ae/ae-logo.png"
                alt="AEG Logo"
                className="w-full h-full object-contain object-left"
              />
            </div>

            {/* NEWSLETTER */}
            <div className="mt-8 flex overflow-hidden">
              <input
                type="email"
                placeholder="Please enter email address"
                className="
                  h-[48px]
                  w-full
                  border
                  border-[#e4e4e4]
                  bg-white
                  px-4
                  text-[14px]
                  text-[#333]
                  outline-none
                  placeholder:text-[#9a9a9a]
                "
              />

              <button
                className="
                  cursor-pointer
                  flex
                  h-[48px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center
                  bg-[#ef3124]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#d9291d]
                "
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex items-center gap-4">
              <button
                className="
                  cursor-pointer
                  flex
                  h-[48px]
                  w-[48px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border
                  border-[#e5e5e5]
                  bg-white
                  text-[#222]
                  shadow-[0_4px_10px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <Linkedin size={20} />
              </button>

              <button
                className="
                  cursor-pointer
                  flex
                  h-[48px]
                  w-[48px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border
                  border-[#e5e5e5]
                  bg-white
                  text-[#222]
                  shadow-[0_4px_10px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="xl:ml-14"
          >
            <h3
              className="
                text-[28px]
                font-bold
                tracking-[-0.5px]
                text-[#333]
              "
            >
              Quick Links
            </h3>

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    className="
                      cursor-pointer
                      text-left
                      text-[15px]
                      font-medium
                      text-[#555]
                      transition-colors
                      duration-300
                      hover:text-[#00A7E4]
                    "
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              USEFUL LINKS
          ================================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3
              className="
                text-[28px]
                font-bold
                tracking-[-0.5px]
                text-[#333]
              "
            >
              Useful Links
            </h3>

            <ul className="mt-7 space-y-4">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <button
                    className="
                      cursor-pointer
                      text-left
                      text-[15px]
                      font-medium
                      text-[#555]
                      transition-colors
                      duration-300
                      hover:text-[#00A7E4]
                    "
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT SECTION
          ================================================== */}

          <div
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {/* OFFICE */}
            <div>
              <h3
                className="
                  text-[28px]
                  font-bold
                  tracking-[-0.5px]
                  text-[#333]
                "
              >
                Head Office
              </h3>

              <p
                className="
                  mt-6
                  max-w-[280px]
                  text-[15px]
                  leading-[2]
                  text-[#5d5d5d]
                "
              >
                Unit 11, Forest Row Business Park,
                Station Road, Forest Row,
                East Sussex, RH18 5DW England
              </p>
            </div>

            {/* CONTACT */}
            <div className="mt-10">
              <h4
                className="
                  text-[24px]
                  font-bold
                  tracking-[-0.3px]
                  text-[#333]
                "
              >
                Contact Us
              </h4>

              <div className="mt-6 space-y-4">
                <p
                  className="
                    text-[15px]
                    font-medium
                    text-[#555]
                  "
                >
                  Tel: +44 (0) 1342 826488
                </p>

                <p
                  className="
                    cursor-pointer
                    text-[15px]
                    font-medium
                    text-[#555]
                  "
                >
                  Email: info@aegroup.uk.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT BAR
      ====================================================== */}

      <div
        className="
          border-t
          border-[#e3e3e3]
          bg-[#fafafa]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[68px]
            max-w-[1180px]
            items-center
            justify-center
            px-6
            text-center
          "
        >
          <p
            className="
              text-[15px]
              font-medium
              text-[#4e4e4e]
            "
          >
            © 2026 All rights reserved Air Engineering Group Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}