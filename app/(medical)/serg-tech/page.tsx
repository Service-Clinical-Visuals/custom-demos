"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import SergNavbar from "./components/SergNavbar";
import SergHero from "./components/SergHero";
import SergAbout from "./components/SergAbout";
import SergFeatures from "./components/SergFeatures";
import SergDBSection from "./components/SergDBSection";
import SergInnovation from "./components/SergInnovation";
import SergSection from "./components/SergSection";
import SergTeams from "./components/SergTeams";
import SergFooter from "./components/SergFooter";


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
    <main className="bg-white">
    <SergNavbar/>
    <SergHero/>
    <SergAbout/>
    <SergDBSection/>
    <SergInnovation/>
    <SergSection/>
    <SergTeams/>
    <SergFooter/>
    {/* <div className="h-screen"></div> */}
    </main>
  ); 
}
