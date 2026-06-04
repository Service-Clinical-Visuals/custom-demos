import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
  <section className="relative py-24 bg-[#f7f7f7] overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div className="relative">

        {/* Decorative Circle */}
        <div
          className="
            absolute
            left-[-120px]
            top-[180px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-gradient-to-br
            from-[#0077B6]
            to-[#B8F2E6]
            opacity-70
            blur-sm
            -z-10
          "
        />

        <div className="grid gap-8">

          {/* Top Image */}
          <div
            data-aos="fade-right"
            className="
              overflow-hidden
              rounded-[28px]
              h-[440px]
            "
          >
            <img
              src="/about-microscope.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Image */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="
              overflow-hidden
              rounded-[28px]
              h-[220px]
              w-[85%]
            "
          >
            <img
              src="/scientist.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div data-aos="fade-left">

        <span
          className="
            uppercase
            tracking-[2px]
            text-[#00A99D]
            font-semibold
            text-sm
          "
        >
          About Me
        </span>

        <h2
          className="
            mt-5
            text-[54px]
            leading-[1.25]
            font-bold
            text-[#333]
          "
        >
          A Legacy of Quality and Value in Microscopy
        </h2>

        <div className="mt-8 space-y-6">
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
        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <div
            className="
              rounded-[24px]
              p-10
              text-center
              text-white
              bg-gradient-to-br
              from-[#005FA3]
              to-[#00B5A5]
            "
          >
            <h3 className="text-6xl font-bold">
              10,000+
            </h3>

            <p className="mt-4 text-2xl font-semibold leading-relaxed">
              Microscopes <br />
              in Stock
            </p>
          </div>

          <div
            className="
              rounded-[24px]
              p-10
              text-center
              text-white
              bg-gradient-to-br
              from-[#005FA3]
              to-[#00B5A5]
            "
          >
            <h3 className="text-6xl font-bold">
              2,000,000+
            </h3>

            <p className="mt-4 text-2xl font-semibold leading-relaxed">
              Microscopes <br />
              Delivered
            </p>
          </div>

        </div>

        {/* CTA */}
        <button
          className="
            mt-8
            h-[58px]
            px-8
            rounded-full
            bg-[#005FA3]
            text-white
            font-semibold
            flex items-center
            gap-3
            hover:scale-105
            transition-all
          "
        >
          Read More About Me
          <span className="text-xl">→</span>
        </button>

      </div>

    </div>

  </div>
</section>
  );
}