import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary pt-20 pb-4 text-white">
      <div className="site-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-10">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-8">
              <img src="/activbase/logo.png" alt="Activbase Logo" className="w-[250px] brightness-0 invert" />
            </div>
            <p className="text-white/80 text-[16px]">
              Everyone Deserves to Rise Above Pain
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-bold text-[16px] mb-6">Quick Links</h4>
            <nav className="flex flex-col space-y-4 text-white/80 text-[16px]">
              <Link href="#" className="hover:text-white transition-colors">Home</Link>
              <Link href="#" className="hover:text-white transition-colors">About</Link>
              <Link href="#" className="hover:text-white transition-colors">Services</Link>
              <Link href="#" className="hover:text-white transition-colors">Treatments</Link>
              <Link href="#" className="hover:text-white transition-colors">Success Stories</Link>
              <Link href="#" className="hover:text-white transition-colors">Gallery</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-[16px] mb-6">Contact</h4>
            <div className="flex flex-col space-y-6 text-white/80 text-[16px]">
              <div>
                <p className="mb-1 font-medium">For Consultation</p>
                <p>7994512251</p>
              </div>
              <div>
                <p className="mb-1 font-medium">For Business Enquiries</p>
                <p>7994731225</p>
              </div>
              <div>
                <p>hari.k@activbase.org</p>
              </div>
              <div className="max-w-[250px] leading-relaxed">
                <p>Activbase, Nilampathinjamukkal Rajagiri Valey Road, Kakkanad Kochi, Kerala - 682039</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-[16px] mb-6">Opening Hours</h4>
            <div className="flex flex-col space-y-6 text-white/80 text-[16px]">
              <div>
                <p className="mb-1 font-medium">Consultation</p>
                <p>Mon to Sat 6:00 AM to 11:00 PM</p>
              </div>
              <div>
                <p className="mb-1 font-medium">Treatment</p>
                <p>Mon to Sat 6:00 AM to 11:00 PM</p>
              </div>
              <div>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-4 border-t border-white/20 text-center text-white text-[14px]">
          <p>Copyright ©2026 ActivBase Physiotherapy. All rights reserved | Designed by Blusteak</p>
        </div>
      </div>
    </footer>
  );
}
