"use client";

import ReactHealthButton from "./ReactHealthButton";

const partners = [
  { name: "Silver CP Badge", logo: "/react-health/partner-1.png" },
  { name: "Mames", logo: "/react-health/partner-2.png" },
  { name: "Sleep Tech Talk", logo: "/react-health/partner-3.png" },
  { name: "HomeCare Heros", logo: "/react-health/partner-4.png" },
  { name: "AASMF", logo: "/react-health/partner-5.png" },
];

export default function AboutReactHealth() {
  return (
    <section className="w-full bg-white py-20">
      <div className="react-container">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">
            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-react-text-dark mb-6">
                About React Health
              </h2>
              <p className="text-react-text-gray">
                React Health is a leading U.S. sleep and respiratory device manufacturer and distributor based in the United States. React Health is focused on delivering comprehensive and integrated solutions to improve outcomes and the lives of patients with highly correlated sleep and respiratory conditions.
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-react-text-dark mb-4">
                  Our Mission
                </h3>
                <p className="text-[16px] text-react-text-gray leading-relaxed">
                  React Health enhances lives through innovative sleep and respiratory care solutions that help people breathe easier, sleep better, and live healthier every day.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-react-text-dark mb-4">
                  Our Vision
                </h3>
                <p className="text-[16px] text-react-text-gray leading-relaxed">
                  React Health's vision is to make sleep and respiratory care simpler, more accessible, and seamlessly integrated to empower individuals of all ages to thrive.
                </p>
              </div>
            </div>

            <div data-aos="zoom-in">
              <ReactHealthButton text="Discover Our Story" />
            </div>
          </div>

          {/* RIGHT SIDE IMAGE PLACEHOLDER */}
          <div
            data-aos="fade-left"
            className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-2xl border border-gray-200"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/react-health/about.jpg" alt="About React Health" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl h-40 flex items-center justify-center p-8 border border-gray-100 shadow-sm hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
