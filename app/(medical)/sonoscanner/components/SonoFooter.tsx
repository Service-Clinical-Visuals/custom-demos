"use client";

import {
  FiArrowRight,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaVimeoV,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "Products",
  "Specialties",
  "Testimonials",
  "Latest News & Blog",
  "Ultrasound Workshops",
];

const socialIcons = [
  {
    icon: <FaVimeoV />,
  },
  {
    icon: <FaLinkedinIn />,
  },
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <FaTwitter />,
  },
];

export default function SonoFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#14387F] pt-20 pb-5">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_45%)]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-11">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.2fr_0.6fr_0.6fr_0.9fr] gap-14">
          {/* LOGO + DESCRIPTION */}
          <div data-aos="fade-up">
            {/* LOGO */}
            <div className="flex items-center gap-4 ">
              <img src="/sono-scanner/sono-footer.png" alt="logo" width={'225px'}/>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-[470px] text-white/85 text-[16px] leading-[1.9]">
              Sonoscan Healthcare brings over three decades of
              experience in delivering advanced diagnostic and
              multispecialty healthcare services with a commitment
              to quality patient care.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div data-aos="fade-up" data-aos-delay="120">
            <h3 className="text-white text-[22px] font-semibold tracking-[-0.5px]">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/85 hover:text-white transition-all duration-300 text-[16px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY SOCIAL */}
          <div data-aos="fade-up" data-aos-delay="220">
            <h3 className="text-white text-[22px] font-semibold tracking-[-0.5px]">
              Company
            </h3>

            <div className="mt-8 flex items-center gap-4">
              {socialIcons.map((item, index) => (
                <button
                  key={index}
                  className="cursor-pointer w-[44px] h-[44px] rounded-full bg-[#1f5ebf] hover:bg-white hover:text-[#14387F] transition-all duration-300 flex items-center justify-center text-white text-[16px] shadow-lg"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div data-aos="fade-up" data-aos-delay="320">
            <h3 className="text-white text-[22px] font-semibold tracking-[-0.5px]">
              Newsletter
            </h3>

            <p className="mt-7 text-white/85 text-[16px] leading-[1.9] max-w-[320px]">
              Stay Update with our Latest Innovations and News
            </p>

            {/* INPUT */}
            <div className="mt-8 relative">
              <input
                type="email"
                placeholder="Enter Your E-Mail"
                className="w-full h-[62px] rounded-[16px] border border-white/30 bg-transparent px-6 pr-16 text-white placeholder:text-white/60 outline-none focus:border-white transition-all duration-300"
              />

              <button className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-[#1f5ebf] hover:bg-white hover:text-[#14387F] transition-all duration-300 flex items-center justify-center text-white shadow-lg">
                <FiArrowRight className="text-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/20 mt-15 mb-5" />

        {/* COPYRIGHT */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <p className="text-white/70 text-[16px] leading-relaxed">
            © 2025 - Sonoscanner - Mentions Légales - CGV - Plan de site
          </p>
        </div>
      </div>
    </footer>
  );
}