"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full relative pt-2 lg:z-50 md:pt-4 pb-3"
      data-aos="fade-in"
    >
      <Container>
        {/* Boxed Hero Content */}
        <div className="relative w-full  h-screen flex items-end pb-10 md:pb-[8%]  overflow-hidden pointer-events-none">

          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-screen object-cover pointer-events-none z-0"
              type="banner"
            />
            {/* Dark overlay to match EMKA design */}

          </div>

          {/* Content inside the boxed hero */}
          <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 mb-1 md:mb-[-0.2]">
            <div
              className="max-w-3xl text-left space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Header Title from Screenshot */}
              <Typography
                variant="h2"
                color="white"
                weight="normal"
                className="leading-[1.1] tracking-wider text-white font-bebas"
              >
                EMKA AND XTREMEPLUS - PARTNERS IN EXTREME <br className="hidden md:block"></br> CIRCUMSTANCES
              </Typography>

              {/* Action Button */}
              <div className="inline-flex pt-2 pointer-events-auto">
                <Button
                  text="DISCOVER EMKA"
                  variant="primary"
                  href="#products"
                  showIcon={true}
                  className="font-bebas"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
