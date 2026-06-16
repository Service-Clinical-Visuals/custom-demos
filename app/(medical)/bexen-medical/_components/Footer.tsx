import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#81CFF45C] pt-16 pb-6">
      <div className="custom-container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Link href="/bexen-medical" className="flex items-center">
                <img src="/medical/bexen-medical/logo-footer.png" alt="Bexen Medical" className="h-10 lg:h-18 object-contain" />
              </Link>
            </div>
            <p className="text-[16px] text-gray-500 leading-relaxed max-w-sm text-justify">
              Bexen Medical is a healthcare company with more than 44 years of experience, specializing in the manufacturing and commercialization of disposable medical supplies, regulatory and quality consulting for the healthcare sector, and the auditing, consulting, and management of biological sample preservation.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[19px] font-bold text-[#14387F] mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Product', 'Contact', 'Bexen Medical', 'Bexen Bioservices', 'Bexen Medical'].map((link, i) => (
                <li key={i}><Link href="#" className="text-[16px] text-gray-500 hover:text-[#0ea5e9] transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[19px] font-bold text-[#14387F] mb-6 font-heading">We commit</h4>
            <ul className="space-y-3 mb-8">
              <li><Link href="#" className="text-[16px] text-gray-500 hover:text-[#0ea5e9] transition-colors">Grants</Link></li>
              <li><Link href="#" className="text-[16px] text-gray-500 hover:text-[#0ea5e9] transition-colors">Work with us</Link></li>
            </ul>
            <div className="w-12 h-px bg-gray-300 mb-6"></div>
            <h4 className="text-[19px] font-bold text-[#14387F] mb-4 font-heading">Mondragon</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-[16px] text-gray-500 hover:text-[#0ea5e9] transition-colors">MONDRAGON Corporation</Link></li>
              <li><Link href="#" className="text-[16px] text-gray-500 hover:text-[#0ea5e9] transition-colors">MONDRAGON Health</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[19px] font-bold text-[#14387F] mb-6 font-heading">Policies & Legal</h4>
            <ul className="space-y-3">
              {['Legal Notice', 'Privacy Policy', 'Cookies Configuration', 'Quality Policy', 'Withdrawal Form', 'Internal Information System'].map((link, i) => (
                <li key={i}><Link href="#" className="text-[16px] text-gray-500 hover:text-[#0ea5e9] transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[19px] font-bold text-[#14387F] mb-6 font-heading">Newsletter</h4>
            <p className="text-[16px] text-gray-500 mb-4 leading-relaxed">Stay up to date on the latest news from Bexen.</p>
            <div className="flex border border-gray-200/50 rounded-[12px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] bg-white p-1">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent text-[16px] px-3 py-2 outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#14387F] hover:bg-[#0f2444] text-white w-10 h-10 rounded-[8px] transition-colors flex items-center justify-center shrink-0">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400  pt-6 text-center">
          <p className="text-[13px]! text-gray-500">
            © Copyright 2026 - <span className="underline cursor-pointer hover:text-[#0ea5e9] transition-colors">BEXEN MEDICAL</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
