"use client";

export default function License() {
  return (
    <section className="pb-16 lg:pb-20 bg-white strena-medical-root">
      <div className="custom-container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="text-[#00AEEF] text-2xl lg:text-3xl font-semibold mb-4">
              License & <span className="text-[#00427C]">Certification</span>
            </h2>
            <p className="text-[15px] lg:text-[16px] leading-relaxed">
              As an ISO 13485, ISO 9001 and FDA certified supplier, Strena Medical 
              is committed to complying with all applicable requirements and 
              maintaining the effectiveness and continual improvement of its 
              Quality Management System.
            </p>
          </div>

          {/* Right Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" data-aos="fade-left">
            {[
              { src: "/strena/images/certifiction-1.png", label: "ISO 13485" },
              { src: "/strena/images/certifiction-2.png", label: "ISO 9001" },
              { src: "/strena/images/certifiction-3.png", label: "FDA Approved" },
            ].map((logo, index) => (
              <div 
                key={index}
                className={`bg-white border border-gray-100 rounded-2xl md:rounded-3xl shadow-lg flex items-center justify-center p-4 md:p-8 hover:scale-105 transition-transform duration-300 aspect-square w-full h-[170px] ${
                  index === 2 ? "col-span-2 md:col-span-1 mx-auto max-w-[50%] md:max-w-full" : ""
                }`}
              >
                <img 
                  src={logo.src} 
                  alt={logo.label}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
