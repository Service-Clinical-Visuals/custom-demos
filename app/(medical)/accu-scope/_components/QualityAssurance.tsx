import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function QualityAssuranceSection() {
  return (
    <section className="py-24 bg-[#f7f7f7]">
  <div className="max-w-[1400px] mx-auto px-6">

    <div
      className="
        border-2 border-[#1E90FF]
        rounded-[6px]
        bg-white
        overflow-hidden
      "
    >
      <div className="grid lg:grid-cols-[45%_55%]">

        {/* LEFT CONTENT */}
        <div
          className="p-14 flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h2
            className="
              text-[56px]
              font-bold
              text-[#333]
              leading-tight
            "
          >
            Quality Assurance
          </h2>

          <p
            className="
              mt-8
              text-[18px]
              leading-[34px]
              text-[#6b6b6b]
            "
          >
            At ACCU-SCOPE, we understand the critical role microscopes
            play in various fields. That's why we prioritize exceptional
            quality throughout the entire manufacturing process.
          </p>

          <div className="mt-10 space-y-8">

            <div>
              <h3 className="text-[28px] font-bold text-[#333]">
                Rigorous Component Selection
              </h3>

              <p className="mt-3 text-[#6b6b6b] text-lg leading-8">
                We source high-grade materials and precision optics to
                ensure durability and performance.
              </p>
            </div>

            <div>
              <h3 className="text-[28px] font-bold text-[#333]">
                Stringent Manufacturing Standards
              </h3>

              <p className="mt-3 text-[#6b6b6b] text-lg leading-8">
                Our production adheres to strict quality control
                protocols, guaranteeing consistent performance.
              </p>
            </div>

          </div>

          <button
            className="
              mt-10
              w-fit
              bg-[#005FA3]
              text-white
              rounded-full
              px-8
              h-[58px]
              font-semibold
              flex items-center gap-4
              hover:scale-105
              transition-all
            "
          >
            See How We Ensure Quality
            →
          </button>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div
          className="relative p-4"
          data-aos="fade-left"
        >

          <div className="grid gap-4">

            {/* Top Image */}
            <div
              className="
                overflow-hidden
                rounded-[24px]
                h-[420px]
              "
            >
              <img
                src="/quality-main.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-4">

              <div
                className="
                  overflow-hidden
                  rounded-[20px]
                  h-[170px]
                "
              >
                <img
                  src="/facility.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="
                  overflow-hidden
                  rounded-[20px]
                  h-[170px]
                "
              >
                <img
                  src="/collaboration.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

          {/* Floating Center Logo */}
          <div
            className="
              absolute
              left-1/2
              bottom-[115px]
              -translate-x-1/2
              w-[140px]
              h-[140px]
              rounded-full
              bg-white
              shadow-xl
              flex items-center justify-center
              border-[10px] border-white
            "
          >
            <img
              src="/logo-circle.png"
              alt="Logo"
              className="w-[90px] h-[90px]"
            />
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
  );
}