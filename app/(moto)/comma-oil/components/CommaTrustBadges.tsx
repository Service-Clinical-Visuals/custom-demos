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
    <section className="bg-white pb-20 mt-10">
      <div className="mx-auto max-w-[90%]!">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {badges.map((badge, i) => (
            <div
              key={badge.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex items-center gap-2 bg-[#FD42390D] py-10 px-5 border-[#FD4239] border-1"
            >
              <div className="shrink-0">
                <img src={badge.image} alt={badge.title} className="h-18 w-18 xl:h-24 xl:w-24 object-contain" />
              </div>
              <div>
                <p className="text-[20px] subheading leading-[100%] font-semibold text-[#333333] ">{badge.title}</p>
                <p className={`${i === 3 ? "mt-2" : "mt-4"} content text-[16px] leading-[110%]! text-[#333333]`}>{badge.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
