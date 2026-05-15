import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Mission() {
  return (
    <section className="py-16 lg:py-28 bg-[#122b34] relative overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 right-0 bg-[url('/vero-biotech/home/bg.png')] bg-cover bg-center opacity-35" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div data-aos="fade-right">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img alt="GENOSYL Delivery System" className="object-cover w-full h-full" src="/vero-biotech/home/mission.png" />
            </div>
          </div>

          <div data-aos="fade-left" className="lg:py-0">
            <h2 className="font-semibold text-white mb-6 leading-tight">
              Our mission is to advance patient care with innovative solutions and unparalleled customer service.
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-gray-200 leading-relaxed">
                We are committed to improving the lives of patients by developing innovative technologies for inhaled nitric oxide delivery in the acute care hospital setting and beyond, wherever nitric oxide treatment is needed.
              </p>
              <p className="text-gray-200 leading-relaxed">
                We strive to exceed customer expectation in terms of safety, efficiency, and value by focusing on the science, development, and commercialization of our innovations.
              </p>
            </div>

            <Link href="#" className="inline-flex items-center gap-2 bg-white text-[#111] px-6 py-3 rounded-sm text-[15px] lg:text-[17px] font-medium hover:bg-gray-100 transition-colors rounded-tl-2xl rounded-br-2xl">
              Learn About Our Mission <ArrowRight className="w-3 h-3 -rotate-45" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
