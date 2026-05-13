"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="max-w-4xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.45] tracking-tight mb-8">
              Innovative instruments and devices <br className="hidden md:block" /> with perfect functionality
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button href="#" variant="primary" className="justify-self-start">
                View All
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
