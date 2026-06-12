"use client";

import "aos/dist/aos.css";

const services = [
  {
    title: "Unwavering Assurance",
    description:
      "Adhering to the highest standards with ISO 13485-certified quality management systems and FDA registration for absolute trust and reliability.",
    image: "/cathegenix/cathe-guarantee-1.jpg",
  },
  {
    title: "Comprehensive Product Solutions",
    description:
      "Delivering a seamless supply of high-quality products with end-to-end support, from concept development to regulatory approval and successful market launch.",
    image: "/cathegenix/cathe-guarantee-2.jpg",
  },
  {
    title: "Unmatched Efficiency",
    description:
      "Accelerating timelines with an industry-leading 7-day lead time to meet your urgent needs.",
    image: "/cathegenix/cathe-guarantee-3.jpg",
  },
  {
    title: "Personalized Support",
    description:
      "Providing dedicated, one-on-one assistance from our expert technical team, ensuring seamless delivery of customized solutions and exceptional service.",
    image: "/cathegenix/cathe-guarantee-4.jpg",
  },
];

export default function CatheGuarantees() {

  return (
    <section className="relative overflow-hidden bg-[#05429B] py-24">
      {/* ================================================= */}
      {/* BACKGROUND DEPTH */}
      {/* ================================================= */}

      {/* RADIAL LIGHT */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_40%)]" /> */}

      {/* SUBTLE LIGHT STREAK */}
      {/* <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(120deg,transparent_0%,white_50%,transparent_100%)]" /> */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 lg:px-16">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mx-auto max-w-[900px] text-center">
          {/* TITLE */}
          <div data-aos="fade-up">
            <h2 className="text-4xl font-semibold tracking-[-2px] text-white">
              Our Services & Guarantees
            </h2>
          </div>

          {/* SUBTITLE */}
          <div data-aos="fade-up" data-aos-delay="150">
            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-[1.9] text-white/80">
              Provides long-term drainage and patient comfort during extended
              stent placement.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* SERVICE CARDS */}
        {/* ================================================= */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group overflow-hidden rounded-[24px] bg-[#195EC3] shadow-[0_14px_30px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(0,0,0,0.18)]"
            >
              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <div className="relative overflow-hidden rounded-[20px] p-3">
                <div className="relative overflow-hidden rounded-[18px]">
                  {/* IMAGE */}
                  <div className="aspect-[1.18/0.72] w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    {/* FUTURE IMAGE */}
                    {/*
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/[0.03]" />

                  {/* DEPTH LIGHT */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
                </div>
              </div>

              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="px-6 pb-8 pt-2">
                {/* TITLE */}
                <h3 className="text-lg font-semibold leading-[1.2] tracking-[-0.8px] text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-[16px] leading-[1.95] text-white/82">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}