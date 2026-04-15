export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end justify-center text-white">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/clinisupplies/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl text-center mb-16 px-6">
        {/* HEADING */}
        <h1
          data-aos="fade-up"
          className="text-xl md:text-3xl lg:text-[38px]  font-semibold mb-4 tracking-wide">
          Livfria®, our next generation of collection devices
        </h1>

        {/* SUBTEXT */}
        <p
          data-aos="fade-up"
          className="text-[#FFFFFF] text-sm md:text-base lg:text-xl font-medium leading-relaxed">
          Livfria® is our next-generation collection device, designed for
          comfort, reliability, and ease of use, helping users feel confident
          every day.
        </p>
      </div>
    </section>
  );
}
