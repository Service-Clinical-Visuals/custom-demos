import Link from "next/link";

const posts = [
  {
    image: "/moto/syprin/n1.webp",
    imagePosition: "object-[32%_center]", // centre on the "Grosses Gewinnspiel" artwork, crop the Automechanika panel
    alt: "Grosses Gewinnspiel – tickets for Automechanika Frankfurt",
    date: "28 July 2026",
    excerpt:
      "We're exhibiting! Win 1 of 10 full-week passes to Automechanika 2026 From 8 to 12 September 2026, Automechanika Frankfurt opens its doors as the world's largest trade fair for the automotive industry. This year, we're exhibiting with our own stand for the very first time, in Hall 12.0, Stand Y26. And we want to celebrate […]",
  },
  {
    image: "/moto/syprin/n3.webp",
    imagePosition: "object-center",
    alt: "Close-up of a diesel engine piston",
    date: "16 July 2025",
    excerpt:
      "Modern diesel engines are powerful, efficient, and durable—but they are also sensitive to contamination and fuel quality. Over time, residues, soot particles, moisture, and deposits can accumulate in the fuel system. These contaminants can affect injector performance, combustion quality, and overall engine efficiency.",
  },
];

export default function LatestNews() {
  return (
    <section id="news" className="py-14 md:py-20 desk:py-24 min-[2500px]:py-36 min-[3800px]:py-48">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex flex-col items-center text-center max-w-[760px] min-[2500px]:max-w-[1200px] min-[3800px]:max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
            <span className="w-5 min-[2500px]:w-8 h-[3px] min-[2500px]:h-[5px] rounded-full bg-accent" />
            <span className="tag-label text-[#F6F6F6]">News</span>
          </div>
          <h2 className="text-[#F6F6F6] mt-3 md:mt-4 min-[2500px]:mt-6">Latest Insights &amp; News</h2>
          <p className="text-[#CACACA] mt-3 md:mt-4 min-[2500px]:mt-6">
            Stay up to date with the latest SYPRIN news, product insights, automotive care tips, and upcoming events. Discover useful information, expert recommendations, and stories from the world of automotive and technical care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 desk:grid-cols-2 gap-5 md:gap-6 xl:gap-12 min-[2500px]:gap-16 mt-8 md:mt-10 min-[2500px]:mt-16">
          {posts.map((post) => (
            <article
              key={post.date}
              className="group bg-primary rounded-[4px] min-[3800px]:rounded-[8px] border-r-[3px] min-[2500px]:border-r-[5px] border-transparent hover:border-accent p-2.5 md:p-3 min-[2500px]:p-5 grid grid-cols-1 sm:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] gap-4 sm:gap-3 md:gap-3 min-[2500px]:gap-6 transition-colors duration-300"
            >
              <div className="overflow-hidden rounded-[3px] min-[3800px]:rounded-[6px] aspect-[16/10] sm:aspect-auto sm:min-h-[190px] min-[2500px]:min-h-[320px] bg-[#0f1a2e]">
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover ${post.imagePosition} transition-transform duration-500 group-hover:scale-105`}
                />
              </div>

              <div className="flex flex-col min-w-0 sm:py-2 sm:pr-1.5 min-[2500px]:py-4 min-[2500px]:pr-3">
                <div className="flex items-center gap-2.5 min-[2500px]:gap-4">
                  <img src="/moto/syprin/cal.webp" alt="" className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7" />
                  <time className="tag-label text-[#F6F6F6]">{post.date}</time>
                </div>
                <p className="card-text text-[#CACACA] mt-3 min-[2500px]:mt-5">{post.excerpt}</p>
                <Link
                  href="#"
                  className="button self-end mt-auto pt-4 min-[2500px]:pt-6 text-[#F6F6F6] underline underline-offset-4 decoration-1 hover:text-accent transition-colors"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-10 min-[2500px]:mt-16">
          <Link
            href="#"
            className="button inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white rounded-[4px] min-[3800px]:rounded-[8px] px-7 py-2.5 md:px-8 md:py-3 min-[2500px]:px-12 min-[2500px]:py-5 transition-colors active:scale-95"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
