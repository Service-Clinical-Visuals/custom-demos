import React from "react";
import Hero from "./_components/Hero";
import Innovation from "./_components/Innovation";
import Solutions from "./_components/Solutions";
import Flexibility from "./_components/Flexibility";
import JustBreathe from "./_components/JustBreathe";
import AdvancedVentilation from "./_components/AdvancedVentilation";
import Breathe from "./_components/Breathe";
import LatestNews from "./_components/LatestNews";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <Innovation />
      <Solutions />
      <Flexibility />
      <Breathe />
      <JustBreathe />
      <AdvancedVentilation />
      <LatestNews />
    </div>
  );
}
