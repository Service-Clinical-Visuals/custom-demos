"use client";

import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 
        Scroll-triggered Header:
        Initially invisible at scrollY=0, slides and fades in as sticky top bar upon scrolling down.
      */}
      <Header />

      {/* 
        Full-Screen Video Hero Banner:
        Occupies 100vh with rich custom video from context, elegant dark overlay, and bottom-left typography.
      */}
      <Hero />

      {/* 
        About Our Company Section:
        Includes 2-column grid layout, gorgeous Swiss facility architecture, mission/vision cards, and more details.
      */}
      <About />

      {/* 
        Rich Premium Footer:
        Clean dark aesthetic, full site mapping, newsletters, legal details, and Swiss engineering highlights.
      */}
      <Footer />
    </main>
  );
}
