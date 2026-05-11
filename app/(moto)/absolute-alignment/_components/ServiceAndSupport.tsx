export default function ServiceAndSupport() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-gray-900 mb-6 tracking-tight">
              Service and Support
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Absolute Alignment is renowned for its keen prices and excellent equipment, but we don't act just stop after installation. We are there for you every step of the way as you continue to make money from your new wheel alignment equipment, and our years of expertise in the field will help you overcome problems with the minimum of down time.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Here's some examples of how we can help after sale:
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "6-monthly calibration check",
                "Remote access computer fault diagnosis and rectification.",
                "Marketing support \u2013 from leaflets to banners and press releases, we've all you need to get your wheel alignment business humming and they're all available to Absolute Alignment customers.",
                "Advanced marketing support \u2013 our consumer site www.absolutewheelalignment.co.uk gets around 3,000 visits per year to its Absolute Alignment Approved Centre Locator search page."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-primary shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300 overflow-hidden relative">
              <img src="/absolute-alignment/home/service.png" alt="Team Image" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
