"use client";

import "aos/dist/aos.css";

const stats = [
  {
    value: "200+",
    label: "Worldwide distributers",
  },
  {
    value: "98.4%",
    label: "Overall customer satisfaction",
  },
  {
    value: "8.5M+",
    label: "Medical devices sold per year",
  },
  {
    value: "99.8%",
    label: "First time quality inspection pass rate",
  },
];

export default function TimescoWhy() {

  return (
    <section className="relative overflow-hidden py-28">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/timesco/timesco-why.png"
          alt="Facility"
          className="h-full w-full object-cover"
        />

        {/* GREEN OVERLAY */}
        <div className="absolute inset-0 bg-[#0a4a25]/75" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-8">
        
        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="mx-auto max-w-1600 text-center"
        >
          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.03em]
              text-white
            "
          >
            Why Timesco ?
          </h2>

          <p
            className="
              mt-6
              text-[16px]
              leading-[2]
              text-white/85
            "
          >
            We believe that patient care is of the utmost importance,
            which is why we never compromise on quality, service,
            or specification. Our long-standing commitment to the
            medical community and our work to supply the NHS reflects
            our unwavering dedication to supporting healthcare
            professionals and patient care.
          </p>
        </div>

        {/* STATS */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="
                rounded-[28px]
                border
                border-white/40
                bg-white/5
                px-10
                py-10
                text-center
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-white/10
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            >
              <h3
                className="
                  text-4xl
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-4
                  text-[16px]
                  leading-[1.8]
                  text-white/85
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}