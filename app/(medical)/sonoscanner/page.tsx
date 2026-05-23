"use client";

import { useEffect } from "react";
import AOSInit from "../sleepnet/_components/AOSInit";
import Lenis from "lenis";
import SonoNavbar from "./components/SonoNavbar";
import SonoHero from "./components/SonoHero";
import SonoCompany from "./components/SonoCompany";
import SonoPro from "./components/SonoPro";
import SonoServices from "./components/SonoServices";
import SonoSpeciality from "./components/SonoSpeciality";
import SonoImage from "./components/SonoImage";
import SonoNews from "./components/SonoNews";
import SonoFooter from "./components/SonoFooter";


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
      <SonoNavbar/>
      <SonoHero/>
      <SonoCompany/>
      <SonoPro/>
      <SonoServices/>
      <SonoSpeciality/>
      <SonoImage/>
      <SonoNews/>
      <SonoFooter/>
    </main>
  );
}
