"use client";

export default function CleanMedico() {

  return (
    <section className="bg-white py-20">
      <div className="max-w-380 mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            Cleanroom Manufacturing & Sterile Packaging
          </h2>

          <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-xl">
            To fulfill the high hygienic standards for medical products, we manufacture our products in a cleanroom of ISO class 8 (DIN ISO 14644).
          </p>

          <p className="text-base text-gray-600 mt-3 leading-relaxed max-w-xl">
            Packaging into the sterile barrier system is performed by validated packing machines in our cleanroom. Several different formats and models are available and make it possible to respond to varied requests of our customers.
          </p>

          <button className="mt-6 bg-[#F29100] hover:bg-[#F28900] text-white text-base font-semibold px-6 py-3">
            KNOW MORE ABOUT US
          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div
          data-aos="fade-left"
          className="w-full h-48 md:h-full md:min-h-80 bg-gray-200 rounded-lg flex items-center justify-center"
        >
          {/* Placeholder */}
          <span className="text-gray-600 font-medium">
            Video Clip 02
          </span>

          {/* Future Video */}
          {/*
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video2.mp4" type="video/mp4" />
          </video>
          */}
        </div>

      </div>
    </section>
  );
}