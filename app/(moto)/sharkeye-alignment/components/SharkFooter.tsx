"use client";

import "aos/dist/aos.css";
import {
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const accountLinks = [
  "My Accounts",
  "Track your Order",
  "Payment Methods",
  "Address Book",
  "Shark School",
];

const companyLinks = [
  "About Us",
  "Terms and Conditions",
  "Sharkeye Bucks T&C",
  "Privacy Policy",
];

const supportLinks = [
  "Raise A Ticket",
  "Shipping Method",
  "Return Policy",
];

export default function SharkFooter() {

  return (
    <footer className="relative overflow-hidden bg-[#f5f5f5]">
      {/* TOP BRAND BAR */}
      <div className="w-full border-b border-black/5 bg-[#F5F5F5]">
        <div className="max-w-380 mx-auto py-14 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* LEFT LOGO */}
            <div
              data-aos="fade-right"
              className="flex items-center"
            >
              <div className="relative w-[230px] h-[72px] bg-white shadow-sm overflow-hidden border border-black/5">
                <img src="/moto/shark/shark-logo.png" alt="logo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* RIGHT SPONSOR */}
            <div
              data-aos="fade-left"
              className="flex items-center gap-8"
            >
              {/* TEXT */}
              <div className="text-right">
                <p className="text-[18px] font-semibold text-[#666]">
                  Official sponsor of
                </p>

                <h3 className="mt-1 text-[34px] leading-none tracking-[-1px] text-[#1f1f1f]">
                  World's 4th oldest football club
                </h3>
              </div>

              {/* BADGE */}
              <div className="w-[78px] h-[78px] rounded-full bg-[#1d1d1d] border-[4px] border-[#d6b95d] shadow-lg flex items-center justify-center">
                <img src="/moto/shark/shark-workshop.png" alt="logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative bg-[#181315] overflow-hidden">
        {/* BACKGROUND */}
       <div className="absolute inset-0 z-[1] bg-[#231f20df]"></div>
      {/* BACKGROUND */}
      <div className="absolute inset-0">
       <img src="/moto/shark/shark-products-bg.jpg" alt="bg" className="w-full h-full object-cover"/>
        </div>
        {/* CONTENT */}
        <div className="relative z-10 max-w-380 mx-auto py-16 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14">
            {/* NEWSLETTER */}
            <div data-aos="fade-up">
              <h3 className="text-2xl leading-none tracking-[-1px]  text-white">
                Subscribe to our Newsletter
              </h3>

              {/* INPUT */}
              <div className="mt-10">
                <input
                  type="email"
                  placeholder="Please enter your email"
                  className="w-full h-[56px] px-5 bg-white text-[#222] placeholder:text-[#999] outline-none border-none text-[15px] font-medium"
                />
              </div>

              {/* BUTTON */}
              <button className="relative mt-5 h-[56px] px-12 bg-[#f0df32] text-black font-black text-[15px] cursor-pointer tracking-wide hover:translate-x-1 transition-all duration-300">
                Subscribe

                {/* ANGLED EDGE */}
                <span className="absolute top-0 right-[-18px] border-t-[28px] border-b-[28px] border-l-[18px] border-t-[#f0df32] border-b-transparent border-l-[#f0df32]" />
              </button>

              {/* SOCIALS */}
              <div className="flex items-center gap-3 mt-6">
                {[Facebook, Twitter, Linkedin].map(
                  (Icon, index) => (
                    <button
                      key={index}
                      className="cursor-pointer w-[42px] h-[42px] bg-white flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon
                        size={20}
                        strokeWidth={2}
                        className="text-black"
                      />
                    </button>
                  )
                )}
              </div>
            </div>

            {/* MY ACCOUNTS */}
            <div
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <h3 className="text-2xl leading-none tracking-[-1px]  text-white">
                My Accounts
              </h3>

              <ul className="mt-10 space-y-5">
                {accountLinks.map((link, index) => (
                  <li
                    key={index}
                    className="text-[17px] font-medium text-[#d1d1d1] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <h3 className="text-2xl leading-none tracking-[-1px] text-white">
                Company
              </h3>

              <ul className="mt-10 space-y-5">
                {companyLinks.map((link, index) => (
                  <li
                    key={index}
                    className="text-[17px] font-medium text-[#d1d1d1] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT */}
            <div
              data-aos="fade-up"
              data-aos-delay="360"
            >
              <h3 className="text-2xl leading-none tracking-[-1px] text-white">
                Product Support & Warranty
              </h3>

              <ul className="mt-10 space-y-5">
                {supportLinks.map((link, index) => (
                  <li
                    key={index}
                    className="text-[17px] font-medium text-[#d1d1d1] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full border-t border-white/5 bg-[#f5f5f5]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 py-5 text-center">
          <p className="text-[14px] font-medium text-[#5f5f5f]">
            © SharkEye Wheel Aligners UK Ltd 2024. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* CUSTOM SHAPES */}
      <style jsx>{`
        .clip-left {
          clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
        }

        .clip-right {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </footer>
  );
}