"use client";

import { useEffect } from "react";
import AOSInit from "../sleepnet/_components/AOSInit";
import Lenis from "lenis";
import HrNavbar from "./components/HrNavbar";
import HrHero from "./components/HrHero";
import HrAbout from "./components/HrAbout";
import HrAboutCard from "./components/HrAboutCard";
import HrProduct from "./components/HrProduct";
import HrSolutions from "./components/HrSolutions";
import HrFeatures from "./components/HrFeatures";
import HrTestimonial from "./components/HrTestimonial";
import HrFooter from "./components/HrFooter";

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
      <HrNavbar/>
      <HrHero/>
      <HrAbout/>
      <HrAboutCard/>
      <HrProduct/>
      <HrSolutions/>
      <HrFeatures/>
      <HrTestimonial/>
      <HrFooter/>
    </main>
  );
}
 