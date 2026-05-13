"use client";

export default function SystemSolutionsCentric() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header Content */}
        <div data-aos="fade-up" className="grid justify-items-center text-center mx-auto mb-12">
          <span className="text-[#00AFAF] font-bold text-[16px] mb-3 block">Our Service</span>
          <h2 className="text-[30px] lg:text-[34px] font-extrabold leading-tight mb-4">Our System Solutions</h2>
          <p className="text-[#666666] text-[16px] leading-[1.8] font-medium">
            The product range includes rigid and flexible endoscopes, light sources, camera systems, equipment trolleys and software for patient management, documentation of findings, video processing and voice analysis. Our expertise in precision mechanics, optics, electronics and software development and close cooperation with leading users enable us to perfectly match technologies. Integrated system solutions allow the physician to work more efficiently, increase patient safety and set new standards in endoscopy.
          </p>
        </div>

        {/* Large Centric Image Display */}
        <div 
          data-aos="zoom-in"
          className="relative overflow-hidden shadow-sm bg-[#e2e2e2] rounded-[40px] grid items-center justify-center"
        >
           <div className=" inset-0 grid items-center justify-center ">
             <img src="/xion/images/service.png" alt="System Solutions" className="w-full h-full object-cover" />
           </div>
           {/* Subtle gradient at the bottom for depth */}
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
