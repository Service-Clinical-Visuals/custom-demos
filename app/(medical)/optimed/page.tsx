"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import OptimedNavbar from "./components/OptimedNavbar";
import OptimedHero from "./components/OptimedHero";
import OptimedAbout from "./components/OptimedAbout";
import OptimedFeatures from "./components/OptimedFeatures";
import OptimedProducts from "./components/OptimedProducts";

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
    <OptimedNavbar/>
    <OptimedHero/>
    <OptimedAbout/>
    <OptimedFeatures/>
    <OptimedProducts/>
    </>
  ); 
}
