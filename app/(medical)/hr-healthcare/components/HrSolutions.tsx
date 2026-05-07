
"use client";

import {
  Target,
  HandHeart,
  UsersRound,
  Building2,
} from "lucide-react";

import "aos/dist/aos.css";

const cards = [
  {
    icon: "/medical/hr-healthcare/hr-solution-1.png",
    title: "Our Purpose",
    description:
      "Working together with one purpose. Who we are as individuals aligns with who we are as a Company. Unified in our purpose to grow together and positively impact people’s lives.",
  },
  {
    icon: "/medical/hr-healthcare/hr-solution-2.png",
    title: "Our Difference",
    description:
      "We measure success by the number of lives we touch. We care deeply about all the people we serve and strive to deliver high-quality solutions to help them live their best life.",
  },
  {
    icon: "/medical/hr-healthcare/hr-solution-3.png",
    title: "Our Culture",
    description:
      "Corporate, manufacturing, and warehousing operations all nestled in the heart of York, PA.",
  },
  {
    icon: "/medical/hr-healthcare/hr-solution-4.png",
    title: "Cooperate Headquarters",
    description:
      "Collaborative environment equipped with gym, game room, cafeteria and more.",
  },
];

export default function HrSolutions() {

  return (
    <section className="relative overflow-hidden bg-[#031B35] py-20">
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-380 px-6">
        {/* TOP SECTION */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="max-w-380">
            {/* TITLE */}
            <div data-aos="fade-right">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-1.8px] text-white">
                Solutions for Modern Healthcare Professionals
              </h2>
            </div>

            {/* BUTTONS */}
            <div
              data-aos="fade-up"
              data-aos-delay="120"
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className="flex h-[46px] items-center justify-center rounded-full bg-white px-6 text-[15px] font-medium text-[#041B35] transition-all duration-300 hover:translate-y-[-2px]">
                Healthcare Professionals
              </button>

              <button className="flex h-[46px] items-center justify-center rounded-full bg-white px-6 text-[15px] font-medium text-[#041B35] transition-all duration-300 hover:translate-y-[-2px]">
                Patients & Caregivers
              </button>
            </div>

            {/* DESCRIPTION */}
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="mt-8 border-b border-white/10 pb-8 text-base leading-[2] text-white/75">
                At our company, we pride ourselves on offering a comprehensive
                range of products designed to meet the diverse needs of our
                clients. Our dedicated Patient Services team collaborates
                seamlessly with our innovative Loop Care Platform, creating a
                powerful synergy that enhances catheter care coordination. This
                integrated approach ensures that healthcare professionals have
                access to a wealth of resources, enabling them to provide
                efficient, personalized, and dependable urological care. By
                embracing this holistic strategy, we strive not only to improve
                patient satisfaction and health outcomes but also to streamline
                the entire healthcare delivery process, making it more effective
                and responsive to patient needs.
              </p>
            </div>

            {/* CTA */}
            <div data-aos="fade-up" data-aos-delay="300">
              <button className="mt-7 cursor-pointer flex h-[50px] w-[155px] items-center justify-center rounded-full bg-white text-base font-semibold text-[#041B35] transition-all duration-300 hover:translate-y-[-2px] hover:bg-[#F2F2F2]">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            data-aos-delay="180"
            className="relative overflow-hidden rounded-[6px]"
          >
            <img
              src="/medical/hr-healthcare/hr-solution.png"
              alt="Healthcare Team"
              className="h-[420px] w-full object-cover"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-[#041B35]/10" />
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group rounded-[8px] cursor-pointer bg-[#F3F3F3] p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
            >
              {/* ICON */}
              <div className="flex items-center gap-4">
                <div className="flex h-[44px] w-[44px] items-center justify-center p-2 rounded-full border border-[#D8D8D8] bg-[#F8F8F8] shadow-[0_3px_8px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-105">
                    <img src={card.icon} alt={card.title} />
                </div>

                <h3 className="text-[18px] font-semibold tracking-[-0.3px] text-[#121212]">
                  {card.title}
                </h3>
              </div>

              {/* DIVIDER */}
              <div className="mt-5 h-[1px] w-full bg-[#DDDDDD]" />

              {/* TEXT */}
              <p className="mt-5 text-base leading-[2] text-[#6F6F6F]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}