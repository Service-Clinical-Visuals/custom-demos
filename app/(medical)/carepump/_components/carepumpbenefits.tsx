"use client";

import Image from "next/image";
import PrimaryButton from "./Button";

const benefits = [
  {
    icon: "/carepump/images/sport-recovery 1.png",
    title: "Fast recovery of athletes",
    description:
      "Active regeneration combined with relaxation. Removal of muscle pain, tension and fatigue after training or competitions. Increased body performance. Less risk of injury.",
  },
  {
    icon: "/carepump/images/vector.png",
    title: "Home treatment of oedemas",
    description:
      `Effective removal of lymphoedema and the feeling of "heavy legs". Prevention of venous and lymphatic system insufficiency. Home lymphatic drainage - effect like after a visit to the office.`,
  },
  {
    icon: "/carepump/images/anticellulite 1.png",
    title: "Healthier body without cellulite",
    description:
      "Faster metabolism, reduction of cellulite, firming and slimming of the body. Relaxing treatment in any place. Duration of the treatment: 1-120 minutes.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-[#f7f7f7] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 data-aos="fade-up" className="
                text-[24px]
                sm:text-[28px]
                md:text-[30px]
                lg:text-[32px]
                font-bold
                text-[#333]
                leading-[1.2]
                mb-4 lg:mb-6
                ">
            The benefits of using CarePump
          </h2>

          <p data-aos="fade-up" data-aos-delay="100" className="
                text-[#777]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-7
                lg:leading-8
                ">
            CarePump supports recovery, wellness, and therapeutic care through
            advanced pneumatic compression technology designed to improve
            circulation, reduce discomfort, and enhance overall body
            performance.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-15 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative pt-[60px] flex"
            >
              <div className="relative flex flex-col w-full h-full drop-shadow-[0_12px_30px_rgba(16,24,40,0.06)]">

                {/* Top Edge With Large Center Cutout */}
                <div className="flex w-full h-[110px]">
                  <div className="flex-1 bg-white rounded-tl-[24px]" />

                  <svg
                    width="320"
                    height="110"
                    viewBox="0 0 320 110"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <path
                      d="
                        M 0 0
                        H 24
                        Q 48 0 48 24

                        V 70
                        Q 48 110 106 110

                        H 214

                        Q 272 110 272 70
                        V 24

                        Q 272 0 296 0
                        H 320

                        V 110
                        H 0
                        Z
                      "
                      fill="white"
                    />
                  </svg>

                  <div className="flex-1 bg-white rounded-tr-[24px]" />
                </div>

                {/* Card Body */}
                <div className="bg-white flex-1 rounded-b-[24px] px-8 pb-10 pt-8 text-center flex flex-col">
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-[#333] mb-4">
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#777]
                      text-[14px]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[17px]
                      leading-7
                      lg:leading-8
                      max-w-[44ch]
                      mx-auto
                      flex-1
                    "
                  >
                    {item.description}
                  </p>

                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-block text-sm font-bold text-[#11B5E4] hover:underline"
                    >
                      Read More &gt;&gt;
                    </a>
                  </div>
                </div>

                {/* Large Floating Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-[60px] z-10">
                  <div
                    className="
                      w-[208px]
                      h-[159px]
                      bg-[#11B5E4]
                      rounded-[32px]
                      flex
                      items-center
                      justify-center
                      shadow-[0_10px_30px_rgba(17,181,228,0.25)]
                    "
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={` ${ index == 1 ? "w-[100px] h-[100px]" : "w-[115px] h-[115px]" } object-contain`}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center mt-18">
          <PrimaryButton text="Discover Benefits" />
        </div>

      </div>
    </section>
  );
}