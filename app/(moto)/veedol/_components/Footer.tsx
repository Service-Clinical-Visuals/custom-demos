"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button"
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const quickLinks = ["Home", "About Us", "Products", "News", "Contact"];

const socialLinks = [
  { icon: <Facebook size={19} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={19} />, href: "#", label: "Instagram" },
  { icon: <Youtube size={19} />, href: "#", label: "YouTube" },
  { icon: <Linkedin size={19} />, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className=" w-full bg-dark text-white" id="footer">

      {/* ── Main footer body ── */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Col 1: Logo + About + Socials */}
            <div className="col-span-1 lg:col-span-5 space-y-5" data-aos="fade-up">
              {/* Logo */}
              <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                <Link href="/veedol" aria-label="Veedol Home">
                  <img
                    src="/moto/veedol-moto/logo 1.png"
                    alt="Veedol Logo"
                    className="h-10 w-auto xl:h-15  object-contain"
                  />
                </Link>
              </div>

              {/* Short description */}
              <Typography as="p" variant="h6" weight="normal" color="white" className=" mt-3 font-dm md:mt-5 max-w-xl leading-relaxed">
                The Veedol oil brand has a long history of excellence since its inception
                in 1913. Millions of motorists around the world have at some point had the
                opportunity to use Veedol lubricants for their cars, tractors, trucks, motorcycles
              </Typography>

              {/* Social icons row */}
              <div className="flex items-center gap-2 pt-1">
                {socialLinks.map((s) => (

                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="relative w-8 h-8 xl:w-11 xl:h-11 flex items-center justify-center group"
                  >
                    <span className="absolute inset-0 bg-primary group-hover:bg-primary-hover transition-colors duration-200 transform -skew-x-[15deg]" />
                    <span className="relative z-10 text-white">{s.icon}</span>
                  </a>

                ))}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className=" col-span-1 lg:col-span-2 space-y-5" data-aos="fade-up" data-aos-delay="100">
              <Typography as="h4" variant="h6" color="white" weight="bold" className="uppercase tracking-wider">
                Quick Links
              </Typography>
              <nav>
                <ul className="space-y-3">
                  {quickLinks.map((link) => {
                    const id = link === "Home" ? "home" : link.toLowerCase().replace(" ", "-");
                    return (
                      <li key={link}>
                        <a
                          href={`#${id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(id);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                            else if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="text-white text-md font-dm hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Col 3: Contact */}
            <div className="space-y-5 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
              <Typography as="h4" variant="h6" color="white" weight="bold" className="uppercase tracking-wider">
                Contact
              </Typography>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-white/70" />
                  <span className="text-white font-dm text-md leading-relaxed">
                    Unit 29, Goldthorpe Industrial Estate<br />
                    Rotherham S63 9BL<br />
                    United Kingdom
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 flex-shrink-0 text-white/70" />
                  <a
                    href="mailto:info@veedol.co.uk"
                    className="text-white font-dm  text-md hover:text-white transition-colors"
                  >
                    info@veedol.co.uk
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 flex-shrink-0 text-white/70" />
                  <a
                    href="tel:+441709890099"
                    className="text-white font-dm  text-md hover:text-white transition-colors"
                  >
                    +44 (0)1709 890099
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Newsletter */}
            <div className="space-y-5 lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
              <Typography as="h4" variant="h6" color="white" weight="bold" className="uppercase tracking-wider">
                Subscribe for Newsletter
              </Typography>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  id="footer-newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Please enter your email"
                  required
                  className="w-full font-bigshoulder bg-white text-white placeholder-gray-400 text-md px-4 py-3 outline-none focus:border-primary transition-colors duration-200"
                />
                <div className="pt-1">
                  <Button text="Subscribe" variant="primary" />
                </div>
              </form>
            </div>

          </div>
        </Container>
      </div >

      {/* ── Copyright bar ── */}
      < div className="border-t border-white/40 bg-white  py-4" >
        <Container>
          <Typography as="p" variant="h6" className="text-gray-600 font-dm " align="center" >
            &copy; Veedol Corporation Limited 2026 – All rights reserved
          </Typography>
        </Container>
      </div >

    </footer >
  );
}
