import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0068A7] to-[#00B5A6]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/why-us.jpg"
            alt=""
            width={700}
            height={500}
            className="rounded-2xl"
          />

          <div className="text-white">
            <h2 className="text-4xl font-bold">
              Work with ACCU-SCOPE
            </h2>

            <p className="mt-6 leading-8 opacity-90">
              Trusted microscopy solutions backed by
              decades of innovation and service.
            </p>

            <button className="mt-8 bg-white text-[#0068A7] px-6 py-3 rounded-full inline-flex items-center gap-2">
              Talk To An Expert
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}