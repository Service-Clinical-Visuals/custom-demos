"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import AirNavbar from "./components/AirNavbar";
import AirHero from "./components/AirHero";
import AirAbout from "./components/AirAbout";
import AirTechnology from "./components/AirTechnology";
import AirSection from "./components/AirSection";
import AirChoose from "./components/AirChoose";
import AirProducts from "./components/AirProducts";
import AirSolutions from "./components/AirSolutions";
import AirNews from "./components/AirNews";
import AirFooter from "./components/AirFooter";


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
    <AirNavbar/>
    <AirHero/>
    <AirAbout/>
    <AirTechnology/>
    <AirSection/>
    <AirChoose/>
    <AirProducts/>
    <AirSolutions/>
    <AirNews/>
    <AirFooter/>
    </>
  ); 
}
