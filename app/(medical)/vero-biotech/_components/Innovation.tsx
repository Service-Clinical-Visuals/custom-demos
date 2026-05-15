import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Innovation() {
  return (
    <section className="py-16 lg:py-32 bg-[#0e2229] relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          <div data-aos="fade-right">
            <h2 className="font-semibold text-white mb-6 leading-tight">
              Innovation in the Delivery of Inhaled<br className="hidden lg:block" />Nitric Oxide
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              VERO Biotech is a trailblazer in the life sciences sector, focusing on enhancing patient outcomes through cutting-edge technologies. Our flagship product, the GENOSYL® Delivery System (DS), epitomizes our commitment to innovation.
            </p>
            <ul className="space-y-4 mb-10">
              {['Simplified hassle-free setup and dose initiation in less than 2 minutes.',
                'Smart Feedback System™ ensures the set nitric oxide dose is accurately maintained',
                'Flexible use with multiple respiratory devices across areas of care.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#0e2229]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-[15px] lg:text-[17px]">{item}</span>
                  </li>
                ))}
            </ul>
            <Link href="#" className="inline-flex items-center gap-2 bg-white text-[#111] px-6 py-3 rounded-sm text-[15px] lg:text-[17px] font-medium hover:bg-gray-100 transition-colors rounded-tl-2xl rounded-br-2xl">
              Explore Features <ArrowRight className="w-3 h-3 -rotate-45" />
            </Link>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden aspect-video bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10" data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#386b7b] rounded-3xl lg:rounded-full p-8 lg:px-18 lg:py-10 text-center relative overflow-hidden shadow-2xl" data-aos="fade-up">
          <h3 className="text-xl lg:text-2xl font-medium text-white mb-8 lg:mb-10 max-w-3xl mx-auto">
            The power of inhaled nitric oxide in a pocket-sized GENOSYL® DS Cassette.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/30 text-left mx-auto border-t border-t-white/30 pt-8">
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:pr-8">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shrink-0 mt-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-white text-[14px] lg:text-[17px] leading-relaxed">Patented Technology Generates Inhaled Nitric Oxide On Demand While Eliminating The Burden Of Tanks.</p>
            </div>
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-8">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shrink-0 mt-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-white text-[14px] lg:text-[17px] leading-relaxed">Automatic Cassette Transition Ensures Continuous, Uninterrupted Dosing, And Minimal Device Management Time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
