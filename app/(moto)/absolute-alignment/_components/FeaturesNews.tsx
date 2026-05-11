import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function FeaturesNews() {
  const newsArticles = [
    {
      title: "MAKING AN EXHIBITION OF OURSELVES - 2025/2026",
      date: "Wednesday, January 28, 2026",
      description: "Check out where and when you can see Absolute Alignment products at exhibitions...",
      imageSpace: "/absolute-alignment/home/blog-1.png",
    },
    {
      title: "ABSOLUTE ALIGNMENT RACES TO SUCCESS",
      date: "Thursday, November 27, 2025",
      description: "It is safe to say that motor sport is in the DNA of Absolute Alignment the...",
      imageSpace: "/absolute-alignment/home/blog-2.png",
    },
    {
      title: "ABSOLUTE ALIGNMENT ADDS SUPPORT TO PMR'S PHOENIX RECOVERY",
      date: "Wednesday, January 28, 2026",
      description: "Absolute Alignment has helped its Technical Partner Power Maxed Racing arise...",
      imageSpace: "/absolute-alignment/home/blog-3.png",
    }
  ];

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Top Part: Features */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Column - Image Placeholder */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="w-full aspect-video md:aspect-[4/3] rounded-3xl flex items-center justify-center overflow-hidden relative border border-gray-200">
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-gray-900 mb-8 tracking-tight">
              Bluetooth 3D Wheel Aligner Features
            </h2>

            <ul className="flex flex-col gap-6 mb-10">
              {[
                { title: "Precision Setup Tools:", desc: "Front turn plates, steering wheel clamp, and brake pedal clamp for accurate alignment" },
                { title: "Secure Clamping System:", desc: "Pro tyre-mount clamps with roll-out protection and SUV wheel clamp extending arms" },
                { title: "Advanced Technology:", desc: "Remote-controlled heads with the latest database for precise diagnostics" },
                { title: "System Compatibility:", desc: "Works seamlessly with Shoot & Go, ADAS calibration, and Quick Check systems" },
                { title: "Complete Support Package:", desc: "Includes PC with 21\" TFT monitor, color printer, free software support, 12-month warranty, and online user group access" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-primary shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold text-[16px]">{item.title}</span>{" "}
                    <span className="text-gray-600 text-[16px]">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold uppercase tracking-wider py-3 px-8 rounded transition-colors">
                View Product
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Part: News */}
      <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-gray-900 mb-4 tracking-tight text-center">
            Check Out Our Latest News Articles
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl">
            We regularly post company information or comment on stories of interest – keep up to date here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {newsArticles.map((article, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[30px] md:rounded-[40px] border border-primary/20 overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="w-full aspect-video md:aspect-[4/3] bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={article.imageSpace} alt="News Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-primary font-bold font-heading uppercase tracking-wide mb-4 text-lg">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm mb-4 gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {article.date}
                  </div>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
