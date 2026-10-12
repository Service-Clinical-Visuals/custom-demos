import Link from "next/link";

export default function Heritage() {
  return (
    <section id="heritage" className="py-14 md:py-20 desk:py-24 min-[2500px]:py-36 min-[3800px]:py-48 overflow-hidden">
      <div className="custom-container grid grid-cols-1 desk:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-10 md:gap-14 desk:gap-16 xl:gap-24 min-[2500px]:gap-36">
        {/* Text */}
        <div className="min-w-0 desk:max-w-[640px] min-[2500px]:max-w-[1000px] min-[3800px]:max-w-[1350px]">
          <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
            <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-accent" />
            <span className="tag-label text-[#F6F6F6]">Original Syprin</span>
          </div>

          <h2 className="text-[#F6F6F6] mt-3 md:mt-4 min-[2500px]:mt-6">Over 100 Years of German Automotive Heritage</h2>

          <div className="mt-4 md:mt-5 min-[2500px]:mt-8 flex flex-col gap-3 md:gap-4 min-[2500px]:gap-6 text-[#CACACA]">
            <p>
              The ORIGINAL SYPRIN® brand dates back to a family-run company in Chemnitz, Saxony.
              <br />
              For over a hundred years, the Free State of Saxony has been considered the center of the German automotive industry—a location that combines innovation and engineering expertise. This is where our products are manufactured, representing &quot;Made in Germany&quot; quality and used worldwide.
            </p>
            <p>
              Since our founding in 2010, we have primarily been developing and producing high-quality fuel additives and cleaners for gasoline and diesel engines. Due to rapid growth, the company changed its legal status from a GbR (civil law partnership) to a GmbH (limited liability company) in August 2025 and also changed its name to &quot;OS Motorsystem.&quot;
            </p>
            <p>
              As an experienced medium-sized company with a background in production and workshop practice, we know what matters in day-to-day operations: reliable products, ease of use, and noticeable results.
            </p>
          </div>

          <Link
            href="#"
            className="button inline-flex items-center justify-center mt-7 md:mt-8 min-[2500px]:mt-12 bg-accent hover:bg-accent-hover text-white rounded-[4px] min-[3800px]:rounded-[8px] px-6 py-2.5 md:px-7 md:py-3 min-[2500px]:px-10 min-[2500px]:py-5 transition-colors active:scale-95"
          >
            Know More
          </Link>
        </div>

        {/* Logo card (card + red backdrop are both in the image) */}
        <div className="flex justify-center desk:justify-end">
          <img
            src="/moto/syprin/abt.webp"
            alt="ORIGINAL SYPRIN logo"
            loading="lazy"
            className="w-full max-w-[420px] sm:max-w-[480px] desk:max-w-[460px] xl:max-w-[520px] min-[2500px]:max-w-[820px] min-[3800px]:max-w-[1100px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
