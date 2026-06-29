import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Experience() {
  return (
    <section className="bg-[#005B8E] py-16">
      <Container>
        {/* Header row */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-0 items-center justify-between mb-4">
          <h2 className="heading-white font-semibold text-center md:text-start" data-aos="fade-right">
            Experience Our 360 deg product View
          </h2>
          <a
            href="#"
            className="flex-shrink-0 text-[#212121]! font-semibold! bg-white content px-5 py-2.5 rounded hover:bg-gray-100 transition-colors"
            data-aos="fade-left"
          >
            Explore our Products
          </a>
        </div>

        {/* Divider */}
        <hr className="border-white/40 mb-10" />

        {/* Main content */}
        <div className="grid grid-cols-1 2xl:grid-cols-[68fr_32fr] gap-8 items-center">
          {/* 360 viewer placeholder */}
          <div className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 aspect-[1135/614] flex items-center justify-center" data-aos="fade-right">
            <div className="relative w-full h-full aspect-video overflow-hidden ">
                <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover mix-blend-normal" />
            </div>
          </div>

          {/* Product details */}
          <div className="text-white" data-aos="fade-up" data-aos-delay="150">
            <h3 className="heading-white leading-[120%]! mb-4 tracking-[0%]!">
              RELI® Tuohy Point Epidural Needle, Detachable Wing
            </h3>
            <p className="content-white mb-4">
              Designed for precision, control, and clinician comfort, this
              epidural needle features a precision point-ground Tuohy tip that
              helps reduce tissue coring while enabling smooth needle
              advancement. Wide, high-visibility metric depth markings support
              accurate placement, while detachable wings provide a secure grip
              and greater flexibility during handling. A large, transparent hub
              enhances tactile feedback, and color-coded stylet caps allow for
              quick gauge identification. Available with either a plastic or
              metal stylet and offered in both sterile and non-sterile
              configurations, it delivers reliable performance for a wide range
              of epidural procedures.
            </p>
            <p className="content-white">
              Designed for precision, control, and clinician comfort, this
              epidural needle features a precision point-ground Tuohy tip that
              helps reduce tissue coring while enabling smooth needle
              advancement. Wide, high-visibility metric depth markings support
              accurate placement.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
