"use client";

import Link from "next/link";

export default function News() {
  const newsItems = [
    {
      image: "/osteobionix/news1.png",
      date: "Mar 7, 2025",
      title: "DACH Thorax (DGT), Annual Meeting, Bregenz, Austria, September 17-19, 2025",
    },
    {
      image: "/osteobionix/news2.png",
      date: "Mar 7, 2025",
      title: "ESTS, 33rd Annual Meeting, Budapest, Hungary, May 25-27, 2025",
    },
    {
      image: "/osteobionix/news3.png",
      date: "Ene 16, 2025",
      title: "EMSOS, 37th Annual Meeting, Padova, Italy, April 28-30, 2025",
    }
  ];

  return (
    <section id="news" className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#237B64] font-heading font-bold text-3xl md:text-4xl mb-4">
            News
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Read our newest stories, medical breakthroughs, and industry updates that reflect our commitment to innovation and excellence.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, index) => (
            <Link 
              href="#" 
              key={index}
              className="bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col group hover:-translate-y-1 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-[16/10] relative rounded-xl overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <span className="text-gray-500 text-xs font-medium">{item.date}</span>
              <hr className="border-t border-gray-200 w-full my-3" />
              <h3 className="text-[#237B64] font-bold font-heading text-base md:text-lg leading-snug">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
