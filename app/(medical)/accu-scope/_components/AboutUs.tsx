import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-[#ffffff] overflow-hidden">
      <div className="max-w-[80%] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10">



          <div
            data-aos="fade-right"
            className="
            overflow-hidden
            
          "
          >
            <img
              src="/accu-scope/AboutGroup.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>


          {/* RIGHT SIDE */}
          <div data-aos="fade-left" className="flex flex-col justify-center">

            <span
              className="
            uppercase
            tracking-[2px]
            text-[#00A99D]
            font-semibold
            text-sm
            2xl:text-[22px]
          "
            >
              About Me
            </span>

            <h2
              className="
            mt-1
            text-[40px]
            line-height-[60px]
            leading-[1.25]
            font-bold
            text-[#333]
          "
            >
              A Legacy of Quality and Value in Microscopy
            </h2>

            <div className="mt-3 space-y-6">
              <p className="text-[20px] leading-[34px] text-[#6c6c6c]">
                Driven by a passion for scientific discovery for more than a century, we have embarked on a mission to create optical instruments that make scientific exploration more accessible and affordable. Our products span over 110 countries and are distributed by a global network of authorized distributors.
              </p>

              <p className="text-[20px] leading-[34px] text-[#6c6c6c]">
                In 2005 we expanded beyond classrooms and laboratories. The acquisition of Unitron Ltd., a leader in industrial microscopes, enhanced our presence in the inspection, metallurgical, materials, and forensic markets. 
              </p>

              <p className="text-[20px] leading-[34px] text-[#6c6c6c]">
                Our capabilities grew further in 2017 with the addition of Luxo Microscopes (now LX Microscopes) a leading provider of stereo microscopes for inspection.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-2 gap-3 mt-8">

              <div
                className="
              rounded-[24px]
              p-1
              text-center
              text-[#FFFFFF]!
              h-[197px]
              bg-gradient-to-br
              from-[#005FA3]
              to-[#00B5A5]
              flex flex-col items-center justify-center
            "
              >
                <h3 className="text-[52px] font-bold text-[#FFFFFF]!">
                  10,000+
                </h3>

                <h4 style={{ lineHeight: "35px" }} className="text-[32px] w-[180px] font-bold text-[#FFFFFF]!">
                  Microscopes in stock
                </h4>
              </div>

              <div
                className="
              rounded-[24px]
              p-1
              text-center
             text-[#FFFFFF]!
              h-[197px]
              bg-gradient-to-br
              from-[#005FA3]
              to-[#00B5A5]
              flex flex-col items-center justify-center
            "
              >
                <h3 className="text-[52px] font-bold text-[#FFFFFF]!">
                  2,000,000+
                </h3>

                <h4 style={{ lineHeight: "35px" }} className="text-[32px] w-[180px] font-bold text-[#FFFFFF]!">
                  Microscopes Delivered
                </h4>
              </div>

            </div>

            {/* CTA */}
            <button
              className="
            mt-8
            h-[48px]
            w-[250px]
            px-8
            rubik
            rounded-full
            bg-[#005FA3]
            text-white
            font-medium
            flex items-center
            gap-1
            hover:scale-105
            transition-all
          "
            >
              Read More About Me
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}