import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-8 bg-[#f8f9fa] mt-auto">
      <div className="container mx-auto px-4">
        <div className="bg-[#f8f9fa] rounded-[40px] pt-12 pb-4">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Column 1: Logo & Text */}
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left" data-aos="fade-up" data-aos-delay="0">
              <div className="flex items-center gap-3 overflow-hidden">
                <img src="/absolute-alignment/logo.png" className="w-[180px] md:w-[200px]" alt="Absolute Alignment" />
              </div>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                This is a trade demonstration site only, we do not offer wheel alignment services at this address. Please click HERE to find your local Absolute Alignment Approved centre.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-primary text-[20px] font-bold uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <Link href="#" className="text-black font-bold text-[16px] hover:text-primary transition-colors">Home</Link>
                <Link href="#" className="text-black font-bold text-[16px] hover:text-primary transition-colors">Motorsport</Link>
                <Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">Wheel Aligners</Link>
                <Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">Extras</Link>
                <Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">OEM Graphics</Link>
                <Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">About</Link>
                <Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">ADAS</Link>
                <Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">Testimonials</Link>
                <Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">2-Post Alignment</Link>
                <Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>

            {/* Column 3: Company */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-primary text-[20px] font-bold uppercase tracking-wider mb-6 border-b border-gray-200 pb-2 border-transparent">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                <li><Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">Privacy policy</Link></li>
                <li><Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">Site Map</Link></li>
                <li><Link href="#" className="text-gray-500 text-[16px] hover:text-primary transition-colors">Term & Conditions</Link></li>
              </ul>
            </div>

            {/* Column 4: Absolute Alignment Info */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-primary text-[20px] font-bold uppercase tracking-wider mb-6 border-b border-gray-200 pb-2 border-transparent">
                Contact Info
              </h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <div className="text-primary shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-[16px] leading-relaxed">
                    Unit 3 Beechnut Ind Est Beechnut Road<br />Aldershot GU12 4JA
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-primary shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-[16px]">01252 549340</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-200 pt-4 text-center">
            <p className="text-gray-500 text-xs">
              © 2026 Absolute Alignment is a limited liability company registered in England & Wales. Company Number 0734314
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
