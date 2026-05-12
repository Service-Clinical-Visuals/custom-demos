"use client";

import {
  ArrowRight,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "aos/dist/aos.css";

const products = ["Titanium", "I C P Monitor", "Bioresorbable", "P E E K"];

const company = ["Meet our Team", "News", "Careers", "Podcasts"];

export default function BioplateFooter() {

  return (
    <footer className="relative bg-[#006D53] pt-[260px] text-white">
      {/* ================================================= */}
      {/* FLOATING CTA CARD */}
      {/* ================================================= */}

      <div className="absolute left-1/2 -top-20 z-20 w-full max-w-[1600px] -translate-x-1/2 px-8 lg:px-16">
        <div
          data-aos="fade-up"
          className="relative overflow-hidden rounded-[24px]"
        >
          {/* IMAGE */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-[24px]">
            {/* PLACEHOLDER IMAGE */}
            <img
              src="/bioplate/bioplate-footer.png"
              alt="Footer Banner"
              className="h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/28" />

            {/* SOFT DEPTH OVERLAY */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.12),transparent_40%)]" />
          </div>

          {/* CONTENT */}
          <div className="absolute inset-x-6 top-6 z-10 sm:inset-x-auto sm:left-12 sm:top-12">
            <div data-aos="fade-up" data-aos-delay="150">
              <h2 className="text-2xl font-semibold tracking-[-1.8px] text-white sm:text-4xl">
                Get in Touch
              </h2>
            </div>

            {/* INPUT */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-4 sm:mt-7"
            >
              <div className="flex h-[62px] w-full items-center overflow-hidden rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:w-[420px]">
                <input
                  type="email"
                  placeholder="Enter Your E-Mail"
                  className="h-full flex-1 bg-transparent px-8 text-base text-[#1f1f1f] outline-none placeholder:text-[#8d8d8d]"
                />

                <button className="cursor-pointer mr-[6px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#007256] text-white transition-all duration-300 hover:scale-105">
                  <ArrowRight size={20} strokeWidth={2.8} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* FOOTER CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 pb-10 lg:px-16">
        <div className="grid gap-10 border-b border-white/25 pb-14 sm:grid-cols-2 sm:gap-12 lg:gap-16 lg:grid-cols-[1.2fr_1px_0.7fr_0.7fr_1fr]">
          {/* ================================================= */}
          {/* LEFT BRAND */}
          {/* ================================================= */}

          <div data-aos="fade-up" className="pt-6 sm:col-span-2 lg:col-span-1">
            {/* LOGO */}
            <div className="flex items-center gap-4">
                <img 
                  src="/bioplate/bioplate-footer-logo.png"
                  alt="Bioplate Logo"
                  className="h-16 w-auto"
                />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-[420px] text-base leading-[2] text-white/78">
              Bioplate designs and manufactures cranial closure and bone
              fixation systems for neurosurgery.
            </p>

            {/* SOCIAL */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold tracking-[-1px] text-white">
                Social Media
              </h4>

              <div className="mt-5 flex items-center gap-4">
                <button className="cursor-pointer flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white hover:text-[#006D53]">
                  <Linkedin size={20} strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden bg-white/20 lg:block" />

          {/* ================================================= */}
          {/* PRODUCTS */}
          {/* ================================================= */}

          <div data-aos="fade-up" data-aos-delay="100" className="pt-8">
            <h4 className="text-lg font-semibold tracking-[-1px] text-white">
              Products
            </h4>

            <ul className="mt-10 space-y-6">
              {products.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base text-white/82 transition-all duration-300 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================= */}
          {/* ABOUT */}
          {/* ================================================= */}

          <div data-aos="fade-up" data-aos-delay="200" className="pt-8">
            <h4 className="text-lg font-semibold tracking-[-1px] text-white">
              About BioPlate
            </h4>

            <ul className="mt-10 space-y-6">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base text-white/82 transition-all duration-300 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================= */}
          {/* CONTACT */}
          {/* ================================================= */}

          <div data-aos="fade-up" data-aos-delay="300" className="pt-8">
            <h4 className="text-lg font-semibold tracking-[-1px] text-white">
              Contact
            </h4>

            <div className="mt-10 space-y-8">
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={22}
                  strokeWidth={2.3}
                  className="mt-[2px] shrink-0 text-white"
                />

                <p className="text-base leading-[1.8] text-white/82">
                  570 S Melrose St., Placentia, CA 92870
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <Mail
                  size={22}
                  strokeWidth={2.3}
                  className="mt-[2px] shrink-0 text-white"
                />

                <p className="text-base leading-[1.8] text-white/82">
                  info@bioplate.com
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <Phone
                  size={22}
                  strokeWidth={2.3}
                  className="mt-[2px] shrink-0 text-white"
                />

                <p className="text-base leading-[1.8] text-white/82">
                  888-246-7528 (888-BIOPLATE)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM BAR */}
        {/* ================================================= */}

        <div className="flex flex-col items-center justify-between gap-6 pt-8 text-center lg:flex-row">
          <p className="text-[14px] text-white/70">
            Copyrights@2026 BioPlate.All Rights Reserved
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-[14px] text-white/70 transition-all duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-[14px] text-white/70 transition-all duration-300 hover:text-white"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}