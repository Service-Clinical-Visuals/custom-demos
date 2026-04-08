"use client";

import "aos/dist/aos.css";

export default function InspirationValues() {

  return (
    <section className="bg-[#7f8b91] py-24 px-6 lg:px-20">
      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT VIDEO */}
        <div data-aos="fade-right">
          <div className="rounded-2xl overflow-hidden bg-gray-300 h-[420px] lg:h-[460px]">
            {/* Replace with video */}
            {/* <video className="w-full h-full object-cover" autoPlay muted loop /> */}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white" data-aos="fade-left">
          <p className="text-sm opacity-80 mb-3">Our Values</p>

          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug mb-4">
            Guided by Values That Drive Impact
          </h2>

          <p className="text-sm opacity-80 leading-relaxed mb-6 max-w-xl">
            Our core values shape everything we do—driving innovation, advancing
            research, and keeping patients at the heart of every solution. We
            are committed to delivering outcome-focused, pioneering healthcare
            that makes a meaningful difference.
          </p>

          {/* VALUE LIST */}
          <div className="space-y-4 mb-6">
            {values.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm">
                  <img src={item.icon} alt={item.title} className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-white text-gray-700 text-sm px-5 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
            Discover Our Values
            <span>→</span>
          </button>
        </div>
      </div>

      {/* RIGHT FLOATING IMAGE */}
      <div className="max-w-380 mx-auto mt-10 lg:-mt-65 flex justify-end px-6 lg:px-0">
        <div
          className="w-[280px] h-[250px] rounded-2xl overflow-hidden bg-gray-300 shadow-lg"
          data-aos="zoom-in"
        >
          <img
            src="/inspiration-healthcare/assets/inspiration-value.jpg"
            alt="Floating Image"
          />
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    icon: "/inspiration-healthcare/assets/inspiration-value1.png",
    title: "Outcome Changing",
    desc: "Focused on delivering measurable impact in patient care",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value2.png",
    title: "Research Driven",
    desc: "Built on continuous learning and scientific advancement",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value3.png",
    title: "Patient Focused",
    desc: "Centered on improving patient experience and outcomes",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value4.png",
    title: "Pioneering",
    desc: "Committed to innovation and forward-thinking solutions",
  },
];
