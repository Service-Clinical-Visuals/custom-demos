"use client";

import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center h-screen bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover z-0 " />
      </div>

      <div className="nihon-container flex flex-col justify-end pb-40 h-full text-white z-20">
        <div className="relative w-full lg:w-[70%] 2xl:w-[60%]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(32px,4vw,120px)] font-semibold leading-tight mb-4 tracking-tight text-white"
          >
            Illuminating Medicine for Humanity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(16px,1.5vw,48px)] text-white mb-8 w-full lg:w-[80%] font-light"
          >
            Create a better future for people and healthcare by <br className="hidden md:block" /> solving global medical issues.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href="#products" variant="primary" size="md">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
