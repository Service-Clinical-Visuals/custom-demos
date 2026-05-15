import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer'
import { ArrowUpRight, CornerUpRight } from 'lucide-react'

export default function BioplateHero() {
  return (
    <div>

              {/* ================= HERO ================= */}
      <section className="relative h-screen min-h-[760px] w-full overflow-hidden">
        {/* VIDEO BG FOR FUTURE */}
        {/* Replace with <video> later */}
        <div className="absolute inset-0">
               <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
         

          {/* SUBTLE RADIAL DEPTH */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.85)_70%)]" /> */}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto flex w-full max-w-[1600px] items-center px-10">
            <div className="max-w-[480px] pt-96">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="space-y-5"
              >
                <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-2px] text-white">
                  Advance Cranial Surgery
                </h2>

                <p className="text-lg leading-[1.8] text-white/72">
                  Bioplate is passionate about helping patients who need
                  neurosurgery
                </p>
              </div>

              {/* BUTTON */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mt-6"
              >
                <button className="cursor-pointer group flex h-[55px] items-center gap-6 rounded-[12px] bg-white px-8 text-base font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5f5f5]">
                  Explore Products

                  <span className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                    <CornerUpRight size={18} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SHADOW */}
        <div className="absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>
      
    </div>
  )
}
