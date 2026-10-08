"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const cards = [
  {
    title: "Our Mission",
    text: "To provide high-performance surgical illumination and imaging solutions through continuous innovation, quality, and reliable customer support, helping healthcare professionals deliver effective surgical care.",
    icon: "/medical/bfw/icon1.webp",
    iconPosition: "left",
  },
  {
    title: "Our Vision",
    text: "To drive innovation in surgical lighting and imaging by combining advanced technology, proven expertise, and commitment to quality, supporting healthcare professionals worldwide.",
    icon: "/medical/bfw/icon2.webp",
    iconPosition: "right",
  },
] as const;

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-12 md:py-16 lg:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 md:gap-12 lg:gap-[3vw]">

        {/* Image with full-bleed background (no container) */}
        <div
          className="relative w-full lg:w-[42%] shrink-0 py-6 sm:py-8 lg:py-[2.5vw] pl-[5%] pr-[5%] lg:pr-0 min-[2500px]:pl-[7.5%]"
          data-aos="fade-right"
        >
          <div className="absolute inset-y-0 left-0 w-[80%] lg:w-[82%] overflow-hidden rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[50px] min-[2500px]:rounded-br-[70px] min-[3800px]:rounded-br-[100px]">
            <img
              src="/medical/bfw/bg.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--color-primary)]/90" />
          </div>

          <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/11] lg:aspect-[677/764] overflow-hidden rounded-tl-[30px] rounded-br-[30px] md:rounded-tl-[40px] md:rounded-br-[40px] lg:rounded-tl-[50px] lg:rounded-br-[50px] min-[2500px]:rounded-tl-[70px] min-[2500px]:rounded-br-[70px] min-[3800px]:rounded-tl-[100px] min-[3800px]:rounded-br-[100px] shadow-lg">
            <img
              src="/medical/bfw/section2.webp"
              alt="Surgeon wearing a BFW surgical headlight"
              className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 md:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-12 px-[5%] lg:pl-0 min-[2500px]:pr-[7.5%]">
          <div data-aos="fade-up">
            <Typography variant="h2" color="dark" className="leading-tight">
              Lighting The Way Since 1971
            </Typography>
          </div>

          <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="p" color="muted" className="leading-relaxed">
              In 1990, Leon&rsquo;s daughter, Lynn, joined the company with a vision to learn the business and expand international distribution. At that time, BFW had just three international distributors, but this network has since grown to over 20, thanks to a commitment to quality and strong global word-of-mouth referrals.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              In 2010, BFW introduced the ChromaLUME, marking the first major change to lamp technology powering the fiber optic light source in over 20 years with the use of plasma lamp technology. This innovation aimed to increase lamp life without sacrificing brightness, laying the groundwork for our eventual transition to LED technology, which retains intensity while reducing heat output.
            </Typography>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 mt-2 md:mt-4 min-[2500px]:gap-8 min-[3800px]:gap-12">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`flex flex-col sm:items-center gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-12 p-3 min-[2500px]:p-5 min-[3800px]:p-7 bg-white border border-gray-100 rounded-md rounded-br-2xl min-[2500px]:rounded-br-3xl min-[3800px]:rounded-br-[2.5rem] shadow-[0_4px_14px_rgba(0,0,0,0.12)] ${card.iconPosition === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-[6.5rem] lg:h-[6.5rem] xl:w-28 xl:h-28 min-[2500px]:w-44 min-[2500px]:h-44 min-[3800px]:w-60 min-[3800px]:h-60 bg-[var(--color-primary)] rounded-sm rounded-br-xl min-[2500px]:rounded-br-2xl min-[3800px]:rounded-br-3xl">
                  <img src={card.icon} alt="" aria-hidden="true" className="w-[70%] h-[70%] object-contain" />
                </div>

                <div className={`flex flex-col gap-2 min-[2500px]:gap-4 min-[3800px]:gap-6 ${card.iconPosition === "right" ? "sm:pl-3 min-[2500px]:pl-5" : "sm:pr-3 min-[2500px]:pr-5"}`}>
                  <Typography variant="h3" color="dark">
                    {card.title}
                  </Typography>
                  <Typography variant="p" color="muted" className="leading-relaxed">
                    {card.text}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-6 min-[2500px]:mt-10" data-aos="fade-up" data-aos-delay="400">
            <Button text="Learn More About Us" variant="primary" showIcon={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
