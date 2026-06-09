"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOSInit from "@/app/(medical)/advanced-instruments/_components/AOSInit";
import Lenis from "lenis";
import CommaNavbar from "./components/CommaNavbar";
import CommaHero from "./components/CommaHero";
import CommaAbout from "./components/CommaAbout";
import CommaProduct360 from "./components/CommaProduct360";
import CommaFormulations from "./components/CommaFormulations";
import CommaSpecs from "./components/CommaSpecs";
import CommaValues from "./components/CommaValues";
import CommaNewsletter from "./components/CommaNewsletter";
import CommaFooter from "./components/CommaFooter";

export default function CommaPage() {
  AOSInit();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      syncTouch: true,
      gestureOrientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <CommaNavbar />
      <CommaHero />
      <CommaAbout />
      <CommaProduct360 />
      <CommaFormulations />
      <CommaSpecs />
      <CommaValues />
      <CommaNewsletter />
      <CommaFooter />
    </main>
  );
}
