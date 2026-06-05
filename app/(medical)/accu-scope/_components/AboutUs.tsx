import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
  <section className="relative py-24 bg-[#ffffff] overflow-hidden">
  <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">

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
            2xl:text-[20px]
          "
        >
          About Me
        </span>

        <h2
          className="
            mt-1
            text-[38px]
            line-height-[60px]
            leading-[1.25]
            font-bold
            text-[#333]
          "
        >
          A Legacy of Quality and Value in Microscopy
        </h2>

        <div className="mt-3 space-y-6">
          <p className="text-[18px] leading-[34px] text-[#6c6c6c]">
            Driven by a passion for scientific discovery for more than
            a century, we have embarked on a mission to create optical
            instruments that make scientific exploration more accessible
            and affordable.
          </p>

          <p className="text-[18px] leading-[34px] text-[#6c6c6c]">
            In 2005 we expanded beyond classrooms and laboratories.
            The acquisition of Unitron Ltd. enhanced our presence
            in inspection, metallurgical, materials and forensic markets.
          </p>

          <p className="text-[18px] leading-[34px] text-[#6c6c6c]">
            Our capabilities grew further with the addition of LX
            Microscopes, a leading provider of stereo microscopes.
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
            "
          >
            <h3 className="text-[57px] font-bold text-[#FFFFFF]!">
              10,000+
            </h3>

            <h3 className="text-[32px] lineheight-[150%] font-bold text-[#FFFFFF]!">
              Microscopes <br></br> in stock
            </h3>
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
            "
          >
            <h3 className="text-[57px] font-bold text-[#FFFFFF]!">
              2,000,000+
            </h3>

            <h3 className="text-[32px] lineheight-[150%] font-bold text-[#FFFFFF]!">
              Microscopes <br></br>
              Delivered
            </h3>
          </div>

        </div>

        {/* CTA */}
        <button
          className="
            mt-8
            h-[48px]
            w-[250px]
            px-8
            rounded-full
            bg-[#005FA3]
            text-white
            font-semibold
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