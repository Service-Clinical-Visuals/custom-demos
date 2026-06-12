"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { useEffect } from "react";
import { LocationIcon } from "../../future-med/_components/Icons";

const quickLinks = [
  "Home",
  "About Us",
  "Downloads",
  "Careers",
];

const specialityAreas = [
  "Anaesthesia",
  "General Medical",
  "Electrosurgery",
  "Podiatry",
  "Surgery",
];

export default function TimescoFooter() {


  return (
    <footer className="w-full overflow-hidden bg-[#f4f4f4]">
      
      {/* SUBSCRIBE SECTION */}
      <div
        data-aos="fade-up"
        className="
          relative
          overflow-hidden
          bg-[#dff1e7]
          py-16
        "
      >
        {/* Background Decorative Pattern */}
        <img src="/timesco/subscribe-bg.jpg" alt="bg"
          className="
            absolute
            inset-0
            opacity-30
            bg-[#008A2026]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            max-w-[1600px]
            flex-col
            items-start
            justify-between
            gap-10
            px-8
            lg:flex-row
            lg:items-center
          "
        >
          {/* LEFT */}
          <div>
            <h2
              className="
                text-2xl
                font-medium
                tracking-[-0.03em]
                text-[#0d4f20]
              "
            >
              Subscribe To Our Mailing list Today
            </h2>

            <p
              className="
                mt-4
                text-[16px]
                text-[#5e5e5e]
              "
            >
              Stay upto Date With Product Updates, Special Offers and Events
            </p>
          </div>

          {/* INPUT */}
          <div
            className="
              flex
              w-full
              max-w-[520px]
              overflow-hidden
              rounded-full
              bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            "
          >
            <input
              type="email"
              placeholder="Enter You E-Mail id"
              className="
                h-[70px]
                flex-1
                border-none
                text-black
                bg-transparent
                px-8
                text-[16px]
                outline-none
              "
            />

            <button
              className="
                cursor-pointer
                flex
                h-[70px]
                w-[90px]
                items-center
                justify-center
                rounded-full
                bg-[#0a8d34]
                text-white
                transition-all
                duration-300
                hover:bg-[#08752b]
              "
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="py-12">
        <div
          className="
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-1
            gap-16
            px-8
            lg:grid-cols-[2fr_0.5fr_0.7fr_1fr]
          "
        >
          
          {/* BRAND */}
          <div data-aos="fade-right">
            
            <div>
              <img src="/timesco/timesco-logo.png" alt="Timesco Logo" className="h-10" />
            </div>
            <p
              className="
                mt-6
                max-w-[420px]
                text-[16px]
                leading-[2]
                text-[#5e5e5e]
              "
            >
              We are committed to continuous improvement and
              strive to provide you with products that meet
              or exceed expectations.
            </p>

            <div className="mt-10">
              <h3
                className="
                  text-[22px]
                  font-semibold
                  text-[#0d4f20]
                "
              >
                Social Media
              </h3>

              <button
                className="
                  mt-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-md
                  bg-[#0a8d34]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  cursor-pointer
                "
              >
                <Linkedin size={22} />
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div data-aos="fade-up">
            <h3
              className="
                text-[26px]
                font-semibold
                text-[#0d4f20]
              "
            >
              Quick Links
            </h3>

            <ul className="mt-8 space-y-5">
              {quickLinks.map((item) => (
                <li
                  key={item}
                  className="
                    text-[16px]
                    text-[#5e5e5e]
                    transition-colors
                    duration-300
                    hover:text-[#0a8d34]
                    cursor-pointer
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SPECIALITY */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3
              className="
                text-[26px]
                font-semibold
                text-[#0d4f20]
              "
            >
              Speciality areas
            </h3>

            <ul className="mt-8 space-y-5">
              {specialityAreas.map((item) => (
                <li
                  key={item}
                  className="
                    text-[16px]
                    text-[#5e5e5e]
                    transition-colors
                    duration-300
                    hover:text-[#0a8d34]
                    cursor-pointer
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div data-aos="fade-left">
            <h3
              className="
                text-[26px]
                font-semibold
                text-[#0d4f20]
              "
            >
              Contact
            </h3>

            <div className="mt-8 space-y-7">
              
              <div className="flex items-start gap-4">
                <LocationIcon
                  className="mt-1 shrink-0  fill-[#008A20] w-7"
                />

                <p
                  className="
                    text-[16px]
                    leading-[1.9]
                    text-[#5e5e5e]
                  "
                >
                  Timesco Healthcare Ltd.,
                  <br />
                  3 Carnival Park, Carnival Close,
                  <br />
                  Basildon, Essex, SS14 3WN,
                  <br />
                  United Kingdom
                </p>
              </div>
 
              <div className="flex items-center gap-4">
                <Phone
                  size={20}
                  className="fill-[#0a8d34]"
                />

                <p className="text-[16px] text-[#5e5e5e] cursor-pointer">
                  +44 (0)1268 297 700
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  size={20}
                  className="text-[#0a8d34]"
                />

                <p className="text-[16px] text-[#5e5e5e] cursor-pointer">
                  info@timesco.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mx-auto
            mt-10
            max-w-[1600px]
            border-t
            border-[#d9d9d9]
            px-8
            pt-5
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              lg:flex-row
            "
          >
            <p
              className="
                text-[16px]
                text-[#6a6a6a]
              "
            >
              Copyrights@2026 Timesco.All Rights Reserved
            </p>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-8
              "
            >
              {[
                "Privacy Policy",
                "Terms and Conditions",
                "Policy and Certifications",
              ].map((item) => (
                <button
                  key={item}
                  className="
                    cursor-pointer
                    text-[16px]
                    text-[#6a6a6a]
                    transition-colors
                    duration-300
                    hover:text-[#0a8d34]
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}