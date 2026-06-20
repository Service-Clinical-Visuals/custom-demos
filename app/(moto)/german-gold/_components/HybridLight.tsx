"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function HybridLight() {
  return (
    <section id="hybrid-light" className="relative w-full py-10 min-[1641px]:py-8 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col min-[1641px]:grid min-[1641px]:grid-cols-2 gap-8 min-[1641px]:gap-10 items-center">

          {/* Left Content - Video 01 Placeholder */}
          <div className="w-full aspect-[16/9] xl:aspect-[16/10] md:aspect-video rounded flex items-center justify-center overflow-hidden relative order-2 min-[1641px]:order-none" data-aos="fade-left">
            <div className="absolute inset-0 flex items-center justify-center ">
              <DynamicVideoPlayer type="short" />
            </div>
          </div>

          {/* Right Content */}
          <div className="contents min-[1641px]:flex min-[1641px]:flex-col min-[1641px]:space-y-6">
            <div className="mb-2 order-1 min-[1641px]:order-none w-full" data-aos="fade-right">
              <Typography variant="h2" color="dark" className="font-teko leading-tight tracking-wide">
                Hybrid Excellence
              </Typography>
              <div className="w-[32%] h-px mb-2 bg-primary"></div>
            </div>

            <div className="space-y-4 text-[#6E777D] mt-2 order-3 min-[1641px]:order-none w-full max-w-[92%]" data-aos="fade-right" data-aos-delay="100">
              <Typography variant="body" className="font-exo text-sm sm:text-base leading-relaxed">
                German Gold Hybrid Excellence is specially engineered for modern hybrid vehicles, delivering exceptional protection, efficiency, and performance under the unique demands of hybrid driving. Its advanced formulation helps reduce engine wear during frequent start-stop operation, maintains outstanding lubrication across varying temperatures, and supports cleaner engine performance. Designed to enhance fuel economy and long-term reliability, Hybrid Excellence provides the confidence and protection needed for today's advanced hybrid powertrains.
              </Typography>
              <Typography variant="body" className="font-exo text-sm sm:text-base leading-relaxed">
                Engineered with advanced synthetic technology and high-quality additives, Hybrid Excellence provides exceptional wear protection, helping to reduce friction and safeguard critical engine components during every phase of operation. Its advanced formulation promotes rapid oil circulation during startup, ensuring immediate protection when the engine restarts and minimizing wear caused by frequent cold starts.
              </Typography>
              <Typography variant="body" className="font-exo text-sm sm:text-base leading-relaxed">
                Designed to maintain excellent thermal stability and engine cleanliness, German Gold Hybrid Excellence helps prevent the formation of sludge, deposits, and harmful contaminants that can affect engine efficiency and longevity.
              </Typography>
            </div>

            <div className="pt-2 min-[1641px]:pt-4 order-4 min-[1641px]:order-none w-full" data-aos="fade-right" data-aos-delay="200">
              <Button text="About German Gold" variant="primary" showIcon={true} href="#about" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
