"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import DeltaNavbar from "./components/DeltaNavbar";
import DeltaHero from "./components/DeltaHero";
import DeltaAbout from "./components/DeltaAbout";
import DeltaProducts from "./components/DeltaProducts";
import DeltaComfort from "./components/DeltaComfort";

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
    <>
    <DeltaNavbar/>
    <DeltaHero/>
    <DeltaAbout/>
    <DeltaProducts/>
    <DeltaComfort/>
    </>
  ); 
}
