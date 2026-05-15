"use client";

import { useEffect } from "react";
import AOSInit from "../sleepnet/_components/AOSInit";
import Lenis from "lenis";
import PulmoNavbar from "./components/PulmoNavbar";
import PulmoHero from "./components/PulmoHero";
import PulmoSection from "./components/PulmoSection";
import PulmoAbout from "./components/PulmoAbout";
import PulmoProducts from "./components/PulmoProducts";
import PulmoDetails from "./components/PulmoDetails";
import PulmoPartners from "./components/PulmoPartners";
import PulmoMaskDetails from "./components/PulmoMaskDetails";
import PulmoTeams from "./components/PulmoTeams";
import PulmoFooter from "./components/PulmoFooter";

export default function Home() {
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
      <PulmoNavbar/>
      <PulmoHero/>
      <PulmoSection/>
      <PulmoAbout/>
      <PulmoProducts/>
      <PulmoDetails/>
      <PulmoPartners/>
      <PulmoMaskDetails/>
      <PulmoTeams/>
      <PulmoFooter/>
    </main>
  );
}
