"use client";

import ReactHealthButton from "./ReactHealthButton";

const news = [
  {
    title: "React Health Launches Phoenix™ 5L Oxygen Concentrator - A Quiet, Compact, and Reliable Oxygen Concentrator Built for Everyday Use",
    description: "Dublin, Ohio- React Health is proud to announce the launch of the Phoenix™ 5L, a next-generation stationary oxygen concentrator designed to deliver powerful performance in a reliable, easy to use package. Built with patients and providers...",
    link: "#",
  },
  {
    title: "React Health Launches Standby Mode and Pre-Use Simplification to its V-Series Ventilators",
    description: "BOTHELL, WA, July 11, 2025: React Health, a sleep and respiratory device manufacturer and distributor, proudly announces the release of the latest software version, 5.06, to its VOCSN series of ventilators. Standby Mode* and Pre-Use...",
    link: "#",
  },
  {
    title: "2024 Zenith Award Honoree, React Health!",
    description: "React Health is proud to announce that it has been selected as a recipient of the 2024 AARC Zenith Award, an honor given by the American Association for Respiratory Care (AARC). Out of more than 300 companies, React Health was chosen as...",
    link: "#",
  },
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-react-purple relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/react-health/bg.png')] bg-cover bg-no-repeat bg-center opacity-10" />

      <div className="react-container relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Latest News & Events
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-[16px] md:text-base">
            Stay updated with the latest advancements, product launches, and healthcare achievements in sleep and respiratory care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <h3 className="font-bold text-react-text-dark text-xl mb-6 leading-tight group-hover:text-react-purple transition-colors">
                  {item.title}
                </h3>
                <div className="w-full h-px bg-gray-100 mb-6" />
                <p className="text-react-text-gray text-[16px] leading-relaxed mb-8 line-clamp-6">
                  {item.description}
                </p>
              </div>
              <ReactHealthButton text="Read More" size="sm" className="mt-auto" />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12" data-aos="fade-up">
          <p className="text-white/90 text-[16px] max-w-xl">
            From innovative oxygen therapy solutions and ventilator technology upgrades to recognized contributions in patient care, our latest news reflects a continued commitment to supporting hospitals, healthcare providers, and patients with reliable medical solutions.
          </p>
          <ReactHealthButton text="Connect With Us" variant="white" />
        </div>
      </div>
    </section>
  );
}
