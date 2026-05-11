import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="relative w-full bg-secondary overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover z-0" />
      </div>

      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none"></div> */}

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-0 relative z-10 h-screen flex items-center">
        <div
          className="max-w-2xl text-white text-center lg:text-left mx-auto lg:mx-0 lg:mt-[15%]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading uppercase leading-tight mb-6 tracking-wide">
            We are the experts in <span className="text-primary lg:text-white">wheel alignment</span> equipment
          </h1>

          <p className="text-base md:text-[16px] mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90">
            4-wheel alignment is a FAST way to EXTRA profits. Over 40 per cent of cars on the road have suspension problems - take advantage of this great income stream today.
          </p>

          <Link
            href="#"
            className="inline-block bg-primary lg:bg-transparent border-2 border-primary lg:border-white text-white hover:bg-white hover:text-secondary font-bold uppercase tracking-wider py-4 px-8 rounded-tl-2xl rounded-br-2xl transition-all text-xs shadow-xl lg:shadow-none"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
