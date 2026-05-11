import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function ProductVideo() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Column - 360 Video Placeholder */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="w-full aspect-video rounded-3xl flex items-center justify-center overflow-hidden relative border border-gray-200">
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-gray-900 mb-6 tracking-tight">
              Bluetooth 3D Wheel Aligner
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The Bluetooth 3D Wheel Aligner is the latest OEM wheel aligner from Absolute Alignment. 3D wheel alignment technology has been around for 20 years or so now, and we have moved the goalposts by making a practical, fast and easy-to-use 3D wheel aligner. Towerless technology makes this the 3D unit of choice.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {[
                "Can be moved between ramps",
                "ADAS compatible front & rear axle measurements",
                "Full front & rear subframe location check",
                "Futureproof your business \u2013 cameras will interface with rear axle ADAS when introduced"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="text-primary shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-[16px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold uppercase tracking-wider py-3 px-8 rounded transition-colors">
                View Product
              </button>
              <button className="bg-[#1a1a1a] hover:bg-black text-white text-sm font-bold uppercase tracking-wider py-3 px-8 rounded transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
