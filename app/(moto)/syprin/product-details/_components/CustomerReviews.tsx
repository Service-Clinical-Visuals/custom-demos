import { Star, CircleCheck } from "lucide-react";

// Values as shown in the design
const summary = {
  score: "5.0",
  stars: 4,
  total: 142,
  breakdown: [
    { label: 5, percent: 96, fill: 90 },
    { label: 3, percent: 4, fill: 10 },
    { label: 1, percent: 0, fill: 0 },
  ],
};

const reviews = [
  {
    stars: 4,
    date: "Days Ago",
    title: "\" Cold idle rattling disappeared completely \"",
    body: "Authentic ratings and real-world feedback from drivers, professional workshops, mechanics, and commercial fleet owners, sharing their genuine experiences and results with SYPRIN products.",
    author: "Markus V. (Munich)",
  },
  {
    stars: 4,
    date: "1 week ago",
    title: "\"Smooth fuel delivery & lower DPF frequency\"",
    body: "As a master mechanic I test additives with VCDS diagnostics. Injector quantity correction values improved across all 4 cylinders on a 2.0 TDI Passat. High-grade German formulation with zero filler solvents.",
    author: "Stefan K. (Stuttgart)",
  },
  {
    stars: 4,
    date: "1 month ago",
    title: "\"Fast shipping & superb can design\"",
    body: "Arrived within 24 hours to Dresden. The included screw-on pour spout made pouring into the modern misfuel-protection diesel neck straightforward with no spills. Fuel economy is up by approximately 0.4L/100km.",
    author: "Dirk H. (Leipzig)",
  },
];

function Stars({ count, className }: { count: number; className: string }) {
  return (
    <div className="flex items-center gap-0.5 min-[2500px]:gap-1" aria-label={`Rated ${count} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`${className} text-[#F5B700]`} fill={i < count ? "currentColor" : "none"} strokeWidth={2} />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="pb-14 md:pb-20 min-[2500px]:pb-32">
      <div className="custom-container">
        <div className="bg-[#222222] rounded-[4px] min-[3800px]:rounded-[8px] px-5 py-8 sm:px-8 md:px-10 md:py-10 desk:px-3 desk:py-4 xl:px-3.5 xl:py-4 min-[2500px]:px-8 min-[2500px]:py-10">
          {/* Heading + rating summary */}
          <div className="flex flex-col desk:flex-row desk:items-start desk:justify-between gap-6 desk:gap-10 min-[2500px]:gap-16 desk:pl-[0.6rem] min-[2500px]:pl-6">
            <div className="max-w-[680px] min-[2500px]:max-w-[1100px] min-[3800px]:max-w-[1500px] desk:pt-2">
              <span className="pd-eyebrow text-cart">Real-World Verification</span>
              <h2 className="text-[#F6F6F6] mt-0.5 min-[2500px]:mt-2">Verified Customer Experiences</h2>
              <p className="text-[#E5E5E5] mt-3 min-[2500px]:mt-5">
                Authentic ratings and real-world feedback from drivers, professional workshops, mechanics, and commercial fleet owners, sharing their genuine experiences and results with SYPRIN products.
              </p>
            </div>

            <div className="bg-[#111111] rounded-[3px] min-[3800px]:rounded-[6px] flex items-center gap-4 sm:gap-5 min-[2500px]:gap-8 px-4 py-3 sm:px-5 min-[2500px]:px-8 min-[2500px]:py-6 w-full sm:w-auto sm:self-start sm:min-w-[340px] desk:min-w-[300px] xl:min-w-[340px] min-[2500px]:min-w-[540px] min-[3800px]:min-w-[720px] shrink-0">
              <div className="flex flex-col items-center gap-1 min-[2500px]:gap-2 shrink-0">
                <span className="pd-score text-[#F6F6F6]">{summary.score}</span>
                <Stars count={summary.stars} className="w-3 h-3 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" />
                <span className="pd-review-meta text-[#9A9A9A]">{summary.total} Reviews</span>
              </div>
              <div className="w-px self-stretch bg-white/15" />
              <ul className="flex flex-col gap-2 min-[2500px]:gap-4 flex-1 min-w-0">
                {summary.breakdown.map((row) => (
                  <li key={row.label} className="pd-review-meta flex items-center gap-2.5 min-[2500px]:gap-4 text-[#F6F6F6]">
                    <span className="w-2 min-[2500px]:w-4 font-semibold">{row.label}</span>
                    <div className="flex-1 h-1 min-[2500px]:h-2 rounded-full bg-[#D9D9D9] overflow-hidden">
                      <div className="h-full rounded-full bg-checkout" style={{ width: `${row.fill}%` }} />
                    </div>
                    <span className="w-8 min-[2500px]:w-14 text-right font-semibold">{row.percent === 0 ? "0" : `${row.percent}%`}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 desk:grid-cols-3 gap-4 md:gap-5 xl:gap-4 min-[2500px]:gap-8 mt-8 desk:mt-8 min-[2500px]:mt-14 desk:px-3 desk:pb-3 min-[2500px]:px-6 min-[2500px]:pb-6">
            {reviews.map((review, i) => (
              <article
                key={review.author}
                className={`${
                  i === reviews.length - 1 && reviews.length % 2 === 1 ? "md:col-span-2 desk:col-span-1 " : ""
                }bg-[#111111] rounded-[3px] min-[3800px]:rounded-[6px] flex flex-col px-3 pt-3 pb-4 md:px-3.5 min-[2500px]:px-6 min-[2500px]:pt-6 min-[2500px]:pb-8`}
              >
                <div className="flex items-center justify-between gap-3">
                  <Stars count={review.stars} className="w-3 h-3 md:w-3.5 md:h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" />
                  <span className="pd-review-meta text-[#CACACA]">{review.date}</span>
                </div>

                <h3 className="pd-review-name text-[#F6F6F6] mt-2.5 min-[2500px]:mt-4">{review.title}</h3>

                <p className="pd-feature text-[#CACACA] mt-3 min-[2500px]:mt-5">
                  {review.body}
                </p>
                <div className="pd-review-meta flex items-center justify-end gap-1 text-checkout mt-1 min-[2500px]:mt-2">
                  <CircleCheck className="w-3 h-3 min-[2500px]:w-5 min-[2500px]:h-5" strokeWidth={2.2} />
                  Verified Owner
                </div>

                <div className="mt-auto pt-3 min-[2500px]:pt-5">
                  <div className="border-t border-dashed border-white/20 pt-4 min-[2500px]:pt-6">
                    <span className="pd-review-name text-[#F6F6F6]">{review.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
