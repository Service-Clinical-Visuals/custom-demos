"use client";

import {
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  ArrowUpRight,
} from "lucide-react";

export default function JlmFooter() {
  const links = [
    "Home",
    "Shop",
    "Problem Solver",
    "World of JLM",
    "Store Locator", 
  ];

  return (
    <footer className="relative border-t border-white/60">

      <div
        className="
          absolute inset-0
          bg-cover bg-center
          opacity-50
        "
        style={{
          backgroundImage:
            "url('/moto/jlm/jlm-shop-bg.png')",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12">
        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-[1.8fr_1fr_1fr_1.4fr]
          "
        >
          {/* BRAND */}
          <div
            data-aos="fade-up"
            className=""
          >
            <img
              src="/jlm/jlm-icon.png"
              alt="JLM"
              className="w-[110px]"
            />

            <p
              className="
                mt-5
                text-[16px]
                leading-6
                text-white/70
              "
            >
              JLM Lubricants is the trusted choice for
              professional motor mechanics, car
              technicians and automotive enthusiasts
              across the globe.
            </p>
          </div>

          {/* LINKS */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                      text-[16px]
                      text-white/80
                      transition-colors
                      hover:text-[#F4B400]
                    "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[#F4B400]"
                />

                <span
                  className="
                    text-[16px]
                    text-white/80
                  "
                >
                  +31(0)20 2014995
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#F4B400]"
                />

                <span
                  className="
                    text-[16px]
                    text-white/80
                  "
                >
                  info@jlmlubricants.com
                </span>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Get the Latest News
            </h3>

            <div className="mt-5 flex">
              <input
                type="email"
                placeholder="Please enter email"
                className="
                  h-[38px]
                  w-full
                  px-3
                  text-base
                  outline-none 
                  bg-white/10
                "
              />

              <button
                className="
                  cursor-pointer
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  bg-[#F4B400]
                "
              >
                <ArrowUpRight size={20} className="text-white" />
              </button>
            </div>

            <div className="mt-6">
              <h4
                className="
                  text-base
                  font-medium
                  text-white
                "
              >
                Social
              </h4>

              <div className="mt-3 flex gap-3">
                <a
                  href="#"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F4B400]
                    text-white
                  "
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="#"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F4B400]
                    text-white
                  "
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="#"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F4B400]
                    text-white
                  "
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}