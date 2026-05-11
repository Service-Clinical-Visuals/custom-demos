export default function About() {
  return (
    <section className="w-full bg-white py-9 md:pt-20 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 items-stretch">

          <div className="w-full lg:w-[25%] rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-right">
            <img
              src="/moto/absolute-alignment/home/about-1.png"
              alt="Worn Tyre"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 2 - Founded Year Badge + Pothole Image */}
          <div className="w-full lg:w-[30%] flex flex-col mt-6 lg:mt-0" data-aos="fade-up">
            {/* Founded Year Badge */}
            <div className="relative bg-gray-900 overflow-hidden shadow-xl rounded-2xl" style={{ minHeight: '110px' }}>
              {/* Diagonal accent slice */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-4 top-0 h-full w-[65%] bg-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0 100%)' }} />
              </div>

              {/* Decorative rings */}
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full border-[6px] border-white/5" />
              <div className="absolute -right-2 -top-2 w-16 h-16 rounded-full border-[3px] border-white/5" />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full px-5 py-4 gap-3 rounded-2xl overflow-hidden">
                {/* Left label */}
                <div className="flex flex-col gap-0.5 min-w-[64px]">
                  <span className="text-white/60 text-[9px] font-bold uppercase tracking-[0.25em]">Est.</span>
                  <span className="text-white text-[20px] font-bold uppercase tracking-[0.2em] leading-tight">Founded</span>
                  <div className="mt-1.5 flex gap-0.5">
                    <span className="block w-6 h-[2px] bg-white rounded-full" />
                    <span className="block w-2 h-[2px] bg-white/40 rounded-full" />
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-12 bg-white/20 mx-1" />

                {/* Year */}
                <span className="text-white font-black font-heading leading-none tracking-tighter ml-auto"
                  style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', textShadow: '2px 4px 16px rgba(0,0,0,0.3)' }}>
                  2010
                </span>
              </div>
            </div>

            {/* Pothole Image */}
            <div className="flex-1 overflow-hidden rounded-2xl mt-5">
              <img
                src="/moto/absolute-alignment/home/about-2.png"
                alt="Pothole Road"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          {/* Column 3 - Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-0 lg:px-8 mt-8 lg:mt-0" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-gray-900 mb-4 tracking-tight">
              About Wheel Alignment
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base text-justify">
              Absolute Alignment are the experts in the latest 3D, digital and Bluetooth wheel alignment equipment from around the world. Top performance and affordable products will transform your bottom line.
            </p>

            <h3 className="text-[18px] font-bold text-primary mb-2 leading-snug">
              A £2.8 billion annual market how wheel alignment can help your bottom line
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed text-[16px] md:text-base text-justify">
              Can you afford to buy wheel alignment equipment? Can you afford NOT to is the real question! Approximately 40% of cars on the road are carrying suspension damage that requires rectification (source: The AA, 2017). With 30.9 million licenced cars, that's over 12 million potential customers needing wheel alignment.
            </p>

            <h3 className="text-[18px] font-bold text-primary mb-2">
              The danger of our unmaintained roads
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
              According to the RAC report (April 2021), our roads "resemble the surface of the moon", despite a claim from the Local Government Association that they are repairing a pothole every 19 seconds.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
