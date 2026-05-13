"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import CatheNavbar from "./components/CatheNavbar";
import CatheHero from "./components/CatheHero";
import CatheAbout from "./components/CatheAbout";
import CatheFeatures from "./components/CatheFeatures";
import CatheInnovation from "./components/CatheInnovation";
import CatheEnterprise from "./components/CatheEnterprise";


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
    <CatheNavbar/>
    <CatheHero/>
    <CatheAbout/>
    <CatheFeatures/>
    <CatheInnovation/>  
    <CatheEnterprise/>
    </>
  ); 
}
