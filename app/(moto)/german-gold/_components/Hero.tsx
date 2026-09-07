"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const Hero = () => {
  return (
    <section id="home" className="w-full relative lg:z-50 pb-3">
      <Container>
        {/* Boxed Hero Content */}
        <div
          className="relative w-full h-screen flex items-end pb-10 md:pb-[8%] overflow-hidden pointer-events-none rounded-t-none rounded-b-[30px]"
          data-aos="fade-up">
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="w-full h-full object-cover pointer-events-none z-0 lg:object-fill"
              type="banner"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
