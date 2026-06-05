import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function QualityAssuranceSection() {
  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-[1560px] mx-auto px-6">

        <div
          className="

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
                  text-[38px]
                  font-bold
                  text-[#333]
                  line-height-[60px]
                "
              >
                Quality Assurance
              </h2>

              <p
                className="
                  mt-4
                  text-[18px]
                  line-height-[26px]
                  text-[#6b6b6b]
                "
              >
                At ACCU-SCOPE, we understand the critical role microscopes
                play in various fields. That's why we prioritize exceptional
                quality throughout the entire manufacturing process.
              </p>

              <div className="mt-4 space-y-4">

                <div>
                  <h3 className="text-[24px] line-height-[60px] font-bold text-[#333]">
                    Rigorous Component Selection
                  </h3>

                  <p className="mt-3 text-[#6b6b6b] text-[16px] line-height-[26px]">
                    We source high-grade materials and precision optics to
                    ensure durability and performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-[24px] line-height-[60px] font-bold text-[#333]">
                    Stringent Manufacturing Standards
                  </h3>

                  <p className="mt-3 text-[#6b6b6b] text-[16px] line-height-[26px]">
                    Our production adheres to strict quality control
                    protocols, guaranteeing consistent performance.
                  </p>
                </div>

              </div>

              <button
                className="
                  mt-6
                  w-fit
                  bg-[#005FA3]
                  text-white
                  rounded-full
                  px-8
                  h-[48px]
                  font-semibold
                  flex items-center gap-4
                  hover:scale-105
                  transition-all
                "
              >
                See How We Ensure Quality
                <ArrowRight size={18} />
              </button>
            </div>

            {/* RIGHT IMAGE COLLAGE */}
            <div
              data-aos="fade-left"
              className="
                overflow-hidden
                
              "
            >
              <img
                src="/accu-scope/QualityAssurance.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}