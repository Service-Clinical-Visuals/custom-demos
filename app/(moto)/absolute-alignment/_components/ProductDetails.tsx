import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function ProductDetails() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase text-gray-900 mb-8 tracking-tight">
              Key Benefits of 3D Wheel Aligner
            </h2>

            <div className="mb-5">
              <h3 className="text-primary font-bold text-[18px] uppercase mb-2">Teclink & Wishbone</h3>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                The Bluetooth 3D Wheel Aligner comes fully loaded with our special "Wishbone" and "Teclink" programs to speed up alignment and enhance management monitoring.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-primary font-bold text-[18px] uppercase mb-2">Shoot & Go</h3>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Shoot & Go extension pack speeds up car recognition and reduces errors. Simply photograph the car with your tablet or type in the registration number manually, and our sophisticated system will do the rest. We have a huge international database of vehicles to draw on.
              </p>
            </div>

            <div>
              <h3 className="text-primary font-bold text-[18px] uppercase mb-2">All on the Wall</h3>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                The All on the Wall option allows you to have everything needed for performing wheel alignment operations placed on a convenient wall-mounted panel, freeing up useful space in the workshop.
              </p>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="w-full aspect-video rounded-3xl flex items-center justify-center overflow-hidden relative border border-gray-200">
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
