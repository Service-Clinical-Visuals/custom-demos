import DynamicVideoPlayer from '@/app/_components/DynamicVideoPlayer'

export default function AirHero() {
  return (
    <div>
              {/* =========================================
          HERO SECTION
      ========================================== */}

      <section className="relative h-screen min-h-[780px] w-full">
        {/* VIDEO / IMAGE BACKGROUND */}
        <div className="absolute inset-0">
          <DynamicVideoPlayer type="banner" className="h-full w-full object-cover" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-end px-6 pb-20 md:px-10 max-w-[1600px] mx-auto">
          <div className="max-w-[650px]">
            {/* LABEL */}
            <div
              data-aos="fade-right"
              className="mb-8 inline-flex items-center overflow-hidden"
            >
              <div className="bg-[#4F67A8]/95 px-5 py-[10px] text-[16px] font-semibold tracking-wide text-white">
                Air Engineering Group
              </div>

            </div>

            {/* HEADING */}
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="max-w-[640px] text-4xl font-bold leading-[1.18] tracking-[-1px] text-white "
            >
              Experts you can trust.
              <br />
              Technologies you can depend on.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  )
}
