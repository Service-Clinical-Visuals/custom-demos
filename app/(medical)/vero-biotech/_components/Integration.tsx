import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Integration() {
  return (
    <section className="py-16 lg:py-28 bg-[#e6f6fd]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div data-aos="fade-right" className="order-2 lg:order-1">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/50 mb-10 shadow-lg border border-white/40">
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover " />
            </div>

            <h2 className="font-semibold text-[#111] mb-6 leading-tight">
              Seamless Integration Wherever iNO is Needed.
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              The only iNO device with approval for use in all areas of care, without requiring device changes.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 bg-[#122b34] text-white px-6 py-3 rounded-sm text-[15px] lg:text-[16px] font-medium hover:bg-primary/90 transition-colors rounded-tl-2xl rounded-br-2xl">
              Request a Demo <ArrowRight className="w-3 h-3 -rotate-45" />
            </Link>
          </div>

          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="bg-[#e6f6fd] border-2 border-[#122b34] rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-12 relative">
              <h3 className="text-lg lg:text-xl font-medium text-[#417586] mb-4 border-b border-[#417586]/30 inline-block pb-1">ICU</h3>
              <h2 className="text-xl lg:text-2xl font-semibold text-[#111] mb-8 lg:mb-10 leading-snug">
                GENOSYL® DS enhances workflow and streamlines operations at every nitric oxide touchpoint.
              </h2>

              <ul className="space-y-5 lg:space-y-6">
                {[
                  { title: "Quick Simplified Setup", desc: "Simplified hassle-free setup and dose initiation in less than 2 minutes." },
                  { title: "Precise Dose Delivery", desc: "Smart Feedback System™ ensures the set nitric oxide dose is accurately maintained, based on a sampled value, regardless of changes in flow." },
                  { title: "Single-Use, Disposable Cassette and Accessories", desc: "Storable at bedside, negates tank management, and eliminates reprocessing." },
                  { title: "Compatibility", desc: "Flexible use with multiple respiratory devices across areas of care." },
                  { title: "Seamless Manual Bagging", desc: "Transition with the push of two buttons and no complicated calculations." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#122b34] flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-[#111] font-semibold text-[16px] lg:text-[16px] mb-1 leading-tight">{item.title}</h4>
                      <p className="text-muted text-[13px] lg:text-[16px] leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
