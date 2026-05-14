import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] lg:h-screen bg-black overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <DynamicVideoPlayer type="banner" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10 text-white">
        <div className="max-w-2xl mt-[15%] lg:mt-[25%]" data-aos="fade-up">
          <h1 className="font-semibold leading-tight mb-6 lg:mb-8">
            Transforming The Delivery of Inhaled<br className="hidden sm:block" />Nitric Oxide
          </h1>
          <Link href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-sm text-[14px] lg:text-[16px] font-medium hover:bg-gray-100 transition-colors rounded-tl-2xl rounded-br-2xl">
            Request Information <ArrowRight className="w-3 h-3 -rotate-45" />
          </Link>
        </div>
      </div>
    </section>
  );
}
