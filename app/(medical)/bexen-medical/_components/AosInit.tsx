"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosInit() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
    });
  }, []);
  return null;
}
