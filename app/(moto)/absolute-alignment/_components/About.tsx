export default function About() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column - Images */}
          <div className="w-full lg:w-[55%] flex gap-4 md:gap-6 items-start" data-aos="fade-up">
            {/* Image 1 - Worn Tyre */}
            <div className="w-[60%] aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img src="/moto/absolute-alignment/home/about-1.png" alt="Worn Tyre" className="w-full h-full object-cover" />
            </div>

            {/* Image 2 - Pothole */}
            <div className="w-[40%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mt-12 lg:mt-32" data-aos="fade-up" data-aos-delay="200">
              <img src="/moto/absolute-alignment/home/about-2.png" alt="Pothole Road" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-gray-900 mb-6 tracking-tight">
              About Wheel Alignment
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Absolute Alignment are the experts in the latest 3D, digital and Bluetooth wheel alignment equipment from around the world. Top performance and affordable products will transform your bottom line.
            </p>

            <h3 className="text-lg font-bold text-primary mb-3">
              A £2.8 billion annual market how wheel alignment can help your bottom line
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Can you afford to buy wheel alignment equipment? Can you afford NOT to is the real question! Approximately 40% of cars on the road are carrying suspension damage that requires rectification (source: The AA, 2017). With 30.9 million licenced cars, that's over 12 million potential customers needing wheel alignment.
            </p>

            <h3 className="text-lg font-bold text-primary mb-3">
              The danger of our unmaintained roads
            </h3>

            <p className="text-gray-600 leading-relaxed">
              According to the RAC report (April 2021), our roads "resemble the surface of the moon", despite a claim from the Local Government Association that they are repairing a pothole every 19 seconds.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
