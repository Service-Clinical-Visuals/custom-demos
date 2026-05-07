"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import InvidiaNavbar from "./components/InvidiaNavbar";
import InvidiaHero from "./components/InvidiaHero";
import InvidiaAbout from "./components/InvidiaAbout";
import InvidiaCamera from "./components/InvidiaCamera";
import InvidiaProducts from "./components/InvidiaProducts";
import InvidiaInnovation from "./components/InvidiaInnovation";
import InvidiaVideo from "./components/InvidiaVideo";
import InvidiaQuality from "./components/InvidiaQuality";
import InvidiaNews from "./components/InvidiaNews";
import InvidiaFooter from "./components/InvidiaFooter";

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
    <InvidiaNavbar/>
    <InvidiaHero/>
    <InvidiaAbout/>
    <InvidiaCamera/>
    <InvidiaProducts/>
    <InvidiaInnovation/>
    <InvidiaVideo/>
    <InvidiaQuality/>
    <InvidiaNews/>
    <InvidiaFooter/>
    </>
  );
}
