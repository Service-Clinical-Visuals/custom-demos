import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function LutechHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* VIDEO (future ready) */}
      <div className="absolute inset-0">

        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/90" /> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div
          data-aos="fade-up"
          className="text-center max-w-2xl px-4"
        >
          {/* Currently empty like your design */}
        </div>
      </div>
    </section>
  );
}