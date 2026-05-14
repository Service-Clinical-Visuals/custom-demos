import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-16 lg:py-28 bg-[#fafafa]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div data-aos="fade-right">
            <h2 className="font-semibold text-[#111] mb-6 leading-tight">
              Patient Care Is Hard Enough Your iNO Should Be Easy
            </h2>
            <p className="text-muted mb-8 lg:mb-10 leading-relaxed">
              With quick setup and intuitive functionality, the tankless GENOSYL® Delivery System (DS) provides precision dosing of inhaled nitric oxide (iNO) utilizing Cassettes.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-10">
              {[
                {
                  title: "PRECISE",
                  desc: "The set dose is accurately maintained, based on a sampled value, regardless of changes in flow."
                },
                {
                  title: "EFFICIENT",
                  desc: "Hassle-free setup and dose initiation of iNO in less than 2 minutes."
                },
                {
                  title: "COMPATIBLE",
                  desc: "Flexible use with multiple respiratory devices and across areas of care."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 shadow-sm rounded-3xl p-6 lg:p-8 hover:shadow-md transition-shadow relative overflow-hidden group border-r-4 border-r-[#417586]">
                  <h4 className="text-[#111] font-bold text-lg lg:text-xl mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-muted text-[14px] lg:text-[16px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link href="#" className="inline-flex items-center gap-2 bg-[#122b34] text-white px-8 py-3.5 rounded-sm text-[15px] lg:text-[16px] font-medium hover:bg-primary/90 transition-colors rounded-tl-2xl rounded-br-2xl">
              Get Support <ArrowRight className="w-3 h-3 -rotate-45" />
            </Link>
          </div>

          <div data-aos="fade-left" className="flex justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-md aspect-[3/4] bg-[#f0f0f0] rounded-2xl flex items-center justify-center p-6 lg:p-8">
              {/* Device Image Placeholder */}
              <img alt="GENOSYL Delivery System" className="object-contain w-full h-full" src="/vero-biotech/home/stand.png" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
