import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FluorescenceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/fluorescence.jpg"
            alt=""
            width={700}
            height={500}
            className="rounded-2xl"
          />

          <div>
            <span className="text-[#00B5A6] uppercase text-sm font-semibold">
              Advanced Technology
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Fluorescence Illuminators
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              High-quality fluorescence imaging solutions
              designed for research and clinical applications.
            </p>

            <button className="mt-8 bg-[#0068A7] text-white px-6 py-3 rounded-full inline-flex items-center gap-2">
              Explore
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}