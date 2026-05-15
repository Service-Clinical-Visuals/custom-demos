"use client";

import { useEffect } from "react";
import {
  Phone,
  Printer,
  Mail,
  Send,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const quickLinks = [
  "Home",
  "Products",
  "About Us",
  "Contact Us",
];

const contactInfo = [
  {
    icon: Phone,
    value: "(317) 246–5505",
  },
  {
    icon: Phone,
    value: "(317) 900–4093",
  },
  {
    icon: Printer,
    value: "(317) 246–5501",
  },
  {
    icon: Mail,
    value: "info@pulmodyne.com",
  },
];

export default function PulmoFooter() {

  return (
    <footer className="relative overflow-hidden bg-[#F5F5F5]">
      {/* ================================================= */}
      {/* BACKGROUND DEPTH */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_40%)]" />

      {/* ================================================= */}
      {/* MAIN FOOTER */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pt-12 sm:px-8 sm:pt-14 lg:px-16">
        {/* ================================================= */}
        {/* ROW 1 — LOGO + EMAIL */}
        {/* ================================================= */}

        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* LOGO */}
          <div data-aos="fade-up">
            <img src="/pulmo/pulmo-logo.png" alt="Pulmo Logo" className="w-60" />
          </div>

          {/* NEWSLETTER */}
          <div
            data-aos="fade-left"
            className="flex w-full overflow-hidden rounded-[8px] bg-[#0068A8] shadow-[0_14px_28px_rgba(0,104,168,0.12)] lg:max-w-[400px]"
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="h-[54px] flex-1 bg-transparent px-6 text-[14px] font-medium text-white placeholder:text-white/70 focus:outline-none"
            />
            <button className="cursor-pointer flex h-[54px] w-[54px] items-center justify-center bg-white text-[#0068A8] transition-all duration-300 hover:bg-[#F3F3F3]">
              <Send size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div className="my-12 border-t border-[#E0E0E0]" />

        {/* ================================================= */}
        {/* ROW 2 — DESCRIPTION + NAV LINKS */}
        {/* ================================================= */}

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1.2fr]">
          {/* DESCRIPTION */}
          <div data-aos="fade-up" data-aos-delay="120">
            <p className="max-w-[720px] text-[16px] leading-[2.05] text-[#555555]">
              Pulmodyne, Inc. Is An ISO Certified Manufacturer Of Medical
              Devices For The Acute Care, Emergency/Prehospital, And Homecare
              Markets. Located In Indianapolis, Indiana, Pulmodyne Was Founded
              In 1985. They Develop And Produce A Wide Range Of Proprietary
              Products For Direct Distribution Worldwide. The Mission At
              Pulmodyne Is To Build A World Class Organization Of The Highest
              Standards To Meet The Needs Of Customers.
            </p>
          </div>

          {/* NAV LINKS GRID */}
          <div className="grid gap-10 sm:grid-cols-3">
            {/* ================================================= */}
            {/* PROUD OF */}
            {/* ================================================= */}

            <div data-aos="fade-up" data-aos-delay="120">
              <h3 className="text-xl font-semibold tracking-[-1px] text-[#0068A8]">
                Proud Of
              </h3>
              <div className="mt-6 flex h-[130px] w-[110px] items-center justify-center rounded-[4px] border border-[#E4E4E4] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
                <img src="/pulmo/pulmo-footer.jpg" alt="Proud Of" />
              </div>
            </div>

            {/* ================================================= */}
            {/* QUICK LINKS */}
            {/* ================================================= */}

            <div data-aos="fade-up" data-aos-delay="220">
              <h3 className="text-xl font-semibold tracking-[-1px] text-[#0068A8]">
                Quick Links
              </h3>
              <div className="mt-6 space-y-5">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className="cursor-pointer block text-[16px] font-medium text-[#555555] transition-all duration-300 hover:translate-x-1 hover:text-[#0068A8]"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* ================================================= */}
            {/* CONTACT INFO */}
            {/* ================================================= */}

            <div data-aos="fade-up" data-aos-delay="320">
              <h3 className="text-xl font-semibold tracking-[-1px] text-[#0068A8]">
                Contact Info
              </h3>
              <div className="mt-6 space-y-5">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="cursor-pointer flex items-center gap-4">
                      <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#DDEAF3] bg-white text-[#0068A8] shadow-[0_4px_10px_rgba(0,104,168,0.05)]">
                        <Icon size={16} strokeWidth={2.2} />
                      </div>
                      <p className="text-[16px] font-medium text-[#555555]">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM BAR */}
      {/* ================================================= */}

      <div className="relative z-10 mt-16 bg-[#0068A8]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          {/* COPYRIGHT */}
          <p className="text-base font-medium text-white/90">
            Copyrights – © 2022 Pulmodyne, Inc
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            {[
              Linkedin,
              Facebook,
              Twitter,
            ].map((Icon, index) => (
              <button
                key={index}
                className="cursor-pointer flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0068A8]"
              >
                <Icon size={16} strokeWidth={2.3} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}