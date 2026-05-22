"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AOSInit from "@/app/(medical)/advanced-instruments/_components/AOSInit";
import SharkTopbar from "./components/SharkTopbar";
import SharkNavbar from "./components/SharkNavbar";
import SharkHero from "./components/SharkHero";
import Lenis from "lenis";
import SharkAbout from "./components/SharkAbout";
import SharkProducts from "./components/SharkProducts";
import SharkRoller from "./components/SharkRoller";
import SharkAllProducts from "./components/SharkAllProducts";
import SharkChoose from "./components/SharkChoose";
import SharkWhyChoose from "./components/SharkWhyChoose";
import SharkDistributor from "./components/SharkDistributor";
import SharkTeams from "./components/SharkTeams";
import SharkFooter from "./components/SharkFooter";


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
      <SharkTopbar/>
      <SharkNavbar/>
      <SharkHero/>
      <SharkAbout/>
      <SharkProducts/>
      <SharkRoller/>
      <SharkAllProducts/>
      <SharkChoose/>
      <SharkWhyChoose/>
      <SharkDistributor/>
      <SharkTeams/>
      <SharkFooter/>
    </main>
  );
}
