"use client";

import JlmTradeCard from "./JlmTradeCard";



export default function JlmTradeSection() {
  const cards = [
    {
      title: "Shop",
      image: "/jlm/jlm-trust-1.png",
    },
    {
      title: "Locator",
      image: "/jlm/jlm-trust-2.png",
    },
    {
      title: "Problem Solver",
      image: "/jlm/jlm-trust-3.png",
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-24">
      <div className="mx-auto max-w-[1600px] px-6">
        <h2
          data-aos="fade-up"
          className="
            text-center
            text-[44px]
            font-bold
            text-[#20252d]
          "
        >
          Trade trusted worldwide
        </h2>

        <div className="mt-8 h-px bg-[#dddddd]" />

        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-6
          "
        >
          {cards.map((card, index) => (
            <JlmTradeCard
              key={card.title}
              title={card.title}
              image={card.image}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}