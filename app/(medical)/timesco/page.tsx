"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import TimescoNavbar from "./components/TimescoNavbar";
import TimescoHero from "./components/TimescoHero";
import TimescoAbout from "./components/TimescoAbout";

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
    <TimescoNavbar/>
    <TimescoHero/>
    <TimescoAbout/>
    <div className="h-screen"></div>
    </>
  ); 
}
