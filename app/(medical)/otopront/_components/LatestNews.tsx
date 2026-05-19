import React from "react";

export default function LatestNews() {
  const newsItems = [
    {
      title: "PES PILOT HDpro",
      path: "/otopront/images/news-1.png",
      text: "The PES PILOT HDpro speeds up the videoendoscopic examination. Its front-mounted, swivelling touchscreen facilitates operation and ensures an optimal viewing angle at all times.",
      hasBadges: true,
    },
    {
      title: "German Design Winner Award 2022",
      path: "/otopront/images/news-2.png",
      text: "Jury statement: \"The 'PES PILOT HDpro' is a state-of-the-art medical device for videoendoscopic examination. It has no visible buttons and is operated in a modern and comfortable way via the front-mounted, swivelling touchscreen.\"",
      hasBadges: false,
    }
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#FFF8F8]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-[26px] md:text-[36px] font-semibold text-[#111111] mb-4 leading-tight">
            Our Latest News
          </h2>
          <p className="text-[#484848]">
            Read our latest blogs to stay informed and inspired.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Left Side: Image Area (White Background) */}
              <div className="w-full md:w-[40%] min-h-[250px] p-6 flex flex-col items-center justify-center relative bg-white">
                <img
                  src={item.path}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right Side: Text Area (Red Background) */}
              <div className="w-full md:w-[60%] bg-[#BD0A27] p-4 md:p-6 flex flex-col justify-center text-white">
                <h3 className="text-[20px] font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-white! md:leading-relaxed mb-6 text-[15px]!">
                  {item.text}
                </p>
                
                {/* Badges for Card 1 */}
                {item.hasBadges && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <img src="otopront/images/4k.png" alt="" />
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
