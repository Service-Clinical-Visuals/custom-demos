"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import ReactHealthButton from "./ReactHealthButton";

export default function Hero() {
  return (
    <section className="w-full bg-black h-screen relative overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0" data-aos="zoom-out" data-aos-duration="2000">
        <DynamicVideoPlayer
          type="banner"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-[15%]">
        <div className="max-w-3xl space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight"
          >
            Advanced Sleep & Respiratory <br /> Care Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white font-light leading-relaxed "
          >React Health delivers innovative sleep and respiratory care solutions focused on improving patient outcomes, enhancing comfort, and supporting healthier everyday living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <ReactHealthButton
              text="Browse Products"

              icon={<ArrowRight size={18} strokeWidth={3} />}
              onClick={() => { }}
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
}