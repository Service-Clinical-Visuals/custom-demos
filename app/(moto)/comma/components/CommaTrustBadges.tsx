"use client";

const badges = [
  {
    image: "/comma/aboutus_oem.png",
    title: "OEM approved",
    text: "OEM-approved product range for peace of mind.",
  },
  {
    image: "/comma/aboutus_oem.png",
    title: "Compatibility Guarantee",
    text: "Products backed by our unique compatibility guarantee.",
  },
  {
    image: "/comma/aboutus_oem.png",
    title: "Available nationwide",
    text: "Find Comma products anywhere in the UK.",
  },
  {
    image: "/comma/aboutus_oem.png",
    title: "Nearly 100% car part coverage",
    text: "Right Comma product for nearly every vehicle.",
  },
];

export default function CommaTrustBadges() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1550px]">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <div
              key={badge.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex items-center gap-4 bg-[#FD42390D] py-10 px-4 border-[#FD4239] border-1"
            >
              <div className="shrink-0">
                <img src={badge.image} alt={badge.title} className="h-20 w-20 object-contain" />
              </div>
              <div>
                <p className="text-[18px] font-semibold text-[#1A1A1A]">{badge.title}</p>
                <p className="mt-1 text-[14px] leading-6 text-[#666]">{badge.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
