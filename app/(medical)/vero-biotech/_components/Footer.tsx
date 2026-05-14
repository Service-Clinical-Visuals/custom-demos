import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f2f4f4] pt-16 lg:pt-20 pb-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 mb-16 lg:mb-20 justify-between">

          {/* Column 1: Logo and About */}
          <div className="w-full lg:max-w-[340px]">
            <div className="mb-6">
              <img src="/vero-biotech/logo.png" alt="Vero Logo" className="w-32 lg:w-40" />
            </div>
            <p className="text-[#666] text-[15px] lg:text-[16px] lg:text-justify leading-relaxed mb-6">
              Vero biotech is an emerging biotechnology company focused on the design, development, and commercialization of next generation inhaled nitric oxide (NO) delivery systems to address unmet medical needs of patients with cardiopulmonary conditions.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="w-8 h-8 rounded-full bg-[#122b34] flex items-center justify-center text-white hover:bg-[#122b34]/80 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-[#122b34] flex items-center justify-center text-white hover:bg-[#122b34]/80 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-[#122b34] flex items-center justify-center text-white hover:bg-[#122b34]/80 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 lg:gap-10">
            {/* Column 2: Quick Links */}
            <div className="w-[150px]">
              <h4 className="text-[#122b34] font-bold mb-6 text-[16px] lg:text-[18px]">Quick Links</h4>
              <ul className="space-y-4 text-[14px] lg:text-[16px] text-[#666]">
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Products</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Support</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">News & Events</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="w-full sm:w-[220px]">
              <h4 className="text-[#122b34] font-bold mb-6 text-[16px] lg:text-[18px]">Contact Info</h4>
              <ul className="space-y-4 text-[14px] lg:text-[16px] text-[#666] leading-relaxed">
                <li>387 Nerem Street NW, Suite 125, Atlanta, Georgia 30313</li>
                <li><a href="mailto:contactus@vero-biotech.com" className="hover:text-[#122b34]">contactus@vero-biotech.com</a></li>
                <li><a href="tel:877-337-4118" className="hover:text-[#122b34]">877-337-4118</a></li>
                <li><a href="mailto:support@vero-biotech.com" className="hover:text-[#122b34]">support@vero-biotech.com</a></li>
              </ul>
            </div>

            {/* Column 4: Legal Links */}
            <div className="w-[180px]">
              <h4 className="text-[#122b34] font-bold mb-6 text-[16px] lg:text-[18px]">Legal Links</h4>
              <ul className="space-y-4 text-[14px] lg:text-[16px] text-[#666]">
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Terms of Use</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Cookie Settings</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-[#122b34] transition-colors">Prescribing Information</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 5: Medical Inquiries */}
          <div className="w-full lg:max-w-[280px]">
            <h4 className="text-[#122b34] font-bold mb-4 text-[16px] lg:text-[18px]">Medical Inquiries</h4>
            <p className="text-[#666] text-[15px] lg:text-[16px] mb-5 leading-relaxed">
              For medical inquiries, click on the Request Form below.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 bg-[#122b34] text-white px-6 py-2.5 rounded-lg text-[14px] lg:text-[16px] font-medium hover:bg-[#122b34]/90 transition-colors mb-8">
              Request Form <ArrowRight className="w-3 h-3 -rotate-45" />
            </Link>

            <div className="">
              <img src="/vero-biotech/home/footer.png" alt="Accreditations" className="w-[170px] lg:w-[190px]" />
            </div>
          </div>

        </div>

        <div className="text-center border-t border-[#d1d5db] pt-8 text-[11px] lg:text-[12px] text-[#777] leading-relaxed">
          © Copyright 2026 – VERO Biotech. All rights reserved. VERO Biotech and GENOSYL are registered trademarks of VERO Biotech Inc.
        </div>
      </div>
    </footer>
  );
}
