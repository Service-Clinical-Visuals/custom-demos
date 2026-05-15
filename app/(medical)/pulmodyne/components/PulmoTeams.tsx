"use client";

import "aos/dist/aos.css";

const teamMembers = [
  {
    id: 1,
    name: "Nathan Roth",
    role: "Director Of Business Development",
    image: "/pulmo/pulmo-teams-1.png",
  },
  {
    id: 2,
    name: "Katie Sievers",
    role: "Director Of Business Development",
    image: "/pulmo/pulmo-teams-2.png",
  },
  {
    id: 3,
    name: "Mike Quinn",
    role: "Territory Manager",
    image: "/pulmo/pulmo-teams-3.png",
  },
  {
    id: 4,
    name: "Logan Skelly",
    role: "Vice President Of Sales",
    image: "/pulmo/pulmo-teams-4.png",
  },
];

export default function PulmoTeams() {


  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-16 lg:py-28">
      {/* ================================================= */}
      {/* TOP BLUE ACCENT */}
      {/* ================================================= */}

      <div className="absolute left-0 top-0 h-[4px] w-full bg-[#0068A8]" />

      {/* ================================================= */}
      {/* BACKGROUND DEPTH */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-16">
        {/* ================================================= */}
        {/* SECTION TITLE */}
        {/* ================================================= */}

        <div className="text-center">
          <div data-aos="fade-up">
            <h2 className="text-2xl font-semibold tracking-[-1px] text-[#2B2B2B] sm:text-3xl sm:tracking-[-2px] lg:text-4xl">
              Meet Our Expert Teams
            </h2>
          </div>
        </div>

        {/* ================================================= */}
        {/* TEAM GRID */}
        {/* ================================================= */}

        <div className="mx-auto mt-12 grid max-w-[1600px] grid-cols-2 gap-5 sm:mt-16 sm:gap-8 lg:mt-20 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group relative overflow-hidden rounded-[16px] border border-[#E8E8E8] bg-white px-4 pb-7 pt-6 shadow-[0_14px_28px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_42px_rgba(0,0,0,0.08)] sm:px-8 sm:pb-10 sm:pt-8"
            >
              {/* ================================================= */}
              {/* SOFT HOVER LIGHT */}
              {/* ================================================= */}

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,104,168,0.04),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* ================================================= */}
              {/* PROFILE IMAGE */}
              {/* ================================================= */}

              <div className="relative z-10 flex justify-center">
                <div className="relative">
                  {/* IMAGE RING */}
                  <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border-[3px] border-[#0068A8] bg-white shadow-[0_8px_18px_rgba(0,104,168,0.08)] sm:h-[124px] sm:w-[124px] sm:border-[4px]">
                    {/* IMAGE */}
                    <div className="h-[76px] w-[76px] overflow-hidden rounded-full bg-[#EDEDED] sm:h-[108px] sm:w-[108px]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      {/* FUTURE IMAGE */}
                      {/*
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      */}
                    </div>
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* DIVIDER */}
              {/* ================================================= */}

              <div className="relative z-10 mt-8 h-[1px] w-full bg-[#ECECEC]" />

              {/* ================================================= */}
              {/* MEMBER INFO */}
              {/* ================================================= */}

              <div className="relative z-10 mt-8 text-center">
                {/* NAME */}
                <h3 className="text-xl font-semibold tracking-[-1px] text-[#0068A8]">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="mt-3 text-[16px] font-medium leading-[1.7] text-[#666666]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}