import Hero from "./_components/Hero";
import FeatureSection from "./_components/FeatureSection";
import TherapyAreas from "./_components/TherapyAreas";
import InfoBlocks from "./_components/InfoBlocks";
import TeamSection from "./_components/TeamSection";
import Affiliations from "./_components/Affiliations";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <FeatureSection />
      <TherapyAreas />
      <InfoBlocks />
      <TeamSection />
      <Affiliations />
    </div>
  );
}
