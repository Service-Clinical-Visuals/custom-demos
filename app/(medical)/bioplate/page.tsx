"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import BioplateNavbar from "./components/BioplateNavbar";
import BioplateHero from "./components/BioplateHero";
import BioplateAbout from "./components/BioplateAbout";
import BioplateAdvantage from "./components/BioplateAdvantage";
import BioplateTeamAndSolutions from "./components/BioplateTeamsAndSolutions";
import BioplateProducts from "./components/BioplateProducts";
import BioplateFooter from "./components/BioplateFooter";


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
    <BioplateNavbar/> 
    <BioplateHero/>
    <BioplateAbout/>
    <BioplateAdvantage/>
    <BioplateTeamAndSolutions/>
    <BioplateProducts/>
    <BioplateFooter/>
    </>
  );
}
