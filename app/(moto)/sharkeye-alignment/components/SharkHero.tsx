import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function SharkHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#01004a]">
      {/* VIDEO BACKGROUND READY */}
      {/* Replace with video later */}
      <div className="absolute inset-0 z-0">
       <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover z-0" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 flex items-end min-h-screen pb-24 max-w-380 mx-auto">
        <div
          data-aos="fade-up"
          className="max-w-[420px] text-white"
        >
          <h1 className="text-[34px] leading-[1.1]  tracking-[-1px]">
            Trusted Wheel Alignment Solutions
          </h1>

          <button className="cursor-pointer mt-8 bg-[#f0df32] hover:bg-[#ffe600] transition-all duration-300 text-black h-[48px] px-8 text-[16px] font-bold relative">
            Explore Products

            {/* ANGLED EDGE */}
            <span className="absolute right-[-18px] top-0 border-t-[24px] border-b-[24px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#f0df32]" />
          </button>
        </div>
      </div>

    </section>
  );
}