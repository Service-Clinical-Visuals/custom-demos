"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOSInit from "@/app/(medical)/advanced-instruments/_components/AOSInit";
import Lenis from "lenis";
import JlmNavbar from "./components/JlmNavbar";
import JlmHero from "./components/JlmHero";
import JlmTradeSection from "./components/JlmTradeSection";
import JlmAbout from "./components/JlmAbout";
import JlmPremium from "./components/JlmPremium";
import JlmCare from "./components/JlmCare";
import JlmEngine from "./components/JlmEngine";
import JlmPartner from "./components/JlmPartner";
import JlmFeaturedProducts from "./components/JlmFeaturedProducts";


export default function AbsoluteAlignment() {
  AOSInit();

   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,   // scroll speed
      easing: (t : number) => 1 - Math.pow(1 - t, 3), // easing curve
      smoothWheel: true,
      syncTouch: true,
      gestureOrientation: 'vertical',
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
        <JlmNavbar/>
        <JlmHero/>
        <JlmTradeSection/>
        <JlmAbout/>
        <JlmPremium/>
        <JlmCare/>
        <JlmEngine/>
        <JlmPartner/>
        <JlmFeaturedProducts/>
        <div className="h-screen">

        </div>
    </main>
  );
}
