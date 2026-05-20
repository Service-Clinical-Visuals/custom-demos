"use client";

import AOSInit from "../mci/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DeltaNavbar from "./components/DeltaNavbar";
import DeltaHero from "./components/DeltaHero";
import DeltaAbout from "./components/DeltaAbout";
import DeltaProducts from "./components/DeltaProducts";
import DeltaComfort from "./components/DeltaComfort";
import DeltaTech from "./components/DeltaTech";
import DeltaProductScroll from "./components/DeltaProductScroll";
import DeltaFeaturedProduct from "./components/DeltaFeaturedProduct";
import DeltaFaq from "./components/DeltaFaq";
import DeltaFooter from "./components/DeltaFooter";
import DeltaShowcase from "./components/DeltaShowcase";

export default function Home() {
  AOSInit();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      syncTouch: true,
      gestureOrientation: "vertical",
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCb);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return ( 
    <>
    <DeltaNavbar/>
    <DeltaHero/>
    <DeltaProductScroll/>
    <DeltaAbout/>
    <DeltaProducts/>
    <DeltaShowcase/>
    <DeltaComfort/>
    <DeltaTech/>
    <DeltaFeaturedProduct/>
    <DeltaFaq/>
    <DeltaFooter/>
    </>
  ); 
}
