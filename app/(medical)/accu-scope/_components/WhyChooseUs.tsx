import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#00609C] to-[#00AF9A]">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 2xl:gap-20 items-center">

          <img src="/accu-scope/WorkWithUs.png" alt=""
            width={700}
            height={400}
            className="rounded-2xl w-full"></img>

          <div className="text-white" data-aos="fade-left">
            <p className="text-[#FFFFFF]! font-semibold text-[16px] tracking-wide">
              Why Choose Us
            </p>
            <h2 className="text-4xl text-[#FFFFFF]! font-bold mt-3">
              Work with ACCU-SCOPE
            </h2>

            <p className="mt-4 text-[#FFFFFF]! leading-8 opacity-90">
              Why choose ACCU-SCOPE? We blend precision, performance and outstanding value to deliver optical instrumentation and microscopy innovations that help advance the work our customers perform everyday.
            </p>
            <p className="mt-4 text-[#FFFFFF]! leading-8 opacity-90">
              With a strong commitment to innovation, quality control, and user-focused design, ACCU-SCOPE empowers professionals to work more efficiently and achieve better outcomes in research, education, and clinical environments.
            </p>

            <button className="mt-6 bg-[#00609C] text-[#FFFFFF]! px-6 py-3 rounded-full inline-flex items-center gap-2">
              Talk To An Expert
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}