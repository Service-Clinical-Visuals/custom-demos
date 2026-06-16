
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer';

const navLinks = [
  "Home",
  "About",
  "Sleep",
  "Oxygen",
  "Ventilation",
  "Resources",
];

export default function CatheHero() {
  return (
    <div>
              {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative px-8 pb-10 pt-[96px] lg:px-8 bg-white">
        <div className="relative mx-auto aspect-[4/3] md:aspect-video max-h-[calc(100vh-136px)] overflow-hidden rounded-[26px] bg-black shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
          {/* ================================================= */}
          {/* VIDEO / IMAGE BACKGROUND */}
          {/* ================================================= */}

          <div className="absolute inset-0">
            {/* FUTURE VIDEO */}

            <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

          </div>

          {/* ================================================= */ }
          {/* HERO CONTENT */}
          {/* ================================================= */}

          <div className="relative z-10 flex h-full max-w-[1600px] mx-auto items-end cathegenix-root">
            <div className="w-full px-6 sm:px-8 lg:px-14 pb-8 sm:pb-16 md:pb-20 lg:pb-24">
              <div className="max-w-[620px]">
                {/* HEADING */}
                <div data-aos="fade-up">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-3px] text-white">
                    Investing in Science
                    <br />
                    Innovating For Patients
                  </h2>
                </div>

                {/* CTA */}
                 <div data-aos="fade-up" data-aos-delay="200" className="mt-6 sm:mt-10">
                    <button className="cursor-pointer relative group flex h-[46px] items-center bg-white overflow-hidden">
                    <span className="px-6 text-base font-semibold text-[#05429B] transition-all duration-300 group-hover:pr-12">
                        Explore Products
                    </span>

                    <span className="absolute right-0 flex h-full items-center justify-center text-white transition-all duration-300 translate-x-full group-hover:-translate-x-1">
                        <div className="bg-[#05429B] p-2.5">
                        <ArrowRight size={18} strokeWidth={2.8} />
                        </div>
                    </span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
