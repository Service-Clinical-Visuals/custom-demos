import Image from "next/image";
import { ArrowRight } from "lucide-react";

const supporters = [
  { image: "/medical/ohst/supports/horizont.png", alt: "Horizont e.V." },
  { image: "/medical/ohst/supports/havelland.png", alt: "Havelland" },
  { image: "/medical/ohst/supports/plan_intl.png", alt: "Plan International" },
  { image: "/medical/ohst/supports/fsv.png", alt: "FSV" },
];

export default function TrustedClientsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1560px] 2xl:max-w-[80%] mx-auto px-6">

        <div className="text-center" data-aos="fade-up">
          <h2 className="text-[38px] font-bold text-[#222222]">
            OHST supports
          </h2>
          <p className="mt-4 text-[16px] leading-[28px] text-[#555555] max-w-[700px] mx-auto">
            OHST proudly supports organizations and initiatives dedicated to community development,
            education, culture, and crafting positive social impact through meaningful partnerships,
            social responsibility, and long-term community engagement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 items-center">
          {supporters.map((supporter, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="flex items-center justify-center group"
            >
              <Image
                src={supporter.image}
                alt={supporter.alt}
                width={200}
                height={100}
                className="object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <button className="h-[48px] px-8 rounded-full bg-[#099F94] text-white font-semibold flex items-center gap-2 hover:bg-[#07877e] hover:scale-105 transition-all duration-300 shadow-md">
            Get Support <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
