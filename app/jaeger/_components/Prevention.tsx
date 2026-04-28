import React from "react";
import { ArrowRight, ArrowUpRight, CornerUpRight } from "lucide-react";

const Prevention = () => {
  const cards = [
    {
      title: "Validated Protection",
      description:
        "Our respiratory solutions are continuously revalidated to ensure high levels of security.",
    },
    {
      title: "Maximum Safety with Disposable Kits",
      description:
        "Our single-use MicroGard® II filters minimize cross-contamination risks and improves patient safety.",
    },
    {
      title: "German Engineering Excellence",
      description:
        "Manufactured in Germany, our products adhere to strict quality controls and process validation.",
    },
  ];

  return (
    <section className="bg-[#3DAA4A] py-16 px-4 md:px-8 lg:px-16 font-sans">
      <div className="container mx-auto">
        {/* Top Section: Testimonial and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          <div data-aos="fade-up" className="space-y-6">
            <span className="inline-block bg-[#FFFFFF14] text-[#FFFFFF] text-base  px-3 py-1 rounded">
              Infection Prevention
            </span>
            <h2 className="text-3xl md:text-[38px] font-semibold text-[#FFFFFF] leading-tight">
              Highest Infection Prevention Standards – Past, Present, and Future
            </h2>
            <p className="text-base text-[#FFFFFF]">
              Infection prevention is an integral part of our innovation and
              product development. From our earliest designs to our latest
              advancements, we ensure that infection prevention remains a
              priority at every stage.
            </p>
            <p className="text-[#FFFFFF] leading-relaxed text-base text-justify">
              We work closely with infection prevention specialists to create
              industry-leading standards and detailed reprocessing instructions.
              Extensive filter efficiency and biocompatibility testing
              demonstrate, that our MicroGard® II filters and hardware meet
              rigorous standards. 1, 2, 3, 4,5
            </p>
            <button className="flex items-center bg-[#FFFFFF] text-[#3DAA4A] text-base font-medium px-5 py-2 rounded-md hover:bg-green-100 transition">
              Explore More <ArrowRight size={20} className="ml-2" />
            </button>
          </div>

          <div className="lg:ml-10 relative h-85 md:h-100 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/jaeger/prevention.png"
              alt="Service Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section: Service Cards */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-[#FFFFFF36] p-8 rounded-2xl text-[#FFFFFF] hover:bg-[#43a047] transition-colors cursor-pointer group">
              <h3 className="text-[24px] font-semibold mb-2">{card.title}</h3>
              <p className="text-[#FFFFFF]/90 text-base mb-2 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prevention;
